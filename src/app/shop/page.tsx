import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Mock data for the MVP
const products = [
  {
    id: "1",
    name: "Lavender Essential Oil",
    slug: "lavender-essential-oil",
    price: 28.00,
    image: "/images/lavender.jpg",
    category: "Single Oils",
    shortDescription: "Calming and relaxing oil with a floral aroma, perfect for promoting peaceful sleep and easing occasional tension.",
    isNew: false,
    isBestseller: true,
    rating: 4.8,
    reviewCount: 32,
  },
  {
    id: "2",
    name: "Peppermint Essential Oil",
    slug: "peppermint-essential-oil",
    price: 27.33,
    image: "/images/peppermint.jpg",
    category: "Single Oils",
    shortDescription: "Refreshing, cooling oil that promotes clear breathing and alertness with its invigorating scent.",
    isNew: false,
    isBestseller: true,
    rating: 4.9,
    reviewCount: 28,
  },
  {
    id: "3",
    name: "Lemon Essential Oil",
    slug: "lemon-essential-oil",
    price: 13.33,
    image: "/images/lemon.jpg",
    category: "Single Oils",
    shortDescription: "Cleansing, purifying oil with a fresh citrus scent that uplifts mood and purifies surfaces.",
    isNew: false,
    isBestseller: false,
    rating: 4.6,
    reviewCount: 17,
  },
  {
    id: "4",
    name: "Deep Blue Blend",
    slug: "deep-blue-blend",
    price: 42.67,
    salePrice: 39.99,
    image: "/images/deep-blue.jpg",
    category: "Blends",
    shortDescription: "Soothing blend of oils formulated to comfort and cool muscles after exercise or physical activity.",
    isNew: false,
    isBestseller: false,
    rating: 4.7,
    reviewCount: 23,
  },
  {
    id: "5",
    name: "Petal Diffuser",
    slug: "petal-diffuser",
    price: 62.67,
    image: "/images/petal-diffuser.jpg",
    category: "Diffusers",
    shortDescription: "Simple-to-use, 3-piece diffuser with optional ambient light that disperses oil in a fine mist.",
    isNew: true,
    isBestseller: false,
    rating: 4.5,
    reviewCount: 14,
  },
  {
    id: "6",
    name: "Home Essentials Kit",
    slug: "home-essentials-kit",
    price: 249.33,
    image: "/images/home-kit.jpg",
    category: "Kits",
    shortDescription: "Complete kit with 10 essential oils and a diffuser to get started with everyday wellness solutions.",
    isNew: false,
    isBestseller: false,
    rating: 4.9,
    reviewCount: 42,
  },
  {
    id: "7",
    name: "On Guard Protective Blend",
    slug: "on-guard-protective-blend",
    price: 45.33,
    image: "/images/on-guard.jpg",
    category: "Blends",
    shortDescription: "Protective blend that supports immune function and contains cleansing properties for surfaces.",
    isNew: false,
    isBestseller: true,
    rating: 4.8,
    reviewCount: 36,
  },
  {
    id: "8",
    name: "Frankincense Essential Oil",
    slug: "frankincense-essential-oil",
    price: 93.00,
    image: "/images/frankincense.jpg",
    category: "Single Oils",
    shortDescription: "Revered oil that promotes feelings of peace and relaxation while supporting healthy cellular function.",
    isNew: false,
    isBestseller: true,
    rating: 4.9,
    reviewCount: 48,
  },
  {
    id: "9",
    name: "AromaLite Diffuser",
    slug: "aromalite-diffuser",
    price: 119.93,
    salePrice: 99.95,
    image: "/images/aromalite-diffuser.jpg",
    category: "Diffusers",
    shortDescription: "Modern, sleek diffuser with customizable mist output and multiple light settings for any room.",
    isNew: true,
    isBestseller: false,
    rating: 4.7,
    reviewCount: 19,
  },
  {
    id: "10",
    name: "Balance Grounding Blend",
    slug: "balance-grounding-blend",
    price: 26.67,
    image: "/images/balance.jpg",
    category: "Blends",
    shortDescription: "Grounding blend that promotes tranquility and balance with warm, woody aromas.",
    isNew: false,
    isBestseller: false,
    rating: 4.6,
    reviewCount: 22,
  },
  {
    id: "11",
    name: "Serenity Restful Blend",
    slug: "serenity-restful-blend",
    price: 40.00,
    image: "/images/serenity.jpg",
    category: "Blends",
    shortDescription: "Calming blend designed to create a perfect environment for sleeping and relaxation.",
    isNew: false,
    isBestseller: false,
    rating: 4.8,
    reviewCount: 29,
  },
  {
    id: "12",
    name: "Breathe Respiratory Blend",
    slug: "breathe-respiratory-blend",
    price: 29.33,
    image: "/images/breathe.jpg",
    category: "Blends",
    shortDescription: "Cooling, invigorating blend that supports feelings of clear airways and easy breathing.",
    isNew: false,
    isBestseller: false,
    rating: 4.7,
    reviewCount: 31,
  },
];

