import FeaturedProjectCard from "./FeaturedProjectCard";

interface FeaturedProject {
  id: string;
  name: string;
  category: string;
  visualLabel: string;
  image: string;
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
      "A working mobile system that automates invoice creation, KSeF submission, and payment tracking for finance teams.",
    challenge:
      "Manual invoice workflows were slow, error-prone, and required constant compliance checks.",
    outcome:
      "Delivered a single product that cut manual reconciliation work, surfaced payment status, and made compliance steps invisible.",
    decisions: [
      "Ship a mobile-first interface for field and office workflows.",
      "Automate KSeF handling to reduce compliance burden.",
      "Use offline-first data sync to keep the system reliable in real conditions.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "KSeF API"],
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
      "A product-quality AI platform built to turn model output into repeatable business actions, not just experimental reports.",
    challenge:
      "Teams had plenty of AI tooling, but lacked a product path that connected predictions with operational decisions.",
    outcome:
      "Created an interface and backend flow that makes AI outputs actionable for pilots and real business processes.",
    decisions: [
      "Design around use cases instead of generic AI features.",
      "Separate data, inference, and action into clear layers.",
      "Keep the interface lean so users can act on insights quickly.",
    ],
    stack: ["Python", "FastAPI", "React", "Docker"],
    href: "https://next-ai.pl",
    ctaLabel: "Open platform",
  },
  {
    id: "hand-tracking",
    name: "Hand Tracking Control",
    category: "Gesture control",
    visualLabel: "System architecture sketch",
    image: "/images/c37ccb7a-5662-447b-9d38-c871374ff306.png",
    summary:
      "A gesture-driven control system that proves a practical way to turn computer vision into usable device interaction.",
    challenge:
      "Existing input layers were slow and brittle for hands-free control, especially in noisy environments.",
    outcome:
      "Built a reliable prototype that demonstrates how vision-based control can be integrated into automation workflows.",
    decisions: [
      "Prioritize robustness over flashy detection results.",
      "Use a hybrid CV and ML pipeline for stable real-time performance.",
      "Expose a simple integration surface for other systems.",
    ],
    stack: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
    href: "#contact",
    ctaLabel: "Talk about this build",
  },
];

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">Selected work</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured projects with real interface proof.</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-8">
            These stories are built around products, not resumes: a clear problem, a practical product decision, and a visible outcome.
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
