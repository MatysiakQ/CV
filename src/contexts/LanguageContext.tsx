
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
    // About services
    'about.service.frontend.title': 'Frontend Development',
    'about.service.frontend.description': 'I build responsive and interactive user interfaces using modern frontend technologies.',
    'about.service.backend.title': 'Backend Development',
    'about.service.backend.description': 'I design and implement scalable APIs and databases for web applications.',
    'about.service.mobile.title': 'Mobile Development',
    'about.service.mobile.description': 'I develop mobile applications for iOS and Android using React Native.',
    'about.service.design.title': 'UI/UX Design',
    'about.service.design.description': 'I design intuitive and beautiful interfaces with a strong focus on user experience.',
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
    'contact.validation.subject': 'Subject must be at least 3 characters.',
    'contact.validation.email': 'Please enter a valid email address.',
    'contact.validation.message': 'Message must be at least 10 characters.',
    'contact.validation.fixErrors': 'Please fix the errors in the form.',
    'contact.success': 'Message sent — Thank you! I will reply as soon as possible.',
    'contact.error': 'Failed to send message. Please try again.',
    'home.contact.phone': 'Phone',
    'home.contact.location': 'Location',
    'contact.location.value': 'Lublin, Poland',
    'contact.sending': 'Sending...',
    
    // Portfolio Page
    'portfolio.title': 'My Portfolio',
    'portfolio.subtitle': 'A collection of projects that showcase my skills and passion for front-end development',
    'portfolio.imagePlaceholder': 'Image coming soon',
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
    // About services
    'about.service.frontend.title': 'Frontend Development',
    'about.service.frontend.description': 'Tworzę responsywne i interaktywne interfejsy użytkownika przy użyciu najnowszych technologii.',
    'about.service.backend.title': 'Backend Development',
    'about.service.backend.description': 'Projektuję i implementuję skalowalne API oraz bazy danych dla aplikacji webowych.',
    'about.service.mobile.title': 'Mobile Development',
    'about.service.mobile.description': 'Rozwijam aplikacje mobilne dla iOS i Android używając React Native.',
    'about.service.design.title': 'UI/UX Design',
    'about.service.design.description': 'Projektuję intuicyjne i estetyczne interfejsy skupiając się na doświadczeniu użytkownika.',
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
    'contact.validation.subject': 'Temat musi mieć co najmniej 3 znaki.',
    'contact.validation.email': 'Wprowadź poprawny adres email.',
    'contact.validation.message': 'Wiadomość musi mieć co najmniej 10 znaków.',
    'contact.validation.fixErrors': 'Proszę poprawić błędy w formularzu.',
    'contact.success': 'Wiadomość wysłana — Dziękuję! Odpowiem jak najszybciej.',
    'contact.error': 'Wysłanie nie powiodło się. Spróbuj ponownie.',
    'home.contact.phone': 'Telefon',
    'home.contact.location': 'Lokalizacja',
    'contact.location.value': 'Lublin, Polska',
    'contact.sending': 'Wysyłanie...',
    
    // Portfolio Page
    'portfolio.title': 'Moje Portfolio',
    'portfolio.subtitle': 'Kolekcja projektów, które pokazują moje umiejętności i pasję do programowania front-end',
    'portfolio.imagePlaceholder': 'Obraz wkrótce',
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
    // Prefer selected language, fall back to English, then the key itself
    const val = (translations as any)[language]?.[key];
    if (val) return val;
    const enVal = (translations as any)['en']?.[key];
    if (enVal) return enVal;
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
