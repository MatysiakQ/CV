import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { AlertCircle, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { t, language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const title = t('notfound.title');
  const message = t('notfound.message');
  const buttonText = t('notfound.button');

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <Card className="glass-effect card-glow max-w-md w-full border-destructive/50">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-destructive/20 rounded-full blur-xl animate-pulse"></div>
              <AlertCircle className="h-20 w-20 text-destructive relative" />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-4 gradient-text">
            404
          </h1>
          
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            {title}
          </h2>
          
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            {message}
          </p>

          <Button asChild size="lg" variant="gradient" className="w-full">
            <a href="/" className="flex items-center justify-center gap-2">
              <Home className="h-5 w-5" />
              {buttonText}
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
