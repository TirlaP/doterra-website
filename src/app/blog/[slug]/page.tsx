"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

// Mock data for the MVP
const blogPosts = [
  {
    id: "1",
    title: "10 Ways to Use Lavender Essential Oil",
    slug: "10-ways-to-use-lavender-essential-oil",
    excerpt: "Discover the versatility of lavender essential oil with these 10 practical uses for your home and family.",
    content: `
      <p>Lavender essential oil is one of the most versatile and beloved oils in aromatherapy. Known for its calming scent and therapeutic properties, lavender oil can be used in countless ways to enhance your daily life, support wellness, and create a peaceful home environment.</p>
      
      <p>Here are 10 practical ways to incorporate lavender essential oil into your daily routine:</p>
      
      <h2>1. Promote Restful Sleep</h2>
      
      <p>Lavender is renowned for its ability to create a calming atmosphere that promotes deep, restful sleep. Add 2-3 drops to your diffuser about 30 minutes before bedtime to prepare your bedroom for sleep. Alternatively, place a drop on your pillow or apply diluted lavender oil to the bottoms of your feet before bed.</p>
      
      <h2>2. Ease Tension and Stress</h2>
      
      <p>When you feel stress building, reach for your lavender oil. Inhale directly from the bottle, or apply a drop diluted with a carrier oil to your temples and the back of your neck. Many people find that lavender helps them manage occasional feelings of tension and overwhelm.</p>
      
      <h2>3. Soothe Occasional Skin Irritations</h2>
      
      <p>Lavender oil has soothing properties that make it perfect for addressing minor skin irritations. Create a gentle solution by mixing 1-2 drops with a teaspoon of carrier oil like coconut or jojoba, then apply to the affected area.</p>
      
      <h2>4. Create a Relaxing Bath Experience</h2>
      
      <p>Transform your ordinary bath into a spa-like experience by adding 5-6 drops of lavender oil combined with 1 cup of Epsom salts to warm bathwater. The aroma will help you unwind while the Epsom salts soothe tired muscles.</p>
      
      <h2>5. Freshen Laundry Naturally</h2>
      
      <p>Add a few drops of lavender oil to wool dryer balls or a damp cloth placed in your dryer to give your laundry a fresh, clean scent without harsh chemicals. This works especially well for bed linens and towels.</p>
      
      <h2>6. Make a Natural Room Spray</h2>
      
      <p>Create your own natural air freshener by combining 10 drops of lavender oil with 1 tablespoon of witch hazel and 1 cup of water in a spray bottle. Shake well before each use and spray throughout your home to eliminate odors and create a welcoming atmosphere.</p>
      
      <h2>7. Enhance Your Skincare Routine</h2>
      
      <p>Add a drop of lavender oil to your favorite unscented moisturizer or facial serum to support healthy-looking skin. Lavender's balancing properties make it suitable for many skin types.</p>
      
      <h2>8. Support Clean Breathing</h2>
      
      <p>Diffuse lavender oil during seasonal changes to support clear breathing and maintain a feeling of open airways. You can also add a few drops to a bowl of hot water and inhale the steam for similar benefits.</p>
      
      <h2>9. Create a Soothing Massage Oil</h2>
      
      <p>Mix 5 drops of lavender oil with 1 tablespoon of carrier oil to create a relaxing massage blend. This is perfect for unwinding after a long day or soothing tired muscles after physical activity.</p>
      
      <h2>10. Calm Occasional Nervous Feelings</h2>
      
      <p>Keep a bottle of lavender oil in your purse or desk drawer for moments when you need emotional support. Inhaling the aroma directly from the bottle can help provide a sense of calm during stressful situations.</p>
      
      <h2>Tips for Using Lavender Essential Oil</h2>
      
      <ul>
        <li>Always dilute lavender oil with a carrier oil before applying to the skin, especially for children and sensitive individuals.</li>
        <li>Choose high-quality, pure lavender oil for the best therapeutic benefits.</li>
        <li>Lavender blends well with many other essential oils, including peppermint, lemon, and frankincense.</li>
        <li>While lavender is one of the gentlest essential oils, always perform a patch test before widespread use.</li>
      </ul>
      
      <p>By incorporating lavender essential oil into your daily routine in these simple ways, you can enjoy its many benefits while creating a more natural, peaceful home environment.</p>
      
      <p>Have you tried any of these lavender oil uses? What's your favorite way to use this versatile oil? Share your experiences in the comments below!</p>
    `,
    image: "/images/lavender-uses.jpg",
    date: "2025-05-05",
    author: "Sarah Johnson",
    authorTitle: "Wellness Advocate",
    authorBio: "Sarah Johnson is a certified aromatherapist and wellness advocate with over 10 years of experience using essential oils for health and wellness. She is passionate about educating others on the benefits of natural solutions for everyday concerns.",
    authorImage: "/images/author-sarah.jpg",
    category: "Essential Oil Uses",
    tags: ["Lavender", "Essential Oils", "Wellness Tips", "Sleep", "Relaxation", "Skincare"],
    relatedPosts: ["2", "6", "7"],
    readingTime: "6 min",
    featured: true,
  },
  {
    id: "2",
    title: "Essential Oils for Sleep and Relaxation",
    slug: "essential-oils-sleep-relaxation",
    excerpt: "Create the perfect bedtime routine with these calming essential oils for better sleep and relaxation.",
    content: `
      <p>In our fast-paced world, quality sleep has become increasingly elusive. If you find yourself tossing and turning at night or struggling to unwind after a busy day, essential oils might offer the natural solution you've been seeking.</p>
      
      <p>Essential oils have been used for centuries to promote relaxation and improve sleep quality. Their natural aromatic compounds can help signal to your brain that it's time to wind down, making them perfect additions to your evening routine.</p>
      
      <h2>The Science Behind Essential Oils and Sleep</h2>
      
      <p>Our sense of smell is directly connected to the limbic system in our brain, which controls emotions and memories. When we inhale essential oils, their molecules travel through the olfactory system to the limbic system, including the amygdala and hippocampus. This direct pathway can trigger emotional and physiological responses that help us relax and prepare for sleep.</p>
      
      <h2>Top Essential Oils for Sleep and Relaxation</h2>
      
      <h3>Lavender</h3>
      
      <p>Lavender is the most researched essential oil for sleep support. Its calming properties help reduce occasional nervous tension and promote deep, restful sleep. Studies have shown that inhaling lavender before bedtime can improve sleep quality and help people feel more refreshed upon waking.</p>
      
      <p><strong>How to use:</strong> Diffuse 3-4 drops in your bedroom 30 minutes before sleep, or place a drop on your pillow or pajamas.</p>
      
      <h3>Cedarwood</h3>
      
      <p>With its warm, woody aroma, cedarwood essential oil helps create a grounding atmosphere that calms the mind. Its main component, cedrol, has been studied for its sedative effects, making it an excellent addition to your nighttime routine.</p>
      
      <p><strong>How to use:</strong> Diffuse 2-3 drops with 2 drops of lavender for an enhanced sleep blend, or apply diluted oil to the back of the neck before bed.</p>
      
      <h3>Vetiver</h3>
      
      <p>Vetiver has a rich, earthy scent that is deeply relaxing. This oil is known for its grounding properties and can help quiet an overactive mind—perfect for those who can't seem to "turn off" their thoughts at night.</p>
      
      <p><strong>How to use:</strong> Add 1-2 drops to a diffuser blend (it's powerful, so a little goes a long way) or apply a diluted drop to the bottoms of feet before bed.</p>
      
      <h3>Roman Chamomile</h3>
      
      <p>Roman chamomile has been used as a mild sedative for centuries. Its sweet, apple-like fragrance promotes feelings of inner peace and helps soothe worried minds, making it easier to drift off to sleep.</p>
      
      <p><strong>How to use:</strong> Add 3-4 drops to a relaxing bath with Epsom salts, or diffuse 2-3 drops with lavender.</p>
      
      <h3>Bergamot</h3>
      
      <p>Unlike other citrus oils that can be energizing, bergamot has unique calming properties while still maintaining an uplifting quality. It helps reduce occasional anxious feelings that can interfere with falling asleep.</p>
      
      <p><strong>How to use:</strong> Diffuse 3-4 drops in the evening, or add to a relaxing massage blend with a carrier oil.</p>
      
      <h2>Creating Your Perfect Sleep Blend</h2>
      
      <p>While each of these oils works beautifully on its own, they can be even more effective when combined. Here are some diffuser blend recipes to try:</p>
      
      <h3>Deep Sleep Blend</h3>
      <ul>
        <li>3 drops Lavender</li>
        <li>2 drops Cedarwood</li>
        <li>1 drop Vetiver</li>
      </ul>
      
      <h3>Sweet Dreams Blend</h3>
      <ul>
        <li>2 drops Roman Chamomile</li>
        <li>2 drops Lavender</li>
        <li>2 drops Bergamot</li>
      </ul>
      
      <h3>Tranquil Night Blend</h3>
      <ul>
        <li>3 drops Lavender</li>
        <li>2 drops Bergamot</li>
        <li>1 drop Cedarwood</li>
      </ul>
      
      <h2>Creating a Sleep-Promoting Routine with Essential Oils</h2>
      
      <p>Essential oils work best as part of a consistent bedtime routine. Here's a simple routine to try:</p>
      
      <ol>
        <li>Begin diffusing your chosen sleep blend in your bedroom 30 minutes before bedtime.</li>
        <li>Take a warm bath with 5-6 drops of lavender or Roman chamomile mixed with Epsom salts.</li>
        <li>Apply diluted lavender or cedarwood to the bottoms of your feet, back of neck, or wrists.</li>
        <li>Practice deep breathing as you inhale the calming aromas.</li>
        <li>Keep screens away for at least 30 minutes before sleep.</li>
      </ol>
      
      <h2>Safety Considerations</h2>
      
      <p>Always remember these safety tips when using essential oils for sleep:</p>
      
      <ul>
        <li>Dilute properly before any skin application (generally 2-3 drops of essential oil per teaspoon of carrier oil).</li>
        <li>If diffusing all night, use an intermittent diffuser setting, or set a timer for 30-60 minutes.</li>
        <li>Keep oils away from children and pets.</li>
        <li>Bergamot and other citrus oils can cause photosensitivity, so avoid direct sun exposure on skin where these oils have been applied.</li>
        <li>If you're pregnant, nursing, or have medical conditions, consult with a healthcare provider before use.</li>
      </ul>
      
      <p>By incorporating these essential oils into your evening routine, you can create a sleep sanctuary that helps you unwind, relax, and enjoy the deep, restorative sleep your body needs.</p>
      
      <p>What essential oils have helped with your sleep? Share your experiences in the comments below!</p>
    `,
    image: "/images/sleep-oils.jpg",
    date: "2025-05-02",
    author: "Michael Chen",
    authorTitle: "Aromatherapist",
    authorBio: "Michael Chen is a certified aromatherapist specializing in sleep and stress management solutions. With a background in holistic health, Michael combines scientific research with traditional practices to create effective essential oil protocols.",
    authorImage: "/images/author-michael.jpg",
    category: "Wellness",
    tags: ["Sleep", "Relaxation", "Essential Oils", "Bedtime", "Wellness", "Aromatherapy"],
    relatedPosts: ["1", "3", "5"],
    readingTime: "8 min",
    featured: true,
  },
  {
    id: "3",
    title: "Seasonal Wellness: Supporting Your Immune System",
    slug: "seasonal-wellness-immune-system",
    excerpt: "Learn how to support your immune system during changing seasons with these natural approaches.",
    content: `
      <p>As seasons change, our bodies need extra support to adapt and maintain optimal health. Changes in temperature, humidity, and environmental factors can challenge our immune systems, making seasonal wellness strategies essential for maintaining balance throughout the year.</p>
      
      <p>In this comprehensive guide, we'll explore effective natural approaches to support your immune system during seasonal transitions, with a special focus on the beneficial role of essential oils.</p>
      
      <h2>Understanding Seasonal Immune Challenges</h2>
      
      <p>Our immune systems face different challenges with each season:</p>
      
      <ul>
        <li><strong>Spring:</strong> Increased pollen and environmental particles can strain respiratory systems</li>
        <li><strong>Summer:</strong> Heat, sun exposure, and increased outdoor activities can deplete energy</li>
        <li><strong>Fall:</strong> Temperature fluctuations and the beginning of indoor season create new exposures</li>
        <li><strong>Winter:</strong> Less sunlight, more time indoors, and seasonal challenges test immune resilience</li>
      </ul>
      
      <p>These changing conditions require adaptable wellness practices to maintain immune function year-round.</p>
      
      <h2>Essential Oils for Immune Support</h2>
      
      <h3>On Guard Protective Blend</h3>
      
      <p>This powerful blend combines Wild Orange, Clove, Cinnamon, Eucalyptus, and Rosemary to create a protective formula that supports healthy immune function when seasonal threats are high.</p>
      
      <p><strong>How to use:</strong> Diffuse 3-4 drops to purify the air, apply diluted to the bottoms of feet during seasonal challenges, or take internally as dietary supplements (in appropriate forms).</p>
      
      <h3>Tea Tree (Melaleuca)</h3>
      
      <p>Known for its purifying properties, Tea Tree oil supports the immune system and helps maintain a healthy environment when diffused.</p>
      
      <p><strong>How to use:</strong> Add to homemade surface cleaners, diffuse to purify air, or apply diluted to skin for cleansing benefits.</p>
      
      <h3>Oregano</h3>
      
      <p>One of nature's most powerful oils, Oregano contains carvacrol and thymol, compounds that possess strong purifying properties and immune support.</p>
      
      <p><strong>How to use:</strong> Take internally as dietary supplements when seasonal threats are high (follow proper dilution guidelines), or apply heavily diluted to the bottoms of feet.</p>
      
      <h3>Lemon</h3>
      
      <p>This cleansing citrus oil supports the body's natural detoxification processes and provides immune-supporting properties.</p>
      
      <p><strong>How to use:</strong> Add to water for a refreshing drink that supports hydration and cleansing, diffuse for an uplifting atmosphere, or use in homemade cleaning products.</p>
      
      <h3>Frankincense</h3>
      
      <p>Often called the "king of oils," Frankincense promotes cellular health and immune function while offering powerful relaxation benefits.</p>
      
      <p><strong>How to use:</strong> Apply to the bottoms of feet or spine to promote feelings of relaxation and immune support, diffuse during meditation, or take internally as a dietary supplement.</p>
      
      <h2>Holistic Immune Support Strategies</h2>
      
      <p>Essential oils work best as part of a comprehensive approach to seasonal wellness:</p>
      
      <h3>Nutrition</h3>
      
      <p>Focus on immune-supporting foods rich in vitamins C, D, and zinc:</p>
      
      <ul>
        <li>Colorful fruits and vegetables (berries, citrus, leafy greens)</li>
        <li>Probiotic-rich foods (yogurt, sauerkraut, kefir)</li>
        <li>Garlic and onions</li>
        <li>Nuts and seeds</li>
        <li>Quality proteins</li>
      </ul>
      
      <h3>Hydration</h3>
      
      <p>Proper hydration is crucial for immune function. Add immune-supporting oils like Lemon or On Guard to your water (only use oils approved for internal use, and only 1-2 drops per large glass).</p>
      
      <h3>Sleep</h3>
      
      <p>Quality sleep is essential for immune resilience. Create a sleep-promoting routine with calming oils like Lavender, Cedarwood, or Serenity blend.</p>
      
      <h3>Movement</h3>
      
      <p>Regular, moderate exercise supports immune function. Adjust your activities seasonally—outdoor walks in spring and fall, swimming in summer, and indoor yoga or home workouts in winter.</p>
      
      <h3>Stress Management</h3>
      
      <p>Chronic stress compromises immune function. Use Adaptiv, Balance, or Peace blends to create emotional balance during seasonal transitions.</p>
      
      <h2>Seasonal Wellness Protocols</h2>
      
      <h3>Morning Routine for Immune Support</h3>
      
      <ol>
        <li>Begin your day with a glass of water with 1 drop of Lemon oil</li>
        <li>Apply diluted On Guard to the bottoms of feet</li>
        <li>Diffuse an uplifting blend like Wild Orange and Peppermint while preparing for the day</li>
        <li>Take immune-supporting supplements as recommended by your healthcare provider</li>
      </ol>
      
      <h3>Environmental Support</h3>
      
      <ol>
        <li>Diffuse purifying oils throughout the day (On Guard, Tea Tree, Lemon, or Eucalyptus)</li>
        <li>Create a natural surface cleaner with water, vinegar, and protective essential oils</li>
        <li>Apply diluted Frankincense to pulse points during the day for continuous immune support</li>
      </ol>
      
      <h3>Evening Wind-Down for Immune Resilience</h3>
      
      <ol>
        <li>Enjoy a warm bath with Epsom salts and Lavender oil</li>
        <li>Diffuse calming oils that also support immunity (Frankincense, On Guard, Lavender)</li>
        <li>Apply diluted Tea Tree or On Guard to the bottoms of feet before bed</li>
        <li>Practice deep breathing or meditation with Adaptiv or Peace blend</li>
      </ol>
      
      <h2>Special Considerations for Different Age Groups</h2>
      
      <h3>Children</h3>
      
      <p>Use gentler approaches for children, always diluting oils more heavily and focusing on diffusion for younger children. Kid-safe oils include Lavender, Wild Orange, and specially formulated children's blends.</p>
      
      <h3>Elderly</h3>
      
      <p>Older adults may benefit from more frequent, gentle applications of immune-supporting protocols. Focus on consistent daily practices rather than intensive approaches.</p>
      
      <h2>When to Seek Professional Support</h2>
      
      <p>While these natural approaches can significantly enhance your seasonal wellness, they aren't replacements for professional healthcare. Consult with your healthcare provider if:</p>
      
      <ul>
        <li>You experience severe or persistent symptoms</li>
        <li>You have underlying health conditions</li>
        <li>You're pregnant, nursing, or caring for infants</li>
        <li>You're taking medications that might interact with supplements or oils</li>
      </ul>
      
      <p>By implementing these comprehensive seasonal wellness strategies, you can help your body maintain immune resilience throughout the year's changing conditions. Essential oils offer powerful natural support that, when used properly as part of a holistic approach, can help you thrive in every season.</p>
      
      <p>What are your favorite ways to support your immune system during seasonal changes? Share your experiences in the comments below!</p>
    `,
    image: "/images/immune-support.jpg",
    date: "2025-04-28",
    author: "Elena Rodriguez",
    authorTitle: "Wellness Educator",
    authorBio: "Elena Rodriguez is a wellness educator and essential oil advocate with a passion for teaching natural solutions for seasonal health challenges. She conducts workshops throughout the country on immune support and wellness.",
    authorImage: "/images/author-elena.jpg",
    category: "Wellness",
    tags: ["Immune Support", "Seasonal", "Wellness", "Essential Oils", "Natural Health"],
    relatedPosts: ["2", "7", "8"],
    readingTime: "10 min",
    featured: false,
  },
];

