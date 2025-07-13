
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'pl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.courses': 'Courses',
    
    // Home Page
    'home.hero.title': 'Junior Front-End Developer',
    'home.hero.description': 'I create modern web and mobile applications. I specialize in React, TypeScript and modern frontend technologies.',
    'home.hero.viewProjects': 'View My Projects',
    'home.hero.contactMe': 'Contact Me',
    'home.hero.downloadCV': 'Download CV',
    'home.about.title': 'About Me',
    'home.about.description': 'Passionate junior front-end developer with a strong foundation in modern web technologies. I love creating beautiful, responsive, and user-friendly interfaces that provide excellent user experiences.',
    'home.contact.title': 'Contact Me',
    'home.contact.subtitle': 'Let\'s discuss your next project or collaboration opportunity',
    'home.contact.name': 'Name',
    'home.contact.namePlaceholder': 'Your name',
    'home.contact.email': 'Email',
    'home.contact.emailPlaceholder': 'your@email.com',
    'home.contact.subject': 'Subject',
    'home.contact.subjectPlaceholder': 'Project discussion',
    'home.contact.message': 'Message',
    'home.contact.messagePlaceholder': 'Tell me about your project...',
    'home.contact.send': 'Send Message',
    
    // Portfolio Page
    'portfolio.title': 'My Portfolio',
    'portfolio.subtitle': 'A collection of projects that showcase my skills and passion for front-end development',
    'portfolio.loading': 'Loading projects...',
    'portfolio.error': 'Failed to load projects',
    'portfolio.noDescription': 'No description available',
    'portfolio.viewCode': 'View Code',
    'portfolio.viewDemo': 'Demo',
    
    // Courses Page
    'courses.title': 'My Courses',
    'courses.subtitle': 'Professional development and continuous learning journey',
    'courses.filterAll': 'All',
    'courses.filterIT': 'IT',
    'courses.filterBusiness': 'Business',
    'courses.filterPersonal': 'Personal Development',
    'courses.filterLanguage': 'Language',
    'courses.filterOther': 'Other',
    
    // Common
    'loading': 'Loading...',
    'error': 'Error occurred',
  },
  pl: {
    // Header
    'nav.home': 'Strona Główna',
    'nav.portfolio': 'Portfolio',
    'nav.courses': 'Kursy',
    
    // Home Page
    'home.hero.title': 'Junior Front-End Developer',
    'home.hero.description': 'Tworzę nowoczesne aplikacje webowe i mobilne. Specjalizuję się w React, TypeScript i nowoczesnych technologiach frontendowych.',
    'home.hero.viewProjects': 'Zobacz moje projekty',
    'home.hero.contactMe': 'Skontaktuj się ze mną',
    'home.hero.downloadCV': 'Pobierz CV',
    'home.about.title': 'O mnie',
    'home.about.description': 'Pasjonat programowania front-end z solidną podstawą w nowoczesnych technologiach webowych. Uwielbiam tworzyć piękne, responsywne i przyjazne dla użytkownika interfejsy, które zapewniają doskonałe doświadczenia użytkownika.',
    'home.contact.title': 'Kontakt',
    'home.contact.subtitle': 'Porozmawiajmy o Twoim następnym projekcie lub współpracy',
    'home.contact.name': 'Imię',
    'home.contact.namePlaceholder': 'Twoje imię',
    'home.contact.email': 'Email',
    'home.contact.emailPlaceholder': 'twoj@email.com',
    'home.contact.subject': 'Temat',
    'home.contact.subjectPlaceholder': 'Dyskusja o projekcie',
    'home.contact.message': 'Wiadomość',
    'home.contact.messagePlaceholder': 'Opowiedz mi o swoim projekcie...',
    'home.contact.send': 'Wyślij Wiadomość',
    
    // Portfolio Page
    'portfolio.title': 'Moje Portfolio',
    'portfolio.subtitle': 'Kolekcja projektów, które pokazują moje umiejętności i pasję do programowania front-end',
    'portfolio.loading': 'Ładowanie projektów...',
    'portfolio.error': 'Nie udało się załadować projektów',
    'portfolio.noDescription': 'Brak opisu',
    'portfolio.viewCode': 'Zobacz Kod',
    'portfolio.viewDemo': 'Demo',
    
    // Courses Page
    'courses.title': 'Moje Kursy',
    'courses.subtitle': 'Rozwój zawodowy i ciągłe uczenie się',
    'courses.filterAll': 'Wszystkie',
    'courses.filterIT': 'Informatyczne',
    'courses.filterBusiness': 'Biznesowe',
    'courses.filterPersonal': 'Rozwój Osobisty',
    'courses.filterLanguage': 'Językowe',
    'courses.filterOther': 'Inne',
    
    // Common
    'loading': 'Ładowanie...',
    'error': 'Wystąpił błąd',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
