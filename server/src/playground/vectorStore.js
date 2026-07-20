import { loadPDF } from "../loaders/pdfLoader.js";
import textSplitter from "../splitters/textSplitter.js";
import { Chroma } from "@langchain/community/vectorstores/chroma";

import embeddingModel from "../embeddings/embeddingModel.js";

const documents = await loadPDF("./src/documents/sample.pdf");

const chunks = await textSplitter.splitDocuments(documents);

const vectorStore = await Chroma.fromDocuments(
  chunks,
  embeddingModel,
  {
    collectionName: "website-chatbot",
  }
);

console.log("Documents stored successfully!");