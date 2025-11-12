import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://symhtgkmykkuhtxnpuze.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5bWh0Z2tteWtrdWh0eG5wdXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3OTM2OTYsImV4cCI6MjA3ODM2OTY5Nn0.Z-h0paHZxpMyPIN5BCX75-eet6b8rkbQY9KqZVyRwFo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);