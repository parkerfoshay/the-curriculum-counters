const { fetchSingleFact } = require("../utils/fetchFacts.js");
const { app } = require("../client.js");

/* app.client.users.conversations({
  user:
}) */
export default app.command("/fact", async ({ command, ack, say }) => {
  try {
    const { text } = command;
    let stringToNumber = parseInt(text);

    if (!stringToNumber) {
      await ack();
      say(
        "Invalid entry! Use /fact followed by an integer between 0 and 9999!"
      );
    } else {
      await ack();
      let text = await fetchSingleFact(stringToNumber);
      say(text);
    }
  } catch (error) {
    console.error(error);
  }
});
