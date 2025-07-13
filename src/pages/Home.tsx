
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Download, Mail, Github, Linkedin, Instagram, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDownloadCV = () => {
    // In a real application, this would download the actual CV file
    console.log("Downloading CV...");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For now, we'll just show a message about Supabase integration
      toast({
        title: "Message Received",
        description: "Thank you for your message! To enable email sending, please connect this project to Supabase.",
        variant: "default",
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center">
            {/* Profile Image */}
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

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Adam Jastrzębski</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-muted-foreground">
              {t('home.hero.title')}
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="gradient" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={handleDownloadCV}
              >
                <Download className="h-5 w-5 mr-2" />
                {t('home.hero.downloadCV')}
              </Button>
              <Button variant="glass" size="lg" className="text-lg px-8 py-6">
                <Mail className="h-5 w-5 mr-2" />
                {t('home.hero.contactMe')}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary"
                asChild
              >
                <a href="https://github.com/MatysiakQ" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary"
                asChild
              >
                <a href="https://www.linkedin.com/in/adamjastrzębski" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary"
                asChild
              >
                <a href="https://instagram.com/adamtheantagonist" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('home.about.title')}
            </h2>
          </div>
          
          <Card className="glass-effect card-glow">
            <CardContent className="p-8">
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('home.about.description')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">{t('home.contact.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('home.contact.subtitle')}
            </p>
          </div>

          <Card className="glass-effect card-glow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('home.contact.name')}</Label>
                    <Input 
                      id="name" 
                      placeholder={t('home.contact.namePlaceholder')}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('home.contact.email')}</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder={t('home.contact.emailPlaceholder')}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">{t('home.contact.subject')}</Label>
                  <Input 
                    id="subject" 
                    placeholder={t('home.contact.subjectPlaceholder')}
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('home.contact.message')}</Label>
                  <Textarea 
                    id="message" 
                    placeholder={t('home.contact.messagePlaceholder')}
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
                  {isSubmitting ? 'Sending...' : t('home.contact.send')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
