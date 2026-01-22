import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Award, Filter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  const { t, language } = useLanguage();

  const lang = language || 'en';

  // Handle URL hash for scrolling to specific course
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const decodedHash = decodeURIComponent(hash).toLowerCase();
        const courseElement = document.querySelector(`[data-course-title="${decodedHash}"]`);
        
        if (courseElement) {
          setTimeout(() => {
            courseElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setOpenDialog(decodedHash);
          }, 300);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const keepEnglishTitleInPl = new Set<string>([
    'SEO and Content Marketing',
    'Responsible Prompting: Maximize AI in Your Business',
    'Azure Fundamentals',
    'Harvard Business Publishing - Business for All',
  ]);

  const categories = ["All", "Featured", "IT", "Business", "Personal Development", "Language", "Other"];

  const featuredTitles = [
    "Algorytmy i struktury danych", "Automatyzacja marketingu", "Nauka konfiguracji sprzętu i zarządzania sieciami komputerowymi",
    "Projektowanie Witryn Internetowych", "Harvard Business Publishing - Business for All", "Podstawy Microsoft Azure",
    "Autodesk Certified User Inventor", "Podstawy sieci komputerowych", "Projektowanie graficzne w Adobe Photoshop",
    "Podstawy administracji Windows Server", "Algorithms and Data Structures", "Marketing Automation",
    "Hardware Configuration and Network Management", "Web Design", "Azure Fundamentals", "Networking Fundamentals",
    "Visual Design Using Adobe Photoshop", "Windows Server Administration Fundamentals"
  ];

  const coursesRaw = [
    {
      titlePl: "Algorytmy i struktury danych",
      titleEn: "Algorithms and Data Structures",
      category: "IT",
      descriptionPl: "Algorytmy i struktury danych — kluczowe koncepcje oraz praktyczne zastosowania.",
      descriptionEn: "Algorithms and data structures — core concepts and practical applications.",
      certificate: "/images/Algorytmy i struktury danych-page-00001.jpg",
      duration: "30h",
      provider: "Akademia",
      completedDate: "2024"
    },
    {
      titlePl: "Business English 1",
      titleEn: "Business English 1",
      category: "Language",
      descriptionPl: "Angielski w biznesie, poziom podstawowy.",
      descriptionEn: "Business English, beginner level.",
      certificate: "/images/Business English 1-page-00001.jpg",
      duration: "20h",
      provider: "Language School",
      completedDate: "2024"
    },
    {
      titlePl: "Business English 2",
      titleEn: "Business English 2",
      category: "Language",
      descriptionPl: "Angielski w biznesie, poziom średni.",
      descriptionEn: "Business English, intermediate level.",
      certificate: "/images/Business English 2-page-00001.jpg",
      duration: "20h",
      provider: "Language School",
      completedDate: "2024"
    },
    {
      titlePl: "Business English 3",
      titleEn: "Business English 3",
      category: "Language",
      descriptionPl: "Angielski w biznesie, poziom zaawansowany.",
      descriptionEn: "Business English, advanced level.",
      certificate: "/images/Business English 3-page-00001.jpg",
      duration: "20h",
      provider: "Language School",
      completedDate: "2024"
    },
    {
      titlePl: "Podstawy zachowań konsumenckich",
      titleEn: "Consumer Behavior Essentials",
      category: "Business",
      descriptionPl: "Jak klienci podejmują decyzje zakupowe.",
      descriptionEn: "How customers make buying decisions.",
      certificate: "/images/Consumer Behavior Essentials-page-00001.jpg",
      duration: "10h",
      provider: "Business Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Copilot",
      titleEn: "Copilot",
      category: "IT",
      descriptionPl: "Przegląd możliwości i zastosowań Microsoft Copilot w pracy inżynierskiej.",
      descriptionEn: "Overview of Microsoft Copilot capabilities and engineering use cases.",
      certificate: "/images/Copilot-page-00001.jpg",
      duration: "5h",
      provider: "Microsoft",
      completedDate: "2024"
    },
    {
      titlePl: "Transformacja cyfrowa w biznesie",
      titleEn: "Digital Transformation",
      category: "Business",
      descriptionPl: "Nowoczesne technologie w firmach.",
      descriptionEn: "Modern technologies in business.",
      certificate: "/images/Digital Transformation-page-00001.jpg",
      duration: "8h",
      provider: "Business Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Efektywna komunikacja pisemna w biznesie",
      titleEn: "Effective Written Communication in Business",
      category: "Business",
      descriptionPl: "Pisanie skutecznych wiadomości biznesowych.",
      descriptionEn: "Writing effective business messages.",
      certificate: "/images/Efektywna komunikacja pisemna w biznesie-page-00001.jpg",
      duration: "6h",
      provider: "Business Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Efektywna komunikacja",
      titleEn: "Effective Communication",
      category: "Personal Development",
      descriptionPl: "Jak lepiej rozmawiać i słuchać.",
      descriptionEn: "How to speak and listen better.",
      certificate: "/images/Efektywna komunikacja-page-00001.jpg",
      duration: "6h",
      provider: "Personal Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Excel - Od Podstaw do zaawansowanego użytkownika",
      titleEn: "Excel - From Basics to Advanced",
      category: "IT",
      descriptionPl: "Praktyczne umiejętności pracy w Excelu.",
      descriptionEn: "Practical Excel skills.",
      certificate: "/images/Excel - Od Podstaw do zaawansowanego użytkownika-page-00001.jpg",
      duration: "15h",
      provider: "IT Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Sztuczna inteligencja Google i produktywność",
      titleEn: "Google Artificial Intelligence and Productivity",
      category: "IT",
      descriptionPl: "AI Google w codziennej pracy.",
      descriptionEn: "Google AI for everyday work.",
      certificate: "/images/Google Artificial intelligence and productivity-page-00001.jpg",
      duration: "4h",
      provider: "Google",
      completedDate: "2024"
    },
    {
      titlePl: "Wprowadzenie do Data Science",
      titleEn: "Introduction to Data Science",
      category: "IT",
      descriptionPl: "Fundamenty Data Science: analiza danych, wnioskowanie i interpretacja wyników.",
      descriptionEn: "Data Science fundamentals: analysis, reasoning and results interpretation.",
      certificate: "/images/Introduction to Data Science-page-00001.jpg",
      duration: "12h",
      provider: "Data Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Krytyczne myślenie i rozwiązywanie problemów",
      titleEn: "Critical Thinking and Problem Solving",
      category: "Personal Development",
      descriptionPl: "Jak analizować i rozwiązywać trudne sytuacje.",
      descriptionEn: "How to analyze and solve tough situations.",
      certificate: "/images/Krytyczne myślenie i rozwiązywanie problemów-page-00001.jpg",
      duration: "8h",
      provider: "Personal Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Przywództwo w cyfrowym świecie",
      titleEn: "Leading in a Digital World",
      category: "Business",
      descriptionPl: "Zarządzanie zespołem w nowoczesnej firmie.",
      descriptionEn: "Managing teams in modern companies.",
      certificate: "/images/Leading in a Digital World-page-00001.jpg",
      duration: "10h",
      provider: "Business Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Automatyzacja marketingu",
      titleEn: "Marketing Automation",
      category: "Business",
      descriptionPl: "Narzędzia do automatyzacji działań marketingowych.",
      descriptionEn: "Tools for automating marketing tasks.",
      certificate: "/images/Marketing Automation-page-00001.jpg",
      duration: "7h",
      provider: "Marketing Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Mindfulness i równowaga w pracy",
      titleEn: "Mindfulness & Worklife Balance",
      category: "Personal Development",
      descriptionPl: "Techniki relaksacji i zarządzania stresem.",
      descriptionEn: "Relaxation and stress management techniques.",
      certificate: "/images/Mindfulness & Worklife balance-page-00001.jpg",
      duration: "6h",
      provider: "Personal Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Myślenie strategiczne i nastawienie strategiczne",
      titleEn: "Strategic Thinking and Mindset",
      category: "Personal Development",
      descriptionPl: "Planowanie i podejmowanie decyzji.",
      descriptionEn: "Planning and decision making.",
      certificate: "/images/Myślenie strategiczne i nastawienie strategiczne-page-00001.jpg",
      duration: "8h",
      provider: "Personal Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Nauka konfiguracji sprzętu i zarządzania sieciami komputerowymi",
      titleEn: "Hardware Configuration and Network Management",
      category: "IT",
      descriptionPl: "Architektura sieci komputerowych oraz konfiguracja sprzętu i infrastruktury.",
      descriptionEn: "Network architecture and hardware/infrastructure configuration.",
      certificate: "/images/Nauka konguracji sprzętu i zarządzania sieciami komputerowymi-page-00001.jpg",
      duration: "10h",
      provider: "IT Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Negocjacje",
      titleEn: "Negotiations",
      category: "Business",
      descriptionPl: "Techniki skutecznych negocjacji.",
      descriptionEn: "Effective negotiation techniques.",
      certificate: "/images/Negocjacje-page-00001.jpg",
      duration: "6h",
      provider: "Business Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Podstawy ChatGPT",
      titleEn: "ChatGPT Basics",
      category: "IT",
      descriptionPl: "Praktyczne zastosowania ChatGPT: prompt engineering, automatyzacje i wsparcie pracy.",
      descriptionEn: "Practical use of ChatGPT: prompt engineering, automations and productivity.",
      certificate: "/images/Podstawy ChatGPT-page-00001.jpg",
      duration: "4h",
      provider: "OpenAI",
      completedDate: "2024"
    },
    {
      titlePl: "Podstawy języka Javascript - języka przeglądarek internetowych",
      titleEn: "JavaScript Basics for Browsers",
      category: "IT",
      descriptionPl: "Tworzenie interaktywnych stron WWW.",
      descriptionEn: "Building interactive web pages.",
      certificate: "/images/Podstawy języka Javascript - języka przeglądarek internetowych-page-00001.jpg",
      duration: "10h",
      provider: "IT Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Podstawy Pythona",
      titleEn: "Python Basics",
      category: "IT",
      descriptionPl: "Fundamenty programowania w Pythonie: składnia, struktury danych i dobre praktyki.",
      descriptionEn: "Python fundamentals: syntax, data structures and best practices.",
      certificate: "/images/Podstawy Pythona-page-00001.jpg",
      duration: "10h",
      provider: "IT Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Podstawy Scruma - zwinne zarządzanie projektami",
      titleEn: "Scrum Basics - Agile Project Management",
      category: "Business",
      descriptionPl: "Zasady pracy zespołowej w Scrum.",
      descriptionEn: "Teamwork principles in Scrum.",
      certificate: "/images/Podstawy Scruma - zwinne zarządzanie projektami-page-00001.jpg",
      duration: "8h",
      provider: "Business Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Power BI",
      titleEn: "Power BI",
      category: "IT",
      descriptionPl: "Tworzenie raportów i wizualizacji danych.",
      descriptionEn: "Creating reports and data visualizations.",
      certificate: "/images/Power BI-page-00001.jpg",
      duration: "10h",
      provider: "IT Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Projektowanie Witryn Internetowych",
      titleEn: "Web Design",
      category: "IT",
      descriptionPl: "Tworzenie nowoczesnych stron WWW.",
      descriptionEn: "Creating modern websites.",
      certificate: "/images/Projektowanie Witryn Internetowych-page-00001.jpg",
      duration: "12h",
      provider: "IT Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Przywództwo",
      titleEn: "Leadership",
      category: "Personal Development",
      descriptionPl: "Umiejętności zarządzania zespołem.",
      descriptionEn: "Team management skills.",
      certificate: "/images/Przywództwo-page-00001.jpg",
      duration: "8h",
      provider: "Personal Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Odpowiedzialne korzystanie z AI w biznesie",
      titleEn: "Responsible Prompting: Maximize AI in Your Business",
      category: "Business",
      descriptionPl: "Bezpieczne wdrażanie AI w firmie.",
      descriptionEn: "Safe implementation of AI in business.",
      certificate: "/images/Responsible prompting maximize AI in your business-page-00001.jpg",
      duration: "4h",
      provider: "Business Academy",
      completedDate: "2024"
    },
    {
      titlePl: "SEO i marketing treści",
      titleEn: "SEO and Content Marketing",
      category: "Business",
      descriptionPl: "Pozycjonowanie i promocja treści online.",
      descriptionEn: "SEO and online content promotion.",
      certificate: "/images/SEO and Content Marketing-page-00001.jpg",
      duration: "8h",
      provider: "Marketing Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Storytelling w marketingu cyfrowym",
      titleEn: "Storytelling for Digital Marketing",
      category: "Business",
      descriptionPl: "Jak opowiadać historie w reklamie.",
      descriptionEn: "How to tell stories in advertising.",
      certificate: "/images/Storytelling for Digital Marketing-page-00001.jpg",
      duration: "6h",
      provider: "Marketing Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Komunikacja strategiczna i praca zespołowa",
      titleEn: "Strategic Communication & Teamwork",
      category: "Business",
      descriptionPl: "Współpraca i komunikacja w zespole.",
      descriptionEn: "Collaboration and communication in teams.",
      certificate: "/images/Strategic Communication & Teamwork-page-00001.jpg",
      duration: "8h",
      provider: "Business Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Dobrostan w miejscu pracy i stres",
      titleEn: "Workplace Well-being and Stress",
      category: "Personal Development",
      descriptionPl: "Jak dbać o zdrowie psychiczne w pracy.",
      descriptionEn: "How to care for mental health at work.",
      certificate: "/images/Workplace well-being and stress-page-00001.jpg",
      duration: "6h",
      provider: "Personal Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Wprowadzenie do sieci komputerowych",
      titleEn: "Introduction to Computer Networks",
      category: "IT",
      descriptionPl: "Architektura i protokoły sieci komputerowych: model warstwowy, routing i podstawy bezpieczeństwa.",
      descriptionEn: "Architecture and protocols of computer networks: layered model, routing, and security fundamentals.",
      certificate: "/images/Wprowadzenie do sieci komputerowych-page-00001.jpg",
      duration: "10h",
      provider: "IT Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Autodesk Certified User Inventor",
      titleEn: "Autodesk Certified User Inventor",
      category: "IT",
      descriptionPl: "Certyfikat obsługi Autodesk Inventor.",
      descriptionEn: "Autodesk Inventor user certificate.",
      certificate: "/images/Autodesk Certified User Inventor_page-0001.jpg",
      duration: "10h",
      provider: "Autodesk",
      completedDate: "2024"
    },
    {
      titlePl: "Podstawy Microsoft Azure",
      titleEn: "Azure Fundamentals",
      category: "IT",
      descriptionPl: "Fundamenty platformy Azure: usługi chmurowe, bezpieczeństwo, zarządzanie i koszty.",
      descriptionEn: "Azure fundamentals: cloud services, security, management and costs.",
      certificate: "/images/Azure Fundamentals_page-0001.jpg",
      duration: "8h",
      provider: "Microsoft",
      completedDate: "2024"
    },
    {
      titlePl: "Harvard Business Publishing - Business for All",
      titleEn: "Harvard Business Publishing - Business for All",
      category: "Business",
      descriptionPl: "Podstawy zarządzania według Harvard Business Publishing.",
      descriptionEn: "Business basics by Harvard Business Publishing.",
      certificate: "/images/Harvard Business Publishing - Business for All.png",
      duration: "10h",
      provider: "Harvard Business Publishing",
      completedDate: "2025"
    },
    {
      titlePl: "Wprowadzenie do cyberbezpieczeństwa",
      titleEn: "Introduction to Cybersecurity",
      category: "IT",
      descriptionPl: "Fundamenty cyberbezpieczeństwa: zagrożenia, kontrola dostępu, praktyki ochrony i higiena bezpieczeństwa.",
      descriptionEn: "Cybersecurity fundamentals: threats, access control, protection practices and security hygiene.",
      certificate: "/images/Introduction to Cybersecurity_page-0001.jpg",
      duration: "8h",
      provider: "Cyber Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Podstawy sieci komputerowych",
      titleEn: "Networking Fundamentals",
      category: "IT",
      descriptionPl: "Fundamenty sieci komputerowych: adresacja, protokoły i diagnozowanie problemów.",
      descriptionEn: "Networking fundamentals: addressing, protocols and troubleshooting.",
      certificate: "/images/Networking Fundamentals_page-0001.jpg",
      duration: "8h",
      provider: "IT Academy",
      completedDate: "2024"
    },
    {
      titlePl: "Projektowanie graficzne w Adobe Photoshop",
      titleEn: "Visual Design Using Adobe Photoshop",
      category: "IT",
      descriptionPl: "Tworzenie grafik w Photoshopie.",
      descriptionEn: "Creating graphics in Photoshop.",
      certificate: "/images/Visual Design Using Adobe Photoshop_page-0001.jpg",
      duration: "10h",
      provider: "Adobe",
      completedDate: "2024"
    },
    {
      titlePl: "Podstawy administracji Windows Server",
      titleEn: "Windows Server Administration Fundamentals",
      category: "IT",
      descriptionPl: "Zarządzanie serwerem Windows.",
      descriptionEn: "Managing Windows Server.",
      certificate: "/images/Windows Server Administration Fundamentals_page-0001.jpg",
      duration: "10h",
      provider: "Microsoft",
      completedDate: "2024"
    }
  ];

  const courses = coursesRaw.map(course => ({
    ...course,
    featured: featuredTitles.includes(course.titlePl) || featuredTitles.includes(course.titleEn)
  }));

  const filteredCourses = selectedCategory === "All"
    ? courses
    : selectedCategory === "Featured"
      ? courses.filter(course => course.featured)
      : courses.filter(course => course.category === selectedCategory);

  const getCategoryTranslation = (category: string) => {
    switch (category) {
      case "All": return t('courses.filterAll');
      case "Featured": return t('courses.filterFeatured');
      case "IT": return t('courses.filterIT');
      case "Business": return t('courses.filterBusiness');
      case "Personal Development": return t('courses.filterPersonal');
      case "Language": return t('courses.filterLanguage');
      case "Other": return t('courses.filterOther');
      default: return category;
    }
  };

  const getCourseTitle = (course: (typeof courses)[number]) => {
    if (lang === 'pl') {
      if (course.category === 'IT' || keepEnglishTitleInPl.has(course.titleEn)) return course.titleEn;
      return course.titlePl;
    }
    return course.titleEn;
  };

  const getCourseDescription = (course: (typeof courses)[number]) => {
    return lang === 'pl' ? course.descriptionPl : course.descriptionEn;
  };

  const labelDuration = lang === 'pl' ? 'Czas Trwania' : 'Duration';
  const labelProvider = lang === 'pl' ? 'Organizator' : 'Provider';
  const labelCompleted = lang === 'pl' ? 'Ukończony' : 'Completed';

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('courses.title').split(' ')[0]} <span className="gradient-text">{t('courses.title').split(' ')[1]}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('courses.subtitle')}
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">{t('courses.filterByCategory')}:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {getCategoryTranslation(category)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => {
            const courseTitleKey = getCourseTitle(course).toLowerCase().replace(/\s+/g, "-");
            const isOpen = openDialog === courseTitleKey;
            
            return (
              <Dialog 
                key={index} 
                open={isOpen} 
                onOpenChange={(open) => setOpenDialog(open ? courseTitleKey : null)}
              >
                <DialogTrigger asChild>
                  <Card 
                    className="glass-effect card-glow group hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full flex flex-col"
                    data-course-title={courseTitleKey}
                    onClick={() => setOpenDialog(courseTitleKey)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {getCategoryTranslation(course.category)}
                        </Badge>
                        {course.featured && <Award className="h-5 w-5 text-yellow-500" />}
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {getCourseTitle(course)}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground line-clamp-2">
                        {getCourseDescription(course)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>{labelDuration}:</span>
                          <span className="font-medium text-foreground">{course.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{labelProvider}:</span>
                          <span className="font-medium text-foreground">{course.provider}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{labelCompleted}:</span>
                          <span className="font-medium text-foreground">{course.completedDate}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl mb-2">{getCourseTitle(course)}</DialogTitle>
                    <DialogDescription className="text-base">
                      {getCourseDescription(course)}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="mt-6 flex flex-col items-center gap-6">
                    <div className="w-full bg-muted rounded-lg overflow-hidden flex items-center justify-center p-2">
                       <img 
                        src={course.certificate} 
                        alt="Certificate"
                        className="max-w-full h-auto max-h-[400px] object-contain rounded-md shadow-sm"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=Certificate+Not+Found';
                        }}
                      />
                    </div>
                    
                    <Button asChild className="w-full sm:w-auto">
                      <a 
                        href={course.certificate} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        download
                      >
                        {t('common.viewCertificate')}
                      </a>
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-muted-foreground">Category:</span>
                      <Badge variant="outline">{getCategoryTranslation(course.category)}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-muted-foreground">{labelDuration}:</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-muted-foreground">{labelProvider}:</span>
                      <span>{course.provider}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-muted-foreground">{labelCompleted}:</span>
                      <span>{course.completedDate}</span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              {t('courses.noCoursesFound')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;