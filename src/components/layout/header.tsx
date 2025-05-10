"use client";

import Link from "next/link";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { mobileMenuAtom, cartDrawerAtom, searchModalAtom } from "@/store/ui";
import { cartCountAtom } from "@/store/cart";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useAtom(mobileMenuAtom);
  const [_, setCartDrawerOpen] = useAtom(cartDrawerAtom);
  const [__, setSearchModalOpen] = useAtom(searchModalAtom);
  const [cartCount] = useAtom(cartCountAtom);
  const pathname = usePathname();

  return (
    <header className="border-b bg-white/95 backdrop-blur-md sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto py-4 px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-display font-bold text-primary-600">doTERRA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block flex-1 max-w-4xl mx-auto">
            <NavigationMenu className="mx-auto">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2 bg-white shadow-lg rounded-xl border border-gray-100">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/shop/category/essential-oils"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Essential Oils</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Single oils and blends for every need
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/shop/category/diffusers"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Diffusers</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Stylish diffusers for your home
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/shop/category/skin-care"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Skin Care</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Natural skin care products
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/shop/category/bundles"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Bundles</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Save with our bundles and collections
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/resources/ebooks"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Ebooks</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Informative guides on essential oils
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/resources/presentations"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Presentations</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Ready-to-use presentation materials
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/resources/business-tools"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Business Tools</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Resources for wellness advocates
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/resources/class-materials"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Class Materials</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Materials for hosting oil classes
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/blog" className={navigationMenuTriggerStyle()}>
                      Blog
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className={navigationMenuTriggerStyle()}>
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right actions */}
          <div className="flex items-center space-x-4">
            <button 
              className="hidden lg:flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setSearchModalOpen(true)}
            >
              <Search className="h-5 w-5" />
            </button>
            
            <button
              className="relative flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setCartDrawerOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            
            <Link href="/auth/login">
              <Button variant="outline" size="sm" className="hidden md:inline-flex">
                Log in
              </Button>
            </Link>
            
            <Link href="/auth/register">
              <Button size="sm" className="hidden md:inline-flex">
                Sign up
              </Button>
            </Link>
            
            <button
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md absolute w-full z-20">
          <div className="container mx-auto py-4 px-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/shop" 
                className={cn(
                  "text-lg font-medium py-2", 
                  pathname.startsWith("/shop") ? "text-primary" : "text-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                href="/resources" 
                className={cn(
                  "text-lg font-medium py-2", 
                  pathname.startsWith("/resources") ? "text-primary" : "text-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="/blog" 
                className={cn(
                  "text-lg font-medium py-2", 
                  pathname.startsWith("/blog") ? "text-primary" : "text-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className={cn(
                  "text-lg font-medium py-2", 
                  pathname.startsWith("/about") ? "text-primary" : "text-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex space-x-4 pt-2">
                <Link href="/auth/login" className="flex-1">
                  <Button variant="outline" className="w-full">Log in</Button>
                </Link>
                <Link href="/auth/register" className="flex-1">
                  <Button className="w-full">Sign up</Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
