import * as dotenv from "dotenv";
import { Cohere } from "langchain/llms/cohere";
import { PromptTemplate } from "langchain/prompts";

dotenv.config({});

const template = "What is the capital of {country}.";
const promptTemplate = new PromptTemplate({
  template: template,
  inputVariables: ["country"],
});

const formattedPrompt = await promptTemplate.format({
  country: "Bangladesh",
});

const model = new Cohere({
  apiKey: process.env.COHERE_API_KEY,
  temperature: 0.9,
  verbose: true,
});

const answer = await model.call(formattedPrompt);

console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥")
console.log("🚀 ~ file: llm-model.js:14 ~ answer:", answer);
console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥")
