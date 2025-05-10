"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { EyeIcon, EyeOffIcon } from "lucide-react";

// Form validation schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    
    // For MVP, simulate API call
    console.log("Login data:", data);
    
    // Simulate API delay
    setTimeout(() => {
      // In a real implementation, this would handle authentication
      alert("Login successful! (This is just a simulated response for the MVP)");
      setIsLoading(false);
      
      // Redirect to home page
      window.location.href = "/";
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
        <p className="text-gray-600">
          Sign in to your account to access your orders, downloads, and more.
        </p>
      </div>

      <div className="bg-white rounded-lg border p-6 shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="/auth/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("password")}
                className={errors.password ? "border-red-500 pr-10" : "pr-10"}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              {...register("rememberMe")}
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <Label htmlFor="rememberMe" className="text-sm font-normal">
              Remember me
            </Label>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <Separator className="my-6" />

        <div className="space-y-4">
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/auth/register" className="text-primary hover:underline font-medium">
              Sign up
            </Link>
          </p>
          
          <div className="text-center">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/">Continue as Guest</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
