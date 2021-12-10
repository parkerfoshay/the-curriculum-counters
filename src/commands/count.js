import fs from "fs";
import { app } from "../client";
import { get, set } from "../../config/redis";

// get number from redis if it exists If not, set it to 0
// get("count")

let count;
let next;

const getCurrentCount = async () => {
  const count = await get("count");
  if (count) {
    return count;
  } else {
    return 0;
  }
};

// set current count
const setCurrentCount = async (count) => {
  // make sure count is a number
  if (typeof count === "number") {
    await set("count", count);
  } else {
    console.error("count is not a number");
  }
  console.log("count set to: ", count);
};

const resetCount = async () => {
  count = 0;
  await setCurrentCount(0);
};

// NUMBER VARIABLES
getCurrentCount().then((redisCount) => {
  count = parseInt(redisCount);
  next = count + 1;
  console.log("🚀 - Count retrieved from redis:", count);
});

const logger = (message) => {
  console.log(message);
  // write to file
  fs.appendFile("log.txt", message + "\n", (err) => {
    if (err) {
      console.log("Error writing to file: ", err);
    }
  });
};

export default async ({ command, ack, say }) => {
  console.log("🚀 - file: count.js - next", next);

  // acknowledge the command
  ack();

  // get the number of arguments
  const args = command.text.split(" ");
  console.log("🚀 - request from", command.user_name, ":", command.text);
  const firstArgument = args[0] || "";

  // check to see if first argument is a number
  if (isNaN(firstArgument) || firstArgument === "") {
    say("The first argument must be a number");
    say("Usage: /count <number> or /fact <number>");
    say("Example: /count 5");
    say(`Current count: ${count}`);
    return;
  }

  if (firstArgument == next) {
    setCurrentCount((count += 1));
    next += 1;
    console.log("🚀 ", next);
    console.log("🚀  count saved in redis", count);
  } else {
    await say(`Whoops, the current count is: ${count}`);
  }

  // say something
  say(`The count is now ${count}`);
};

// Logic for passive listening and responding
export const countObserver = app.message(/^\d+/, async ({ context, say }) => {
  const numberFromChat = context.matches[0];
  console.log("🚀 - numberFromChat", numberFromChat);
  console.log("🚀 - next", next);

  // check to see that the count is a valid number
  if (numberFromChat == next) {
    // if it is, increment the count
    setCurrentCount((count += 1));
    next++;
    logger(`Correct number (${numberFromChat}) from chat, incrementing count`);
    console.log(`🚀 - count ${count}`);
  } else {
    // if it isn't, say the current count
    await say(`Whoops, the current count is: ${count}`);
  }
});
