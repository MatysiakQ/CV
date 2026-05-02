
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { path: "/", label: t('nav.home') },
    { path: "/portfolio", label: t('nav.portfolio') },
    { path: "/courses", label: t('nav.courses') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-border/50 bg-background/60 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold gradient-text">
            JastrząbDev
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <div key={item.path} className="relative">
                <Link
                  to={item.path}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary py-1",
                    isActive(item.path) ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
                {isActive(item.path) && (
                  <motion.span layoutId="nav-underline" className="absolute left-0 right-0 -bottom-1 h-0.5 rounded bg-gradient-to-r from-primary to-secondary" />
                )}
              </div>
            ))}
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://github.com/MatysiakQ" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/adamjastrzębski"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:text-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/MatysiakQ" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:text-primary hover:bg-primary/10"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/adamjastrzębski"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary py-2",
                    isActive(item.path) ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
