import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  // Team members data
  const teamMembers = [
    {
      name: "Dr. Maria Popa",
      role: "Fondator & CEO",
      bio: "Cu peste 15 ani de experiență în aromaterapie și medicină integrativă, Dr. Maria a fondat doTERRA România cu misiunea de a îmbunătăți viața oamenilor prin puterea uleiurilor esențiale pure.",
      image: "/images/team/maria.jpg"
    },
    {
      name: "Alexandru Ionescu",
      role: "Director Operațiuni",
      bio: "Alexandru aduce peste 10 ani de experiență în lanțuri de aprovizionare și operațiuni, asigurându-se că produsele noastre sunt livrate la standarde impecabile și în mod eficient.",
      image: "/images/team/alexandru.jpg"
    },
    {
      name: "Elena Dumitrescu",
      role: "Specialist Educație Wellness",
      bio: "Certificată în aromaterapie și nutriție, Elena dezvoltă programe educaționale pentru a ajuta clienții și Wellness Advocates să utilizeze uleiurile esențiale în mod eficient și sigur.",
      image: "/images/team/elena.jpg"
    },
    {
      name: "Mihai Stancu",
      role: "Director Marketing",
      bio: "Cu un background în marketing digital și branding, Mihai conduce strategiile care ajută la împărtășirea misiunii doTERRA cu un public mai larg în România.",
      image: "/images/team/mihai.jpg"
    },
  ];
  
  // Values data
  const coreValues = [
    {
      title: "Puritate",
      description: "Ne dedicăm furnizării de uleiuri esențiale 100% pure, fără diluanți, aditivi sintetici sau contaminanți. Fiecare lot este testat de laboratoare independente pentru a asigura cea mai înaltă calitate.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.306 48.306 0 0 1-8.135-1.587c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
    },
    {
      title: "Sustenabilitate",
      description: "Prin programul nostru Co-Impact Sourcing, construim relații etice cu producători din întreaga lume, asigurând practici agricole sustenabile și sprijinind comunitățile locale.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
    },
    {
      title: "Integritate",
      description: "Acționăm cu onestitate și transparență în toate aspectele afacerii noastre, de la aprovizionare și testare până la marketing și servicii pentru clienți.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
    },
    {
      title: "Inovație",
      description: "Căutăm constant modalități noi și mai bune de a extrage, furniza și utiliza uleiurile esențiale, investind în cercetare pentru a ne asigura că oferim cea mai înaltă calitate disponibilă.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
    },
    {
      title: "Empatie",
      description: "Înțelegem că fiecare persoană are nevoi unice de wellness. Ascultăm, sprijinim și educăm, punând întotdeauna binele clienților noștri pe primul loc.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      ),
    },
    {
      title: "Comunitate",
      description: "Credem în puterea comunității. Crearea unui mediu de suport pentru clienți și Wellness Advocates este esențială pentru misiunea noastră de a răspândi beneficiile uleiurilor esențiale.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
        </svg>
      ),
    },
  ];
  
  // Milestones
  const milestones = [
    {
      year: 2008,
      title: "Fondarea doTERRA",
      description: "doTERRA a fost fondată cu misiunea de a furniza uleiuri esențiale pure, naturale și de înaltă calitate pentru familii din întreaga lume."
    },
    {
      year: 2010,
      title: "Lansarea Co-Impact Sourcing",
      description: "Inițiativa Co-Impact Sourcing a fost lansată pentru a crea parteneriate sustenabile cu producători din întreaga lume."
    },
    {
      year: 2012,
      title: "Deschiderea primului birou internațional",
      description: "doTERRA își începe extinderea globală, deschizând birouri în afara Statelor Unite."
    },
    {
      year: 2015,
      title: "Lansarea în România",
      description: "doTERRA se extinde în România, aducând uleiurile esențiale de cea mai înaltă calitate pe piața locală."
    },
    {
      year: 2018,
      title: "Inaugurarea Centrului European",
      description: "Deschiderea centrului european pentru a servi mai bine clienții din România și din întreaga Europă."
    },
    {
      year: 2022,
      title: "Premii pentru Sustenabilitate",
      description: "Recunoaștere internațională pentru practicile noastre sustenabile și impactul pozitiv în comunitățile globale."
    }
  ];

  return (
    <div>
      {/* Hero section */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="text-primary-200 text-sm uppercase tracking-widest mb-3 font-medium inline-block">Despre noi</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Misiunea Noastră Pentru Un Wellness Natural</h1>
            <p className="text-lg text-white/80 mb-8">
              Transformăm viețile oamenilor prin puterea uleiurilor esențiale pure. Descoperă povestea noastră, valorile care ne ghidează și echipa dedicată din spatele doTERRA România.
            </p>
          </div>
        </div>
      </section>
      
      {/* Who we are section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                  <div className="aspect-[4/3] bg-gray-200">
                    {/* Replace with actual image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400">Company Image</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-primary-50 rounded-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-1/3 h-1/3 bg-primary-100 rounded-2xl -z-10"></div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="mb-2">
                <span className="bg-primary-50 text-primary-700 px-4 py-1.5 rounded-full text-sm font-medium">Cine suntem</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">Dedicați Excelenței în Wellness Natural</h2>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  La doTERRA România, suntem dedicați furnizării de uleiuri esențiale de cea mai înaltă calitate, cu un angajament față de puritate, integritate și sustenabilitate. De la fondarea companiei în 2008, misiunea noastră a fost să aducem puterea transformatoare a naturii în casele oamenilor din întreaga lume.
                </p>
                <p>
                  Ca lider în industria uleiurilor esențiale, ne ghidăm după standarde riguroase pentru a asigura că fiecare picătură de ulei este testată, verificată și certificată pentru puritate. Echipa noastră de experți lucrează neîncetat pentru a educa, inova și a oferi suport clienților și partenerilor noștri.
                </p>
                <p>
                  Prin programul nostru unic Co-Impact Sourcing, construim relații etice și sustenabile cu cultivatori din întreaga lume, asigurând nu doar cea mai înaltă calitate a produselor, ci și un impact pozitiv în comunitățile globale.
                </p>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Contactează-ne</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/shop">Descoperă Produsele</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-primary-50 text-primary-700 px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-3">Valorile noastre</span>
            <h2 className="text-3xl font-bold mb-4">Principiile Care Ne Ghidează</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              La doTERRA, valorile noastre ne definesc activitatea și relațiile cu clienții, partenerii și comunitățile din întreaga lume.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline/Milestones */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-white/10 backdrop-blur-sm text-white/90 px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-3">Istoric</span>
            <h2 className="text-3xl font-bold mb-4">Călătoria Noastră</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              De la înființare până în prezent, fiecare etapă a călătoriei noastre ne-a apropiat de misiunea de a transforma viețile prin wellness natural.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 -ml-0.5 w-0.5 h-full bg-white/20"></div>
            
            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 flex justify-start items-center md:items-start">
                    <div className="flex items-center">
                      <div className="w-12 h-12 flex-shrink-0 bg-primary-600 rounded-full flex items-center justify-center border-4 border-primary-800 z-10">
                        <span className="font-bold">{milestone.year}</span>
                      </div>
                      <div className={`hidden md:block h-0.5 w-12 bg-white/20 ${index % 2 === 0 ? 'order-first -mr-1' : '-ml-1'}`}></div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 pt-2 md:pt-0">
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-white/80">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-primary-50 text-primary-700 px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-3">Echipa noastră</span>
            <h2 className="text-3xl font-bold mb-4">Oamenii din Spatele Misiunii</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cunoaște echipa dedicată care face posibilă furnizarea de uleiuri esențiale pure și educație wellness de calitate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <div className="aspect-[3/4] bg-gray-200">
                    {/* Replace with actual team member image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400">{member.name}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                    <p className="text-white text-center">{member.bio}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Alătură-te Echipei Noastre</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Ești pasionat de wellness natural și dorești să faci parte din misiunea noastră? Explorează oportunitățile de carieră și descoperă cum poți avea un impact pozitiv.
            </p>
            <Button size="lg" asChild>
              <Link href="/careers">Vezi Pozițiile Disponibile</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-primary-50 text-primary-700 px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-3">Testimoniale</span>
            <h2 className="text-3xl font-bold mb-4">Ce Spun Clienții Noștri</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experiențele reale ale clienților noștri reflectă angajamentul nostru față de produse de calitate și servicii excepționale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <div className="mb-6">
                <svg className="w-12 h-12 text-primary-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.332.303-.706.814-1.416 1.534-2.13l.013-.013-1.45-1.42c-.78.81-1.416 1.76-1.9 2.86C5.818 10.777 5.57 12.006 5.57 13.5c0 1.265.305 2.288.913 3.07.607.782 1.438 1.172 2.49 1.172.997 0 1.788-.26 2.366-.78.577-.52.866-1.195.866-2.023l-.013-.084zm7.425 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.812-.56-.137-1.067-.146-1.54-.028-.16-.95.09-1.626.41-2.332.31-.706.814-1.416 1.534-2.13l.013-.013-1.456-1.42c-.79.81-1.426 1.76-1.9 2.86-.595 1.194-.842 2.42-.842 3.916 0 1.265.305 2.288.913 3.07.608.782 1.438 1.172 2.49 1.172.997 0 1.788-.26 2.366-.78.578-.52.866-1.195.866-2.023l-.013-.084z"/>
                </svg>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Uleiurile esențiale doTERRA au transformat complet rutina mea de wellness. Calitatea și puritatea lor sunt incomparabile, iar suportul pe care l-am primit de la echipă a fost extraordinar. Recomand cu căldură!
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-semibold">Maria Ionescu</h4>
                  <p className="text-gray-500">Client din 2019</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <div className="mb-6">
                <svg className="w-12 h-12 text-primary-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.332.303-.706.814-1.416 1.534-2.13l.013-.013-1.45-1.42c-.78.81-1.416 1.76-1.9 2.86C5.818 10.777 5.57 12.006 5.57 13.5c0 1.265.305 2.288.913 3.07.607.782 1.438 1.172 2.49 1.172.997 0 1.788-.26 2.366-.78.577-.52.866-1.195.866-2.023l-.013-.084zm7.425 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.812-.56-.137-1.067-.146-1.54-.028-.16-.95.09-1.626.41-2.332.31-.706.814-1.416 1.534-2.13l.013-.013-1.456-1.42c-.79.81-1.426 1.76-1.9 2.86-.595 1.194-.842 2.42-.842 3.916 0 1.265.305 2.288.913 3.07.608.782 1.438 1.172 2.49 1.172.997 0 1.788-.26 2.366-.78.578-.52.866-1.195.866-2.023l-.013-.084z"/>
                </svg>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Ca practician în domeniul wellness, recomand doar produse în care cred cu adevărat. Angajamentul doTERRA față de calitate și sustenabilitate îi face prima mea alegere pentru clienți. Rezultatele vorbesc de la sine!
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mr-4">
                  A
                </div>
                <div>
                  <h4 className="font-semibold">Alexandru Popescu</h4>
                  <p className="text-gray-500">Coach de Sănătate Holistică</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Hai Să Discutăm</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Ai întrebări despre produsele sau misiunea noastră? Echipa noastră dedicată este aici pentru a te ajuta și a-ți oferi suportul necesar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contactează-ne</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
              <Link href="/faq">Întrebări Frecvente</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
