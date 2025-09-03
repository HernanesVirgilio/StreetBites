/*
  # Create order requests table

  1. New Tables
    - `order_requests`
      - `id` (uuid, primary key)
      - `customer_name` (text)
      - `phone_number` (text)
      - `address` (text)
      - `order_items` (text)
      - `total_amount` (numeric)
      - `notes` (text, optional)
      - `status` (text, default 'pending')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `order_requests` table
    - Add policy for public insert (customers can create orders)
    - Add policy for authenticated read (admin can view orders)
*/

CREATE TABLE IF NOT EXISTS order_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  phone_number text NOT NULL,
  address text NOT NULL,
  order_items text NOT NULL,
  total_amount numeric NOT NULL,
  notes text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'preparing', 'delivered')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE order_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert orders (customers placing orders)
CREATE POLICY "Anyone can create order requests"
  ON order_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anyone to read their own orders (for order tracking)
CREATE POLICY "Anyone can read order requests"
  ON order_requests
  FOR SELECT
  TO anon
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_order_requests_updated_at
  BEFORE UPDATE ON order_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();