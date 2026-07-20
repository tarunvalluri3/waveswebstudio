import dotenv from "dotenv";

dotenv.config();

export const { PORT, GOOGLE_API_KEY, SUPABASE_URL, SUPABASE_SECRET_KEY } =
  process.env;
