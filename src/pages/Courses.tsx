import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Award, Filter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { t, language } = useLanguage();

  const categories = [
    "All",
    "Featured",
    "IT",
    "Business", 
    "Personal Development",
    "Language",
    "Other"
  ];

  // Lista tytułów kursów wyróżnionych
  const featuredTitles = [
    "Algorytmy i struktury danych",
    "Marketing Automation",
    "Nauka konguracji sprzętu i zarządzania sieciami komputerowymi",
    "Projektowanie Witryn Internetowych",
    "Harvard Business Publishing - Business for All",
    "Azure Fundamentals",
    "Autodesk Certified User Inventor",
    "Networking Fundamentals",
    "Visual Design Using Adobe Photoshop",
    "Windows Server Administration Fundamentals"
  ];

  const coursesRaw = [
    {
      title: "Algorytmy i struktury danych",
      category: "IT",
      description: "Kurs z algorytmów i struktur danych.",
      certificate: "/lovable-uploads/Algorytmy i struktury danych-page-00001.jpg",
      duration: "30h",
      provider: "Akademia",
      completedDate: "2024"
    },
    {
      title: "Business English 1",
      category: "Language",
      description: "Business English - poziom 1.",
      certificate: "/lovable-uploads/Business English 1-page-00001.jpg",
      duration: "20h",
      provider: "Language School",
      completedDate: "2024"
    },
    {
      title: "Business English 2",
      category: "Language",
      description: "Business English - poziom 2.",
      certificate: "/lovable-uploads/Business English 2-page-00001.jpg",
      duration: "20h",
      provider: "Language School",
      completedDate: "2024"
    },
    {
      title: "Business English 3",
      category: "Language",
      description: "Business English - poziom 3.",
      certificate: "/lovable-uploads/Business English 3-page-00001.jpg",
      duration: "20h",
      provider: "Language School",
      completedDate: "2024"
    },
    {
      title: "Consumer Behavior Essentials",
      category: "Business",
      description: "Podstawy zachowań konsumenckich.",
      certificate: "/lovable-uploads/Consumer Behavior Essentials-page-00001.jpg",
      duration: "10h",
      provider: "Business Academy",
      completedDate: "2024"
    },
    {
      title: "Copilot",
      category: "IT",
      description: "Kurs Copilot.",
      certificate: "/lovable-uploads/Copilot-page-00001.jpg",
      duration: "5h",
      provider: "Microsoft",
      completedDate: "2024"
    },
    {
      title: "Digital Transformation",
      category: "Business",
      description: "Transformacja cyfrowa w biznesie.",
      certificate: "/lovable-uploads/Digital Transformation-page-00001.jpg",
      duration: "8h",
      provider: "Business Academy",
      completedDate: "2024"
    },
    {
      title: "Efektywna komunikacja pisemna w biznesie",
      category: "Business",
      description: "Komunikacja pisemna w środowisku biznesowym.",
      certificate: "/lovable-uploads/Efektywna komunikacja pisemna w biznesie-page-00001.jpg",
      duration: "6h",
      provider: "Business Academy",
      completedDate: "2024"
    },
    {
      title: "Efektywna komunikacja",
      category: "Personal Development",
      description: "Kurs efektywnej komunikacji.",
      certificate: "/lovable-uploads/Efektywna komunikacja-page-00001.jpg",
      duration: "6h",
      provider: "Personal Academy",
      completedDate: "2024"
    },
    {
      title: "Excel - Od Podstaw do zaawansowanego użytkownika",
      category: "IT",
      description: "Kurs Excela od podstaw do poziomu zaawansowanego.",
      certificate: "/lovable-uploads/Excel - Od Podstaw do zaawansowanego użytkownika-page-00001.jpg",
      duration: "15h",
      provider: "IT Academy",
      completedDate: "2024"
    },
    {
      title: "Google Artificial intelligence and productivity",
      category: "IT",
      description: "Sztuczna inteligencja Google i produktywność.",
      certificate: "/lovable-uploads/Google Artificial intelligence and productivity-page-00001.jpg",
      duration: "4h",
      provider: "Google",
      completedDate: "2024"
    },
    {
      title: "Introduction to Data Science",
      category: "IT",
      description: "Wprowadzenie do Data Science.",
      certificate: "/lovable-uploads/Introduction to Data Science-page-00001.jpg",
      duration: "12h",
      provider: "Data Academy",
      completedDate: "2024"
    },
    {
      title: "Krytyczne myślenie i rozwiązywanie problemów",
      category: "Personal Development",
      description: "Kurs krytycznego myślenia i rozwiązywania problemów.",
      certificate: "/lovable-uploads/Krytyczne myślenie i rozwiązywanie problemów-page-00001.jpg",
      duration: "8h",
      provider: "Personal Academy",
      completedDate: "2024"
    },
    {
      title: "Leading in a Digital World",
      category: "Business",
      description: "Przywództwo w cyfrowym świecie.",
      certificate: "/lovable-uploads/Leading in a Digital World-page-00001.jpg",
      duration: "10h",
      provider: "Business Academy",
      completedDate: "2024"
    },
    {
      title: "Marketing Automation",
      category: "Business",
      description: "Automatyzacja marketingu.",
      certificate: "/lovable-uploads/Marketing Automation-page-00001.jpg",
      duration: "7h",
      provider: "Marketing Academy",
      completedDate: "2024"
    },
    {
      title: "Mindfulness & Worklife balance",
      category: "Personal Development",
      description: "Mindfulness i równowaga w pracy.",
      certificate: "/lovable-uploads/Mindfulness & Worklife balance-page-00001.jpg",
      duration: "6h",
      provider: "Personal Academy",
      completedDate: "2024"
    },
    {
      title: "Myślenie strategiczne i nastawienie strategiczne",
      category: "Personal Development",
      description: "Kurs myślenia strategicznego.",
      certificate: "/lovable-uploads/Myślenie strategiczne i nastawienie strategiczne-page-00001.jpg",
      duration: "8h",
      provider: "Personal Academy",
      completedDate: "2024"
    },
    {
      title: "Nauka konguracji sprzętu i zarządzania sieciami komputerowymi",
      category: "IT",
      description: "Konfiguracja sprzętu i zarządzanie sieciami komputerowymi.",
      certificate: "/lovable-uploads/Nauka konguracji sprzętu i zarządzania sieciami komputerowymi-page-00001.jpg",
      duration: "10h",
      provider: "IT Academy",
      completedDate: "2024"
    },
    {
      title: "Negocjacje",
      category: "Business",
      description: "Kurs negocjacji.",
      certificate: "/lovable-uploads/Negocjacje-page-00001.jpg",
      duration: "6h",
      provider: "Business Academy",
      completedDate: "2024"
    },
    {
      title: "Podstawy ChatGPT",
      category: "IT",
      description: "Podstawy korzystania z ChatGPT.",
      certificate: "/lovable-uploads/Podstawy ChatGPT-page-00001.jpg",
      duration: "4h",
      provider: "OpenAI",
      completedDate: "2024"
    },
    {
      title: "Podstawy języka Javascript - języka przeglądarek internetowych",
      category: "IT",
      description: "Podstawy JavaScript dla przeglądarek.",
      certificate: "/lovable-uploads/Podstawy języka Javascript - języka przeglądarek internetowych-page-00001.jpg",
      duration: "10h",
      provider: "IT Academy",
      completedDate: "2024"
    },
    {
      title: "Podstawy Pythona",
      category: "IT",
      description: "Podstawy języka Python.",
      certificate: "/lovable-uploads/Podstawy Pythona-page-00001.jpg",
      duration: "10h",
      provider: "IT Academy",
      completedDate: "2024"
    },
    {
      title: "Podstawy Scruma - zwinne zarządzanie projektami",
      category: "Business",
      description: "Podstawy Scruma i zwinnego zarządzania projektami.",
      certificate: "/lovable-uploads/Podstawy Scruma - zwinne zarządzanie projektami-page-00001.jpg",
      duration: "8h",
      provider: "Business Academy",
      completedDate: "2024"
    },
    {
      title: "Power BI",
      category: "IT",
      description: "Kurs Power BI.",
      certificate: "/lovable-uploads/Power BI-page-00001.jpg",
      duration: "10h",
      provider: "IT Academy",
      completedDate: "2024"
    },
    {
      title: "Projektowanie Witryn Internetowych",
      category: "IT",
      description: "Projektowanie stron internetowych.",
      certificate: "/lovable-uploads/Projektowanie Witryn Internetowych-page-00001.jpg",
      duration: "12h",
      provider: "IT Academy",
      completedDate: "2024"
    },
    {
      title: "Przywództwo",
      category: "Personal Development",
      description: "Kurs przywództwa.",
      certificate: "/lovable-uploads/Przywództwo-page-00001.jpg",
      duration: "8h",
      provider: "Personal Academy",
      completedDate: "2024"
    },
    {
      title: "Responsible prompting maximize AI in your business",
      category: "Business",
      description: "Odpowiedzialne korzystanie z AI w biznesie.",
      certificate: "/lovable-uploads/Responsible prompting maximize AI in your business-page-00001.jpg",
      duration: "4h",
      provider: "Business Academy",
      completedDate: "2024"
    },
    {
      title: "SEO and Content Marketing",
      category: "Business",
      description: "SEO i marketing treści.",
      certificate: "/lovable-uploads/SEO and Content Marketing-page-00001.jpg",
      duration: "8h",
      provider: "Marketing Academy",
      completedDate: "2024"
    },
    {
      title: "Storytelling for Digital Marketing",
      category: "Business",
      description: "Storytelling w marketingu cyfrowym.",
      certificate: "/lovable-uploads/Storytelling for Digital Marketing-page-00001.jpg",
      duration: "6h",
      provider: "Marketing Academy",
      completedDate: "2024"
    },
    {
      title: "Strategic Communication & Teamwork",
      category: "Business",
      description: "Komunikacja strategiczna i praca zespołowa.",
      certificate: "/lovable-uploads/Strategic Communication & Teamwork-page-00001.jpg",
      duration: "8h",
      provider: "Business Academy",
      completedDate: "2024"
    },
    // Usunięto duplikat kursu Harvard Business Publishing - Business for All
    {
      title: "Workplace well-being and stress",
      category: "Personal Development",
      description: "Dobrostan w miejscu pracy i stres.",
      certificate: "/lovable-uploads/Workplace well-being and stress-page-00001.jpg",
      duration: "6h",
      provider: "Personal Academy",
      completedDate: "2024"
    },
    {
      title: "Wprowadzenie do sieci komputerowych",
      category: "IT",
      description: "Wprowadzenie do sieci komputerowych.",
      certificate: "/lovable-uploads/Wprowadzenie do sieci komputerowych-page-00001.jpg",
      duration: "10h",
      provider: "IT Academy",
      completedDate: "2024"
    }
    ,
    // Nowe kursy/certyfikaty
    {
      title: "Autodesk Certified User Inventor",
      category: "IT",
      description: "Certyfikat Autodesk Inventor.",
      certificate: "/lovable-uploads/Autodesk Certified User Inventor_page-0001.jpg",
      duration: "10h",
      provider: "Autodesk",
      completedDate: "2024"
    },
    {
      title: "Azure Fundamentals",
      category: "IT",
      description: "Podstawy Microsoft Azure.",
      certificate: "/lovable-uploads/Azure Fundamentals_page-0001.jpg",
      duration: "8h",
      provider: "Microsoft",
      completedDate: "2024"
    },
    {
      title: "Harvard Business Publishing - Business for All",
      category: "Business",
      description: "Szkolenie Harvard Business Publishing.",
      certificate: "/lovable-uploads/Harvard Business Publishing - Business for All.png",
      duration: "10h",
      provider: "Harvard Business Publishing",
      completedDate: "2025"
    },
    {
      title: "Introduction to Cybersecurity",
      category: "IT",
      description: "Wprowadzenie do cyberbezpieczeństwa.",
      certificate: "/lovable-uploads/Introduction to Cybersecurity_page-0001.jpg",
      duration: "8h",
      provider: "Cyber Academy",
      completedDate: "2024"
    },
    {
      title: "Networking Fundamentals",
      category: "IT",
      description: "Podstawy sieci komputerowych.",
      certificate: "/lovable-uploads/Networking Fundamentals_page-0001.jpg",
      duration: "8h",
      provider: "IT Academy",
      completedDate: "2024"
    },
    {
      title: "Visual Design Using Adobe Photoshop",
      category: "IT",
      description: "Projektowanie graficzne w Adobe Photoshop.",
      certificate: "/lovable-uploads/Visual Design Using Adobe Photoshop_page-0001.jpg",
      duration: "10h",
      provider: "Adobe",
      completedDate: "2024"
    },
    {
      title: "Windows Server Administration Fundamentals",
      category: "IT",
      description: "Podstawy administracji Windows Server.",
      certificate: "/lovable-uploads/Windows Server Administration Fundamentals_page-0001.jpg",
      duration: "10h",
      provider: "Microsoft",
      completedDate: "2024"
    }
  ];
  const courses = coursesRaw.map(course => ({ ...course, featured: featuredTitles.includes(course.title) }));

  const filteredCourses = selectedCategory === "All"
    ? courses
    : selectedCategory === "Featured"
      ? courses.filter(course => course.featured)
      : courses.filter(course => course.category === selectedCategory);

  const getCategoryTranslation = (category: string) => {
    switch (category) {
      case "All": return t('courses.filterAll');
      case "Featured": return language === 'pl' ? 'Wyróżnione' : 'Featured';
      case "IT": return t('courses.filterIT');
      case "Business": return t('courses.filterBusiness');
      case "Personal Development": return t('courses.filterPersonal');
      case "Language": return t('courses.filterLanguage');
      case "Other": return t('courses.filterOther');
      default: return category;
    }
  };

  // Tłumaczenia etykiet na podstawie języka z kontekstu
  const lang = language || 'en';
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

        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter by category:</span>
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

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="glass-effect card-glow group hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {getCategoryTranslation(course.category)}
                      </Badge>
                      {course.featured && <Award className="h-5 w-5 text-accent" />}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>{labelDuration}:</span>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{labelProvider}:</span>
                        <span className="font-medium">{course.provider}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{labelCompleted}:</span>
                        <span className="font-medium">{course.completedDate}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl mb-2">{course.title}</DialogTitle>
                  <DialogDescription className="text-base">
                    {course.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-6">
                  <img 
                    src={course.certificate} 
                    alt={`${course.title} Certificate`}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-muted-foreground">Category:</span>
                      <Badge variant="secondary" className="ml-2">
                        {getCategoryTranslation(course.category)}
                      </Badge>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">{labelDuration}:</span>
                      <span className="ml-2">{course.duration}</span>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">{labelProvider}:</span>
                      <span className="ml-2">{course.provider}</span>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">{labelCompleted}:</span>
                      <span className="ml-2">{course.completedDate}</span>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No courses found in the selected category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
