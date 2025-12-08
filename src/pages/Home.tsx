import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Download, Mail, Github, Linkedin, Instagram, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
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
      <Hero />

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

      <Contact />
    </div>
  );
};

export default Home;
