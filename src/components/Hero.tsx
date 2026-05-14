
import CVChooser from "./CVChooser";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen grid items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] bg-background text-foreground">
      <div className="max-w-2xl">
        <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-muted-foreground">
          <span className="uppercase tracking-[0.35em] text-primary font-semibold">Adam Jastrzębski</span>
          <span className="uppercase tracking-[0.35em]">technical founder</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none mb-4">
          Software Engineer
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-primary mb-8">
          Building products that solve real problems
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-9">
          I transform complex business workflows into reliable, scalable software systems. From mobile apps to backend architectures, I deliver end-to-end solutions with clean code, automation, and production-ready deployments.
        </p>

        <div className="flex flex-wrap gap-6 items-center mb-8">
          <button
            type="button"
            onClick={() => scrollToSection('featured-projects')}
            className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-5 text-base font-semibold text-background transition hover:bg-primary/90 hover:scale-105"
          >
            View My Work
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center justify-center rounded-full border-2 border-primary bg-transparent px-10 py-5 text-base font-semibold text-primary transition hover:bg-primary hover:text-background hover:scale-105"
          >
            Let's Build Together
          </button>
        </div>

        <p className="text-sm text-muted-foreground mb-10 max-w-xl">
          <a
            href="#contact"
            className="font-semibold text-foreground transition hover:text-primary"
          >
            Start the build
          </a>{' '}
          — a shorter path to product systems that actually move.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[2rem] border border-border bg-background/80 p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-2">Built work</p>
            <p className="font-medium text-foreground leading-7">Systems that support real workflows, not just presentational interfaces.</p>
          </div>
          <div className="rounded-[2rem] border border-border bg-background/80 p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-2">Work proof</p>
            <p className="font-medium text-foreground leading-7">Product visuals and interface proof are part of the story, not an add-on.</p>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center lg:justify-end">
        <div className="absolute -right-10 top-12 hidden h-80 w-80 rounded-full border border-primary/10 bg-slate-950/5 blur-3xl lg:block" />
        <div className="relative rounded-[2rem] border border-border bg-background/95 p-6 shadow-[0_40px_120px_-80px_rgba(15,23,42,0.45)] overflow-hidden">
          <img
            src="/images/CVPhoto.jpeg"
            alt="Portrait of Adam Jastrzębski"
            className="aspect-square w-full rounded-[1.75rem] object-cover border border-border/50"
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-border bg-background/90 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-2">Built for</p>
              <p className="font-semibold text-foreground leading-6">teams that need code-first products.</p>
            </div>
            <div className="rounded-3xl border border-border bg-background/90 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-2">Proof layer</p>
              <p className="font-semibold text-foreground leading-6">Real interfaces and workflows, not concepts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
