import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

// Mock data for the MVP
const featuredProducts = [
  {
    id: "1",
    name: "Lavender Essential Oil",
    slug: "lavender-essential-oil",
    price: 28.00,
    image: "/images/lavender.jpg",
    category: "Single Oils",
  },
  {
    id: "2",
    name: "Peppermint Essential Oil",
    slug: "peppermint-essential-oil",
    price: 27.33,
    image: "/images/peppermint.jpg",
    category: "Single Oils",
  },
  {
    id: "3",
    name: "Lemon Essential Oil",
    slug: "lemon-essential-oil",
    price: 13.33,
    image: "/images/lemon.jpg",
    category: "Single Oils",
  },
  {
    id: "4",
    name: "Deep Blue Blend",
    slug: "deep-blue-blend",
    price: 42.67,
    image: "/images/deep-blue.jpg",
    category: "Blends",
  },
  {
    id: "5",
    name: "Petal Diffuser",
    slug: "petal-diffuser",
    price: 62.67,
    image: "/images/petal-diffuser.jpg",
    category: "Diffusers",
  },
  {
    id: "6",
    name: "Home Essentials Kit",
    slug: "home-essentials-kit",
    price: 249.33,
    image: "/images/home-kit.jpg",
    category: "Kits",
  },
];

// Current promotions
const currentPromotions = [
  {
    id: "promo1",
    title: "Primăvara Revigorantă",
    description: "Pachet special cu uleiuri ideale pentru sezonul de primăvară. Cumpără 3 uleiuri și primești 1 GRATUIT!",
    image: "/images/spring-promo.jpg",
    discount: "25%",
    code: "PRIMAVARA25",
    expiryDate: "31 Mai 2025",
    bgColor: "from-emerald-50 to-emerald-100",
    textColor: "emerald-700",
    accentColor: "emerald-600",
  },
  {
    id: "promo2",
    title: "Pachet Wellness Complet",
    description: "Set complet de uleiuri esențiale pentru întreaga familie, cu 30% reducere și transport gratuit.",
    image: "/images/family-wellness.jpg",
    discount: "30%",
    code: "FAMILY30",
    expiryDate: "15 Mai 2025",
    bgColor: "from-blue-50 to-blue-100",
    textColor: "blue-700",
    accentColor: "blue-600",
  },
  {
    id: "promo3",
    title: "Ofertă Difuzor + Uleiuri",
    description: "La achiziționarea oricărui difuzor, primești un set de 3 uleiuri esențiale la jumătate de preț.",
    image: "/images/diffuser-bundle.jpg",
    discount: "50%",
    code: "DIFUZOR50",
    expiryDate: "20 Mai 2025",
    bgColor: "from-purple-50 to-purple-100",
    textColor: "purple-700",
    accentColor: "purple-600",
  },
];

// Product of the month
const productOfMonth = {
  id: "pom1",
  name: "Bergamot Essential Oil",
  slug: "bergamot-essential-oil",
  normalPrice: 39.99,
  discountPrice: 29.99,
  image: "/images/bergamot.jpg",
  description: "Bergamota este un ulei citric cu proprietăți calmante și purificatoare. Acest ulei de înaltă calitate este perfect pentru a crea o atmosferă liniștitoare și pentru a susține starea de bine emoțională.",
  benefits: [
    "Aromaterapie calmantă",
    "Sprijină starea de bine emoțională",
    "Proprietăți purificatoare pentru piele",
    "Parfum revigorant pentru casă"
  ],
  discount: "25% REDUCERE",
  badge: "Produsul Lunii Mai",
};

