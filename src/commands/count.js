import fs from "fs";

// NUMBER VARIABLES
let count = 0;
let next = count + 1;

const logger = (message) => {
  console.log(message);
  // write to file
  fs.appendFile("log.txt", message + "\n", (err) => {
    if (err) {
      console.log("Error writing to file: ", err);
    }
  });
};

import { app } from "../client";

export default async ({ command, ack, say }) => {
  console.log("🚀 - file: count.js - line 4 - next", next);

  // acknowledge the command
  ack();

  // get the number of arguments
  const args = command.text.split(" ");
  console.log("🚀 - request from", command.user_name, ":", command.text);
  const firstArgument = args[0] || "";

  // check to see if first argument is a number
  if (isNaN(firstArgument) || firstArgument === "") {
    say("The first argument must be a number");
    say("Usage: /count <number>");
    say("Example: /count 5");
    say(`Current count: ${count}`);
    return;
  }

  if (firstArgument == next) {
    count++;
    next++;
    console.log("🚀 ", next);
  } else {
    count = 0;
    next = count + 1;
    say("You messed up the count :scream:!");
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
    count++;
    next++;
    logger(`Correct number (${numberFromChat}) from chat, incrementing count`);
    console.log(`🚀 - count ${count}`);
  } else {
    // if it isn't, say the current count
    await say(`Whoops, the current count is: ${count}`);
  }
});
