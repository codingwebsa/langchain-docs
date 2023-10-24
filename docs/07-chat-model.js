import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
} from "langchain/prompts";
import { LLMChain } from "langchain/chains";

import * as dotenv from "dotenv";
dotenv.config({});

const model = new ChatOpenAI({
  temperature: 0,
  modelName: "gpt-3.5-turbo", // optional, default: gpt-4.0
});

//
// ✅ With simple call method example
//
const answer1 = await model.call([
  new SystemChatMessage(
    "You are a helpful assistant that translate English messages to Bengali."
  ),
  new HumanChatMessage(
    "Translate this line from English to Bengali. I love Coding."
  ),
]);

console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
console.log(
  "🚀 ~ file: chat-model.js:20 ~ answer1:",
  JSON.stringify(answer1, null, 2)
);
console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");

//
// ✅ with simple generate method example
//
const answer2 = await model.generate([
  [
    new SystemChatMessage(
      "You are a helpful assistant that translate English messages to Bengali."
    ),
    new HumanChatMessage(
      "Translate this line from English to Bengali. I love Coding."
    ),
  ],
  [
    new SystemChatMessage(
      "You are a helpful assistant that translate English messages to Hindi."
    ),
    new HumanChatMessage(
      "Translate this line from English to Hindi. I love Coding."
    ),
  ],
]);

console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
console.log(
  "🚀 ~ file: chat-model.js:33 ~ answer2:",
  JSON.stringify(answer2, null, 2)
);
console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");

//
// ✅ With Prompt templates example
//
const translationPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    "You are a helpful assistant that translate {input_language} messages to {output_language}."
  ),
  HumanMessagePromptTemplate.fromTemplate("{text}"),
]);

const formattedPrompt = await translationPrompt.formatPromptValue({
  input_language: "English",
  output_language: "Bengali",
  text: "I love you.",
});

const answer3 = await model.generatePrompt({ formattedPrompt });

console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
console.log(
  "🚀 ~ file: chat-model.js:82 ~ answer3:",
  JSON.stringify(answer3, null, 2)
);
console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");

//
// ✅ With chains example
//
const chian = new LLMChain({
  prompt: translationPrompt,
  llm: model,
});

const answer4 = await chian.call({
  input_language: "English",
  output_language: "French",
  text: "I love you.",
});

console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
console.log(
  "🚀 ~ file: chat-model.js:102 ~ answer4:",
  JSON.stringify(answer4, null, 2)
);
console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
