import { createClient } from "@supabase/supabase-js";

import {
  SUPABASE_URL,
  SUPABASE_SECRET_KEY,
} from "../config/env.js";

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_SECRET_KEY
);

export default supabase;