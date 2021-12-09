// import client
import { app } from "./client";
import countCommand from "./commands/count";
import getChannels from "./utils/getChannels";
import messages from "./events/messages";
import facts from "./commands/fact";

// join the #bot-spam channel

// listen for any message with the bolt package
app.command("/count", countCommand);
app.command("/fact", facts);

// Log out the channel IDs
getChannels().then((channels) => {
  channels.forEach((channel) => {
    console.log(`${channel.name} - ${channel.id}`);
  });
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
