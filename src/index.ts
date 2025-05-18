import { OpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI();

async function run() {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: "Hello, how are you?" },
      //   {
      //     role: "assistant",
      //     content: "I'm doing great, thank you! How can I assist you today?",
      //   },
      //   {
      //     role: "system",
      //     content:
      //       "You are a helpful assistant that provides information and answers questions.",
      //   },
    ],
  });
  console.log(response.choices[0].message.content);
}
run();
