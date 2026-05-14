import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Smartphone, Monitor, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CVChooser = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const mobileRef = useRef<HTMLAnchorElement | null>(null);
  const desktopRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }

      if (!open) {
        return;
      }

      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        if (document.activeElement === mobileRef.current) {
          desktopRef.current?.focus();
        } else {
          mobileRef.current?.focus();
        }
      }

      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        if (document.activeElement === desktopRef.current) {
          mobileRef.current?.focus();
        } else {
          desktopRef.current?.focus();
        }
      }

      if (event.key === 'Enter' && document.activeElement instanceof HTMLElement) {
        (document.activeElement as HTMLElement).click();
      }
    };

    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative inline-block">
      <Button
        size="lg"
        className="text-lg px-6 py-4 flex items-center gap-3"
        variant="outline"
        aria-expanded={open}
        aria-controls="cv-chooser-menu"
        onClick={(event) => {
          event.stopPropagation();
          setOpen((current) => !current);
        }}
      >
        <Download className="h-5 w-5" />
        <span>{t('home.hero.downloadCV')}</span>
        <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${open ? 'rotate-180' : ''}`} />
      </Button>

      <motion.div
        id="cv-chooser-menu"
        initial={{ opacity: 0, y: -6 }}
        animate={open ? { opacity: 1, y: 0, transition: { duration: 0.18 } } : { opacity: 0, y: -6, transition: { duration: 0.12 } }}
        className="absolute z-20 mt-3 left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0 sm:mt-4"
        style={{ pointerEvents: open ? 'auto' : 'none' }}
        role="menu"
      >
        <div className="bg-background/80 backdrop-blur-md p-3 rounded-md shadow-lg flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg" className="text-lg px-6 py-3" variant="default">
            <a
              ref={mobileRef}
              role="menuitem"
              href="/assets/cv/cv-mobile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              aria-label={t('cv.mobile')}
            >
              <span className="flex items-center gap-3">
                <Smartphone className="h-5 w-5" />
                {t('cv.mobile')}
              </span>
            </a>
          </Button>

          <Button asChild size="lg" className="text-lg px-6 py-3" variant="outline">
            <a
              ref={desktopRef}
              role="menuitem"
              href="/assets/cv/cv-desktop.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              aria-label={t('cv.desktop')}
            >
              <span className="flex items-center gap-3">
                <Monitor className="h-5 w-5" />
                {t('cv.desktop')}
              </span>
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default CVChooser;
