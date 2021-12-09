import { app } from "../client";

export default app.message(
  /^(hello|Hello|Hey|help).*/,
  async ({ context, say }) => {
    const greeting = context.matches[0];

    await say(`${greeting}, how are you? Type "/count" for more info.`);
  }
);
