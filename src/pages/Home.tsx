import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Hero />

      <section className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">{t('home.about.title')}</span>
            </h2>
          </div>

          <Card className="glass-effect card-glow">
            <CardContent className="p-8">
              <div className="max-w-2xl mx-auto">
                <div className="mb-6 rounded-lg border border-purple-500/20 bg-primary/5 px-4 py-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-md border border-purple-500/20 bg-purple-500/10 text-primary">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm md:text-base font-semibold leading-snug">
                        {t('home.about.cyberskiller.title')}
                      </p>
                      <p className="mt-1 text-xs md:text-sm text-muted-foreground">
                        {t('home.about.cyberskiller.subtitle')}
                      </p>
                    </div>
                  </div>

                </div>

                <div className="text-center">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t('home.about.description')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Skills />
      <FeaturedProjects />
      <Contact />
    </div>
  );
};

export default Home;
