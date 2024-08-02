import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fhfvhacwezmektavkgbc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoZnZoYWN3ZXptZWt0YXZrZ2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5NzMxNjUsImV4cCI6MjAzNzU0OTE2NX0.ZU-iUPv-5PC09iaPWA_0DyWnanOLUk7YjjKvWpzhu6g';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);