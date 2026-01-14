import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

type Project = {
  title: string;
  subtitle: string;
  badges: string[];
  star: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
};

const FeaturedProjects = () => {
  const { language } = useLanguage();
  const isPl = language === "pl";

  const projects: Project[] = [
    {
      title: "E-faktura",
      subtitle: isPl ? "Mobile" : "Mobile",
      badges: ["Kotlin", "Firebase", "Firestore", "PDF"],
      star: {
        situation: isPl
          ? "Wyzwanie: synchronizacja danych księgowych w czasie rzeczywistym w aplikacji mobilnej."
          : "Challenge: real-time synchronization of accounting data in a mobile app.",
        task: isPl
          ? "Zaprojektować stabilny przepływ danych oraz generowanie dokumentów bez obciążania UX."
          : "Design a stable data flow and PDF generation without degrading UX.",
        action: isPl
          ? "Wdrożyłem Firebase Firestore (real-time) oraz natywne generowanie PDF. Dodałem autorską walidację danych wejściowych."
          : "Implemented Firebase Firestore (real-time) and native PDF generation. Added custom input validation."
          ,
        result: isPl
          ? "Wynik: redukcja błędów wejściowych o ok. 30% dzięki walidacji i lepszej spójności danych."
          : "Result: ~30% fewer input errors thanks to validation and improved data consistency.",
      },
    },
    {
      title: "NextAi",
      subtitle: isPl ? "SaaS / Web" : "SaaS / Web",
      badges: ["React", "TypeScript", "GPT-4", "Stripe", "n8n"],
      star: {
        situation: isPl
          ? "Wyzwanie: automatyzacja procesów B2B za pomocą AI w modelu subskrypcyjnym."
          : "Challenge: automate B2B processes using AI in a subscription model.",
        task: isPl
          ? "Dostarczyć platformę SaaS z płatnościami i inteligentnymi asystentami."
          : "Deliver a SaaS platform with payments and intelligent assistants.",
        action: isPl
          ? "Zintegrowałem GPT-4, system płatności Stripe oraz automatyzacje n8n pod procesy operacyjne."
          : "Integrated GPT-4, Stripe payments and n8n automations for operational workflows.",
        result: isPl
          ? "Wynik: w pełni funkcjonalna platforma subskrypcyjna z inteligentnymi asystentami."
          : "Result: fully functional subscription platform with intelligent assistants.",
      },
    },
    {
      title: "Real-time Hand Tracking",
      subtitle: isPl ? "Engineering" : "Engineering",
      badges: ["Python", "OpenCV", "MediaPipe", "Real-time"],
      star: {
        situation: isPl
          ? "Wyzwanie: bezkontaktowe sterowanie systemami w czasie rzeczywistym."
          : "Challenge: touchless control of systems in real time.",
        task: isPl
          ? "Zaprojektować detekcję dłoni i śledzenie punktów kluczowych z niskim opóźnieniem."
          : "Design low-latency hand detection and keypoint tracking.",
        action: isPl
          ? "Wykorzystałem Pythona, OpenCV i MediaPipe do śledzenia punktów kluczowych dłoni oraz stabilizacji sygnału."
          : "Used Python, OpenCV and MediaPipe for hand keypoint tracking and signal stabilization.",
        result: isPl
          ? "Wynik: płynne śledzenie dłoni w czasie rzeczywistym, gotowe do integracji z interfejsami sterowania."
          : "Result: smooth real-time tracking, ready for integration with control interfaces.",
      },
    },
  ];

  return (
    <section id="featured-projects" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
            {isPl
              ? "3 projekty pokazujące wpływ: mobile, SaaS oraz inżynieria w czasie rzeczywistym."
              : "3 projects demonstrating impact across mobile, SaaS and real-time engineering."}
          </p>
        </header>

        <div className="border-t border-[hsl(var(--border))]" />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="glass-effect card-glow h-full transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-purple-500/20 hover:ring-4 hover:ring-purple-500/20 hover:scale-[1.02] hover:border-purple-400/40"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-[hsl(var(--primary))] leading-tight">
                      {project.title}
                    </CardTitle>
                    <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{project.subtitle}</p>
                  </div>
                  <div className="h-10 w-10 rounded-lg border border-[hsl(var(--border))] flex items-center justify-center text-[hsl(var(--primary))]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="border-t border-[hsl(var(--border))]" />

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.badges.map((b) => (
                    <Badge key={b} variant="secondary" className="text-xs">
                      {b}
                    </Badge>
                  ))}
                </div>

                <div className="mt-4 space-y-3 text-sm">
                  <div className="text-[hsl(var(--muted-foreground))]">
                    <span className="font-semibold text-[hsl(var(--foreground))]">S</span>: {project.star.situation}
                  </div>
                  <div className="text-[hsl(var(--muted-foreground))]">
                    <span className="font-semibold text-[hsl(var(--foreground))]">T</span>: {project.star.task}
                  </div>
                  <div className="text-[hsl(var(--muted-foreground))]">
                    <span className="font-semibold text-[hsl(var(--foreground))]">A</span>: {project.star.action}
                  </div>
                  <div className="text-[hsl(var(--muted-foreground))]">
                    <span className="font-semibold text-[hsl(var(--foreground))]">R</span>: {project.star.result}
                  </div>
                </div>

                <div className="mt-6">
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/projects" className="inline-flex items-center justify-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      View Project
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
