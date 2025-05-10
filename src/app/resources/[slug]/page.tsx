"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useAtom } from "jotai";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { cartAtom, cartCountAtom, cartTotalAtom } from "@/store/cart";

// Mock data for the MVP
const resources = [
  {
    id: "1",
    title: "Essential Oil Beginner's Guide",
    slug: "essential-oil-beginners-guide",
    image: "/images/beginners-guide.jpg",
    description: "A comprehensive guide for those new to essential oils. Learn the basics of essential oils, how to use them safely, and which oils are best for beginners.",
    longDescription: `
      <p>Are you new to essential oils and feeling overwhelmed? This comprehensive beginner's guide is designed to give you all the information you need to start your essential oil journey with confidence.</p>

      <p>In this 35-page illustrated guide, you'll discover:</p>
      
      <ul>
        <li>What essential oils are and how they're made</li>
        <li>The science behind how essential oils work in the body</li>
        <li>Safe usage guidelines for different applications</li>
        <li>The top 10 essential oils every beginner should have</li>
        <li>Simple recipes and blends for everyday use</li>
        <li>How to address common wellness concerns with essential oils</li>
        <li>Tips for storing and caring for your oils</li>
      </ul>

      <p>Whether you're completely new to essential oils or looking to expand your knowledge, this guide provides clear, evidence-based information in an easy-to-understand format.</p>

      <p>Perfect for personal use or to share with clients who are just beginning their essential oil journey.</p>
    `,
    price: 9.99,
    normalPrice: 12.99,
    discount: 23,
    type: "Ebook",
    fileType: "PDF",
    fileSize: "2.4 MB",
    pages: 35,
    category: "Educational",
    relatedResources: ["4", "7", "2"],
    sampleContent: "Chapter 1: Introduction to Essential Oils\n\nEssential oils are natural aromatic compounds found in the seeds, bark, stems, roots, flowers, and other parts of plants. They can be both beautifully and powerfully fragrant...",
    features: [
      "35 pages of detailed content",
      "Step-by-step instructions",
      "Beautifully illustrated guides",
      "Printable reference sheets",
      "Safety guidelines for beginners"
    ],
    testimonials: [
      {
        name: "Maria Popescu",
        role: "Wellness Advocate",
        content: "Acest ghid a fost perfect pentru a-mi ajuta clienții să înțeleagă mai bine uleiurile esențiale. Foarte bine organizat și ușor de înțeles.",
        rating: 5
      },
      {
        name: "Alexandru Mihai",
        role: "Începător în aromaterapie",
        content: "Ca începător, acest ghid mi-a oferit exact informațiile de care aveam nevoie. Acum folosesc uleiurile cu încredere!",
        rating: 5
      }
    ],
    language: "Română",
    lastUpdated: "2025-03-15",
    author: "Dr. Elena Marinescu"
  },
  {
    id: "2",
    title: "Essential Oils for Everyday Use",
    slug: "essential-oils-everyday-use",
    image: "/images/everyday-use.jpg",
    description: "Discover how to incorporate essential oils into your daily routine. This presentation covers home, health, and wellness applications for the most popular oils.",
    longDescription: `
      <p>Transform your daily routine with the power of essential oils! This comprehensive presentation is designed to help you incorporate essential oils into every aspect of your life.</p>

      <p>This 45-slide presentation includes:</p>
      
      <ul>
        <li>Morning routines for energy and focus</li>
        <li>Workplace applications for productivity and mood support</li>
        <li>Kitchen uses for cleaning and cooking</li>
        <li>Bathroom applications for personal care</li>
        <li>Evening routines for relaxation and better sleep</li>
        <li>Seasonal protocols for year-round wellness</li>
        <li>DIY recipes for home, body, and mind</li>
      </ul>

      <p>Each slide contains beautiful visuals and clear instructions, making it easy to understand and implement. The presentation comes in both PowerPoint format (which you can customize for your own classes) and PDF format for easy viewing.</p>

      <p>Whether you're using this for personal reference or as a teaching tool, this presentation will help make essential oils an integral part of your everyday life.</p>
    `,
    price: 12.99,
    normalPrice: 14.99,
    discount: 13,
    type: "Presentation",
    fileType: "PPTX, PDF",
    fileSize: "8.2 MB",
    slides: 45,
    category: "Educational",
    relatedResources: ["1", "5", "6"],
    sampleContent: "Slide 10: Morning Routines\n\nStart your day with energy and focus using these simple essential oil applications:\n- Diffuse 3 drops Peppermint + 2 drops Wild Orange for an energizing atmosphere...",
    features: [
      "45 fully editable slides",
      "Both PowerPoint and PDF formats included",
      "Beautiful high-resolution graphics",
      "Speaker notes for presentations",
      "Ready-to-use content for classes"
    ],
    testimonials: [
      {
        name: "Gabriela Dumitrescu",
        role: "Wellness Coach",
        content: "Această prezentare este perfectă pentru clasele mele! Sliderile sunt frumoase și conținutul este excelent.",
        rating: 5
      },
      {
        name: "Mihai Popovici",
        role: "Wellness Advocate",
        content: "Am folosit această prezentare la un eveniment și a fost foarte apreciată. Formatul este profesionist și ușor de adaptat.",
        rating: 4
      }
    ],
    language: "Română și Engleză",
    lastUpdated: "2025-02-10",
    author: "Centrul de Educație doTERRA"
  },
  {
    id: "3",
    title: "Business Building Toolkit",
    slug: "business-building-toolkit",
    image: "/images/business-toolkit.jpg",
    description: "Everything you need to start or grow your doTERRA wellness advocacy business. Includes marketing materials, client tracking tools, and business planning templates.",
    longDescription: `
      <p>Take your doTERRA business to the next level with this comprehensive Business Building Toolkit! Whether you're just starting out or looking to grow your existing team, this toolkit provides all the resources you need to succeed as a wellness advocate.</p>

      <p>This toolkit includes:</p>
      
      <ul>
        <li>Business Planning Templates
          <ul>
            <li>90-Day Action Planner</li>
            <li>Income Goal Calculator</li>
            <li>Rank Achievement Strategy Guide</li>
          </ul>
        </li>
        <li>Client Management Tools
          <ul>
            <li>Customer Database Template</li>
            <li>Follow-up System</li>
            <li>Wellness Consultation Forms</li>
          </ul>
        </li>
        <li>Marketing Materials
          <ul>
            <li>Social Media Templates</li>
            <li>Email Scripts</li>
            <li>Class Invitation Designs</li>
          </ul>
        </li>
        <li>Team Building Resources
          <ul>
            <li>Team Member Onboarding Guide</li>
            <li>Training Checklist</li>
            <li>Leadership Development Plan</li>
          </ul>
        </li>
      </ul>

      <p>All templates are fully customizable and professionally designed. This toolkit comes as a ZIP file containing PDF, Word, Excel, and image files, allowing you to edit and use them according to your needs.</p>

      <p>Invest in your business today and save countless hours with these ready-to-use resources!</p>
    `,
    price: 24.99,
    normalPrice: 34.99,
    discount: 29,
    type: "Business Resource",
    fileType: "ZIP (PDF, DOCX, XLSX)",
    fileSize: "15.6 MB",
    category: "Business",
    relatedResources: ["5", "8"],
    sampleContent: "90-Day Action Planner Excerpt:\n\nWeek 1: Foundation Building\n- Schedule 5 one-on-one wellness consultations\n- Host your first oil sharing class\n- Create your 'Why' statement...",
    features: [
      "25+ editable business templates",
      "Social media graphics pack (50+ images)",
      "Email marketing sequence templates",
      "Business tracking spreadsheets",
      "Team development resources"
    ],
    testimonials: [
      {
        name: "Alexandra Popa",
        role: "Diamond Wellness Advocate",
        content: "Acest toolkit mi-a economisit sute de ore de muncă! Materialele sunt profesionale și ușor de personalizat pentru business-ul meu.",
        rating: 5
      },
      {
        name: "Radu Ionescu",
        role: "Silver Wellness Advocate",
        content: "Ca nou în business-ul doTERRA, acest toolkit mi-a oferit exact ce aveam nevoie pentru a începe în forță. Recomand cu toată inima!",
        rating: 5
      }
    ],
    language: "Română",
    lastUpdated: "2025-04-01",
    author: "Echipa Business doTERRA Romania"
  },
  {
    id: "4",
    title: "Essential Oil Safety Guide",
    slug: "essential-oil-safety-guide",
    image: "/images/safety-guide.jpg",
    description: "A must-have guide to using essential oils safely. Learn proper dilution ratios, application methods, and precautions for different populations.",
    longDescription: `
      <p>Safety should always be the top priority when using essential oils. This comprehensive guide ensures you have all the information you need to use essential oils confidently and safely for yourself and your loved ones.</p>

      <p>In this detailed 28-page guide, you'll learn:</p>
      
      <ul>
        <li>Proper dilution guidelines for different age groups</li>
        <li>Application methods and their safety considerations</li>
        <li>Special precautions for pregnant women, children, and seniors</li>
        <li>Essential oils to avoid in certain conditions</li>
        <li>Potential drug interactions to be aware of</li>
        <li>Photosensitivity and other specific concerns</li>
        <li>First aid for essential oil accidents</li>
        <li>Safe storage practices</li>
      </ul>

      <p>This guide includes easy-to-reference charts, including a dilution ratio table and a quick-reference list of oils that require special caution. All information is evidence-based and aligned with current safety guidelines from aromatherapy organizations.</p>

      <p>An essential resource for anyone using essential oils for family care!</p>
    `,
    price: 7.99,
    normalPrice: 9.99,
    discount: 20,
    type: "Ebook",
    fileType: "PDF",
    fileSize: "1.8 MB",
    pages: 28,
    category: "Educational",
    relatedResources: ["1", "7"],
    features: [
      "28 pages of safety information",
      "Printable reference charts",
      "Age-specific guidelines",
      "Special populations sections",
      "Emergency protocols"
    ],
    testimonials: [
      {
        name: "Diana Florescu",
        role: "Mamă și Wellness Advocate",
        content: "Ca părinte, acest ghid mi-a dat încrederea de a folosi uleiurile în siguranță pentru întreaga familie. Informațiile sunt clare și practice.",
        rating: 5
      }
    ],
    language: "Română",
    lastUpdated: "2025-01-20",
    author: "Consiliul de Siguranță doTERRA"
  },
  {
    id: "7",
    title: "Essential Oil Blending Guide",
    slug: "essential-oil-blending-guide",
    image: "/images/blending-guide.jpg",
    description: "Master the art of blending essential oils with this comprehensive guide. Includes blending principles, ratios, and recipe templates.",
    longDescription: `
      <p>Unlock the art and science of creating perfect essential oil blends! This comprehensive guide will teach you how to combine oils for specific purposes and create harmonious aromatic compositions.</p>

      <p>In this 42-page illustrated guide, you'll discover:</p>
      
      <ul>
        <li>The fundamentals of aromatherapy blending</li>
        <li>Note classifications (top, middle, base) and their importance</li>
        <li>Blending by botanical families</li>
        <li>The psychology of scent and emotional blending</li>
        <li>Therapeutic blending for physical concerns</li>
        <li>Proper dilution ratios for different applications</li>
        <li>30+ starter recipes for various wellness needs</li>
        <li>Blank templates for creating your own custom blends</li>
      </ul>

      <p>This guide includes beautiful charts, worksheets, and reference tables to help you create balanced, effective blends. You'll learn professional techniques that aromatherapists use to create signature blends.</p>

      <p>Whether you're blending for personal use, gifts, or developing products, this guide will elevate your blending skills from beginner to advanced.</p>
    `,
    price: 11.99,
    normalPrice: 14.99,
    discount: 20,
    type: "Ebook",
    fileType: "PDF",
    fileSize: "3.2 MB",
    pages: 42,
    category: "Educational",
    relatedResources: ["1", "4", "6"],
    features: [
      "42 beautifully designed pages",
      "30+ blend recipes included",
      "Printable worksheets",
      "Reference charts for note categories",
      "Blending calculator templates"
    ],
    testimonials: [
      {
        name: "Ioana Mureșan",
        role: "Aromaterapist Certificat",
        content: "Chiar și ca aromaterapist cu experiență, am găsit informații valoroase în acest ghid. Graficele și tabelele sunt extrem de utile!",
        rating: 5
      }
    ],
    language: "Română",
    lastUpdated: "2025-02-28",
    author: "Ana Maria Constantinescu, Aromaterapist"
  },
];

