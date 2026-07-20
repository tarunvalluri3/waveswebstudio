import supabase from "../database/supabase.js";

export async function getKnowledgeSources() {
  const { data, error } = await supabase
    .from("knowledge_base")
    .select("id, source_name, source_type, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
} 

export async function deleteKnowledge(id) {
  const { error } = await supabase
    .from("knowledge_base")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }

  return true;
}