// import client
import { app } from "./client";
import countCommand from "./commands/count";
import homeCommand from "./commands/home";

// join the #bot-spam channel

// handle when someone uses slash command `count`
app.command("/count", countCommand);
// app.command("/home", homeCommand);

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
