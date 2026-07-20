import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";

export async function loadWebsite(url) {
  const loader = new CheerioWebBaseLoader(url);

  const documents = await loader.load();

  return documents;
}