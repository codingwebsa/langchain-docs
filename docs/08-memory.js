import * as dotenv from "dotenv";
import { Cohere } from "langchain/llms/cohere";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  MessagesPlaceholder,
} from "langchain/prompts";

dotenv.config({});

const model = new Cohere({
  apiKey: process.env.COHERE_API_KEY,
  temperature: 0.9,
  verbose: true,
});

//
// ✅ Simple memory uses example
//
const memory = new BufferMemory();
const chain = new ConversationChain({
  llm: model,
  memory: memory,
});

const answer1 = await chain.call({
  input: "Hey, My name is Saif Ahmed.",
});

console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
console.log("🚀 ~ file: memory.js:20 ~ answer1:", answer1);
console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");

const answer2 = await chain.call({
  input: "What's my name?",
});

console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
console.log("🚀 ~ file: memory.js:26 ~ answer2:", answer2);
console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");

//
// ✅ with templates, memory and history
//
const chatPrompt = ChatPromptTemplate.fromMessages([
  SystemMessagePromptTemplate.fromTemplate(
    "The following conversation is a friendly conversation between human and AI. The AI is talkative and informative."
  ),
  new MessagesPlaceholder("history"),
  HumanMessagePromptTemplate.fromTemplate("{input}"),
]);

const chain2 = new ConversationChain({
  memory: new BufferMemory({
    returnMessages: true,
    memoryKey: "history",
  }),
  prompt: chatPrompt,
  llm: new Cohere({ apiKey: process.env.COHERE_API_KEY }),
});

const answer3 = await chain2.call({
  input: "Hi, I'm from Bangladesh.",
});

console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
console.log("🚀 ~ file: memory.js:68 ~ answer3:", answer3);
console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");

const answer4 = await chain2.call({
  input: "Do you know where I'm from?",
});

console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
console.log("🚀 ~ file: memory.js:78 ~ answer4:", answer4);
console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
