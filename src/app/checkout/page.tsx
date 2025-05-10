"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAtom } from "jotai";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cartAtom, cartCountAtom, cartTotalAtom } from "@/store/cart";
import { formatPrice } from "@/lib/utils";

// Form validation schema
const checkoutSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your street address"),
  city: z.string().min(2, "Please enter your city"),
  state: z.string().min(2, "Please enter your state/province"),
  zipCode: z.string().min(3, "Please enter your ZIP/postal code"),
  country: z.string().min(2, "Please enter your country"),
  cardName: z.string().min(2, "Please enter the name on your card"),
  cardNumber: z.string().min(13, "Please enter a valid card number").max(19),
  expMonth: z.string().min(1, "Please select an expiration month"),
  expYear: z.string().min(4, "Please select an expiration year"),
  cvv: z.string().min(3, "Please enter a valid CVV/CVC").max(4),
  saveInfo: z.boolean().optional(),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const [cart, setCart] = useAtom(cartAtom);
  const [cartCount, setCartCount] = useAtom(cartCountAtom);
  const [cartTotal, setCartTotal] = useAtom(cartTotalAtom);
  
  const [isLoading, setIsLoading] = useState(false);
  const [sameAsShipping, setSameAsShipping] = useState(true);
  
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      cardName: "",
      cardNumber: "",
      expMonth: "",
      expYear: "",
      cvv: "",
      saveInfo: false,
    },
  });
  
  // Shipping fee (for MVP, a simple flat fee)
  const shippingFee = cart.some(item => !item.isDigital) ? 5.99 : 0;
  
  // Tax (for MVP, a simple percentage)
  const taxRate = 0.07; // 7%
  const taxAmount = cartTotal * taxRate;
  
  // Total with shipping and tax
  const orderTotal = cartTotal + shippingFee + taxAmount;
  
  const onSubmit = async (data: CheckoutFormValues) => {
    setIsLoading(true);
    
    // For MVP, simulate API call
    console.log("Checkout data:", data);
    
    // Simulate payment processing
    setTimeout(() => {
      // In a real implementation, this would handle payment processing
      alert("Order placed successfully! (This is just a simulated response for the MVP)");
      
      // Clear cart
      setCart([]);
      setCartCount(0);
      setCartTotal(0);
      
      // Redirect to order confirmation
      window.location.href = "/checkout/confirmation";
      
      setIsLoading(false);
    }, 2000);
  };
  
  // Check if cart is empty
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center py-12">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-gray-400 mb-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-gray-600 mb-6">
            Add some products to your cart to proceed with checkout.
          </p>
          <Button asChild>
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white rounded-lg border p-6">
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      {...register("firstName")}
                      className={errors.firstName ? "border-red-500" : ""}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      {...register("lastName")}
                      className={errors.lastName ? "border-red-500" : ""}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Shipping Address */}
              <div className="bg-white rounded-lg border p-6">
                <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      {...register("address")}
                      className={errors.address ? "border-red-500" : ""}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm">{errors.address.message}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        {...register("city")}
                        className={errors.city ? "border-red-500" : ""}
                      />
                      {errors.city && (
                        <p className="text-red-500 text-sm">{errors.city.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="state">State/Province</Label>
                      <Input
                        id="state"
                        {...register("state")}
                        className={errors.state ? "border-red-500" : ""}
                      />
                      {errors.state && (
                        <p className="text-red-500 text-sm">{errors.state.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP/Postal Code</Label>
                      <Input
                        id="zipCode"
                        {...register("zipCode")}
                        className={errors.zipCode ? "border-red-500" : ""}
                      />
                      {errors.zipCode && (
                        <p className="text-red-500 text-sm">{errors.zipCode.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        {...register("country")}
                        className={errors.country ? "border-red-500" : ""}
                      />
                      {errors.country && (
                        <p className="text-red-500 text-sm">{errors.country.message}</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="sameAsBilling"
                    checked={sameAsShipping}
                    onChange={() => setSameAsShipping(!sameAsShipping)}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <Label htmlFor="sameAsBilling" className="text-sm font-normal">
                    Billing address is the same as shipping address
                  </Label>
                </div>
              </div>
              
              {/* Payment Information */}
              <div className="bg-white rounded-lg border p-6">
                <h2 className="text-xl font-bold mb-4">Payment Information</h2>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input
                      id="cardName"
                      {...register("cardName")}
                      className={errors.cardName ? "border-red-500" : ""}
                    />
                    {errors.cardName && (
                      <p className="text-red-500 text-sm">{errors.cardName.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="XXXX XXXX XXXX XXXX"
                      {...register("cardNumber")}
                      className={errors.cardNumber ? "border-red-500" : ""}
                    />
                    {errors.cardNumber && (
                      <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expMonth">Expiration Month</Label>
                      <select
                        id="expMonth"
                        {...register("expMonth")}
                        className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                          errors.expMonth ? "border-red-500" : ""
                        }`}
                      >
                        <option value="">Month</option>
                        {Array.from({ length: 12 }, (_, i) => {
                          const month = i + 1;
                          return (
                            <option key={month} value={month.toString().padStart(2, "0")}>
                              {month.toString().padStart(2, "0")}
                            </option>
                          );
                        })}
                      </select>
                      {errors.expMonth && (
                        <p className="text-red-500 text-sm">{errors.expMonth.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="expYear">Expiration Year</Label>
                      <select
                        id="expYear"
                        {...register("expYear")}
                        className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                          errors.expYear ? "border-red-500" : ""
                        }`}
                      >
                        <option value="">Year</option>
                        {Array.from({ length: 10 }, (_, i) => {
                          const year = new Date().getFullYear() + i;
                          return (
                            <option key={year} value={year.toString()}>
                              {year}
                            </option>
                          );
                        })}
                      </select>
                      {errors.expYear && (
                        <p className="text-red-500 text-sm">{errors.expYear.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV/CVC</Label>
                      <Input
                        id="cvv"
                        placeholder="XXX"
                        {...register("cvv")}
                        className={errors.cvv ? "border-red-500" : ""}
                      />
                      {errors.cvv && (
                        <p className="text-red-500 text-sm">{errors.cvv.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="saveInfo"
                  {...register("saveInfo")}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <Label htmlFor="saveInfo" className="text-sm font-normal">
                  Save my information for faster checkout next time
                </Label>
              </div>
              
              <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                {isLoading ? "Processing..." : `Complete Order • ${formatPrice(orderTotal)}`}
              </Button>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="bg-white rounded-lg border p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-gray-100 flex-shrink-0 flex items-center justify-center rounded">
                      {/* Replace with actual product image when available */}
                      <span className="text-xs text-gray-400 text-center px-1">
                        {item.product.name}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm mb-1 truncate">{item.product.name}</h4>
                      <div className="text-sm text-gray-500">
                        {formatPrice(item.product.price as number)} × {item.quantity}
                      </div>
                    </div>
                    <div className="font-medium text-right">
                      {formatPrice((item.product.price as number) * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shippingFee > 0 ? formatPrice(shippingFee) : "Free"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>{formatPrice(taxAmount)}</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>{formatPrice(orderTotal)}</span>
              </div>
              
              <div className="mt-6 text-sm text-gray-500">
                By completing your purchase, you agree to our{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
