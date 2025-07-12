import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Database, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "JavaScript", "Node.js", "Python",
    "Next.js", "Tailwind CSS", "PostgreSQL", "MongoDB", "Git"
  ];

  const services = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Tworzę responsywne i interaktywne interfejsy użytkownika przy użyciu najnowszych technologii."
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Projektuję i implementuję skalowalne API oraz bazy danych dla aplikacji webowych."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Rozwijam aplikacje mobilne dla iOS i Android używając React Native."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Projektuję intuicyjne i estetyczne interfejsy skupiając się na doświadczeniu użytkownika."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O <span className="gradient-text">mnie</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pasjonat technologii z wieloletnim doświadczeniem w tworzeniu aplikacji webowych i mobilnych.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Moja historia</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Jestem deweloperem z pasją do tworzenia innowacyjnych rozwiązań technologicznych. 
                Moje doświadczenie obejmuje zarówno frontend jak i backend development.
              </p>
              <p>
                Specjalizuję się w ekosystemie JavaScript/TypeScript, szczególnie w React i Node.js. 
                Lubię tworzyć aplikacje, które nie tylko dobrze wyglądają, ale też są wydajne i skalowalne.
              </p>
              <p>
                Ciągle się uczę i śledzę najnowsze trendy w branży, aby dostarczać najlepsze możliwe rozwiązania.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Umiejętności</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="text-sm px-3 py-1 bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="glass-effect card-glow group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;