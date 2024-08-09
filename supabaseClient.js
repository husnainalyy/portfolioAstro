import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nbzsjuzjrybnbezysxgr.supabase.co";
const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ienNqdXpqcnlibmJlenlzeGdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxOTI5MTAsImV4cCI6MjAzODc2ODkxMH0.5Or5EzeV41R3J2hUw0SFQ5xRZKfALAw03bqc_oNGn_g";



export const supabase = createClient(supabaseUrl, supabaseAnonKey);
