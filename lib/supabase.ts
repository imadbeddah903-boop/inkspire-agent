import {createClient} from "@supabase/supabase-js";import {env} from "./env";
export const supabaseAdmin=createClient(env.supabaseUrl,env.supabaseServiceRoleKey,{auth:{persistSession:false}});
export async function readProject(){const {data,error}=await supabaseAdmin.from("projects").select("*").limit(20);if(error)throw error;return data;}