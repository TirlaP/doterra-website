import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Mock data for the MVP
const blogPosts = [
  {
    id: "1",
    title: "10 Ways to Use Lavender Essential Oil",
    slug: "10-ways-to-use-lavender-essential-oil",
    excerpt: "Discover the versatility of lavender essential oil with these 10 practical uses for your home and family.",
    content: "",
    image: "/images/lavender-uses.jpg",
    date: "2025-05-05",
    author: "Sarah Johnson",
    authorTitle: "Wellness Advocate",
    category: "Essential Oil Uses",
    tags: ["Lavender", "Essential Oils", "Wellness Tips"],
    readingTime: "6 min",
    featured: true,
  },
  {
    id: "2",
    title: "Essential Oils for Sleep and Relaxation",
    slug: "essential-oils-sleep-relaxation",
    excerpt: "Create the perfect bedtime routine with these calming essential oils for better sleep and relaxation.",
    content: "",
    image: "/images/sleep-oils.jpg",
    date: "2025-05-02",
    author: "Michael Chen",
    authorTitle: "Aromatherapist",
    category: "Wellness",
    tags: ["Sleep", "Relaxation", "Essential Oils"],
    readingTime: "8 min",
    featured: true,
  },
  {
    id: "3",
    title: "Seasonal Wellness: Supporting Your Immune System",
    slug: "seasonal-wellness-immune-system",
    excerpt: "Learn how to support your immune system during changing seasons with these natural approaches.",
    content: "",
    image: "/images/immune-support.jpg",
    date: "2025-04-28",
    author: "Elena Rodriguez",
    authorTitle: "Wellness Educator",
    category: "Wellness",
    tags: ["Immune Support", "Seasonal", "Wellness"],
    readingTime: "10 min",
    featured: false,
  },
  {
    id: "4",
    title: "Creating an Essential Oil Blend for Focus and Productivity",
    slug: "essential-oil-blend-focus-productivity",
    excerpt: "Boost concentration and mental clarity with these essential oil blends designed for focus and productivity.",
    content: "",
    image: "/images/focus-blend.jpg",
    date: "2025-04-20",
    author: "David Thompson",
    authorTitle: "Essential Oil Specialist",
    category: "Essential Oil Blends",
    tags: ["Focus", "Productivity", "Blends"],
    readingTime: "7 min",
    featured: false,
  },
  {
    id: "5",
    title: "Essential Oils for Skin Care: Natural Solutions for Radiant Skin",
    slug: "essential-oils-skin-care",
    excerpt: "Discover how to incorporate essential oils into your skincare routine for natural, glowing skin.",
    content: "",
    image: "/images/skin-care.jpg",
    date: "2025-04-15",
    author: "Olivia Parker",
    authorTitle: "Skincare Specialist",
    category: "Beauty",
    tags: ["Skin Care", "Beauty", "Natural Solutions"],
    readingTime: "9 min",
    featured: false,
  },
  {
    id: "6",
    title: "Diffuser Blends for Every Room in Your Home",
    slug: "diffuser-blends-every-room",
    excerpt: "Transform the atmosphere of each room with these custom essential oil diffuser blends.",
    content: "",
    image: "/images/diffuser-blends.jpg",
    date: "2025-04-10",
    author: "Sarah Johnson",
    authorTitle: "Wellness Advocate",
    category: "Essential Oil Blends",
    tags: ["Diffuser", "Home", "Blends"],
    readingTime: "5 min",
    featured: false,
  },
  {
    id: "7",
    title: "Essential Oils for Exercise: Before, During, and After Workouts",
    slug: "essential-oils-exercise",
    excerpt: "Enhance your fitness routine with essential oils that support performance, focus, and recovery.",
    content: "",
    image: "/images/exercise-oils.jpg",
    date: "2025-04-05",
    author: "James Wilson",
    authorTitle: "Fitness Trainer",
    category: "Wellness",
    tags: ["Exercise", "Fitness", "Recovery"],
    readingTime: "7 min",
    featured: false,
  },
  {
    id: "8",
    title: "The Science Behind Essential Oils: How They Work",
    slug: "science-behind-essential-oils",
    excerpt: "Understanding the chemistry and mechanisms of how essential oils interact with our bodies.",
    content: "",
    image: "/images/oil-science.jpg",
    date: "2025-03-28",
    author: "Dr. Amanda Lee",
    authorTitle: "Aromatherapy Researcher",
    category: "Science",
    tags: ["Science", "Research", "Chemistry"],
    readingTime: "12 min",
    featured: false,
  },
];

