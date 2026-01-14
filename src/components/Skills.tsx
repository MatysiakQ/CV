import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Briefcase,
  Cloud,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  GitBranch,
  Globe,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills: React.FC = () => {
  const { t, language } = useLanguage();
  const isPl = language === "pl";

  const emphasisBadgeClass = "border-primary/30 bg-primary/10 text-primary";
  const productBadgeClass = "border-accent/30 bg-accent/10 text-accent-foreground";

  type CategoryTag = {
    text: string;
    className: string;
  };

  type CategoryItem = {
    text: string;
    strong?: boolean;
    link?: {
      to: string;
      label: string;
    };
  };

  type Category = {
    key: "philosophy" | "core" | "data" | "cloud" | "engineering" | "business";
    icon: LucideIcon;
    title: string;
    subtitle: string;
    tags: CategoryTag[];
    ring: boolean;
    items: CategoryItem[];
    note?: string;
  };

  const categories: Category[] = [
    {
      key: "philosophy",
      icon: FileText,
      title: isPl ? "Development Philosophy" : "Development Philosophy",
      subtitle: isPl
        ? "Jakość kodu, modularność i architektura (to moja wizytówka)."
        : "Code quality, modularity and architecture (my calling card).",
      tags: [],
      ring: false,
      items: [
        { text: "Clean Code (czytelność, naming, refactoring)", strong: true },
        { text: "Modularność i separacja odpowiedzialności" },
        { text: "Architektura: MVVM w Androidzie" },
        { text: "UI/UX: dopracowane detale i spójność" },
        { text: "Czytelna dokumentacja i komunikacja" },
      ],
    },
    {
      key: "core",
      icon: Code2,
      title: isPl ? "Core Tech Stack" : "Core Tech Stack",
      subtitle: isPl
        ? "Najmocniejszy zestaw do budowy aplikacji web i mobile."
        : "Primary stack for building web and mobile applications.",
      tags: [
        { text: isPl ? "Web" : "Web", className: emphasisBadgeClass },
        { text: isPl ? "Mobile" : "Mobile", className: emphasisBadgeClass },
      ],
      ring: true,
      items: [
        { text: "React", strong: true },
        { text: "Kotlin (Android SDK)", strong: true },
        { text: "TypeScript", strong: true },
        { text: "JavaScript (ES6+)" },
        { text: "Firebase" },
      ],
    },
    {
      key: "data",
      icon: Database,
      title: isPl ? "Data & Backend" : "Data & Backend",
      subtitle: isPl
        ? "Relacyjne bazy danych + backend pod skalowalne produkty."
        : "Relational databases + backend for scalable products.",
      tags: [{ text: "SQL / PL/SQL", className: emphasisBadgeClass }],
      ring: true,
      items: [
        { text: "SQL", strong: true },
        { text: "PL/SQL (procedury, optymalizacja zapytań)", strong: true },
        { text: "NoSQL (Firebase/Firestore)" },
        { text: "Node.js" },
        { text: "JDBC" },
      ],
    },
    {
      key: "cloud",
      icon: Cloud,
      title: isPl ? "Cloud & DevOps" : "Cloud & DevOps",
      subtitle: isPl
        ? "Chmura, wersjonowanie i praktyki wdrożeniowe."
        : "Cloud, version control and deployment practices.",
      tags: [{ text: "AZ-900", className: emphasisBadgeClass }],
      ring: false,
      items: [
        {
          text: "Microsoft Azure (certyfikat AZ-900)",
          strong: true,
          link: { to: "/courses", label: "View Certificate" },
        },
        { text: "Git / GitHub" },
        { text: "Podstawy CI/CD" },
        { text: "MTA Windows Server" },
      ],
    },
    {
      key: "engineering",
      icon: Cpu,
      title: isPl ? "Engineering & Math" : "Engineering & Math",
      subtitle: isPl
        ? "Fundamenty inżynierskie + rozwiązywanie problemów."
        : "Engineering fundamentals + problem solving.",
      tags: [],
      ring: false,
      items: [
        { text: "Python (OpenCV / MediaPipe)" },
        { text: "Algorytmy i struktury danych", strong: true },
        { text: "C++" },
        { text: "LabVIEW" },
        { text: "AutoCAD" },
      ],
    },
    {
      key: "business",
      icon: Briefcase,
      title: isPl ? "Business & Agile" : "Business & Agile",
      subtitle: isPl
        ? "Product mindset: rozumiem procesy biznesowe, nie tylko kod."
        : "Product mindset: I understand business processes, not just code.",
      tags: [{ text: isPl ? "Product Mindset" : "Product Mindset", className: productBadgeClass }],
      ring: false,
      items: [
        { text: "Scrum / Agile" },
        {
          text: "Harvard Business Publishing – Business for All",
          strong: true,
          link: { to: "/courses", label: "View Certificate" },
        },
        { text: "Zarządzanie projektami" },
        { text: "Storytelling" },
        { text: "SEO / Marketing" },
      ],
      note: isPl
        ? "W projektach (m.in. NextAi, E-faktura) łączę perspektywę techniczną z produktem: priorytety, wartość biznesowa, komunikacja z interesariuszami."
        : "In projects (incl. NextAi, E-faktura) I combine engineering with product: priorities, business value, and stakeholder communication.",
    },
  ];

  return (
    <section id="tech-stack" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t("skills.title")}</span>
          </h2>
          <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">{t("skills.subtitle")}</p>
        </header>

        <div className="border-t border-[hsl(var(--border))]" />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.key}
                className={`glass-effect card-glow h-full transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-purple-500/20 hover:ring-4 hover:ring-purple-500/20 hover:scale-[1.02] hover:border-purple-400/40 ${
                  category.ring ? "ring-2 ring-primary/20" : ""
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center text-[hsl(var(--primary))] border border-[hsl(var(--border))]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-[hsl(var(--primary))] leading-tight flex items-center gap-2">
                        {category.title}
                        {category.key === "core" ? <Globe className="h-4 w-4" /> : null}
                        {category.key === "core" ? <Smartphone className="h-4 w-4" /> : null}
                        {category.key === "data" ? <ShieldCheck className="h-4 w-4" /> : null}
                        {category.key === "cloud" ? <GitBranch className="h-4 w-4" /> : null}
                      </CardTitle>
                      <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{category.subtitle}</p>
                      {category.tags.length ? (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {category.tags.map((tag) => (
                            <Badge key={tag.text} variant="outline" className={tag.className}>
                              {tag.text}
                            </Badge>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="border-t border-[hsl(var(--border))]" />
                  <ul className="mt-4 space-y-3 list-none text-left">
                    {category.items.map((item) => (
                      <li
                        key={item.text}
                        className={`flex items-start gap-2 text-sm leading-relaxed ${
                          item.strong
                            ? "text-[hsl(var(--foreground))] font-semibold"
                            : "text-[hsl(var(--muted-foreground))]"
                        }`}
                      >
                        <span className="mt-0.5 inline-block h-1.5 w-1.5 rounded-full bg-primary/70 flex-shrink-0" />
                        <span className="flex-1">{item.text}</span>
                        {item.link ? (
                          <Link
                            to={item.link.to}
                            className="inline-flex items-center gap-1 text-xs text-primary hover:underline whitespace-nowrap"
                          >
                            {item.link.label}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Link>
                        ) : null}
                      </li>
                    ))}
                  </ul>

                  {category.key === "business" && "note" in category ? (
                    <div className="mt-4 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 p-3 text-sm text-[hsl(var(--muted-foreground))]">
                      {category.note}
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="px-8">
            <Link to="/courses">Explore All 20+ Courses & Certifications</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
