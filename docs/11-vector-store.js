// 
// 
// ❕❕ Make sure to run ingest.js file before running this file.
// ❕❕ run: node ./scripts/ingest.js
// ❕❕ it will create a local vector db which we will read in this file
//
//

import { config } from "dotenv";
config();

import { CohereEmbeddings } from "langchain/embeddings/cohere";
import { FaissStore } from "langchain/vectorstores/faiss";
import { Cohere } from "langchain/llms/cohere.js";
import { RetrievalQAChain, loadQAStuffChain } from "langchain/chains";
import { DB_PATH } from "../constants/index.js";

const embeddings = new CohereEmbeddings({ apiKey: process.env.CoHERE_API_KEY });
const vectorStore = await FaissStore.load(DB_PATH, embeddings);

const model = new Cohere({
  apiKey: process.env.CoHERE_API_KEY,
  temperature: 0,
});

const chain = new RetrievalQAChain({
  combineDocumentsChain: loadQAStuffChain(model),
  retriever: vectorStore.asRetriever(),
  returnSourceDocuments: true,
});

const res = await chain.call({
  query: "When does the restaurant open on friday?",
});

console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
console.log("🚀 ~ file: 11-vector-store.js:24 ~ res:", res);
console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
