import embeddingModel from "../embeddings/embeddingModel.js";

const embedding = await embeddingModel.embedQuery(
  "What services does Waves Web Studio provide?", 
 
);

console.log("Embedding Length:", embedding.length);