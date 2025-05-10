"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useAtom } from "jotai";
import { cartAtom, cartCountAtom, cartTotalAtom } from "@/store/cart";
import { useParams } from "next/navigation";

// Mock data for the MVP
const products = [
  {
    id: "1",
    name: "Lavender Essential Oil",
    slug: "lavender-essential-oil",
    price: 28.00,
    salePrice: null,
    image: "/images/lavender.jpg",
    category: "Single Oils",
    categorySlug: "essential-oils",
    shortDescription: "Calming and relaxing oil with a floral aroma, perfect for promoting peaceful sleep and easing occasional tension.",
    description: `
      <p>Lavender essential oil is a versatile oil known for its calming and relaxing properties. It has a sweet, floral, herbaceous aroma that is soothing and balancing. Used for centuries for its tranquil qualities, lavender continues to be one of the most popular essential oils.</p>
      
      <h3>Benefits</h3>
      <ul>
        <li>Promotes feelings of calm and relaxation</li>
        <li>Helps reduce occasional anxious feelings</li>
        <li>Supports restful sleep when used before bedtime</li>
        <li>Soothes occasional skin irritations</li>
        <li>Creates a serene atmosphere when diffused</li>
      </ul>
      
      <h3>Uses</h3>
      <ul>
        <li>Add a few drops to your evening bath for a relaxing soak</li>
        <li>Apply to the temples and back of neck to reduce tension</li>
        <li>Use with a carrier oil for a soothing massage</li>
        <li>Diffuse at bedtime to promote a restful sleep environment</li>
        <li>Apply to occasional skin irritations to soothe discomfort</li>
      </ul>
      
      <h3>Directions for Use</h3>
      <p><strong>Diffusion:</strong> Use three to four drops in the diffuser of your choice.</p>
      <p><strong>Topical use:</strong> Apply one to two drops to desired area. Dilute with a carrier oil to minimize any skin sensitivity.</p>
      
      <h3>Cautions</h3>
      <p>Possible skin sensitivity. Keep out of reach of children. If you are pregnant, nursing, or under a doctor's care, consult your physician. Avoid contact with eyes, inner ears, and sensitive areas.</p>
    `,
    relatedProducts: ["2", "4", "10"],
    reviews: [
      {
        id: "r1",
        author: "Maria Popescu",
        rating: 5,
        date: "2025-04-15",
        title: "Calitate excepțională",
        content: "Am folosit multe uleiuri de lavandă de-a lungul anilor, dar acesta este de departe cel mai bun. Aroma este autentică și efectele sunt remarcabile pentru somn și relaxare.",
      },
      {
        id: "r2",
        author: "Alexandru Munteanu",
        rating: 4,
        date: "2025-04-02", 
        title: "Foarte bun pentru relaxare",
        content: "Folosesc acest ulei în difuzor seara și mă ajută să mă relaxez după o zi stresantă de muncă. Recomand cu încredere!",
      },
      {
        id: "r3",
        author: "Elena Ionescu",
        rating: 5,
        date: "2025-03-20",
        title: "Perfect pentru somn",
        content: "De când folosesc acest ulei de lavandă, calitatea somnului meu s-a îmbunătățit considerabil. Îl recomand tuturor celor care au probleme cu somnul.",
      }
    ],
    features: [
      "100% pur și natural",
      "Testat pentru puritate",
      "Fără adaosuri sau contaminanți",
      "Recoltă sustenabilă",
      "Aroma autentică de lavandă"
    ],
    stockQuantity: 100,
    sku: "LAV15ML",
    video: "/videos/lavender-usage.mp4",
    sourcingInfo: "Lavanda noastră este cultivată în câmpurile din Provence, Franța, unde clima mediteraneană creează condiții ideale pentru cea mai înaltă calitate a uleiului de lavandă.",
  },
  {
    id: "2",
    name: "Peppermint Essential Oil",
    slug: "peppermint-essential-oil",
    price: 27.33,
    salePrice: null,
    image: "/images/peppermint.jpg",
    category: "Single Oils",
    categorySlug: "essential-oils",
    shortDescription: "Refreshing, cooling oil that promotes clear breathing and alertness with its invigorating scent.",
    description: `
      <p>Peppermint essential oil provides a refreshing and energizing experience. The sharp, minty aroma invigorates the senses and promotes clear breathing and mental alertness. Known for its cooling effect, peppermint is perfect for both aromatic and topical uses.</p>
      
      <h3>Benefits</h3>
      <ul>
        <li>Creates an energizing atmosphere when diffused</li>
        <li>Promotes feelings of clear breathing</li>
        <li>Provides a cooling sensation to the skin</li>
        <li>Invigorates and enhances mental alertness</li>
        <li>Alleviates occasional stomach discomfort when taken internally*</li>
      </ul>
      
      <h3>Uses</h3>
      <ul>
        <li>Add a drop to your water for a refreshing taste</li>
        <li>Apply to the back of the neck and temples for a cooling sensation</li>
        <li>Diffuse when feeling low on energy or fatigued</li>
        <li>Use with a carrier oil for a refreshing massage</li>
        <li>Add to a cold compress and apply to forehead for a cooling sensation</li>
      </ul>
      
      <h3>Directions for Use</h3>
      <p><strong>Diffusion:</strong> Use three to four drops in the diffuser of your choice.</p>
      <p><strong>Topical use:</strong> Apply one to two drops to desired area. Dilute with a carrier oil to minimize any skin sensitivity.</p>
      <p><strong>Internal use:</strong> Dilute one drop in 4 fl. oz. of liquid.</p>
      
      <h3>Cautions</h3>
      <p>Possible skin sensitivity. Keep out of reach of children. If you are pregnant, nursing, or under a doctor's care, consult your physician. Avoid contact with eyes, inner ears, and sensitive areas.</p>
      
      <p>*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
    `,
    relatedProducts: ["1", "3", "12"],
    reviews: [
      {
        id: "r1",
        author: "Ion Popescu",
        rating: 5,
        date: "2025-04-12",
        title: "Revigorant și eficient",
        content: "Uleiul de mentă este perfect pentru momentele când am nevoie de energie. Îl folosesc în difuzor dimineața și mă ajută să mă concentrez mai bine la muncă.",
      },
      {
        id: "r2",
        author: "Andreea Stancu",
        rating: 5,
        date: "2025-03-30", 
        title: "Excelent pentru dureri de cap",
        content: "Aplic câteva picături diluate pe tâmple când am dureri de cap și simt o ușurare aproape imediată. Calitatea este excelentă!",
      }
    ],
    features: [
      "100% pur și natural",
      "Testat pentru puritate",
      "Aroma intensă de mentă",
      "Efect răcoritor pe piele",
      "Versatil pentru diverse utilizări"
    ],
    stockQuantity: 85,
    sku: "PEP15ML",
    video: "/videos/peppermint-usage.mp4",
    sourcingInfo: "Menta noastră este cultivată în ferme din Nord-Vestul Statelor Unite, unde solul bogat și clima temperată produc ulei de mentă de cea mai înaltă calitate și concentrație.",
  },
  {
    id: "4",
    name: "Deep Blue Blend",
    slug: "deep-blue-blend",
    price: 42.67,
    salePrice: 39.99,
    image: "/images/deep-blue.jpg",
    category: "Blends",
    categorySlug: "blends",
    shortDescription: "Soothing blend of oils formulated to comfort and cool muscles after exercise or physical activity.",
    description: `
      <p>Deep Blue is doTERRA's soothing blend of essential oils that creates a warm, tingling sensation when applied to the skin. This proprietary blend combines Wintergreen, Camphor, Peppermint, Blue Tansy, German Chamomile, Helichrysum, and Osmanthus to provide comfort after physical activity.</p>
      
      <h3>Benefits</h3>
      <ul>
        <li>Provides a cooling and soothing sensation to targeted areas</li>
        <li>Creates a comforting massage experience after physical activity</li>
        <li>Delivers a refreshing effect when applied to tired muscles</li>
        <li>Offers targeted comfort to muscles and joints</li>
      </ul>
      
      <h3>Uses</h3>
      <ul>
        <li>Apply to muscles before and after exercise</li>
        <li>Use with a carrier oil for a soothing massage to tired feet and legs</li>
        <li>Rub on lower back after a day of heavy lifting</li>
        <li>Apply to shoulders and neck to reduce tension</li>
        <li>Massage into growing kids' legs, especially before bedtime</li>
      </ul>
      
      <h3>Directions for Use</h3>
      <p><strong>Topical use:</strong> Apply to affected areas. Dilute with a carrier oil to minimize any skin sensitivity.</p>
      
      <h3>Cautions</h3>
      <p>Possible skin sensitivity. Keep out of reach of children. If you are pregnant, nursing, or under a doctor's care, consult your physician. Avoid contact with eyes, inner ears, and sensitive areas.</p>
    `,
    relatedProducts: ["1", "2", "10"],
    reviews: [
      {
        id: "r1",
        author: "Mihai Dumitrescu",
        rating: 5,
        date: "2025-04-18",
        title: "Perfect pentru sportivi",
        content: "Folosesc acest amestec după antrenamentele intense și simt o diferență uriașă. Efectul răcoritor și calmant este exact ce aveam nevoie pentru recuperare.",
      },
      {
        id: "r2",
        author: "Cristina Popovici",
        rating: 4,
        date: "2025-03-25", 
        title: "Ajută la dureri musculare",
        content: "Am început să folosesc Deep Blue după o recomandare și sunt impresionată. Îl folosesc pentru durerile de spate și tensiunea din umeri după o zi lungă la birou.",
      }
    ],
    features: [
      "Amestec brevetat de uleiuri esențiale",
      "Efect răcoritor și calmant",
      "Perfect pentru utilizare după activități fizice",
      "Potrivit pentru masaj",
      "Conține ingrediente naturale de înaltă calitate"
    ],
    stockQuantity: 50,
    sku: "DB5ML",
    video: "/videos/deep-blue-usage.mp4",
    sourcingInfo: "Deep Blue este un amestec complex creat din uleiuri esențiale de cea mai înaltă calitate, inclusiv Wintergreen, Camfor, Mentă, Mușețel German și altele, fiecare selectat pentru proprietățile lor calmante și răcoritoare.",
  },
];