// Mock function to find post by slug
const getPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug) || blogPosts[0];
};

// Mock function to get related posts
const getRelatedPosts = (relatedIds: string[]) => {
  return blogPosts.filter(post => relatedIds.includes(post.id));
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug as string);
  const relatedPosts = getRelatedPosts(post.relatedPosts || []);
  
  return (
    <div>
      {/* Navigation breadcrumbs */}
      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">Acasă</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-primary-600">Blog</Link>
            <span className="mx-2">/</span>
            <Link href={`/blog?category=${post.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary-600">
              {post.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{post.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Featured label */}
          {post.featured && (
            <div className="mb-4">
              <span className="inline-block bg-primary-600 text-white px-3 py-1 text-xs font-semibold rounded">
                Articol Recomandat
              </span>
            </div>
          )}

          {/* Blog post header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-gray-600 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex-shrink-0">
                  {/* Author avatar placeholder */}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{post.author}</div>
                  <div className="text-sm">{post.authorTitle}</div>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v7.5" />
                  </svg>
                  {new Date(post.date).toLocaleDateString("ro-RO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                
                <div className="flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  {post.readingTime} de citit
                </div>
              </div>
            </div>
          </div>

          {/* Featured image */}
          <div className="mb-10">
            <div className="aspect-[16/9] bg-gray-200 rounded-xl overflow-hidden">
              {/* Replace with actual blog post images when available */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-400">{post.title}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-8/12">
              {/* Blog post content */}
              <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }}></div>
  
              {/* Tags */}
              <div className="mb-12">
                <h3 className="text-lg font-semibold mb-3">Tag-uri:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link 
                      key={index}
                      href={`/blog?tag=${tag.toLowerCase()}`}
                      className="inline-block bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
  
              <Separator className="mb-8" />
  
              {/* Author bio */}
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-16 p-6 bg-gray-50 rounded-xl">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex-shrink-0">
                  {/* Replace with actual author image */}
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1 text-center sm:text-left">{post.author}</h3>
                  <div className="text-primary-600 font-medium text-sm mb-3 text-center sm:text-left">{post.authorTitle}</div>
                  <p className="text-gray-700">{post.authorBio}</p>
                </div>
              </div>
  
              {/* Comments section (for MVP, just showing the form without functionality) */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Lasă un comentariu</h2>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Nume *</label>
                      <Input id="name" required className="w-full rounded-lg" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                      <Input id="email" type="email" required className="w-full rounded-lg" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium mb-2">Comentariu *</label>
                    <textarea 
                      id="comment"
                      rows={6}
                      className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="saveInfo"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="saveInfo" className="text-sm font-normal">
                      Salvează-mi numele și email-ul pentru următorul comentariu
                    </label>
                  </div>
                  <Button type="submit" className="bg-primary-600 hover:bg-primary-700">
                    Trimite comentariu
                  </Button>
                </form>
              </div>
            </div>
            
            <div className="lg:w-4/12">
              {/* Sidebar */}
              <div className="sticky top-24 space-y-8">
                {/* Share buttons */}
                <div className="bg-white p-6 rounded-xl border shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Distribuie articolul</h3>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                      </svg>
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                      LinkedIn
                    </Button>
                  </div>
                </div>
                
                {/* Related posts sidebar */}
                <div className="bg-white p-6 rounded-xl border shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Articole similare</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="flex gap-3 group">
                        <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0">
                          {/* Thumbnail placeholder */}
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2 group-hover:text-primary-600 transition-colors">
                            <Link href={`/blog/${relatedPost.slug}`}>
                              {relatedPost.title}
                            </Link>
                          </h4>
                          <div className="text-xs text-gray-500 mt-1">
                            {new Date(relatedPost.date).toLocaleDateString("ro-RO", {
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
                
                {/* Popular tags */}
                <div className="bg-white p-6 rounded-xl border shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Tag-uri populare</h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(blogPosts.flatMap(post => post.tags))).slice(0, 10).map((tag, index) => (
                      <Link 
                        key={index}
                        href={`/blog?tag=${tag.toLowerCase()}`}
                        className="inline-block bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Newsletter signup */}
                <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
                  <h3 className="text-lg font-semibold mb-2 text-primary-900">Abonează-te la newsletter</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Primește cele mai noi articole și resurse direct în inbox-ul tău.
                  </p>
                  <div className="space-y-2">
                    <Input placeholder="Email-ul tău" className="w-full" />
                    <Button className="w-full bg-primary-600 hover:bg-primary-700">
                      Abonează-te
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
