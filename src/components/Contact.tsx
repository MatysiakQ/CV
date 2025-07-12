import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kontakt@example.com",
      href: "mailto:kontakt@example.com"
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+48 123 456 789",
      href: "tel:+48123456789"
    },
    {
      icon: MapPin,
      title: "Lokalizacja",
      value: "Warszawa, Polska",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Kontakt</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Masz projekt do realizacji? Skontaktuj się ze mną - chętnie omówię szczegóły współpracy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Skontaktuj się ze mną</h3>
              <p className="text-muted-foreground mb-6">
                Jestem otwarty na nowe projekty i możliwości współpracy. 
                Napisz do mnie, a postaram się odpowiedzieć jak najszybciej.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="glass-effect hover:card-glow transition-all duration-300">
                  <CardContent className="p-4">
                    <a 
                      href={info.href}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <info.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground">{info.title}</h4>
                        <p className="text-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-effect card-glow">
            <CardHeader>
              <CardTitle className="text-2xl">Wyślij wiadomość</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Imię</Label>
                  <Input id="name" placeholder="Twoje imię" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="twoj@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Temat</Label>
                <Input id="subject" placeholder="Temat wiadomości" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Wiadomość</Label>
                <Textarea 
                  id="message" 
                  placeholder="Opisz swój projekt lub zadaj pytanie..."
                  className="min-h-[120px]"
                />
              </div>

              <Button variant="gradient" className="w-full" size="lg">
                <Send className="h-4 w-4 mr-2" />
                Wyślij wiadomość
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;