const categories = [
  { name: "All Categories", slug: "all", count: blogPosts.length },
  { name: "Essential Oil Uses", slug: "essential-oil-uses", count: blogPosts.filter(post => post.category === "Essential Oil Uses").length },
  { name: "Essential Oil Blends", slug: "essential-oil-blends", count: blogPosts.filter(post => post.category === "Essential Oil Blends").length },
  { name: "Wellness", slug: "wellness", count: blogPosts.filter(post => post.category === "Wellness").length },
  { name: "Beauty", slug: "beauty", count: blogPosts.filter(post => post.category === "Beauty").length },
  { name: "Science", slug: "science", count: blogPosts.filter(post => post.category === "Science").length },
];

const popularTags = Array.from(
  new Set(blogPosts.flatMap(post => post.tags))
).slice(0, 10).map(tag => ({
  name: tag,
  count: blogPosts.filter(post => post.tags.includes(tag)).length,
  slug: tag.toLowerCase().replace(/\s+/g, '-'),
}));

const recentPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);
const featuredPosts = blogPosts.filter(post => post.featured);

export default function BlogPage() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative py-12 lg:py-20 overflow-hidden bg-gradient-to-r from-primary-900/90 to-primary-700/90 text-white">
        <div className="absolute inset-0 bg-[url('/images/blog-hero.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog doTERRA</h1>
            <p className="text-lg text-white/80 mb-8">
              Descoperă articole despre uleiuri esențiale, wellness și sfaturi pentru un stil de viață natural și sănătos.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 max-w-xl mx-auto flex">
              <Input 
                placeholder="Caută articole..." 
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
            {categories.map((category) => (
              <Link 
                key={category.slug}
                href={category.slug === "all" ? "/blog" : `/blog?category=${category.slug}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.slug === "all" 
                    ? "bg-primary-600 text-white hover:bg-primary-700" 
                    : "bg-white hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category.name}
                <span className="ml-1.5 text-xs opacity-70">({category.count})</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Articole Recomandate</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <div key={post.id} className={`bg-white rounded-xl overflow-hidden border shadow-sm group hover:shadow-lg transition-all ${index === 0 ? 'lg:col-span-2' : ''}`}>
                  <div className="flex flex-col md:flex-row h-full">
                    <div className={`md:w-${index === 0 ? '2/5' : '2/5'} relative`}>
                      <div className="aspect-video md:aspect-auto md:h-full bg-gray-200 relative overflow-hidden">
                        {/* Replace with actual post image when available */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                          {post.title}
                        </div>
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary-600 hover:bg-primary-700">Featured</Badge>
                      </div>
                    </div>
                    
                    <div className={`md:w-${index === 0 ? '3/5' : '3/5'} p-6 flex flex-col justify-between`}>
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Link 
                            href={`/blog?category=${post.category.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-xs font-medium bg-primary-50 text-primary-700 px-2 py-1 rounded-full hover:bg-primary-100 transition-colors"
                          >
                            {post.category}
                          </Link>
                          <span className="text-gray-500 text-xs flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mr-1">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            {post.readingTime}
                          </span>
                        </div>
                        
                        <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>
                        
                        <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium mr-2">
                            {post.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{post.author}</p>
                            <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString("ro-RO", { year: "numeric", month: "short", day: "numeric" })}</p>
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="text-primary-600 hover:text-primary-700" asChild>
                          <Link href={`/blog/${post.slug}`}>
                            Citește 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Toate Articolele</h2>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Sortare:</span>
                <select className="border rounded-full p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option>Cele mai recente</option>
                  <option>Cele mai populare</option>
                  <option>Cele mai citite</option>
                  <option>A-Z</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 border">
                  <div className="relative">
                    <div className="aspect-video bg-gray-200">
                      {/* Replace with actual post image when available */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-400 text-xs">{post.title}</span>
                      </div>
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    
                    <div className="absolute bottom-0 translate-y-1/2 left-6">
                      <Link 
                        href={`/blog?category=${post.category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-block px-3 py-1.5 bg-white shadow-md rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
                      >
                        {post.category}
                      </Link>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 pt-8">
                    <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
                      <span>
                        {new Date(post.date).toLocaleDateString("ro-RO", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        {post.readingTime}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium mr-2">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-sm font-medium">{post.author}</span>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="text-primary-600 hover:text-primary-700 p-0" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          Citește 
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      </Button>
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
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <div className="bg-white rounded-xl border shadow-sm p-6">
                <h3 className="font-semibold text-lg mb-4">Caută</h3>
                <div className="flex gap-2">
                  <Input placeholder="Caută articole..." className="flex-1" />
                  <Button variant="outline" size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-xl border shadow-sm p-6">
                <h3 className="font-semibold text-lg mb-4">Categorii</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link 
                        href={category.slug === "all" ? "/blog" : `/blog?category=${category.slug}`}
                        className="flex justify-between items-center py-2 hover:text-primary-600 transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="text-gray-500 text-sm py-0.5 px-2 bg-gray-100 rounded-full">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl border shadow-sm p-6">
                <h3 className="font-semibold text-lg mb-4">Articole Recente</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex gap-3 group">
                      <div className="w-20 h-20 bg-gray-200 flex-shrink-0 rounded-lg overflow-hidden relative">
                        {/* Replace with actual post thumbnail */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-gray-400 text-xs">Img</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary-600 transition-colors">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h4>
                        <div className="text-xs text-gray-500 mt-1">
                          {new Date(post.date).toLocaleDateString("ro-RO", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border shadow-sm p-6">
                <h3 className="font-semibold text-lg mb-4">Tag-uri Populare</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Link 
                      key={index}
                      href={`/blog?tag=${tag.slug}`}
                      className="inline-block px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm hover:bg-primary-50 hover:text-primary-700 hover:border-primary-100 transition-colors"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl border border-primary-100 p-6">
                <h3 className="font-semibold text-lg mb-4 text-primary-900">Abonează-te</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Fii primul care primește cele mai noi articole și sfaturi despre uleiurile esențiale și stilul de viață sănătos.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Email-ul tău" type="email" className="bg-white" />
                  <Button className="w-full">Abonează-te</Button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
                <div className="relative">
                  <div className="aspect-video bg-gray-200">
                    {/* Replace with actual image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400">E-Book Promo</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                    <h3 className="font-bold text-xl mb-2">Ghid Complet de Uleiuri Esențiale</h3>
                    <p className="text-white/80 text-sm mb-3">Totul ce trebuie să știi despre utilizarea uleiurilor esențiale în 50+ pagini.</p>
                    <Button size="sm" variant="secondary" asChild>
                      <Link href="/resources/essential-oils-guide">Vezi Detalii</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Topics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Explorează Subiectele Populare</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descoperă articole organizate pe teme pentru a găsi exact informațiile de care ai nevoie.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/blog?topic=beginners-guide"
              className="group relative overflow-hidden rounded-xl aspect-[3/2] shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 to-gray-900/70 z-10 group-hover:from-primary-900/20 group-hover:to-primary-900/80 transition-colors"></div>
              
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-xs">Topic Image</span>
              </div>
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-2">Ghid pentru Începători</h3>
                <p className="text-white/80 mb-3 text-sm line-clamp-2">
                  Tot ce trebuie să știi pentru a începe călătoria ta cu uleiurile esențiale.
                </p>
                <span className="inline-flex items-center text-sm font-medium text-white">
                  Explorează Articolele
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
            
            <Link 
              href="/blog?topic=aromatherapy"
              className="group relative overflow-hidden rounded-xl aspect-[3/2] shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 to-gray-900/70 z-10 group-hover:from-primary-900/20 group-hover:to-primary-900/80 transition-colors"></div>
              
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-xs">Topic Image</span>
              </div>
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-2">Aromaterapie</h3>
                <p className="text-white/80 mb-3 text-sm line-clamp-2">
                  Descoperă cum aromaterapia poate îmbunătăți starea ta de bine fizică și emoțională.
                </p>
                <span className="inline-flex items-center text-sm font-medium text-white">
                  Explorează Articolele
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
            
            <Link 
              href="/blog?topic=diy-recipes"
              className="group relative overflow-hidden rounded-xl aspect-[3/2] shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 to-gray-900/70 z-10 group-hover:from-primary-900/20 group-hover:to-primary-900/80 transition-colors"></div>
              
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-xs">Topic Image</span>
              </div>
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-2">Rețete și DIY</h3>
                <p className="text-white/80 mb-3 text-sm line-clamp-2">
                  Idei creative pentru a utiliza uleiurile esențiale în casă, produse de îngrijire și multe altele.
                </p>
                <span className="inline-flex items-center text-sm font-medium text-white">
                  Explorează Articolele
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ai o Întrebare Despre Uleiurile Esențiale?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Contactează-ne și experții noștri îți vor răspunde. Sau abonează-te la newsletter pentru cele mai recente articole și sfaturi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contactează-ne</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
              Abonează-te la Newsletter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
