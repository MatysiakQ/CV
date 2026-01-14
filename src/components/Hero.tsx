
  import React, { useState, useRef, useEffect } from "react";
  import { Button } from "@/components/ui/button";
  import { Github, Linkedin, Mail, ArrowDown, Instagram, Smartphone, Monitor, Download, ChevronDown } from "lucide-react";
  import { useLanguage } from "@/contexts/LanguageContext";
  import { motion } from 'framer-motion';

  const Hero = () => {
    const { t, language } = useLanguage();
    void language;

    const item = {
      hidden: { opacity: 0, y: 8 },
      show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
    };

    return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Profile image */}
            <motion.div className="mb-8 relative" initial="hidden" whileInView="show" viewport={{ once: true }} variants={item}>
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-spin [animation-duration:8s]"></div>
                <div className="absolute inset-2 bg-background rounded-full"></div>
                <motion.img
                  src="/lovable-uploads/CVPhoto.jpeg"
                  alt="Profile photo of Adam Jastrzębski"
                  className="absolute inset-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover shadow-[0_8px_30px_rgba(99,102,241,0.12)] shadow-purple-500/10"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              <span className="gradient-text">Adam Jastrzębski</span>
            </h1>
            
            <motion.h2 variants={item} className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-slate-200">
              {t('home.hero.title')}
            </motion.h2>

            <motion.p variants={item} className="text-lg sm:text-xl md:text-2xl text-slate-200/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t('home.hero.description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="gradient" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t('home.hero.viewProjects')}
              </Button>
              <Button 
                variant="glass" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t('home.hero.contactMe')}
              </Button>

              {/* Collapsible CV chooser: single button that expands into two links */}
              <CVChooser />
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex justify-center space-x-6 mb-12">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary"
                asChild
              >
                <a href="https://github.com/MatysiakQ" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary"
                asChild
              >
                <a href="https://www.linkedin.com/in/adamjastrzębski" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary"
                asChild
              >
                <a href="https://instagram.com/adamtheantagonist" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary"
                asChild
              >
                <a href="mailto:ajastrzebski2104@gmail.com" aria-label="Email">
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
            </motion.div>

            {/* Scroll indicator */}
            <div className="animate-bounce">
              <ArrowDown className="h-6 w-6 mx-auto text-slate-200/70" />
            </div>
          </div>
        </div>
      </section>
    );
  };

  
  function CVChooser(): JSX.Element {
    const { t } = useLanguage();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const mobileRef = useRef<HTMLAnchorElement | null>(null);
    const desktopRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
      const onDoc = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') return setOpen(false);
        if (!open) return;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          if (document.activeElement === mobileRef.current) {
            desktopRef.current?.focus();
          } else {
            mobileRef.current?.focus();
          }
        }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          if (document.activeElement === desktopRef.current) {
            mobileRef.current?.focus();
          } else {
            desktopRef.current?.focus();
          }
        }
        if (e.key === 'Enter' && document.activeElement instanceof HTMLElement) {
          (document.activeElement as HTMLElement).click();
        }
      };
      document.addEventListener('click', onDoc);
      document.addEventListener('keydown', onKey);
      return () => {
        document.removeEventListener('click', onDoc);
        document.removeEventListener('keydown', onKey);
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
          onClick={(e) => { e.stopPropagation(); setOpen(v => !v); }}
        >
          <Download className="h-5 w-5" />
          <span>{t('home.hero.downloadCV')}</span>
          <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${open ? 'rotate-180' : ''}`} />
        </Button>

        <motion.div
          id="cv-chooser-menu"
          initial={{ opacity: 0, y: -6 }}
          animate={open ? { opacity: 1, y: 0, transition: { duration: 0.18 } } : { opacity: 0, y: -6, transition: { duration: 0.12 } }}
          className={`absolute z-20 mt-3 left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0 sm:mt-4 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
          role="menu"
        >
          <div className="bg-background/80 backdrop-blur-md p-3 rounded-md shadow-lg flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="text-lg px-6 py-3" variant="default">
              <a ref={mobileRef} role="menuitem" href="/assets/cv/cv-mobile.pdf" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} aria-label="Mobile Developer CV">
                <span className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5" />
                  Mobile Developer CV
                </span>
              </a>
            </Button>

            <Button asChild size="lg" className="text-lg px-6 py-3" variant="outline">
              <a ref={desktopRef} role="menuitem" href="/assets/cv/cv-desktop.pdf" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} aria-label="Desktop Developer CV">
                <span className="flex items-center gap-3">
                  <Monitor className="h-5 w-5" />
                  Desktop Developer CV
                </span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  export default Hero;
