import { loadPDF } from "../loaders/pdfLoader.js";
import textSplitter from "../splitters/textSplitter.js";

const documents = await loadPDF("./src/documents/sample.pdf");

const chunks = await textSplitter.splitDocuments(documents);

console.log(chunks);