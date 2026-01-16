import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Bot, Camera, ExternalLink, FileText, Hand, Sparkles, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

type Project = {
  title: string;
  subtitle: string;
  badges: string[];
  thumbnail: "mobile" | "web" | "hand";
  star: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
};

const FeaturedProjects = () => {
  const { t, language } = useLanguage();
  const isPl = language === "pl";

  const projects: Project[] = [
    {
      title: "NextAI",
      subtitle: isPl ? "SaaS / Web" : "SaaS / Web",
      badges: ["React", "TypeScript", "GPT-4", "Stripe", "n8n"],
      thumbnail: "web",
      star: {
        situation: isPl
          ? "Wraz ze współzałożycielem zidentyfikowaliśmy lukę na rynku małych i średnich przedsiębiorstw, które chcą korzystać z dobrodziejstw AI, ale nie mają zasobów na budowę własnych narzędzi."
          : "With a co-founder, we identified a gap in the SME market where companies want to benefit from AI but lack resources to build their own tools.",
        task: isPl
          ? "Zaprojektowanie i zbudowanie od zera kompleksowej platformy webowej, która nie tylko prezentuje ofertę, ale w przyszłości pozwoli na zarządzanie subskrypcjami i integrację z zewnętrznymi systemami."
          : "Design and build from scratch a comprehensive web platform that not only presents the offering but will future allow subscription management and integration with external systems.",
        action: isPl
          ? "Samodzielnie zaprogramowałem całą architekturę front-endową i back-endową strony. Zaimplementowałem system pakietów, zintegrowałem zaawansowane modele LLM oraz przygotowałem infrastrukturę pod wielokanałową komunikację."
          : "I independently programmed the entire front-end and back-end architecture. Implemented package system, integrated advanced LLM models and prepared infrastructure for multi-channel communication.",
        result: isPl
          ? "Powstała w pełni funkcjonalna platforma next-ai.pl, która oferuje realne oszczędności czasu dla firm poprzez automatyzację powtarzalnych zadań z gotową strukturą pod skalowanie usług RPA i agentów głosowych."
          : "A fully functional platform next-ai.pl was created, offering real time savings for companies through automation of repetitive tasks with ready structure for scaling RPA services and voice agents.",
      },
    },
    {
      title: "E-faktura",
      subtitle: isPl ? "Mobile" : "Mobile",
      badges: ["Kotlin", "Firebase", "Firestore", "PDF"],
      thumbnail: "mobile",
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
      title: "Real-time Hand Tracking",
      subtitle: isPl ? "Engineering" : "Engineering",
      badges: ["Python", "OpenCV", "MediaPipe", "Real-time"],
      thumbnail: "hand",
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

  const renderThumbnail = (kind: Project["thumbnail"]) => {
    if (kind === "mobile") {
      return (
        <div className="relative w-full h-44 overflow-hidden rounded-lg border border-[hsl(var(--border))]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-background to-background" />
          <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-[180px] sm:w-[200px] h-[140px]">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92px] h-[168px] rounded-[22px] bg-gradient-to-b from-slate-900 to-slate-950 border border-purple-400/30 shadow-[0_0_40px_rgba(168,85,247,0.18)]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[78px] h-[148px] rounded-[18px] bg-slate-950 border border-white/5" />

              <div className="absolute left-1/2 top-[38px] -translate-x-1/2 w-[66px] h-[84px] rounded-[14px] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-white/5 overflow-hidden">
                <div className="absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(rgba(168,85,247,0.25) 1px, transparent 1px)", backgroundSize: "10px 10px" }} />
                <div className="absolute top-3 left-3 right-3 h-7 rounded-md bg-purple-500/10 border border-purple-400/20" />
                <div className="absolute top-12 left-3 w-6 h-6 rounded-md bg-purple-500/10 border border-purple-400/20 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-purple-200" />
                </div>
                <div className="absolute top-12 left-11 right-3 h-6 rounded-md bg-white/5" />
                <div className="absolute bottom-3 left-3 right-3 h-8 rounded-md bg-white/5" />
              </div>

              <div className="absolute left-4 top-5 text-xs text-slate-200/80 flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-purple-200" />
                <span>{t('featuredProjects.thumb.mobile')}</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (kind === "web") {
      // Special case for NextAI project - use actual image
      if (projects.find(p => p.title === "NextAI")) {
        return (
          <div className="relative w-full h-44 overflow-hidden rounded-lg border border-[hsl(var(--border))]">
            <img 
              src="/images/nextai-preview.png" 
              alt="NextAI Platform Preview"
              className="w-full h-full object-cover"
            />
          </div>
        );
      }
      
      return (
        <div className="relative w-full h-44 overflow-hidden rounded-lg border border-[hsl(var(--border))]">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-background to-background" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />

          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full max-w-[340px] h-[140px]">
              <div className="absolute inset-0 rounded-xl bg-slate-950 border border-purple-400/25 shadow-[0_0_40px_rgba(168,85,247,0.16)] overflow-hidden" />
              <div className="absolute left-0 right-0 top-0 h-8 bg-white/5 border-b border-white/5 flex items-center px-3 gap-2">
                <span className="h-2 w-2 rounded-full bg-red-400/60" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                <span className="h-2 w-2 rounded-full bg-green-400/60" />
                <span className="ml-2 text-xs text-slate-200/70">nextai.app</span>
              </div>

              <div className="absolute left-3 top-11 w-24 h-[80px] rounded-lg bg-white/5 border border-white/5" />
              <div className="absolute left-[118px] right-3 top-11 h-[50px] rounded-lg bg-purple-500/10 border border-purple-400/20 flex items-center justify-center gap-2">
                <BarChart3 className="h-4 w-4 text-purple-200" />
                <span className="text-xs text-slate-200/80">{t('featuredProjects.thumb.aiAnalytics')}</span>
              </div>
              <div className="absolute left-[118px] right-3 top-[106px] h-[25px] rounded-lg bg-white/5 border border-white/5 flex items-center justify-end pr-2">
                <Bot className="h-4 w-4 text-purple-200" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="relative w-full h-44 overflow-hidden rounded-lg border border-[hsl(var(--border))]">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-background to-background" />
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-70" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "12px 12px" }} />

        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative w-full max-w-[340px] h-[140px] rounded-xl bg-slate-950 border border-purple-400/25 shadow-[0_0_40px_rgba(168,85,247,0.16)] overflow-hidden">
            <div className="absolute left-0 right-0 top-0 h-8 bg-white/5 border-b border-white/5 flex items-center px-3 gap-2">
              <Camera className="h-4 w-4 text-purple-200" />
              <span className="text-xs text-slate-200/70">{t('featuredProjects.thumb.cameraFeed')}</span>
            </div>

            <div className="absolute inset-0 pt-8">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-slate-950" />
              <div className="absolute left-6 top-10 text-slate-200/80">
                <Hand className="h-10 w-10" />
              </div>

              {Array.from({ length: 10 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute h-2 w-2 rounded-full bg-purple-400/90 shadow-[0_0_16px_rgba(168,85,247,0.6)]"
                  style={{
                    left: `${18 + (i * 7)}%`,
                    top: `${35 + ((i % 5) * 9)}%`,
                  }}
                />
              ))}

              <div className="absolute right-4 bottom-3 text-xs text-slate-200/70">{t('featuredProjects.thumb.trackingPoints')}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="featured-projects" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t('featuredProjects.title')}</span>
          </h2>
          <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
            {t('featuredProjects.subtitle')}
          </p>
        </header>

        <div className="border-t border-[hsl(var(--border))]" />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="glass-effect card-glow h-full flex flex-col transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-purple-500/20 hover:ring-4 hover:ring-purple-500/20 hover:scale-[1.02] hover:border-purple-400/40"
            >
              <div className="px-6 pt-6">
                {renderThumbnail(project.thumbnail)}
              </div>
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

              <CardContent className="pt-0 flex-1 flex flex-col">
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

                <div className="mt-auto pt-6">
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/projects" className="inline-flex items-center justify-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      {t('featuredProjects.viewProject')}
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
