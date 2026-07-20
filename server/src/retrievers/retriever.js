import supabase from "../database/supabase.js";
import embeddingModel from "../embeddings/embeddingModel.js";

export async function retrieveDocuments(query) {
  const queryEmbedding = await embeddingModel.embedQuery(query);

  const { data, error } = await supabase.rpc("match_documents", {
    query_embedding: queryEmbedding,
    match_count: 5,
  });

  if (error) {
    throw error;
  }

  return data;
}
