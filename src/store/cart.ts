import { atomWithStorage } from "jotai/utils";
import { Product, DigitalProduct } from "@/types/product";

export type CartItem = {
  id: string;
  product: Partial<Product | DigitalProduct>;
  quantity: number;
  isDigital: boolean;
};

export const cartAtom = atomWithStorage<CartItem[]>("cart", []);

export const cartCountAtom = atomWithStorage<number>("cartCount", 0);

export const cartTotalAtom = atomWithStorage<number>("cartTotal", 0);
