let count = 0;
let next = count + 1;

export default async ({ command, ack, say }) => {
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

  // TODO: Add ability to count down if the next number is current - 1

  // TODO: Add the ability to reset the count if the user enters "reset"

  // TODO: Any negative numbers will set the count to that number

  // TODO: If the next number is in the in the fibbonacci sequence, throw a party

  // TODO: If there is an interesting fact about that number, provide a link to it

  // increment the count if the first argument is equal to the next number
  if (firstArgument == next) {
    count++;
    next++;
  } else {
    count = 0;
    next = count + 1;
    say("You messed up the count :scream:!");
  }

  // say something
  say(`The count is now ${count}`);
};
