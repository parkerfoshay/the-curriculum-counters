const { App } = require("@slack/bolt");
require("dotenv").config();

const { fetchNumberData, fetchSingleFact } = require("./fetch.js");

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  clientSecret: process.env.SLACK_SIGNING_SECRET,
  clientId: process.env.CLIENT_ID,
  socketMode: true, // enable the following to use socket mode
  appToken: process.env.SLACK_APP_TOKEN,
});

/* app.client.users.conversations({
  user:
}) */
app.command("/fact", async ({ command, ack, say }) => {
  try {
    const { text } = command;
    let stringToNumber = parseInt(text);

    if (!stringToNumber) {
      await ack();
      say("Invalid entry! Use /fact followed by an integer between 0 and 9999!");
    } else {
      await ack();
      let text = await fetchSingleFact(stringToNumber);
      say(text);
    }
  } catch (error) {
    console.error(error);
  }
});

(async () => {
  const port = 3000;
  // Start your app
  await app.start(process.env.PORT || port);
  console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
})();
