import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import TechStackSection from "@/components/TechStackSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import WorkflowSection from "@/components/WorkflowSection";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <TechStackSection />

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

        <WorkflowSection />

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

        <section className="py-24 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-10">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-sm font-medium text-primary uppercase tracking-wide">Available for new projects</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
                Ready to build something amazing?
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-8 mb-12">
                Whether you need a full-stack application, mobile app, or system architecture overhaul,
                I bring technical expertise and product mindset to deliver solutions that drive results.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-5 text-lg font-semibold text-background transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
                >
                  Start Your Project
                </a>
                <a
                  href="/assets/cv/cv-desktop.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center justify-center rounded-full border-2 border-primary bg-transparent px-10 py-5 text-lg font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-background hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
                >
                  Download CV
                </a>
              </div>

              <div className="grid gap-8 md:grid-cols-3 max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center group"
                >
                  <div className="text-3xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">20+</div>
                  <div className="text-muted-foreground font-medium">Projects Completed</div>
                  <div className="w-12 h-0.5 bg-primary/30 mx-auto mt-3 group-hover:bg-primary/60 transition-colors duration-300" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center group"
                >
                  <div className="text-3xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-muted-foreground font-medium">Commits</div>
                  <div className="w-12 h-0.5 bg-primary/30 mx-auto mt-3 group-hover:bg-primary/60 transition-colors duration-300" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center group"
                >
                  <div className="text-3xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-muted-foreground font-medium">Client Satisfaction</div>
                  <div className="w-12 h-0.5 bg-primary/30 mx-auto mt-3 group-hover:bg-primary/60 transition-colors duration-300" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Contact />
    </div>
  );
};

export default Home;
