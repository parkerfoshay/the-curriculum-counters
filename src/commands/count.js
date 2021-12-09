let count = 0;
let next = count + 1;
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

  // increment the count if the first argument is equal to the next number
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
