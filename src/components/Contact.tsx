
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import * as React from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ajastrzebski2104@gmail.com",
      href: "mailto:ajastrzebski2104@gmail.com"
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const validate = () => {
    if (!formData.subject || formData.subject.trim().length < 3) {
      toast({
        title: "Błąd walidacji",
        description: "Temat musi mieć co najmniej 3 znaki.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (!validate()) {
        setIsSubmitting(false);
        return;
      }

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Wiadomość wysłana",
        description: "Dziękuję! Odpowiem jak najszybciej.",
        variant: "default",
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Błąd",
        description: "Wysłanie nie powiodło się. Spróbuj ponownie.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Imię</Label>
                    <Input 
                      id="name" 
                      placeholder="Twoje imię"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="twoj@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Temat</Label>
                  <Input 
                    id="subject" 
                    placeholder="Temat wiadomości"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Wiadomość</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Opisz swój projekt lub zadaj pytanie..."
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button 
                  variant="gradient" 
                  className="w-full" 
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
