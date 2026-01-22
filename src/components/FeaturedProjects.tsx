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
          ? "Sektor MSP tonie w powtarzalnych zadaniach, a bariera wejścia w AI jest dla nich zbyt wysoka. Zbudowałem most, który to zmienia."
          : "The SME sector is drowning in repetitive tasks, and the AI entry barrier is too high for them. I built a bridge that changes this.",
        task: isPl
          ? "Zaprojektowanie i wdrożenie od zera pełnoprawnej architektury SaaS, która integruje zaawansowane modele LLM z realnymi procesami biznesowymi."
          : "Design and implement from scratch a full-fledged SaaS architecture that integrates advanced LLM models with real business processes.",
        action: isPl
          ? "Samodzielnie postawiłem cały stack: od frontu w React/TS, przez architekturę backendową, aż po system subskrypcyjny Stripe i automatyzację przepływów n8n. To nie jest zabawka – to skalowalna infrastruktura gotowa na tysiące userów."
          : "I single-handedly built the entire stack: from React/TS frontend, through backend architecture, to Stripe subscription system and n8n flow automation. This is not a toy – it's scalable infrastructure ready for thousands of users.",
        result: isPl
          ? "Powstał next-ai.pl. System, który realnie tnie koszty operacyjne firm przez automatyzację RPA i agentów głosowych. Architektura jest w 100% gotowa na masowe skalowanie."
          : "Next-ai.pl was created. A system that genuinely cuts companies' operational costs through RPA and voice agent automation. The architecture is 100% ready for mass scaling.",
      },
    },
    {
      title: "E-faktura",
      subtitle: isPl ? "Mobile / Fintech" : "Mobile / Fintech",
      badges: ["Kotlin", "Android", "MVVM", "Firebase"],
      thumbnail: "mobile",
      star: {
        situation: isPl
          ? "Ręczne wystawianie faktur w małych firmach to proszenie się o błędy i kontrole z urzędu. Potrzebowali systemu, który jest 'bulletproof'."
          : "Manual invoicing in small companies is asking for errors and tax audits. They needed a system that's 'bulletproof'.",
        task: isPl
          ? "Budowa bezpiecznego silnika Fintech do automatycznego generowania dokumentacji sprzedażowej zgodnie z restrykcyjnymi polskimi przepisami podatkowymi."
          : "Build a secure Fintech engine for automatic sales document generation compliant with strict Polish tax regulations.",
        action: isPl
          ? "Zaprojektowałem relacyjną strukturę bazy danych odporną na błędy logiczne. Napisałem silnik obliczeniowy w Kotlin/MVVM, który z aptekarską precyzją wylicza wartości VAT/proforma i generuje natychmiastowe pliki PDF. Zero kompromisów w kwestii walidacji danych."
          : "I designed a relational database structure resistant to logical errors. I wrote a calculation engine in Kotlin/MVVM that calculates VAT/proforma values with pharmaceutical precision and generates instant PDF files. Zero compromises on data validation.",
        result: isPl
          ? "E-faktura skróciła czas wystawiania dokumentów z minut do sekund. System wyeliminował błędy ludzkie w obliczeniach, dając właścicielom firm święty spokój i czyste papiery."
          : "E-faktura reduced document issuance time from minutes to seconds. The system eliminated human calculation errors, giving business owners peace of mind and clean paperwork.",
      },
    },
    {
      title: "Real-time Hand Tracking",
      subtitle: isPl ? "Robotics / Computer Vision" : "Robotics / Computer Vision",
      badges: ["Python", "OpenCV", "MediaPipe", "Arduino"],
      thumbnail: "hand",
      star: {
        situation: isPl
          ? "Sterowanie fizycznym sprzętem w czasie rzeczywistym przy użyciu gestów zazwyczaj kuleje przez opóźnienia i szum sygnału. Postanowiłem to złamać."
          : "Real-time physical device control using gestures usually suffers from delays and signal noise. I decided to break this limitation.",
        task: isPl
          ? "Stworzenie zintegrowanego systemu wizyjnego AI, który mapuje ruch ludzkiej dłoni na precyzyjne sygnały PWM dla serwomechanizmów robota."
          : "Create an integrated AI vision system that maps human hand motion to precise PWM signals for robot servomechanisms.",
        action: isPl
          ? "Wykorzystałem OpenCV i MediaPipe do śledzenia 21 punktów dłoni w czasie rzeczywistym. Zaimplementowałem autorskie algorytmy filtracji (EMA/Median), które wycinają drżenie ręki, oraz protokół UDP do bezstratnej transmisji danych Python -> LabVIEW -> Arduino. To jest czysta inżynieria systemowa."
          : "I used OpenCV and MediaPipe for real-time tracking of 21 hand points. I implemented proprietary filtering algorithms (EMA/Median) that eliminate hand tremor, and UDP protocol for lossless data transmission Python -> LabVIEW -> Arduino. This is pure systems engineering.",
        result: isPl
          ? "Smart Robotic Hand Controller działa z ultra-niskim opóźnieniem. Robot płynnie naśladuje ruchy operatora, a system automatycznie filtruje zakłócenia, zapewniając bezpieczny i intuicyjny interfejs człowiek-maszyna."
          : "Smart Robotic Hand Controller operates with ultra-low latency. The robot smoothly mimics operator movements, and the system automatically filters interference, ensuring a safe and intuitive human-machine interface.",
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
                    {project.title === "NextAI" && <BarChart3 className="h-5 w-5" />}
                    {project.title === "E-faktura" && <FileText className="h-5 w-5" />}
                    {project.title === "Real-time Hand Tracking" && <Hand className="h-5 w-5" />}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0 flex-1 flex flex-col">
                <div className="border-t border-[hsl(var(--border))]" />

                <div className="mt-4 flex flex-wrap gap-2 justify-center">
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