// Online classes and events
const onlineClasses = [
  {
    id: "class1",
    title: "Introducere în Uleiurile Esențiale",
    date: "15 Mai 2025",
    time: "18:00 - 19:30",
    host: "Maria Popescu",
    type: "Începători",
    description: "Învață bazele uleiurilor esențiale și cum să le folosești în viața de zi cu zi.",
    image: "/images/intro-class.jpg",
  },
  {
    id: "class2",
    title: "Uleiuri Pentru Copii și Familie",
    date: "22 Mai 2025",
    time: "17:30 - 19:00",
    host: "Elena Ionescu",
    type: "Familie",
    description: "Descoperă utilizări sigure și eficiente ale uleiurilor esențiale pentru întreaga familie.",
    image: "/images/family-class.jpg",
  },
  {
    id: "class3",
    title: "Construiește-ți Afacerea cu doTERRA",
    date: "29 Mai 2025",
    time: "19:00 - 20:30",
    host: "Alexandru Marin",
    type: "Business",
    description: "Strategii de succes pentru a construi un business sustenabil ca Wellness Advocate.",
    image: "/images/business-class.jpg",
  },
];

// Information resources
const infoResources = [
  {
    id: "info1",
    title: "Ghid de Utilizare a Uleiurilor",
    description: "Află cum să folosești uleiurile esențiale în mod sigur și eficient.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    id: "info2",
    title: "Beneficiile Aromaterapiei",
    description: "Explorează cum aromaterapia poate îmbunătăți starea ta de bine.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    id: "info3",
    title: "Rețete și Amestecuri DIY",
    description: "Idei creative pentru a folosi uleiurile esențiale în casă și produse personale.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    id: "info4",
    title: "Studii Științifice",
    description: "Cercetări și studii despre eficacitatea uleiurilor esențiale.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.306 48.306 0 0 1-8.135-1.587c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
];

// Categories for quick navigation
const quickCategories = [
  {
    name: "Uleiuri Singulare",
    slug: "essential-oils",
    image: "/images/single-oils.jpg",
  },
  {
    name: "Amestecuri",
    slug: "blends",
    image: "/images/blends.jpg",
  },
  {
    name: "Difuzoare",
    slug: "diffusers",
    image: "/images/diffusers.jpg",
  },
  {
    name: "Seturi",
    slug: "kits",
    image: "/images/kits.jpg",
  },
];

export default function Home() {
  return (
    <div>
      {/* Announcement Banner */}
      <div className="bg-primary-600 text-white py-2 px-4 text-center text-sm">
        <p>
          Transport gratuit pentru comenzi de peste 350 RON | Folosește codul <span className="font-bold">MAI2025</span> pentru 10% reducere
        </p>
      </div>

      {/* Hero section */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start max-w-4xl mx-auto lg:mx-0">
            <span className="text-white/80 text-sm uppercase tracking-widest mb-3 font-medium">Descoperă lumea aromelor naturale</span>
            <h1 className="text-4xl lg:text-6xl text-white font-bold leading-tight mb-6">
              Transformă-ți Viața<br />Cu Uleiuri <span className="text-primary-200">Esențiale</span> Pure
            </h1>
            <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-2xl">
              Experimentează puterea naturii cu uleiurile esențiale doTERRA 
              pentru casa, corpul și mintea ta.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-white/90 font-semibold px-8" asChild>
                <Link href="/shop">Magazin Online</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <Link href="/resources">Resurse Gratuite</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Promotions Carousel */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Promoții Speciale</h2>
              <p className="text-gray-600">Oferte limitate pentru luna în curs</p>
            </div>
            <Button variant="ghost" className="text-primary-600 font-medium" asChild>
              <Link href="/promotions">Vezi toate promoțiile</Link>
            </Button>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent>
              {currentPromotions.map((promo) => (
                <CarouselItem key={promo.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className={`rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg bg-gradient-to-r ${promo.bgColor} h-full border border-${promo.accentColor}/10`}>
                    <div className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <span className={`inline-block text-${promo.textColor} bg-${promo.accentColor}/10 rounded-full px-3 py-1 text-sm font-medium`}>
                          {promo.code} | Expiră: {promo.expiryDate}
                        </span>
                      </div>
                      <h3 className={`text-2xl font-bold mb-2 text-${promo.textColor}`}>{promo.title}</h3>
                      <p className="text-gray-700 mb-4 flex-grow">{promo.description}</p>
                      <div className="flex justify-between items-center">
                        <span className={`text-${promo.accentColor} font-bold text-xl`}>{promo.discount} OFF</span>
                        <Button size="sm" className={`bg-${promo.accentColor} hover:bg-${promo.accentColor}/90`} asChild>
                          <Link href={`/shop?promo=${promo.code}`}>Profită acum</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 -translate-x-1/2" />
            <CarouselNext className="absolute right-0 translate-x-1/2" />
          </Carousel>
        </div>
      </section>
      
      {/* Quick Category Access */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Explorează Categoriile Noastre</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {quickCategories.map((category, index) => (
              <Link 
                key={index} 
                href={`/shop/category/${category.slug}`}
                className="group relative rounded-xl overflow-hidden h-40 lg:h-60"
              >
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/40 transition-all duration-300 z-10"></div>
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  {/* Replace with actual category images when available */}
                  <span className="text-gray-400 text-xs">Image: {category.name}</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-bold mb-2 drop-shadow-md">{category.name}</h3>
                    <span className="bg-white/90 text-primary-700 px-4 py-1.5 rounded-full text-sm font-medium inline-block 
                      opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Descoperă
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product of the Month */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-primary-100/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
            <div className="w-full md:w-1/2 lg:w-2/5">
              <div className="relative">
                <div className="absolute -top-3 -left-3 bg-primary-600 text-white font-bold py-1 px-3 rounded-lg z-10 shadow-md">
                  {productOfMonth.badge}
                </div>
                <div className="rounded-2xl bg-white shadow-lg p-8 relative">
                  <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                    {/* Replace with actual product image when available */}
                    <span className="text-gray-400">{productOfMonth.name}</span>
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-primary-600 text-white font-bold py-1.5 px-4 rounded-full transform rotate-12 shadow-md">
                    {productOfMonth.discount}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 lg:w-3/5">
              <div className="mb-2">
                <span className="bg-primary-600/10 text-primary-700 rounded-full px-3 py-1 text-sm font-semibold inline-block">
                  Produsul Lunii Mai
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">{productOfMonth.name}</h2>
              
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold text-primary-600">${productOfMonth.discountPrice}</span>
                <span className="text-xl text-gray-500 line-through">${productOfMonth.normalPrice}</span>
                <span className="bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">-25%</span>
              </div>
              
              <p className="text-gray-700 mb-6">
                {productOfMonth.description}
              </p>
              
              <div className="mb-8">
                <h3 className="font-semibold mb-3">Beneficii:</h3>
                <ul className="space-y-2">
                  {productOfMonth.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-primary-600 hover:bg-primary-700" asChild>
                  <Link href={`/shop/product/${productOfMonth.slug}`}>Adaugă în coș</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50" asChild>
                  <Link href={`/shop/product/${productOfMonth.slug}`}>Vezi detalii</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Produse Populare</h2>
              <p className="text-gray-600">
                Uleiuri esențiale și produse wellness preferate de clienții noștri
              </p>
            </div>
            <Link href="/shop" className="text-primary hover:underline font-medium hidden sm:block">
              Vezi toate produsele →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <Link href={`/shop/product/${product.slug}`} className="block">
                  <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center mb-3 overflow-hidden relative">
                    {/* Replace with actual product image when available */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400 text-xs">{product.name}</span>
                    </div>
                    
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-primary-600 text-white text-center py-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      Vezi produs
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500 mb-1">{product.category}</div>
                  <h3 className="font-medium mb-1 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="font-semibold">${product.price.toFixed(2)}</div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:hidden">
            <Button variant="outline" asChild>
              <Link href="/shop">Vezi toate produsele</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Information Resources */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100/70">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Resurse Informative</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descoperă ghiduri și resurse valoroase pentru a învăța mai multe despre uleiurile esențiale și beneficiile lor
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoResources.map((resource) => (
              <Link 
                key={resource.id} 
                href={`/resources/${resource.id}`}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 text-primary-600">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <span className="text-primary-600 font-medium mt-auto">Citește mai mult →</span>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/resources">Descoperă toate resursele</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Online Classes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Clase Online</h2>
              <p className="text-gray-600">
                Participă la cursurile noastre online și învață direct de la experți
              </p>
            </div>
            <Link href="/classes" className="text-primary hover:underline font-medium hidden sm:block">
              Vezi toate clasele →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {onlineClasses.map((cls) => (
              <div key={cls.id} className="border border-gray-200 rounded-xl overflow-hidden group hover:shadow-md transition-shadow">
                <div className="relative">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    {/* Replace with actual class image when available */}
                    <span className="text-gray-400 text-xs">{cls.title}</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
                    {cls.type}
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center text-gray-500 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v7.5" />
                      </svg>
                      {cls.date}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      {cls.time}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">{cls.title}</h3>
                  <p className="text-gray-700 mb-4">{cls.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0 mr-2"></div>
                      <span className="text-sm font-medium">{cls.host}</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/classes/${cls.id}`}>Înscrie-te</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10 sm:hidden">
            <Button variant="outline" asChild>
              <Link href="/classes">Vezi toate clasele</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-16 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              De Ce Să Alegi doTERRA
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Angajamentul nostru față de calitate și puritate ne diferențiază în industria uleiurilor esențiale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl">
              <div className="bg-primary-600/40 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.306 48.306 0 0 1-8.135-1.587c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Calitate Certificată</h3>
              <p className="text-white/80">
                Fiecare lot de uleiuri esențiale doTERRA este supus unor teste riguroase pentru a asigura puritatea, potența și consistența.
              </p>
            </div>

            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl">
              <div className="bg-primary-600/40 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Co-Impact Sourcing</h3>
              <p className="text-white/80">
                Modelul nostru de aprovizionare construiește parteneriate sustenabile cu cultivatori din întreaga lume, asigurând tratament echitabil și uleiuri de calitate.
              </p>
            </div>

            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl">
              <div className="bg-primary-600/40 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Educație pentru Wellness</h3>
              <p className="text-white/80">
                Oferim resurse educaționale cuprinzătoare pentru a te ajuta să integrezi uleiurile esențiale în rutina ta de wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              Ce Spun Clienții Noștri
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Citește testimoniale de la comunitatea noastră de wellness advocates și clienți.
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              <CarouselItem className="md:basis-1/1 lg:basis-1/1">
                <div className="p-6 md:p-10 bg-white rounded-xl shadow-sm border text-center">
                  <div className="mb-6">
                    <svg className="w-12 h-12 text-primary-300 mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.332.303-.706.814-1.416 1.534-2.13l.013-.013-1.45-1.42c-.78.81-1.416 1.76-1.9 2.86C5.818 10.777 5.57 12.006 5.57 13.5c0 1.265.305 2.288.913 3.07.607.782 1.438 1.172 2.49 1.172.997 0 1.788-.26 2.366-.78.577-.52.866-1.195.866-2.023l-.013-.084zm7.425 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.812-.56-.137-1.067-.146-1.54-.028-.16-.95.09-1.626.41-2.332.31-.706.814-1.416 1.534-2.13l.013-.013-1.456-1.42c-.79.81-1.426 1.76-1.9 2.86-.595 1.194-.842 2.42-.842 3.916 0 1.265.305 2.288.913 3.07.608.782 1.438 1.172 2.49 1.172.997 0 1.788-.26 2.366-.78.578-.52.866-1.195.866-2.023l-.013-.084z"/>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Folosesc uleiurile doTERRA de peste 5 ani și au transformat complet rutina de wellness a familiei mele. Calitatea și puritatea sunt incomparabile!
                  </p>
                  <div>
                    <h4 className="font-semibold">Maria Ionescu</h4>
                    <p className="text-gray-500">Wellness Advocate</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/1 lg:basis-1/1">
                <div className="p-6 md:p-10 bg-white rounded-xl shadow-sm border text-center">
                  <div className="mb-6">
                    <svg className="w-12 h-12 text-primary-300 mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.332.303-.706.814-1.416 1.534-2.13l.013-.013-1.45-1.42c-.78.81-1.416 1.76-1.9 2.86C5.818 10.777 5.57 12.006 5.57 13.5c0 1.265.305 2.288.913 3.07.607.782 1.438 1.172 2.49 1.172.997 0 1.788-.26 2.366-.78.577-.52.866-1.195.866-2.023l-.013-.084zm7.425 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.812-.56-.137-1.067-.146-1.54-.028-.16-.95.09-1.626.41-2.332.31-.706.814-1.416 1.534-2.13l.013-.013-1.456-1.42c-.79.81-1.426 1.76-1.9 2.86-.595 1.194-.842 2.42-.842 3.916 0 1.265.305 2.288.913 3.07.608.782 1.438 1.172 2.49 1.172.997 0 1.788-.26 2.366-.78.578-.52.866-1.195.866-2.023l-.013-.084z"/>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Ca practician în domeniul wellness, recomand doar produse în care cred cu adevărat. Angajamentul doTERRA față de calitate și sustenabilitate îi face prima mea alegere pentru clienți.
                  </p>
                  <div>
                    <h4 className="font-semibold">Alexandru Popescu</h4>
                    <p className="text-gray-500">Coach de Sănătate Holistică</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/1 lg:basis-1/1">
                <div className="p-6 md:p-10 bg-white rounded-xl shadow-sm border text-center">
                  <div className="mb-6">
                    <svg className="w-12 h-12 text-primary-300 mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.332.303-.706.814-1.416 1.534-2.13l.013-.013-1.45-1.42c-.78.81-1.416 1.76-1.9 2.86C5.818 10.777 5.57 12.006 5.57 13.5c0 1.265.305 2.288.913 3.07.607.782 1.438 1.172 2.49 1.172.997 0 1.788-.26 2.366-.78.577-.52.866-1.195.866-2.023l-.013-.084zm7.425 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.812-.56-.137-1.067-.146-1.54-.028-.16-.95.09-1.626.41-2.332.31-.706.814-1.416 1.534-2.13l.013-.013-1.456-1.42c-.79.81-1.426 1.76-1.9 2.86-.595 1.194-.842 2.42-.842 3.916 0 1.265.305 2.288.913 3.07.608.782 1.438 1.172 2.49 1.172.997 0 1.788-.26 2.366-.78.578-.52.866-1.195.866-2.023l-.013-.084z"/>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Resursele de business de la doTERRA au fost esențiale în ajutarea mea să-mi construiesc practica de wellness advocacy. Sunt recunoscătoare pentru comunitate și suport.
                  </p>
                  <div>
                    <h4 className="font-semibold">Elena Marinescu</h4>
                    <p className="text-gray-500">Diamond Wellness Advocate</p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2" />
            <CarouselNext className="absolute right-4 top-1/2" />
          </Carousel>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-br from-primary-100 to-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3">Abonează-te la newsletter</h2>
            <p className="text-gray-700 mb-6">
              Fii primul care află despre noile produse, promoții speciale și evenimente doTERRA
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Adresa ta de email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Button>Abonează-te</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 lg:py-24 bg-primary-600 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Pregătit să Începi Călătoria Wellness?
          </h2>
          <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Alătură-te miilor de clienți mulțumiți care și-au transformat viața cu uleiurile esențiale doTERRA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/shop">Cumpără Acum</Link>
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
