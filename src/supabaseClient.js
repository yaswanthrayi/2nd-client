import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://yghhtudybffnyeylrmpt.supabase.co'; // Replace with your Supabase URL
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnaGh0dWR5YmZmbnlleWxybXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0NjM2NDEsImV4cCI6MjA3MDAzOTY0MX0.BDkI_eMRyeMgvQti_Kdn78ReLW7RZR1euufL3xnqJYg'; // Replace with your anon public key

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);