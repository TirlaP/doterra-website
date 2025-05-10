export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  address?: Address;
  phone?: string;
  role: "customer" | "admin";
  orders: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}
