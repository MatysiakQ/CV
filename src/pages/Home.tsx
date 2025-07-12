
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Download, Mail, Github, Linkedin, Instagram, Send } from "lucide-react";

const Home = () => {
  const handleDownloadCV = () => {
    // In a real application, this would download the actual CV file
    console.log("Downloading CV...");
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
                <div className="absolute inset-0 bg-gradient-primary rounded-full animate-spin [animation-duration:8s]"></div>
                <div className="absolute inset-2 bg-background rounded-full"></div>
                <img 
                  src="/lovable-uploads/c37ccb7a-5662-447b-9d38-c871374ff306.png"
                  alt="Profile"
                  className="absolute inset-4 w-40 h-40 rounded-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Alex Developer</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-muted-foreground">
              Junior <span className="text-accent">Front-End Developer</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="gradient" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={handleDownloadCV}
              >
                <Download className="h-5 w-5 mr-2" />
                Download CV
              </Button>
              <Button variant="glass" size="lg" className="text-lg px-8 py-6">
                <Mail className="h-5 w-5 mr-2" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-6 w-6" />
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
              About <span className="gradient-text">Me</span>
            </h2>
          </div>
          
          <Card className="glass-effect card-glow">
            <CardContent className="p-8">
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate Junior Front-End Developer with a strong foundation in modern web technologies. 
                  I love creating beautiful, responsive, and user-friendly interfaces that provide exceptional user experiences.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey in web development began with curiosity and has evolved into a dedication to crafting 
                  clean, efficient code. I'm always eager to learn new technologies and take on challenging projects 
                  that push my skills to the next level.
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
              <span className="gradient-text">Contact Me</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss your next project or collaboration opportunity
            </p>
          </div>

          <Card className="glass-effect card-glow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project discussion" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button variant="gradient" className="w-full" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
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
