import { retrieveDocuments } from "../retrievers/retriever.js";

const documents = await retrieveDocuments(
  "What services does Waves Web Studio provide?"
);

console.log(documents);