export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'hamburger' | 'sandwich' | 'takeaway';
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface OrderSummary {
  items: CartItem[];
  subtotal: number;
  total: number;
  itemCount: number;
}