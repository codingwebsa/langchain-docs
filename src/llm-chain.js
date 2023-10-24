import * as dotenv from "dotenv";
import { Cohere } from "langchain/llms/cohere";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

dotenv.config({});

const template = "What is the capital of {country}.";
const promptTemplate = new PromptTemplate({
  template: template,
  inputVariables: ["country"],
});

const model = new Cohere({
  apiKey: process.env.COHERE_API_KEY,
  temperature: 0.9,
  verbose: true,
});

const chain = new LLMChain({
  llm: model,
  prompt: promptTemplate,
});

const answer = await chain.call({
    country: "India",
});

console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥")
console.log("🚀 ~ file: llm-chain.js:29 ~ answer:", answer)
console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥")

