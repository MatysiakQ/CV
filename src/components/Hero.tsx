
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile image */}
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-spin [animation-duration:8s]"></div>
              <div className="absolute inset-2 bg-background rounded-full"></div>
              <img 
                src="/lovable-uploads/c37ccb7a-5662-447b-9d38-c871374ff306.png"
                alt="Profile"
                className="absolute inset-4 w-40 h-40 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">Adam Jastrzębski</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-muted-foreground">
            {t('home.hero.title')}
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('home.hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="gradient" size="lg" className="text-lg px-8 py-6">
              {t('home.hero.viewProjects')}
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8 py-6">
              {t('home.hero.contactMe')}
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-12">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Mail className="h-6 w-6" />
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
