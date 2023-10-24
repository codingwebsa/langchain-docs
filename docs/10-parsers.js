import { config } from "dotenv";
config();

import { Cohere } from "langchain/llms/cohere";
import { PromptTemplate } from "langchain/prompts";
import { StructuredOutputParser } from "langchain/output_parsers";

const parser = StructuredOutputParser.fromNamesAndDescriptions({
  answer: "answer to the user's question",
});
const formatInstructions = parser.getFormatInstructions();

const prompt = new PromptTemplate({
  template:
    "Be very funny when answering questions\n{format_instructions}\n Question: {question}",
  inputVariables: ["question"],
  partialVariables: { format_instructions: formatInstructions },
});

const model = new Cohere({
  apiKey: process.env.COHERE_API_KEY,
  temperature: 0,
  verbose: true,
});

const input = await prompt.format({
  question: "What is the capital of France?",
});

const response = await model.call(input);

console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
console.log("🚀 ~ file: 10-parsers.js:34 ~ response:", response);
console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");

console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
console.log(await parser.parse(response));
console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
