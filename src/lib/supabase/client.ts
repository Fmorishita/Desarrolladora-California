import { createBrowserClient } from "@supabase/ssr";

/**
 * Cliente Supabase para el browser (rol anon). Solo debe usarse para
 * operaciones públicas permitidas por RLS (INSERT en leads, SELECT en
 * contenido público). Nunca expone la service role key.
 */
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;
  return createBrowserClient(url, anonKey);
}
