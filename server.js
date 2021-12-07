const { App } = require("@slack/bolt");
require("dotenv").config();

const { fetchNumberData } = require("./fetch.js")

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  clientSecret: process.env.CLIENT_SECRET,
  clientId: process.env.CLIENT_ID,
  socketMode: true, // enable the following to use socket mode
  appToken: process.env.APP_TOKEN
});

/* app.client.users.conversations({
  user:
}) */
app.command("/skunk", async ({ command, ack, say }) => {
  try {
    
      await ack();

      say(
        `Skunkworks 2022`
      );
    
    console.log(botInfo);
  } catch (error) {
    console.error(error);
  }
});

fetchNumberData(56)
(async () => {
  const port = 3000;
  // Start your app
  await app.start(process.env.PORT || port);
  console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
})();