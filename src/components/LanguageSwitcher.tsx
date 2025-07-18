
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'pl' : 'en')}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      {language === 'en' ? 'PL' : 'EN'}
    </Button>
  );
};

export default LanguageSwitcher;