const categories = [
  { id: "1", name: "Single Oils", count: products.filter(p => p.category === "Single Oils").length, slug: "single-oils" },
  { id: "2", name: "Blends", count: products.filter(p => p.category === "Blends").length, slug: "blends" },
  { id: "3", name: "Diffusers", count: products.filter(p => p.category === "Diffusers").length, slug: "diffusers" },
  { id: "4", name: "Kits", count: products.filter(p => p.category === "Kits").length, slug: "kits" },
  { id: "5", name: "Skin Care", count: 0, slug: "skin-care" },
  { id: "6", name: "Supplements", count: 0, slug: "supplements" },
];

// Stars rating component
function StarRating({ rating, showValue = false }: { rating: number, showValue?: boolean }) {
  return (
    <div className="flex items-center">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill={i < Math.floor(rating) ? "currentColor" : (i < rating ? "currentColor" : "none")}
            stroke={i < Math.floor(rating) ? "none" : "currentColor"}
            strokeWidth="1.5"
            className={`w-4 h-4 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          >
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
        ))}
      </div>
      {showValue && <span className="ml-1.5 text-sm text-gray-600">{rating.toFixed(1)}</span>}
    </div>
  );
}

export default function Shop() {
  return (
    <div>
      {/* Announcement banner */}
      <div className="bg-primary-600 text-white py-2 px-4 text-center text-sm">
        <p>
          Transport gratuit pentru comenzi de peste 350 RON | Folosește codul <span className="font-bold">MAI2025</span> pentru 10% reducere
        </p>
      </div>
      
      {/* Shop hero section */}
      <section className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-r from-primary-800/90 to-primary-700/90 text-white">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary-200 text-sm uppercase tracking-widest mb-3 font-medium inline-block">Magazinul doTERRA</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Descoperă Puterea Naturii</h1>
            <p className="text-lg text-white/80 mb-8">
              Explorează colecția noastră de uleiuri esențiale pure, difuzoare și produse wellness pentru o viață mai sănătoasă și echilibrată.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 max-w-xl mx-auto flex">
              <Input 
                placeholder="Caută produse..." 
                className="bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-white/60 flex-1"
              />
              <Button size="sm" className="rounded-full h-10 w-10 p-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Category navigation */}
      <section className="bg-gray-50 py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/shop"
              className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              Toate Produsele
            </Link>
            
            {categories.filter(c => c.count > 0).map(category => (
              <Link 
                key={category.id}
                href={`/shop/category/${category.slug}`}
                className="px-4 py-2 bg-white hover:bg-gray-100 border border-gray-200 rounded-full text-sm font-medium transition-colors"
              >
                {category.name}
                <span className="ml-1.5 text-xs text-gray-500">({category.count})</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-24 divide-y divide-gray-200">
              <div className="pb-6">
                <h3 className="font-semibold text-lg mb-4">Filtrează Produse</h3>
                <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
                  <Input placeholder="Caută..." className="flex-1" />
                  <Button variant="outline" size="icon" className="h-10 w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </Button>
                </div>
              </div>

              <div className="py-6">
                <h3 className="font-semibold text-lg mb-4">Categorii</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link 
                        href={`/shop/category/${category.slug}`}
                        className="flex justify-between items-center py-2 hover:text-primary-600 transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="text-sm px-2 py-1 bg-gray-100 rounded-full font-medium min-w-6 text-center">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="py-6">
                <h3 className="font-semibold text-lg mb-4">Preț</h3>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Minim</label>
                    <Input placeholder="$0" type="number" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Maxim</label>
                    <Input placeholder="$100" type="number" />
                  </div>
                </div>
                <Button className="w-full">Aplică</Button>
              </div>
              
              <div className="py-6">
                <h3 className="font-semibold text-lg mb-4">Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={`rating-${rating}`}
                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor={`rating-${rating}`} className="flex items-center cursor-pointer">
                        <StarRating rating={rating} />
                        <span className="ml-1.5 text-sm text-gray-600">{rating === 5 ? "& up" : ""}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-6">
                <h3 className="font-semibold text-lg mb-4">Etichete</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white border border-gray-200 cursor-pointer hover:bg-primary-50 hover:text-primary-700 hover:border-primary-200 transition-colors">
                    Bestseller
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white border border-gray-200 cursor-pointer hover:bg-primary-50 hover:text-primary-700 hover:border-primary-200 transition-colors">
                    Nou
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white border border-gray-200 cursor-pointer hover:bg-primary-50 hover:text-primary-700 hover:border-primary-200 transition-colors">
                    Reducere
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white border border-gray-200 cursor-pointer hover:bg-primary-50 hover:text-primary-700 hover:border-primary-200 transition-colors">
                    Organic
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white border border-gray-200 cursor-pointer hover:bg-primary-50 hover:text-primary-700 hover:border-primary-200 transition-colors">
                    100% Natural
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600 font-medium">Afișare <span className="text-gray-900">{products.length}</span> produse</p>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Sortare:</span>
                <select className="border rounded-full p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option>Recomandate</option>
                  <option>Preț: Mic la Mare</option>
                  <option>Preț: Mare la Mic</option>
                  <option>Nume: A-Z</option>
                  <option>Nume: Z-A</option>
                  <option>Cele mai noi</option>
                  <option>Cele mai populare</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {products.map((product) => (
                <Card key={product.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 rounded-xl">
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
                      {/* Replace with actual product images when available */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">{product.name}</span>
                      </div>
                      
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-0 left-0 right-0 bg-primary-600 text-white text-center py-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        Vezi detalii
                      </div>
                    </div>
                    
                    {/* Product badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {"salePrice" in product && product.salePrice && (
                        <Badge className="bg-primary-600 hover:bg-primary-700">
                          -{Math.round((1 - (product.salePrice / product.price)) * 100)}% OFF
                        </Badge>
                      )}
                      
                      {product.isNew && (
                        <Badge className="bg-blue-600 hover:bg-blue-700">
                          Nou
                        </Badge>
                      )}
                      
                      {product.isBestseller && (
                        <Badge className="bg-amber-600 hover:bg-amber-700">
                          Bestseller
                        </Badge>
                      )}
                    </div>
                    
                    {/* Quick actions */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{product.category}</div>
                        <h3 className="font-medium text-lg mb-1 group-hover:text-primary-600 transition-colors line-clamp-1">
                          <Link href={`/shop/product/${product.slug}`} className="hover:text-primary-600">
                            {product.name}
                          </Link>
                        </h3>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <StarRating rating={product.rating} />
                      <span className="text-xs text-gray-500">({product.reviewCount})</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>
                    
                    <div className="flex justify-between items-center mt-auto">
                      <div>
                        {"salePrice" in product && product.salePrice ? (
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-primary-600">${product.salePrice.toFixed(2)}</span>
                            <span className="text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                          </div>
                        ) : (
                          <span className="font-semibold">${product.price.toFixed(2)}</span>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="rounded-full w-9 h-9 p-0 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                          </svg>
                        </Button>
                        
                        <Button size="sm" asChild>
                          <Link href={`/shop/product/${product.slug}`}>Vezi produs</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="inline-flex items-center gap-1 bg-white rounded-full border p-1 shadow-sm">
                <Button variant="ghost" size="icon" className="rounded-full" disabled>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </Button>
                <Button className="rounded-full min-w-9 h-9">1</Button>
                <Button variant="ghost" className="rounded-full min-w-9 h-9">2</Button>
                <Button variant="ghost" className="rounded-full min-w-9 h-9">3</Button>
                <Button variant="ghost" className="rounded-full min-w-9 h-9">4</Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Shop By Category Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Cumpără După Categorie</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explorează colecțiile noastre clar organizate pentru a găsi exact ce ai nevoie pentru rutina ta de wellness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.filter(c => c.count > 0).map((category) => (
              <Link 
                key={category.id}
                href={`/shop/category/${category.slug}`}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 to-gray-900/60 z-10 group-hover:from-gray-900/20 group-hover:to-gray-900/70 transition-colors"></div>
                
                {/* Replace with actual category image when available */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">{category.name}</span>
                </div>
                
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/80 mb-3 text-sm">
                    {category.count} produse
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-white">
                    Descoperă 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              De Ce Să Alegi Produsele doTERRA
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Angajamentul nostru față de calitate și puritate ne diferențiază în industria wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="bg-primary-600/40 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Puritate Certificată</h3>
              <p className="text-white/80">
                Fiecare lot este testat de laboratoare independente pentru a asigura puritatea și potența fiecărui ulei esențial.
              </p>
            </div>

            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="bg-primary-600/40 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Co-Impact Sourcing</h3>
              <p className="text-white/80">
                Creăm parteneriate etice cu producători din întreaga lume, susținând comunitățile locale și asigurând uleiuri de cea mai înaltă calitate.
              </p>
            </div>

            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="bg-primary-600/40 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Satisfacție Garantată</h3>
              <p className="text-white/80">
                Oferim garanție de returnare 30 de zile pentru toate produsele noastre, pentru că suntem încrezători în calitatea și rezultatele lor.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              Ce Spun Clienții Noștri
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descoperă experiențele reale ale clienților noștri cu uleiurile esențiale doTERRA.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <StarRating rating={5} />
              <p className="text-gray-700 my-4">
                "Folosesc uleiurile doTERRA de peste 5 ani și au transformat complet rutina de wellness a familiei mele. Calitatea și puritatea sunt incomparabile!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mr-3">
                  M
                </div>
                <div>
                  <h4 className="font-semibold">Maria Ionescu</h4>
                  <p className="text-sm text-gray-500">Wellness Advocate</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <StarRating rating={5} />
              <p className="text-gray-700 my-4">
                "Ca practician în domeniul wellness, recomand doar produse în care cred cu adevărat. Angajamentul doTERRA față de calitate și sustenabilitate îi face prima mea alegere pentru clienți."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mr-3">
                  A
                </div>
                <div>
                  <h4 className="font-semibold">Alexandru Popescu</h4>
                  <p className="text-sm text-gray-500">Coach de Sănătate Holistică</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <StarRating rating={4.5} />
              <p className="text-gray-700 my-4">
                "Difuzorul Petal împreună cu uleiurile de lavandă și mentă au transformat calitatea somnului meu. Nu mai pot dormi fără ele! Serviciul clienți a fost excelent când am avut nevoie de ajutor."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mr-3">
                  E
                </div>
                <div>
                  <h4 className="font-semibold">Elena Vasile</h4>
                  <p className="text-sm text-gray-500">Client fidel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16 lg:py-24 bg-primary-600 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Gata să Începi Călătoria Wellness?
          </h2>
          <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Alătură-te miilor de clienți mulțumiți care și-au transformat viața cu uleiurile esențiale doTERRA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/shop">Explorează Acum</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white hover:text-primary-600" asChild>
              <Link href="/business-opportunity">Devino Advocate</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
