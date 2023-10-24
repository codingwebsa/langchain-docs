import * as dotenv from "dotenv";
import { Cohere } from "langchain/llms/cohere";

dotenv.config({});

const model = new Cohere({
  apiKey: process.env.COHERE_API_KEY,
  temperature: 0.9,
  verbose: true,
});

const answer = await model.call("What is the capital of Bangladesh?");

console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥")
console.log("🚀 ~ file: llm-model.js:14 ~ answer:", answer);
console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥")