// Mock function to find resource by slug
const getResourceBySlug = (slug: string) => {
  return resources.find(resource => resource.slug === slug) || resources[0];
};

// Mock function to get related resources
const getRelatedResources = (relatedIds: string[]) => {
  return resources.filter(resource => relatedIds.includes(resource.id));
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

export default function ResourceDetailPage() {
  const { slug } = useParams();
  const resource = getResourceBySlug(slug as string);
  const relatedResources = getRelatedResources(resource.relatedResources || []);
  
  const [cart, setCart] = useAtom(cartAtom);
  const [cartCount, setCartCount] = useAtom(cartCountAtom);
  const [cartTotal, setCartTotal] = useAtom(cartTotalAtom);
  
  const [activeTab, setActiveTab] = useState("description");
  
  const addToCart = () => {
    const newItem = {
      id: resource.id,
      product: {
        id: resource.id,
        name: resource.title,
        price: resource.price,
        image: resource.image,
      },
      quantity: 1,
      isDigital: true,
    };
    
    // Check if item already in cart
    const existingItemIndex = cart.findIndex(item => item.id === resource.id);
    
    if (existingItemIndex >= 0) {
      // Item already in cart
      alert("This resource is already in your cart!");
      return;
    } else {
      // Add new item if it doesn't exist
      setCart([...cart, newItem]);
    }
    
    // Update cart count and total
    setCartCount(cartCount + 1);
    setCartTotal(cartTotal + resource.price);
    
    // Show some feedback (in a real app, you'd use a toast notification)
    alert(`Added ${resource.title} to your cart!`);
  };

  return (
    <div>
      {/* Navigation breadcrumbs */}
      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">Acasă</Link>
            <span className="mx-2">/</span>
            <Link href="/resources" className="hover:text-primary-600">Resurse</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{resource.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Resource Image */}
          <div className="w-full lg:w-2/5">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-md p-6 border overflow-hidden">
                {resource.discount && (
                  <div className="absolute top-3 left-3 bg-primary-600 text-white font-bold py-1.5 px-4 rounded-full z-10 shadow-sm">
                    -{resource.discount}% OFF
                  </div>
                )}
                <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                  {/* Replace with actual resource image when available */}
                  <span className="text-gray-400">{resource.title}</span>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <h3 className="font-semibold mb-3 text-gray-800">Preview de conținut:</h3>
                  <div className="bg-white border rounded-lg p-3 text-sm text-gray-700 font-mono h-32 overflow-auto">
                    {resource.sampleContent}
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm border-b pb-2">
                    <span className="text-gray-500">Format:</span>
                    <span className="font-medium">{resource.fileType}</span>
                  </div>
                  <div className="flex justify-between text-sm border-b pb-2">
                    <span className="text-gray-500">Dimensiune:</span>
                    <span className="font-medium">{resource.fileSize}</span>
                  </div>
                  {resource.pages && (
                    <div className="flex justify-between text-sm border-b pb-2">
                      <span className="text-gray-500">Pagini:</span>
                      <span className="font-medium">{resource.pages}</span>
                    </div>
                  )}
                  {resource.slides && (
                    <div className="flex justify-between text-sm border-b pb-2">
                      <span className="text-gray-500">Slide-uri:</span>
                      <span className="font-medium">{resource.slides}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm border-b pb-2">
                    <span className="text-gray-500">Limba:</span>
                    <span className="font-medium">{resource.language}</span>
                  </div>
                  <div className="flex justify-between text-sm border-b pb-2">
                    <span className="text-gray-500">Actualizat:</span>
                    <span className="font-medium">{resource.lastUpdated}</span>
                  </div>
                  <div className="flex justify-between text-sm border-b pb-2">
                    <span className="text-gray-500">Autor:</span>
                    <span className="font-medium">{resource.author}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resource Info */}
          <div className="w-full lg:w-3/5">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-semibold">
                {resource.type}
              </span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">{resource.title}</h1>
            
            <div className="mb-6">
              {resource.normalPrice ? (
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-primary-600">${resource.price.toFixed(2)}</span>
                  <span className="text-xl text-gray-500 line-through">${resource.normalPrice.toFixed(2)}</span>
                  <span className="bg-primary-600 text-white text-sm font-bold px-2 py-1 rounded">
                    SAVE ${(resource.normalPrice - resource.price).toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-gray-800">${resource.price.toFixed(2)}</span>
              )}
            </div>
            
            <div className="mb-8">
              <p className="text-gray-700">{resource.description}</p>
            </div>
            
            {/* Resource features */}
            <div className="mb-8 bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-3">Caracteristici cheie:</h3>
              <ul className="space-y-2">
                {resource.features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to cart */}
            <div className="mb-8 bg-white p-6 rounded-xl border">
              <div className="flex flex-col gap-4">
                <Button 
                  size="lg" 
                  className="w-full bg-primary-600 hover:bg-primary-700 h-14 text-base"
                  onClick={addToCart}
                >
                  Adaugă în coș
                </Button>
                
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
            </div>

            {/* Additional information */}
            <div className="text-sm text-gray-600 space-y-3">
              <div className="flex gap-2 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span>Descărcare instantă după cumpărare</span>
              </div>
              <div className="flex gap-2 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>Resurse de calitate, create profesional</span>
              </div>
              <div className="flex gap-2 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
                <span>Acces permanent în contul tău după cumpărare</span>
              </div>
            </div>
            
            {/* Testimonials */}
            {resource.testimonials && resource.testimonials.length > 0 && (
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Ce spun clienții noștri</h3>
                <div className="grid gap-4">
                  {resource.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-5 rounded-xl border">
                      <div className="flex justify-between mb-3">
                        <div>
                          <StarRating rating={testimonial.rating} />
                        </div>
                        <div className="flex items-center">
                          <div className="text-sm font-medium">{testimonial.name}</div>
                          <span className="mx-2 text-gray-300">|</span>
                          <div className="text-xs text-gray-500">{testimonial.role}</div>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.content}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Resource Description */}
        <div className="mt-16">
          <div className="border-b mb-6">
            <div className="inline-block border-b-2 border-primary-600 pb-2 font-semibold text-xl">
              Descriere
            </div>
          </div>
          
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: resource.longDescription }}></div>
        </div>

        {/* Related Resources */}
        {relatedResources.length > 0 && (
          <div className="mt-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Resurse similare</h2>
              <Link href="/resources" className="text-primary-600 hover:underline font-medium">
                Vezi toate →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedResources.map((relatedResource) => (
                <Card key={relatedResource.id} className="group overflow-hidden transition-all duration-300 hover:shadow-md border">
                  <div className="aspect-video relative bg-gray-100">
                    {/* Replace with actual resource images when available */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400">{relatedResource.title}</span>
                    </div>
                    {relatedResource.normalPrice && (
                      <div className="absolute top-2 left-2 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        -{relatedResource.discount}%
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-primary-600 text-white text-center py-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      Vezi detalii
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="text-sm text-primary-600 mb-1">{relatedResource.type}</div>
                    <h3 className="font-medium text-lg mb-2 line-clamp-1">
                      <Link href={`/resources/${relatedResource.slug}`} className="hover:text-primary-600 transition-colors">
                        {relatedResource.title}
                      </Link>
                    </h3>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        {relatedResource.normalPrice ? (
                          <>
                            <span className="font-semibold">${relatedResource.price}</span>
                            <span className="text-sm text-gray-500 line-through">${relatedResource.normalPrice}</span>
                          </>
                        ) : (
                          <span className="font-semibold">${relatedResource.price}</span>
                        )}
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/resources/${relatedResource.slug}`}>Vezi</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
