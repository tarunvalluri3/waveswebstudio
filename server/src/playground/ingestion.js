import { ingestPDF } from "../rag/ingestionService.js";

const chunks = await ingestPDF("./src/documents/sample.pdf");

console.log(chunks);