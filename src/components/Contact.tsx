import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; subject?: string; message?: string }>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      title: t('home.contact.email') || 'Email',
      value: 'ajastrzebski2104@gmail.com',
      href: 'mailto:ajastrzebski2104@gmail.com'
    },
    {
      icon: Phone,
      title: t('home.contact.phone') || 'Phone',
      value: '+48 505 437 439',
      href: 'tel:+48505437439'
    },
    {
      icon: MapPin,
      title: t('home.contact.location') || 'Location',
      value: t('contact.location.value') || 'Lublin, Polska',
      href: '#'
    }
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!formData.subject || formData.subject.trim().length < 3) {
      newErrors.subject = t('contact.validation.subject');
    }

    const emailRe = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
    if (!formData.email || !emailRe.test(formData.email)) {
      newErrors.email = t('contact.validation.email');
    }

    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = t('contact.validation.message');
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      // show one toast as well for visibility
      toast.error(t('contact.validation.fixErrors'));
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage(null);
    setErrors({});
    try {
      if (!validate()) {
        setIsSubmitting(false);
        return;
      }

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const msg = t('contact.success');
      toast.success(msg);
      setSuccessMessage(msg);

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error(t('contact.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('home.contact.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('home.contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">{t('home.contact.title')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('home.contact.subtitle')}
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
              <CardTitle className="text-2xl">{t('home.contact.send')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {successMessage && (
                <div className="rounded-md bg-emerald-50 border border-emerald-200 p-4 text-emerald-800">
                  {successMessage}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
                    {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
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
                    {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
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
                  {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject}</p>}
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
                  {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
                </div>

                <Button 
                  variant="gradient" 
                  className="w-full" 
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      {t('contact.sending') ?? 'Sending...'}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      {t('home.contact.send')}
                    </>
                  )}
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
