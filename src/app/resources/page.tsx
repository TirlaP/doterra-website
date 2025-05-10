import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Mock data for the MVP
const resources = [
  {
    id: "1",
    title: "Essential Oil Beginner's Guide",
    slug: "essential-oil-beginners-guide",
    image: "/images/beginners-guide.jpg",
    description: "A comprehensive guide for those new to essential oils. Learn the basics of essential oils, how to use them safely, and which oils are best for beginners.",
    price: 9.99,
    normalPrice: 12.99,
    discount: 23,
    type: "Ebook",
    fileType: "PDF",
    fileSize: "2.4 MB",
    pages: 35,
    category: "Educational",
    language: "Română",
    featured: true,
  },
  {
    id: "2",
    title: "Essential Oils for Everyday Use",
    slug: "essential-oils-everyday-use",
    image: "/images/everyday-use.jpg",
    description: "Discover how to incorporate essential oils into your daily routine. This presentation covers home, health, and wellness applications for the most popular oils.",
    price: 12.99,
    normalPrice: 14.99,
    discount: 13,
    type: "Presentation",
    fileType: "PPTX, PDF",
    fileSize: "8.2 MB",
    slides: 45,
    category: "Educational",
    language: "Română și Engleză",
    featured: true,
  },
  {
    id: "3",
    title: "Business Building Toolkit",
    slug: "business-building-toolkit",
    image: "/images/business-toolkit.jpg",
    description: "Everything you need to start or grow your doTERRA wellness advocacy business. Includes marketing materials, client tracking tools, and business planning templates.",
    price: 24.99,
    normalPrice: 34.99,
    discount: 29,
    type: "Business Resource",
    fileType: "ZIP (PDF, DOCX, XLSX)",
    fileSize: "15.6 MB",
    category: "Business",
    language: "Română",
    featured: true,
  },
  {
    id: "4",
    title: "Essential Oil Safety Guide",
    slug: "essential-oil-safety-guide",
    image: "/images/safety-guide.jpg",
    description: "A must-have guide to using essential oils safely. Learn proper dilution ratios, application methods, and precautions for different populations.",
    price: 7.99,
    normalPrice: 9.99,
    discount: 20,
    type: "Ebook",
    fileType: "PDF",
    fileSize: "1.8 MB",
    pages: 28,
    category: "Educational",
    language: "Română",
    featured: false,
  },
  {
    id: "5",
    title: "Hosting a Successful Oil Class",
    slug: "hosting-successful-oil-class",
    image: "/images/hosting-class.jpg",
    description: "Learn how to plan, prepare, and host engaging essential oil classes that convert attendees into customers and team members.",
    price: 19.99,
    normalPrice: null,
    discount: 0,
    type: "Class Materials",
    fileType: "ZIP (PDF, PPTX)",
    fileSize: "12.3 MB",
    category: "Business",
    language: "Română",
    featured: false,
  },
  {
    id: "6",
    title: "Seasonal Wellness Protocol Cards",
    slug: "seasonal-wellness-protocol-cards",
    image: "/images/protocol-cards.jpg",
    description: "Printable protocol cards for different seasonal wellness needs. Perfect for sharing with clients or displaying in your workspace.",
    price: 14.99,
    normalPrice: null,
    discount: 0,
    type: "Printable",
    fileType: "PDF",
    fileSize: "4.5 MB",
    pages: 20,
    category: "Educational",
    language: "Română",
    featured: false,
  },
  {
    id: "7",
    title: "Essential Oil Blending Guide",
    slug: "essential-oil-blending-guide",
    image: "/images/blending-guide.jpg",
    description: "Master the art of blending essential oils with this comprehensive guide. Includes blending principles, ratios, and recipe templates.",
    price: 11.99,
    normalPrice: 14.99,
    discount: 20,
    type: "Ebook",
    fileType: "PDF",
    fileSize: "3.2 MB",
    pages: 42,
    category: "Educational",
    language: "Română",
    featured: false,
  },
  {
    id: "8",
    title: "Social Media Content Bundle",
    slug: "social-media-content-bundle",
    image: "/images/social-bundle.jpg",
    description: "Ready-to-use social media graphics and captions to promote your essential oil business across platforms.",
    price: 29.99,
    normalPrice: null,
    discount: 0,
    type: "Business Resource",
    fileType: "ZIP (JPG, PNG, PDF)",
    fileSize: "28.5 MB",
    category: "Business",
    language: "Română",
    featured: false,
  },
];

