import { config } from "dotenv";
config();

import { TextLoader } from "langchain/document_loaders/fs/text";
import { CharacterTextSplitter } from "langchain/text_splitter";
import { CohereEmbeddings } from "langchain/embeddings/cohere";
import { FaissStore } from "langchain/vectorstores/faiss";

import { DB_PATH } from "../constants/index.js";

const loader = new TextLoader("./data/restaurant.txt");

const docs = await loader.load();

const splitter = new CharacterTextSplitter({
  chunkSize: 200,
  chunkOverlap: 50,
});

const documents = await splitter.splitDocuments(docs);

const embeddings = new CohereEmbeddings({
  apiKey: process.env.COHERE_API_KEY,
  verbose: true,
});

const vectorstore = await FaissStore.fromDocuments(documents, embeddings);
await vectorstore.save(DB_PATH);
