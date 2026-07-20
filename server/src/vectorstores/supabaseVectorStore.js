import supabase from "../database/supabase.js";
import embeddingModel from "../embeddings/embeddingModel.js";

export async function storeDocuments(chunks, sourceType, sourceName) {
  const rows = [];

  for (const chunk of chunks) {
    const embedding = await embeddingModel.embedQuery(chunk.pageContent);

    rows.push({
      source_type: sourceType,
      source_name: sourceName,
      content: chunk.pageContent,
      embedding,
      metadata: chunk.metadata,
    });
  }

  const { error } = await supabase.from("knowledge_base").insert(rows);

  if (error) {
    throw error;
  }

  return rows.length;
}
