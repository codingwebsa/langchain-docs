// 📛📛
// 📛📛
// 📛📛 THE STREAMING ISN'T AVAILABLE IN COHERE-AI PACKAGE
// 📛📛 YOU CAN IMPLEMENT THE STREAMING WITH VERCEL'S AI SDK.
// 📛📛

import * as dotenv from "dotenv";
import { Cohere } from "langchain/llms/cohere";

dotenv.config({});

const model = new Cohere({
  apiKey: process.env.COHERE_API_KEY,
  temperature: 0.9,
  streaming: true,
  callbacks: [
    {
      handleLLMNewToken(token) {
        process.stdout.write(token);
      },
    },
  ],
});

const answer = await model.call("Write a song about beautiful winter.");

console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
console.log("🚀 ~ file: streaming.js:20 ~ answer:", answer);
console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
