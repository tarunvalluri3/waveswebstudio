import supabase from "./supabase.js";

// export async function createSession(sessionId) {
//   const { error } = await supabase.from("chat_sessions").upsert({
//     session_id: sessionId,
//     updated_at: new Date(),
//   });

//   if (error) {
//     throw error;
//   }
// }

export async function createSession(sessionId) {
  const { data } = await supabase
    .from("chat_sessions")
    .select("session_id")
    .eq("session_id", sessionId)
    .maybeSingle();

  if (data) {
    return;
  }

  const { error } = await supabase.from("chat_sessions").insert({
    session_id: sessionId,
  });

  if (error) {
    throw error;
  }
}

export async function saveMessage({ sessionId, role, content }) {
  const { error } = await supabase.from("chat_sessions").upsert(
    {
      session_id: sessionId,
      updated_at: new Date().toISOString(),
    },
    {
      onConflict: "session_id",
    },
  );
}

export async function getMessages(sessionId) {
  const { data, error } = await supabase
    .from("chat_messages")
    .select("role, content")
    .eq("session_id", sessionId)
    .order("created_at");

  if (error) {
    throw error;
  }

  return data;
} 

export async function getSummary(sessionId) {
  const { data, error } = await supabase
    .from("chat_summaries")
    .select("summary")
    .eq("session_id", sessionId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data?.summary || "";
}

export async function saveSummary(sessionId, summary) {
  const { error } = await supabase
    .from("chat_summaries")
    .upsert(
      {
        session_id: sessionId,
        summary,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "session_id",
      }
    );

  if (error) {
    throw error;
  }
}
