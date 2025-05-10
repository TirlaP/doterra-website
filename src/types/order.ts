export interface Order {
  id: string;
  user: string;
  items: OrderItem[];
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  paymentStatus: "pending" | "paid" | "failed";
  fulfillmentStatus: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  paymentMethod: string;
  shippingAddress: Address;
  billingAddress: Address;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  quantity: number;
  price: number;
  isDigital: boolean;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}
