import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />

      <main>
        <FeaturedProjects />

        <section id="work-snapshots" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">Work in motion</p>
                <h2 className="text-4xl md:text-5xl font-bold">Real work, shown with real interfaces.</h2>
                <p className="text-lg text-muted-foreground max-w-3xl leading-8">
                  These examples are not mood boards. They are product visuals and workflow snapshots from actual builds.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[2rem] border border-border bg-background/90 p-6 shadow-sm">
                    <p className="text-sm font-semibold text-foreground mb-2">Operational flow</p>
                    <p className="text-muted-foreground leading-7">A product that makes compliance and payments part of the daily process.</p>
                  </div>
                  <div className="rounded-[2rem] border border-border bg-background/90 p-6 shadow-sm">
                    <p className="text-sm font-semibold text-foreground mb-2">Product proof</p>
                    <p className="text-muted-foreground leading-7">Interface snapshots that show what was built and how it behaves.</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[2rem] border border-border bg-background/90 shadow-sm">
                  <img src="/images/nextai-preview.png" alt="AI platform screenshot" className="aspect-[4/3] h-full w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-[2rem] border border-border bg-background/90 shadow-sm">
                  <img src="/images/PrintwallOverview.png" alt="Mobile workflow preview" className="aspect-[4/3] h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proven-work" className="py-16 px-6 bg-secondary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">Built work</p>
              <h2 className="text-4xl md:text-5xl font-bold">What this work proves.</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-[2rem] border border-border bg-background/80 p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">Ship systems, not slides</h3>
                <p className="text-muted-foreground leading-7">
                  I focus on shipping working products that are usable by real teams from day one.
                </p>
              </div>
              <div className="rounded-[2rem] border border-border bg-background/80 p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">Make products operate</h3>
                <p className="text-muted-foreground leading-7">
                  The work is about workflows, automation, and products that keep running when the lights are on.
                </p>
              </div>
              <div className="rounded-[2rem] border border-border bg-background/80 p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">Show interface proof</h3>
                <p className="text-muted-foreground leading-7">
                  The strongest signal is the product itself: screenshots, screens, and visible system behavior.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-[2rem] border border-border bg-background/90 p-10 text-center shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">Work together</p>
              <h2 className="text-4xl font-bold mb-4">Let’s build a technical product with real momentum.</h2>
              <p className="text-lg text-muted-foreground leading-8 mb-8">
                If you need someone who writes the code, shapes the product, and delivers systems that actually run, let’s talk.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-background transition hover:bg-primary/90"
              >
                Start the conversation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Contact />
    </div>
  );
};

export default Home;
