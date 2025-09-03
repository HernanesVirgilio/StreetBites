import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface OrderRequest {
  id?: string;
  customer_name: string;
  phone_number: string;
  address: string;
  order_items: string;
  total_amount: number;
  notes?: string;
  status: 'pending' | 'confirmed' | 'preparing' | 'delivered';
  created_at?: string;
}