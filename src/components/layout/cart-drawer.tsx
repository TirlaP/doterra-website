"use client";

import { useAtom } from "jotai";
import { X, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { cartAtom, cartCountAtom, cartTotalAtom, type CartItem } from "@/store/cart";
import { cartDrawerAtom } from "@/store/ui";
import { formatPrice } from "@/lib/utils";

export function CartDrawer() {
  const [isOpen, setIsOpen] = useAtom(cartDrawerAtom);
  const [cart, setCart] = useAtom(cartAtom);
  const [_, setCartCount] = useAtom(cartCountAtom);
  const [total, setTotal] = useAtom(cartTotalAtom);

  const closeCart = () => {
    setIsOpen(false);
  };

  const removeItem = (id: string) => {
    const itemToRemove = cart.find(item => item.id === id);
    
    if (!itemToRemove) return;
    
    // Calculate new total and count
    const newTotal = total - (itemToRemove.product.price! * itemToRemove.quantity);
    const newCount = cart.reduce((acc, item) => {
      if (item.id !== id) {
        return acc + item.quantity;
      }
      return acc;
    }, 0);
    
    // Update state
    setCart(cart.filter(item => item.id !== id));
    setCartCount(newCount);
    setTotal(newTotal);
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        // Calculate the difference in quantity
        const quantityDiff = newQuantity - item.quantity;
        
        // Update the total and count
        setTotal(prev => prev + (item.product.price! * quantityDiff));
        setCartCount(prev => prev + quantityDiff);
        
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    
    setCart(updatedCart);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={closeCart}
        />
      )}
      
      {/* Cart Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Your Cart ({cart.length})
            </h2>
            <button 
              onClick={closeCart}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-6">
                  Looks like you haven't added any products to your cart yet.
                </p>
                <Button onClick={closeCart} asChild>
                  <Link href="/shop">Start Shopping</Link>
                </Button>
              </div>
            ) : (
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-100 flex-shrink-0 flex items-center justify-center rounded">
                      {/* Replace with actual product image when available */}
                      <span className="text-xs text-gray-400 text-center px-1">
                        {item.product.name}
                      </span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm mb-1 truncate">{item.product.name}</h4>
                      <div className="text-sm text-gray-500 mb-2">
                        {formatPrice(item.product.price!)} × {item.quantity}
                      </div>
                      
                      <div className="flex items-center">
                        <div className="flex items-center border rounded-md mr-3">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 text-sm"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="px-2 py-1 text-sm min-w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-sm"
                          >
                            +
                          </button>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="font-medium">
                      {formatPrice(item.product.price! * item.quantity)}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t p-4">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Button className="w-full" asChild>
                  <Link href="/checkout" onClick={closeCart}>
                    Checkout
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" onClick={closeCart}>
                  Continue Shopping
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
