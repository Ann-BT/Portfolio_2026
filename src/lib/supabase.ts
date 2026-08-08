// src/lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://gadmxleafawbkqxrgimo.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhZG14bGVhZmF3YmtxeHJnaW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxNzgyMTQsImV4cCI6MjEwMTc1NDIxNH0.hKQz7y75tTQNeWZuh6Vb8XTFDpFDrpycQuAy07B_Tm8";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
