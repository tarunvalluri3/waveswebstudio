import { loadPDF } from "../loaders/pdfLoader.js";
import { loadWebsite } from "../loaders/playwrightLoader.js";

import textSplitter from "../splitters/textSplitter.js";
import { storeDocuments } from "../vectorstores/supabaseVectorStore.js";

export async function ingestPDF(filePath) {
  const documents = await loadPDF(filePath);

  const chunks = await textSplitter.splitDocuments(documents);

  await storeDocuments(
    chunks,
    "pdf",
    filePath
  );
}

export async function ingestWebsite(url) {
  const documents = await loadWebsite(url);

  const chunks = await textSplitter.splitDocuments(documents);

  await storeDocuments(
    chunks,
    "website",
    url
  );
}