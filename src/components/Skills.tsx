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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills: React.FC = () => {
  const { t, language } = useLanguage();
  const isPl = language === "pl";

  const tr = (pl: string, en: string) => (isPl ? pl : en);

  const emphasisBadgeClass = "border-primary/30 bg-primary/10 text-primary";

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
    items: CategoryItem[];
  };

  const categories: Category[] = [
    {
      key: "philosophy",
      icon: FileText,
      title: tr("Filozofia tworzenia", "Development Philosophy"),
      subtitle: tr(
        "Jakość kodu, modularność i architektura (to moja wizytówka).",
        "Code quality, modularity and architecture (my calling card)."
      ),
      tags: [{ text: "Clean Code", className: emphasisBadgeClass }],
      items: [
        { text: tr("Clean Code (czytelność, naming, refactoring)", "Clean Code (readability, naming, refactoring)"), strong: true },
        { text: tr("Modularność i separacja odpowiedzialności", "Modularity and separation of concerns") },
        { text: tr("Architektura: MVVM w Androidzie", "Architecture: MVVM on Android") },
        { text: tr("UI/UX: dopracowane detale i spójność", "UI/UX: attention to detail and consistency") },
        { text: tr("Czytelna dokumentacja i komunikacja", "Clear documentation and communication") },
      ],
    },
    {
      key: "core",
      icon: Code2,
      title: tr("Główny stack", "Core Tech Stack"),
      subtitle: tr(
        "Najmocniejszy zestaw do budowy aplikacji web i mobile.",
        "Primary stack for building web and mobile applications."
      ),
      tags: [{ text: "Mobile & Web", className: emphasisBadgeClass }],
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
      title: tr("Dane i backend", "Data & Backend"),
      subtitle: tr(
        "Relacyjne bazy danych + backend pod skalowalne produkty.",
        "Relational databases + backend for scalable products."
      ),
      tags: [{ text: "SQL / PL/SQL", className: emphasisBadgeClass }],
      items: [
        { text: "SQL", strong: true },
        { text: tr("PL/SQL (procedury, optymalizacja zapytań)", "PL/SQL (procedures, query optimization)"), strong: true },
        { text: tr("NoSQL (Firebase/Firestore)", "NoSQL (Firebase/Firestore)") },
        { text: "Node.js" },
        { text: "JDBC" },
      ],
    },
    {
      key: "cloud",
      icon: Cloud,
      title: tr("Chmura i DevOps", "Cloud & DevOps"),
      subtitle: tr(
        "Chmura, wersjonowanie i praktyki wdrożeniowe.",
        "Cloud, version control and deployment practices."
      ),
      tags: [{ text: "Azure", className: emphasisBadgeClass }],
      items: [
        {
          text: tr("Microsoft Azure (certyfikat AZ-900)", "Microsoft Azure (AZ-900 certification)"),
          strong: true,
          link: { to: "/courses", label: t('common.viewCertificate') },
        },
        { text: "Git / GitHub" },
        { text: tr("Podstawy CI/CD", "CI/CD basics") },
        { text: tr("MTA Windows Server", "MTA Windows Server") },
      ],
    },
    {
      key: "engineering",
      icon: Cpu,
      title: tr("Inżynieria i matematyka", "Engineering & Math"),
      subtitle: tr(
        "Fundamenty inżynierskie + rozwiązywanie problemów.",
        "Engineering fundamentals + problem solving."
      ),
      tags: [{ text: "Algorithms", className: emphasisBadgeClass }],
      items: [
        { text: "Python (OpenCV / MediaPipe)" },
        { text: tr("Algorytmy i struktury danych", "Algorithms and data structures"), strong: true },
        { text: "C++" },
        { text: "LabVIEW" },
        { text: "AutoCAD" },
      ],
    },
    {
      key: "business",
      icon: Briefcase,
      title: tr("Biznes i Agile", "Business & Agile"),
      subtitle: tr(
        "Product mindset: rozumiem procesy biznesowe, nie tylko kod.",
        "Product mindset: I understand business processes, not just code."
      ),
      tags: [{ text: "Product Mindset", className: emphasisBadgeClass }],
      items: [
        { text: "Scrum / Agile" },
        {
          text: "Harvard Business Publishing – Business for All",
          strong: true,
          link: { to: "/courses", label: t('common.viewCertificate') },
        },
        { text: tr("Zarządzanie projektami", "Project management") },
        { text: tr("Storytelling", "Storytelling") },
        { text: tr("SEO / Marketing", "SEO / Marketing") },
      ],
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
                className="glass-effect card-glow h-full flex flex-col transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-purple-500/20 hover:ring-4 hover:ring-purple-500/20 hover:scale-[1.02] hover:border-purple-400/40"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center text-[hsl(var(--primary))] border border-[hsl(var(--border))]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-[hsl(var(--primary))] leading-tight">
                        {category.title}
                      </CardTitle>
                      <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{category.subtitle}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {category.tags.map((tag) => (
                          <Badge key={tag.text} variant="outline" className={tag.className}>
                            {tag.text}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 flex-1 flex flex-col">
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
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="px-8">
            <Link to="/courses">{t('skills.cta.courses')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
