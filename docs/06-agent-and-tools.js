// 📛📛
// 📛📛
// 📛📛 THE SERP API DONSN'T SEEM TO WORK QUITE WELL WITH COHERE AI
// 📛📛
// 📛📛

import * as dotenv from "dotenv";
import { Cohere } from "langchain/llms/cohere";
import {
  // SerpAPI,
  WikipediaQueryRun,
} from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import {
  initializeAgentExecutorWithOptions,
  ChatAgent,
  AgentExecutor,
} from "langchain/agents";

dotenv.config({});

const model = new Cohere({
  apiKey: process.env.COHERE_API_KEY,
  temperature: 0.9,
  verbose: true,
});

const tools = [
  // @visit: https://serper.dev/
  // ! new SerpAPI(process.env.SERP_API_KEY, {
  // !  hl: "us",
  // !  gl: "en",
  // !  timeout: 5,
  // ! }),
  new Calculator(),
  new WikipediaQueryRun(),
];

//
// ✅ With simple Executor & tools example
//
const executor = await initializeAgentExecutorWithOptions(tools, model, {
  agentType: "structured-chat-zero-shot-react-description",
});
console.info("Agent loaded...");

const answer = await executor.call({
  input: "Where does royel bengol tiger live?",
});

console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
console.log("🚀 ~ file: agent-and-tools.js:32 ~ answer:", answer);
console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");

//
// ✅ With Chat Agent's example
//
const agent = ChatAgent.fromLLMAndTools(model, tools);

const executor2 = AgentExecutor.fromAgentAndTools({
  agent: agent,
  tools: tools,
});

const answer2 = await executor2.run(
  "How many people are in the earth in 2023?"
);

console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
console.log("🚀 ~ file: agent-and-tools.js:68 ~ answer2:", answer2);
console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