// Mock function to find product by slug
const getProductBySlug = (slug: string) => {
  return products.find(product => product.slug === slug) || products[0];
};

// Mock function to get related products
const getRelatedProducts = (relatedIds: string[]) => {
  return products.filter(product => relatedIds.includes(product.id));
};

// Stars rating component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill={i < rating ? "currentColor" : "none"}
          stroke={i < rating ? "none" : "currentColor"}
          strokeWidth="1.5"
          className={`w-5 h-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
        >
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug as string);
  const relatedProducts = getRelatedProducts(product.relatedProducts);
  
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useAtom(cartAtom);
  const [cartCount, setCartCount] = useAtom(cartCountAtom);
  const [cartTotal, setCartTotal] = useAtom(cartTotalAtom);
  
  const [activeTab, setActiveTab] = useState("description");
  
  const increaseQuantity = () => {
    if (quantity < product.stockQuantity) {
      setQuantity(quantity + 1);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const addToCart = () => {
    const price = product.salePrice || product.price;
    const newItem = {
      id: product.id,
      product: {
        id: product.id,
        name: product.name,
        price: price,
        image: product.image,
      },
      quantity,
      isDigital: false,
    };
    
    // Check if item already in cart
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingItemIndex >= 0) {
      // Update quantity if item exists
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Add new item if it doesn't exist
      setCart([...cart, newItem]);
    }
    
    // Update cart count and total
    setCartCount(cartCount + quantity);
    setCartTotal(cartTotal + (price * quantity));
    
    // Show some feedback (in a real app, you'd use a toast notification)
    alert(`Added ${quantity} ${product.name} to your cart!`);
  };

  // Calculate average rating
  const averageRating = product.reviews?.length 
    ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length 
    : 0;
  
  return (
    <div>
      {/* Navigation breadcrumbs */}
      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">Acasă</Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-primary-600">Magazin</Link>
            <span className="mx-2">/</span>
            <Link href={`/shop/category/${product.categorySlug}`} className="hover:text-primary-600">{product.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Images */}
          <div className="w-full lg:w-2/5">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-md p-6 border overflow-hidden">
                {product.salePrice && (
                  <div className="absolute top-3 left-3 bg-primary-600 text-white font-bold py-1.5 px-4 rounded-full z-10 shadow-sm">
                    -{Math.round((1 - product.salePrice / product.price) * 100)}% OFF
                  </div>
                )}
                <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  {/* Replace with actual product image when available */}
                  <span className="text-gray-400">{product.name}</span>
                </div>
                
                {/* Additional images thumbnail carousel would go here */}
                <div className="grid grid-cols-4 gap-2 mt-4">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="aspect-square bg-gray-100 rounded-md cursor-pointer hover:ring-2 hover:ring-primary-500 transition-all">
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-3/5">
            <div className="mb-2">
              <Link 
                href={`/shop/category/${product.categorySlug}`} 
                className="inline-block px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-semibold hover:bg-primary-100 transition-colors"
              >
                {product.category}
              </Link>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={averageRating} />
              <span className="text-gray-500">
                {product.reviews?.length 
                  ? `${averageRating.toFixed(1)} (${product.reviews.length} recenzii)` 
                  : 'Fără recenzii'}
              </span>
            </div>
            
            <div className="mb-6">
              {product.salePrice ? (
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-primary-600">${product.salePrice.toFixed(2)}</span>
                  <span className="text-xl text-gray-500 line-through">${product.price.toFixed(2)}</span>
                  <span className="bg-primary-600 text-white text-sm font-bold px-2 py-1 rounded">
                    SAVE ${(product.price - product.salePrice).toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <div className="mb-8">
              <p className="text-gray-700">{product.shortDescription}</p>
            </div>
            
            {/* Product features */}
            <div className="mb-8 bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-3">Caracteristici cheie:</h3>
              <ul className="space-y-2">
                {product.features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability & SKU */}
            <div className="mb-6 bg-white p-6 rounded-xl border">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Disponibilitate:</div>
                  {product.stockQuantity > 0 ? (
                    <div className="flex items-center">
                      <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-green-600 font-medium">În Stoc</span>
                      <span className="text-gray-500 ml-1">({product.stockQuantity} disponibile)</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <span className="h-3 w-3 bg-red-500 rounded-full mr-2"></span>
                      <span className="text-red-600 font-medium">Stoc Epuizat</span>
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">SKU:</div>
                  <span className="font-medium">{product.sku}</span>
                </div>
              </div>
            </div>

            {/* Add to cart */}
            <div className="mb-8 bg-white p-6 rounded-xl border">
              <div className="flex flex-col sm:flex-row gap-4 items-center mb-4">
                <div className="flex items-center border-2 rounded-lg overflow-hidden">
                  <button 
                    onClick={decreaseQuantity}
                    className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition-colors"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-3 min-w-14 text-center font-semibold">{quantity}</span>
                  <button 
                    onClick={increaseQuantity}
                    className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition-colors"
                    disabled={quantity >= product.stockQuantity}
                  >
                    +
                  </button>
                </div>
                
                <Button 
                  size="lg" 
                  className="flex-1 bg-primary-600 hover:bg-primary-700 h-14 text-base"
                  onClick={addToCart}
                  disabled={product.stockQuantity <= 0}
                >
                  {product.stockQuantity > 0 ? 'Adaugă în coș' : 'Stoc epuizat'}
                </Button>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="gap-2 flex-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  Adaugă la Favorite
                </Button>
                
                <Button variant="outline" size="sm" className="gap-2 flex-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                  </svg>
                  Distribuie
                </Button>
              </div>
            </div>

            {/* Additional information */}
            <div className="text-sm text-gray-600 space-y-3">
              <div className="flex gap-2 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
                <span>Transport gratuit pentru comenzi peste 300 RON</span>
              </div>
              <div className="flex gap-2 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>Testat pentru puritate și calitate</span>
              </div>
              <div className="flex gap-2 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                <span>Garanție de satisfacție 30 de zile</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <div className="border-b mb-6">
            <div className="flex flex-wrap -mb-px">
              <button
                className={`inline-block pb-3 px-4 font-medium text-lg ${
                  activeTab === "description"
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Descriere
              </button>
              <button
                className={`inline-block pb-3 px-4 font-medium text-lg ${
                  activeTab === "details"
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("details")}
              >
                Detalii suplimentare
              </button>
              <button
                className={`inline-block pb-3 px-4 font-medium text-lg ${
                  activeTab === "reviews"
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Recenzii ({product.reviews?.length || 0})
              </button>
            </div>
          </div>
          
          {/* Description Tab */}
          {activeTab === "description" && (
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: product.description }}></div>
          )}
          
          {/* Details Tab */}
          {activeTab === "details" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl border p-6">
                <h3 className="text-xl font-semibold mb-4">Informații despre produs</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 border-b py-2">
                    <span className="text-gray-600">Volum</span>
                    <span className="font-medium">15ml</span>
                  </div>
                  <div className="grid grid-cols-2 border-b py-2">
                    <span className="text-gray-600">Tip produs</span>
                    <span className="font-medium">{product.category}</span>
                  </div>
                  <div className="grid grid-cols-2 border-b py-2">
                    <span className="text-gray-600">Arome</span>
                    <span className="font-medium">
                      {product.id === "1" ? "Floral, Liniștitor, Echilibrant" : 
                       product.id === "2" ? "Răcoritor, Mentolat, Energizant" :
                       "Mentolat, Răcoritor, Calmant"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 border-b py-2">
                    <span className="text-gray-600">Beneficii principale</span>
                    <span className="font-medium">
                      {product.id === "1" ? "Relaxare, Somn, Calmant" : 
                       product.id === "2" ? "Energie, Concentrare, Răcorire" :
                       "Comfort muscular, Răcorire"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 border-b py-2">
                    <span className="text-gray-600">Metode de utilizare</span>
                    <span className="font-medium">
                      {product.id === "4" ? "Topică, Masaj" : "Aromatică, Topică, Internă*"}
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-primary-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary-900">Originea produsului</h3>
                  <p className="text-gray-700 mb-4">{product.sourcingInfo}</p>
                  <div className="aspect-video bg-gray-200 rounded-lg">
                    {/* Video placeholder */}
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 text-green-800">Sustenabilitate</h3>
                  <p className="text-gray-700">
                    Prin modelul nostru de Co-Impact Sourcing, asigurăm practici sustenabile în toate fazele de producție, sprijinind comunitățile locale și protejând mediul înconjurător.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* Reviews Tab */}
          {activeTab === "reviews" && (
            <div>
              <div className="bg-white rounded-xl border p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 border-r p-4">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-primary-700 mb-2">{averageRating.toFixed(1)}</div>
                      <div className="flex justify-center mb-4">
                        <StarRating rating={averageRating} />
                      </div>
                      <p className="text-gray-500">Bazat pe {product.reviews?.length || 0} recenzii</p>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold mb-4">Adaugă o recenzie</h3>
                    <p className="text-gray-600 mb-4">Împărtășește-ți experiența cu acest produs.</p>
                    <Button>Scrie o recenzie</Button>
                  </div>
                </div>
              </div>
              
              {product.reviews?.length > 0 ? (
                <div className="space-y-6">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-xl border p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="font-semibold mb-1">{review.title}</div>
                          <div className="flex items-center">
                            <StarRating rating={review.rating} />
                            <span className="ml-2 text-gray-500 text-sm">{review.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                            <span className="text-gray-500 font-medium">{review.author.charAt(0)}</span>
                          </div>
                          <div className="text-sm font-medium">{review.author}</div>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.content}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">Nicio recenzie momentan. Fii primul care împărtășește experiența cu acest produs!</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Produse similare</h2>
            <Link href="/shop" className="text-primary-600 hover:underline font-medium">
              Vezi toate →
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group">
                <Link href={`/shop/product/${relatedProduct.slug}`} className="block">
                  <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center mb-3 overflow-hidden relative">
                    {/* Replace with actual product image when available */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400 text-xs">{relatedProduct.name}</span>
                    </div>
                    
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-primary-600 text-white text-center py-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      Vezi produs
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500 mb-1">{relatedProduct.category}</div>
                  <h3 className="font-medium mb-1 group-hover:text-primary-600 transition-colors line-clamp-1">
                    {relatedProduct.name}
                  </h3>
                  <div className="font-semibold">${relatedProduct.price.toFixed(2)}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}