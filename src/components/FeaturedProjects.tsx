import FeaturedProjectCard from "./FeaturedProjectCard";

interface FeaturedProject {
  id: string;
  name: string;
  category: string;
  visualLabel: string;
  image?: string;
  summary: string;
  challenge: string;
  outcome: string;
  decisions: string[];
  stack: string[];
  href?: string;
  ctaLabel?: string;
}

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "efaktura",
    name: "E-Faktura",
    category: "Invoice automation",
    visualLabel: "Mobile workflow preview",
    image: "/images/PrintwallOverview.png",
    summary:
      "Production mobile system automating invoice creation, KSeF compliance, and payment tracking. Built with offline-first architecture and real-time sync.",
    challenge:
      "Legacy invoice workflows required manual data entry, compliance checks, and reconciliation across multiple systems.",
    outcome:
      "Delivered a single mobile-first solution reducing manual work by 80%, automating KSeF submissions, and providing real-time payment visibility.",
    decisions: [
      "Implemented offline-first data sync using Firebase for reliable field operations.",
      "Built KSeF API integration with automatic compliance handling and error recovery.",
      "Designed mobile-first UI with gesture-based navigation for field technicians.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "KSeF API", "Room DB"],
    href: "#contact",
    ctaLabel: "Discuss this workflow",
  },
  {
    id: "next-ai",
    name: "Next-Ai",
    category: "AI platform",
    visualLabel: "Product interface preview",
    image: "/images/nextai-preview.png",
    summary:
      "SaaS platform transforming AI model outputs into actionable business workflows. Features multi-tenant architecture, real-time inference, and automated action pipelines.",
    challenge:
      "Organizations had AI models generating insights but lacked systems to operationalize predictions into business actions.",
    outcome:
      "Created a production platform enabling teams to connect AI outputs to operational workflows, increasing decision velocity by 3x.",
    decisions: [
      "Architected layered system separating data ingestion, inference pipeline, and action execution.",
      "Implemented multi-tenant SaaS with isolated data planes and shared inference infrastructure.",
      "Built workflow engine supporting conditional actions and human-in-the-loop validation.",
    ],
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "Docker", "Redis"],
    href: "https://next-ai.pl",
    ctaLabel: "Open platform",
  },
  {
    id: "hand-tracking",
    name: "Hand Tracking Control",
    category: "Gesture control",
    visualLabel: "Gesture prototype preview",
    image: "/images/Hand_Tracking.mp4",
    summary:
      "Computer vision system enabling gesture-based device control. Combines MediaPipe tracking with custom ML pipeline for robust real-time performance.",
    challenge:
      "Existing gesture control systems suffered from environmental noise, lighting conditions, and inconsistent tracking accuracy.",
    outcome:
      "Developed reliable prototype demonstrating 95%+ accuracy in varied conditions, with modular architecture for easy integration.",
    decisions: [
      "Combined MediaPipe's hand tracking with custom filtering for noise reduction.",
      "Implemented hybrid CV/ML pipeline balancing real-time performance with accuracy.",
      "Designed plugin architecture allowing integration with existing control systems.",
    ],
    stack: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "FastAPI"],
    href: "#contact",
    ctaLabel: "Talk about this build",
  },
];

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">Selected case studies</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Product-focused projects with interface proof.</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-8">
            Each project highlights a technical challenge, a product decision, and the business outcome it enabled.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {FEATURED_PROJECTS.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
