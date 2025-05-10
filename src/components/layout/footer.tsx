"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto py-12 px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and about */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold text-primary">doTERRA</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Discover the power of essential oils and natural wellness solutions with doTERRA. Premium quality oils for you and your family.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/shop/category/essential-oils" className="text-gray-600 hover:text-primary">
                  Essential Oils
                </Link>
              </li>
              <li>
                <Link href="/shop/category/diffusers" className="text-gray-600 hover:text-primary">
                  Diffusers
                </Link>
              </li>
              <li>
                <Link href="/shop/category/skin-care" className="text-gray-600 hover:text-primary">
                  Skin Care
                </Link>
              </li>
              <li>
                <Link href="/shop/category/bundles" className="text-gray-600 hover:text-primary">
                  Bundles
                </Link>
              </li>
              <li>
                <Link href="/shop/new-products" className="text-gray-600 hover:text-primary">
                  New Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/resources/ebooks" className="text-gray-600 hover:text-primary">
                  Ebooks
                </Link>
              </li>
              <li>
                <Link href="/resources/presentations" className="text-gray-600 hover:text-primary">
                  Presentations
                </Link>
              </li>
              <li>
                <Link href="/resources/business-tools" className="text-gray-600 hover:text-primary">
                  Business Tools
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-600 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} doTERRA. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/terms" className="text-gray-500 hover:text-primary">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-500 hover:text-primary">
              Privacy
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-primary">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