const categories = [
  { id: "1", name: "Toate Resursele", count: resources.length },
  { id: "2", name: "Ebooks", count: resources.filter(r => r.type === "Ebook").length },
  { id: "3", name: "Prezentări", count: resources.filter(r => r.type === "Presentation").length },
  { id: "4", name: "Resurse de Business", count: resources.filter(r => r.type === "Business Resource").length },
  { id: "5", name: "Materiale pentru Clase", count: resources.filter(r => r.type === "Class Materials").length },
  { id: "6", name: "Printabile", count: resources.filter(r => r.type === "Printable").length },
];

const resourceCategories = [
  { id: "1", name: "Educaționale", count: resources.filter(r => r.category === "Educational").length },
  { id: "2", name: "Business", count: resources.filter(r => r.category === "Business").length },
];

const languages = [
  { id: "1", name: "Română", count: resources.filter(r => r.language === "Română").length },
  { id: "2", name: "Engleză", count: resources.filter(r => r.language.includes("Engleză")).length },
];

export default function ResourcesPage() {
  const featuredResources = resources.filter(r => r.featured);

  return (
    <div>
      {/* Hero section */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/resources-bg.jpg')] bg-cover bg-center opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-white/80 text-sm uppercase tracking-widest mb-3 font-medium block">Biblioteca doTERRA</span>
            <h1 className="text-4xl lg:text-5xl text-white font-bold mb-6">Resurse Wellness doTERRA</h1>
            <p className="text-lg text-white/80 mb-8">
              Descoperă ghiduri, prezentări și materiale pentru a-ți dezvolta cunoștințele despre uleiurile esențiale și afacerea ta cu doTERRA.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Input 
                placeholder="Caută resurse..." 
                className="pr-10 h-12 text-base pl-5 rounded-full shadow-md bg-white/95 backdrop-blur-sm border-transparent focus:border-primary-300"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1 rounded-full h-10 w-10 p-0 flex items-center justify-center bg-primary-600 hover:bg-primary-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured resources */}
      {featuredResources.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">Resurse Recomandate</h2>
                <p className="text-gray-600">Cele mai populare resurse pentru wellness advocates</p>
              </div>
              <Button variant="ghost" className="text-primary-600 font-medium hidden md:flex" asChild>
                <Link href="/resources#all-resources">Vezi toate resursele →</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredResources.map((resource) => (
                <Card key={resource.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg border rounded-xl">
                  <div className="relative">
                    <div className="aspect-video bg-gray-100 flex items-center justify-center">
                      {/* Replace with actual resource image when available */}
                      <span className="text-gray-400 text-xs">{resource.title}</span>
                    </div>
                    
                    {resource.discount > 0 && (
                      <div className="absolute top-3 left-3 bg-primary-600 text-white font-bold py-1.5 px-3 rounded-lg z-10 shadow-md transform -rotate-2">
                        -{resource.discount}% OFF
                      </div>
                    )}
                    
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium shadow-sm text-primary-700">
                      {resource.type}
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <Button className="w-full bg-white text-primary-700 hover:bg-white/90 font-medium" asChild>
                        <Link href={`/resources/${resource.slug}`}>Vezi resursa</Link>
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary-600 transition-colors">
                        <Link href={`/resources/${resource.slug}`}>
                          {resource.title}
                        </Link>
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{resource.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-baseline gap-1.5">
                        {resource.normalPrice ? (
                          <>
                            <span className="font-bold text-lg text-primary-600">${resource.price}</span>
                            <span className="text-sm text-gray-500 line-through">${resource.normalPrice}</span>
                          </>
                        ) : (
                          <span className="font-bold text-lg text-primary-600">${resource.price}</span>
                        )}
                      </div>
                      <Button size="sm" asChild>
                        <Link href={`/resources/${resource.slug}`}>Cumpără</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-10 md:hidden">
              <Button asChild>
                <Link href="/resources#all-resources">Vezi toate resursele</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Resource categories cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Categorii de Resurse</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {categories.slice(1).map((category) => (
              <Link 
                key={category.id} 
                href={`/resources?type=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative rounded-xl overflow-hidden h-40 lg:h-48"
              >
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/40 transition-all duration-300 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-600 flex items-center justify-center">
                  {/* This would be replaced with actual backgrounds later */}
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-white text-center px-4">
                    <h3 className="text-xl font-bold mb-1 drop-shadow-md">{category.name}</h3>
                    <p className="text-white/90 text-sm mb-2">{category.count} resurse</p>
                    <span className="bg-white/95 text-primary-700 px-3 py-1 rounded-full text-xs font-medium inline-block 
                      opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Explorează
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main resources section */}
      <section id="all-resources" className="py-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="font-semibold text-lg mb-4">Tipuri de Resurse</h3>
                  <ul className="space-y-1">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <Link 
                          href={`/resources?type=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className={`flex justify-between items-center py-2 px-3 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors ${category.id === "1" ? "bg-primary-50 text-primary-700 font-medium" : ""}`}
                        >
                          <span>{category.name}</span>
                          <span className={`text-xs font-medium rounded-full px-2 py-0.5 min-w-6 text-center ${category.id === "1" ? "bg-primary-100 text-primary-700" : "bg-gray-100 text-gray-700"}`}>
                            {category.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="font-semibold text-lg mb-4">Categorie</h3>
                  <ul className="space-y-1">
                    {resourceCategories.map((type) => (
                      <li key={type.id}>
                        <Link 
                          href={`/resources?category=${type.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors"
                        >
                          <span>{type.name}</span>
                          <span className="text-xs font-medium bg-gray-100 rounded-full px-2 py-0.5 min-w-6 text-center text-gray-700">
                            {type.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="font-semibold text-lg mb-4">Limbă</h3>
                  <ul className="space-y-1">
                    {languages.map((language) => (
                      <li key={language.id}>
                        <Link 
                          href={`/resources?lang=${language.name.toLowerCase()}`}
                          className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors"
                        >
                          <span>{language.name}</span>
                          <span className="text-xs font-medium bg-gray-100 rounded-full px-2 py-0.5 min-w-6 text-center text-gray-700">
                            {language.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="font-semibold text-lg mb-4">Preț</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-sm text-gray-600 mb-1 block">Min</label>
                        <Input placeholder="0" type="number" className="bg-gray-50 border-gray-200 focus:bg-white" />
                      </div>
                      <div>
                        <label className="text-sm text-gray-600 mb-1 block">Max</label>
                        <Input placeholder="50" type="number" className="bg-gray-50 border-gray-200 focus:bg-white" />
                      </div>
                    </div>
                    <Button className="w-full bg-primary-600 hover:bg-primary-700">Aplică</Button>
                  </div>
                </div>
                
                {/* Newsletter box */}
                <div className="relative overflow-hidden rounded-xl p-6 border border-primary-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-50 z-0"></div>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-lg mb-2 text-primary-900">Newsletter</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Abonează-te pentru noutăți, resurse exclusive și reduceri speciale.
                    </p>
                    <div className="space-y-2">
                      <Input placeholder="Email-ul tău" className="bg-white/90 border-primary-200 focus:border-primary-400" />
                      <Button className="w-full bg-primary-600 hover:bg-primary-700">Abonează-te</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resource Grid */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Toate Resursele</h2>
                  <p className="text-gray-600">Resurse educaționale și de business pentru dezvoltarea ta</p>
                </div>
                <div className="flex items-center gap-2 bg-white p-1 rounded-lg border">
                  <span className="text-sm text-gray-500 pl-2">Sortează:</span>
                  <select className="border-0 rounded py-1.5 px-2 text-sm focus:ring-0 bg-transparent">
                    <option>Cele mai populare</option>
                    <option>Preț: Mic la Mare</option>
                    <option>Preț: Mare la Mic</option>
                    <option>Cele mai noi</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource) => (
                  <Card key={resource.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg border rounded-xl">
                    <div className="relative">
                      <div className="aspect-video bg-gray-100 flex items-center justify-center">
                        {/* Replace with actual resource image when available */}
                        <span className="text-gray-400 text-xs">{resource.title}</span>
                      </div>
                      
                      {resource.discount > 0 && (
                        <div className="absolute top-3 left-3 bg-primary-600 text-white font-bold py-1 px-3 rounded-lg z-10 shadow-sm">
                          -{resource.discount}% OFF
                        </div>
                      )}
                      
                      <Badge 
                        variant="secondary" 
                        className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary-700 font-medium shadow-sm"
                      >
                        {resource.type}
                      </Badge>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <Button className="w-full bg-white text-primary-700 hover:bg-white/90 font-medium" asChild>
                          <Link href={`/resources/${resource.slug}`}>Vezi resursa</Link>
                        </Button>
                      </div>
                    </div>
                    
                    <CardContent className="p-5">
                      <div className="flex items-center space-x-2 mb-1.5">
                        <Badge variant="outline" className="text-xs font-normal bg-gray-50">
                          {resource.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs font-normal bg-gray-50">
                          {resource.fileType}
                        </Badge>
                      </div>
                      
                      <h3 className="font-medium text-lg mb-2 line-clamp-1 group-hover:text-primary-600 transition-colors">
                        <Link href={`/resources/${resource.slug}`}>
                          {resource.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{resource.description}</p>
                      
                      <div className="flex justify-between items-center mt-auto">
                        <div className="flex items-baseline gap-1.5">
                          {resource.normalPrice ? (
                            <>
                              <span className="font-bold text-primary-600">${resource.price}</span>
                              <span className="text-sm text-gray-500 line-through">${resource.normalPrice}</span>
                            </>
                          ) : (
                            <span className="font-bold text-primary-600">${resource.price}</span>
                          )}
                        </div>
                        <Button variant="outline" size="sm" className="border-primary-200 hover:bg-primary-50 hover:text-primary-700" asChild>
                          <Link href={`/resources/${resource.slug}`}>Detalii</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <div className="bg-white rounded-lg border inline-flex p-1 shadow-sm">
                  <Button variant="outline" size="icon" className="rounded-md border-0" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                  </Button>
                  <Button variant="default" size="sm" className="min-w-8 rounded-md">1</Button>
                  <Button variant="outline" size="sm" className="min-w-8 rounded-md border-0">2</Button>
                  <Button variant="outline" size="icon" className="rounded-md border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About resources section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">De Ce Să Alegi Resursele doTERRA</h2>
            <p className="text-gray-700">
              Resursele educaționale doTERRA sunt dezvoltate de experți în domeniu, bazate pe cercetări științifice și croite pentru a-ți susține călătoria de wellness și/sau afacerea ta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-gray-100 hover:shadow-md hover:border-primary-100 transition-all">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Expertiza doTERRA</h3>
              <p className="text-gray-700">
                Fiecare resursă este creată de experți doTERRA cu ani de experiență în domeniul uleiurilor esențiale și wellness.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-gray-100 hover:shadow-md hover:border-primary-100 transition-all">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Calitate Premium</h3>
              <p className="text-gray-700">
                Materiale de înaltă calitate, actualizate frecvent și bazate pe cele mai recente cercetări științifice din domeniu.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-gray-100 hover:shadow-md hover:border-primary-100 transition-all">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Rezultate Dovedite</h3>
              <p className="text-gray-700">
                Resursele noastre au ajutat mii de wellness advocates să-și dezvolte afacerile și să împărtășească beneficiile uleiurilor esențiale.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] bg-repeat opacity-5 z-0"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Gata să-ți Dezvolți Cunoștințele?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Descoperă colecția noastră completă de resurse educaționale și de business pentru a-ți accelera creșterea cu doTERRA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-medium" asChild>
                <Link href="/resources#all-resources">Explorează Toate Resursele</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium" asChild>
                <Link href="/contact">Întreabă un Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
