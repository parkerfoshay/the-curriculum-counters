import { app } from "../client";

// fetch all the conversations
export default async () => {
  try {
    const result = await app.client.conversations.list();
    return result.channels;
  } catch (error) {
    console.error(error);
  }
};
