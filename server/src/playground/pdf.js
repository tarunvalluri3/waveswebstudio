import { loadPDF } from "../loaders/pdfLoader.js";

const documents = await loadPDF("./src/documents/sample.pdf");

console.log(documents);