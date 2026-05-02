const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.courses': 'Courses',

    // Home Page
    'home.hero.title': 'Junior Mobile & Web Developer',
    'home.hero.description': 'I build performant mobile and web applications using React Native, React and TypeScript. I focus on responsive UI, offline support, and shipping production-ready builds.',
    'home.hero.viewProjects': 'View My Projects',
    'home.hero.contactMe': 'Contact Me',
    'home.hero.downloadCV': 'Download CV',
    'home.about.title': 'About Me',
    'home.about.description': 'Passionate junior developer skilled in modern frontend and mobile technologies. I deliver accessible, responsive interfaces, integrate APIs, and follow CI/CD, testing and performance best practices.',
    'home.contact.title': 'Contact Me',
    'home.contact.subtitle': 'Let\'s discuss your next project or collaboration opportunity',
    'home.contact.name': 'Name',
    'home.contact.namePlaceholder': 'Your name',
    'home.contact.email': 'Email',
    'home.contact.emailPlaceholder': 'your@email.com',
    'home.contact.phone': 'Phone',
    'home.contact.subject': 'Subject',
    'home.contact.subjectPlaceholder': 'Project discussion',
    'home.contact.message': 'Message',
    'home.contact.messagePlaceholder': 'Tell me about your project...',
    'home.contact.send': 'Send Message',
    'home.contact.location': 'Location',

    // Contact Page
    'contact.location.value': 'Lublin, Poland',

    // About History
    'about.history.title': 'My Story',
    'about.history.description1': 'I am a developer with a passion for creating innovative technological solutions. My experience encompasses both frontend and backend development.',
    'about.history.description2': 'I specialize in the JavaScript/TypeScript ecosystem, particularly in React and Node.js. I enjoy creating applications that not only look good, but are also performant and scalable.',
    'about.history.description3': 'I am constantly learning and tracking the latest trends in the industry to deliver the best possible solutions.',
    'about.skills.title': 'Skills',

    // Portfolio Page
    'portfolio.projects.ecommerce.title': 'E-commerce Platform',
    'portfolio.projects.ecommerce.description': 'A complete e-commerce platform with Stripe payment integration, inventory management, and admin panel. Stack: React, Node.js, PostgreSQL, Stripe. Result: secure payments, modular architecture ready for scaling and CI/CD.',
    'portfolio.projects.taskapp.title': 'Task Management App',
    'portfolio.projects.taskapp.description': 'Project management app with real-time updates and team collaboration features. Stack: React, TypeScript, Socket.io, MongoDB. Result: real-time task synchronization and architecture prepared for scaling and production deployment.',
    'portfolio.projects.weather.title': 'Weather Dashboard',
    'portfolio.projects.weather.description': 'Interactive weather dashboard with maps, forecasts and alerts. Stack: Vue.js, D3.js, REST API, PWA. Result: fast data visualizations, offline support via PWA and responsive UI for mobile devices.',
    'portfolio.projects.analytics.title': 'Social Media Analytics',
    'portfolio.projects.analytics.description': 'Tool for aggregating and analyzing social media data with advanced reports and charts. Stack: React, Python, FastAPI, Chart.js. Result: automated reports, data export and preparation for BI tools integration.',
    'portfolio.title': 'My Portfolio',
    'portfolio.subtitle': 'Explore my recent projects and contributions to development',
    'portfolio.loading': 'Loading projects...',
    'portfolio.error': 'Failed to load projects',
    'portfolio.noDescription': 'Check details on GitHub',
    'portfolio.imagePlaceholder': 'Project Image',
    'portfolio.viewCode': 'View Code',
    'portfolio.viewDemo': 'Demo',

    // Featured Projects
    'featured.title': 'Featured Projects',
    'featured.subtitle': 'My most important and innovative projects',

    // Portfolio Status

    // Courses Page
    'courses.title': 'My Courses',
    'courses.subtitle': 'My professional certifications and completed courses',
    'courses.filterByCategory': 'Filter by category',
    'courses.noCoursesFound': 'No courses found in the selected category.',
    'courses.filterAll': 'All',
    'courses.filterIT': 'IT',
    'courses.filterBusiness': 'Business',
    'courses.filterPersonal': 'Personal Development',
    'courses.filterLanguage': 'Language',
    'courses.filterOther': 'Other',
    'courses.filterFeatured': 'Featured',

    // About Page
    'about.service.frontend.title': 'Frontend Development',
    'about.service.frontend.description': 'I build responsive and interactive user interfaces using modern frontend technologies.',
    'about.service.backend.title': 'Backend Development',
    'about.service.backend.description': 'I design and implement scalable APIs and databases for web applications.',
    'about.service.mobile.title': 'Mobile Development',
    'about.service.mobile.description': 'I develop native and cross-platform mobile apps (React Native) and I have familiarity with Android SDK and Kotlin. I focus on performant, responsive mobile UX.',
    'about.service.design.title': 'UI/UX Design',
    'about.service.design.description': 'I design intuitive and beautiful interfaces with a strong focus on user experience.',

    // Contact Form Validation
    'contact.validation.name': 'Name must be at least 2 characters.',
    'contact.validation.subject': 'Subject must be at least 3 characters.',
    'contact.validation.email': 'Please enter a valid email address.',
    'contact.validation.message': 'Message must be at least 10 characters.',
    'contact.validation.fixErrors': 'Please fix the errors in the form.',
    'contact.success': 'Message sent — Thank you! I will reply as soon as possible.',
    'contact.error': 'Failed to send message. Please try again.',
    'contact.sending': 'Sending...',

    // CV Download Labels
    'cv.mobile': 'Mobile Developer CV',
    'cv.desktop': 'Desktop Developer CV',

    // Skills Page
    'skills.title': 'Tech Stack',
    'skills.subtitle': 'Technologies and tools I work with. For recruiters, to not waste their time!',
    'skills.frontend.title': 'Frontend Ecosystem',
    'skills.frontend.subtitle': 'Building responsive and interactive user interfaces',
    'skills.frontend.react': 'React & React Native for cross-platform development',
    'skills.frontend.typescript': 'TypeScript for type-safe JavaScript',
    'skills.frontend.javascript': 'JavaScript fundamentals and modern ES6+ features',
    'skills.frontend.htmlcss': 'HTML5 & CSS3 with responsive design principles',
    'skills.frontend.uilibraries': 'UI libraries like Tailwind CSS, Shadcn/ui',
    'skills.frontend.tools': 'Build tools: Vite, Webpack, ESLint',
    'skills.backend.title': 'Backend & Data',
    'skills.backend.subtitle': 'Server-side development and data management',
    'skills.backend.databases': 'Databases: PostgreSQL, MongoDB, Firebase',
    'skills.backend.logic': 'Backend logic with Node.js, Express, Python',
    'skills.backend.cloud': 'Cloud services: AWS, Vercel, Netlify',
    'skills.engineering.title': 'Engineering & Mobile',
    'skills.engineering.subtitle': 'Software engineering practices and mobile development',
    'skills.engineering.languages': 'Programming languages: C++, C#, Java',
    'skills.engineering.labview': 'LabVIEW for automation and control systems',
    'skills.engineering.architecture': 'System architecture and design patterns',
    'skills.workflow.title': 'Workflow & Tools',
    'skills.workflow.subtitle': 'Development workflow and productivity tools',
    'skills.workflow.versioncontrol': 'Version control: Git, GitHub',
    'skills.workflow.design': 'Design tools: Figma, Adobe XD',
    'skills.workflow.testing': 'Testing frameworks and CI/CD pipelines',

    // New Skills Section
    'skills.authentic.description': 'Technologies I\'ve actually used in my projects',
    'skills.used.in': 'Used in:',
    'skills.from.course': 'From course:',

    // Courses Section
    'courses.skills.gained': 'Skills gained from completed courses',

    // 404 Page
    'notfound.title': 'Page Not Found',
    'notfound.message': 'Oops! The page you are looking for does not exist',
    'notfound.button': 'Return to Home',

    // Portfolio Status
    'portfolio.status.closed': 'Closed project',
    'portfolio.status.inProgress': 'In progress',
    'portfolio.updated': 'Updated',

    // Project Descriptions
    'portfolio.projects.portfolio.title': 'My Portfolio Website',
    'portfolio.projects.portfolio.description': 'My portfolio website showcasing my projects and skills',
    'portfolio.projects.cv.title': 'My Portfolio Website',
    'portfolio.projects.cv.description': 'My portfolio website showcasing my projects and skills',
    'portfolio.projects.e-faktura.title': 'Mobile Application',
    'portfolio.projects.e-faktura.description': 'Mobile application for electronic invoicing',
    'portfolio.projects.next-ai.title': 'Website for My Startup Project',
    'portfolio.projects.next-ai.description': 'Website for my startup project Next-Ai',
    'portfolio.projects.printwall.title': 'First Big Project - Wall Print Company Website',
    'portfolio.projects.printwall.description': 'My first big project, a website for a wall print company',
  },
  pl: {
    // Header
    'nav.home': 'Strona Główna',
    'nav.portfolio': 'Portfolio',
    'nav.courses': 'Kursy',

    // Home Page
    'home.hero.title': 'Junior Developer Aplikacji Mobilnych i Webowych',
    'home.hero.description': 'Tworzę wydajne aplikacje mobilne i webowe w React Native, React i TypeScript. Skupiam się na responsywnym UI, wsparciu offline i dostarczaniu gotowych do produkcji buildów.',
    'home.hero.viewProjects': 'Zobacz moje projekty',
    'home.hero.contactMe': 'Skontaktuj się ze mną',
    'home.hero.downloadCV': 'Pobierz CV',
    'home.about.title': 'O mnie',
    'home.about.description': 'Pasjonat programowania z doświadczeniem w nowoczesnych technologiach frontendowych i mobilnych. Tworzę dostępne, responsywne interfejsy, integruję API oraz stosuję praktyki CI/CD, testowania i optymalizacji wydajności.',

    'home.contact.title': 'Kontakt',
    'home.contact.subtitle': 'Porozmawiajmy o Twoim następnym projekcie lub współpracy',
    'home.contact.name': 'Imię',
    'home.contact.namePlaceholder': 'Twoje imię',
    'home.contact.email': 'Email',
    'home.contact.emailPlaceholder': 'twoj@email.com',
    'home.contact.phone': 'Telefon',
    'home.contact.subject': 'Temat',
    'home.contact.subjectPlaceholder': 'Dyskusja o projekcie',
    'home.contact.message': 'Wiadomość',
    'home.contact.messagePlaceholder': 'Opowiedz mi o swoim projekcie...',
    'home.contact.send': 'Wyślij Wiadomość',
    'home.contact.location': 'Lokalizacja',

    // Contact Page
    'contact.location.value': 'Lublin, Polska',

    // About History
    'about.history.title': 'Moja Historia',
    'about.history.description1': 'Jestem deweloperem z pasją do tworzenia innowacyjnych rozwiązań technologicznych. Moje doświadczenie obejmuje zarówno frontend jak i backend development.',
    'about.history.description2': 'Specjalizuję się w ekosystemie JavaScript/TypeScript, szczególnie w React i Node.js. Lubię tworzyć aplikacje, które nie tylko dobrze wyglądają, ale też są wydajne i skalowalne.',
    'about.history.description3': 'Ciągle się uczę i śledzę najnowsze trendy w branży, aby dostarczać najlepsze możliwe rozwiązania.',
    'about.skills.title': 'Umiejętności',

    // Portfolio Page
    'portfolio.projects.ecommerce.title': 'Platforma E-commerce',
    'portfolio.projects.ecommerce.description': 'Kompleksowa platforma sprzedażowa z integracją płatności (Stripe), zarządzaniem stanami magazynowymi oraz panelem administracyjnym. Stack: React, Node.js, PostgreSQL, Stripe. Wynik: bezpieczne płatności, modularna architektura gotowa do skalowania i CI/CD.',
    'portfolio.projects.taskapp.title': 'Aplikacja do Zarządzania Zadaniami',
    'portfolio.projects.taskapp.description': 'Aplikacja do zarządzania projektami z aktualizacjami w czasie rzeczywistym i funkcjami współpracy zespołowej. Stack: React, TypeScript, Socket.io, MongoDB. Wynik: synchronizacja zadań w czasie rzeczywistym oraz architektura przygotowana do skalowania i produkcyjnego wdrożenia.',
    'portfolio.projects.weather.title': 'Panel Pogodowy',
    'portfolio.projects.weather.description': 'Interaktywny panel pogodowy z mapami, prognozami i alertami. Stack: Vue.js, D3.js, REST API, PWA. Wynik: szybkie wizualizacje danych, obsługa offline dzięki PWA i responsywne UI dla urządzeń mobilnych.',
    'portfolio.projects.analytics.title': 'Social Media Analytics',
    'portfolio.projects.analytics.description': 'Narzędzie do agregacji i analizy danych z mediów społecznościowych z zaawansowanymi raportami i wykresami. Stack: React, Python, FastAPI, Chart.js. Wynik: automatyczne raporty, eksport danych i przygotowanie do integracji z narzędziami BI.',
    'portfolio.title': 'Moje Portfolio',
    'portfolio.subtitle': 'Zobacz moje ostatnie projekty i wkład w rozwój',
    'portfolio.loading': 'Ładowanie projektów...',
    'portfolio.error': 'Nie udało się załadować projektów',
    'portfolio.noDescription': 'Sprawdź szczegóły na GitHub',
    'portfolio.imagePlaceholder': 'Obraz Projektu',
    'portfolio.viewCode': 'Zobacz Kod',
    'portfolio.viewDemo': 'Demo',

    // Featured Projects
    'featured.title': 'Wyróżnione Projekty',
    'featured.subtitle': 'Moje najważniejsze i najbardziej innowacyjne projekty',

    // Portfolio Status

    // Courses Page
    'courses.title': 'Moje Kursy',
    'courses.subtitle': 'Moje certyfikaty zawodowe i ukończone kursy',
    'courses.filterByCategory': 'Filtruj według kategorii',
    'courses.noCoursesFound': 'Nie znaleziono kursów w wybranej kategorii.',
    'courses.filterAll': 'Wszystkie',
    'courses.filterIT': 'Informatyczne',
    'courses.filterBusiness': 'Biznesowe',
    'courses.filterPersonal': 'Rozwój Osobisty',
    'courses.filterLanguage': 'Językowe',
    'courses.filterOther': 'Inne',
    'courses.filterFeatured': 'Wyróżnione',

    // About Page
    'about.service.frontend.title': 'Frontend Development',
    'about.service.frontend.description': 'Tworzę responsywne i interaktywne interfejsy użytkownika przy użyciu najnowszych technologii.',
    'about.service.backend.title': 'Backend Development',
    'about.service.backend.description': 'Projektuję i implementuję skalowalne API oraz bazy danych dla aplikacji webowych.',
    'about.service.mobile.title': 'Rozwijanie Aplikacji Mobilnych',
    'about.service.mobile.description': 'Rozwijam aplikacje natywne i cross-platform (React Native). Posiadam znajomość Android SDK oraz podstaw Kotlin. Skupiam się na wydajnym, responsywnym UX mobilnym.',
    'about.service.design.title': 'Projektowanie UI/UX',
    'about.service.design.description': 'Projektuję intuicyjne i estetyczne interfejsy skupiając się na doświadczeniu użytkownika.',

    // Contact Form Validation
    'contact.validation.name': 'Imię musi mieć co najmniej 2 znaki.',
    'contact.validation.subject': 'Temat musi mieć co najmniej 3 znaki.',
    'contact.validation.email': 'Wprowadź poprawny adres email.',
    'contact.validation.message': 'Wiadomość musi mieć co najmniej 10 znaków.',
    'contact.validation.fixErrors': 'Proszę poprawić błędy w formularzu.',
    'contact.success': 'Wiadomość wysłana — Dziękuję! Odpowiem jak najszybciej.',
    'contact.error': 'Wysłanie nie powiodło się. Spróbuj ponownie.',
    'contact.sending': 'Wysyłanie...',

    // CV Download Labels
    'cv.mobile': 'CV - Mobile Developer',
    'cv.desktop': 'CV - Desktop Developer',

    // Skills Page
    'skills.title': 'Stos Technologiczny',
    'skills.subtitle': 'Technologie i narzędzia, z którymi pracuję. Dla rekruterów, aby nie marnować waszego czasu!',
    'skills.frontend.title': 'Ekosystem Frontend',
    'skills.frontend.subtitle': 'Tworzenie responsywnych i interaktywnych interfejsów użytkownika',
    'skills.frontend.react': 'React & React Native do rozwoju międzyplatformowego',
    'skills.frontend.typescript': 'TypeScript dla bezpiecznego typowania JavaScript',
    'skills.frontend.javascript': 'Podstawy JavaScript i nowoczesne funkcje ES6+',
    'skills.frontend.htmlcss': 'HTML5 & CSS3 z zasadami responsywnego designu',
    'skills.frontend.uilibraries': 'Biblioteki UI jak Tailwind CSS, Shadcn/ui',
    'skills.frontend.tools': 'Narzędzia budowania: Vite, Webpack, ESLint',
    'skills.backend.title': 'Backend & Dane',
    'skills.backend.subtitle': 'Rozwój po stronie serwera i zarządzanie danymi',
    'skills.backend.databases': 'Bazy danych: PostgreSQL, MongoDB, Firebase',
    'skills.backend.logic': 'Logika backend z Node.js, Express, Python',
    'skills.backend.cloud': 'Usługi chmurowe: AWS, Vercel, Netlify',
    'skills.engineering.title': 'Inżynieria & Mobilne',
    'skills.engineering.subtitle': 'Praktyki inżynierii oprogramowania i rozwój mobilny',
    'skills.engineering.languages': 'Języki programowania: C++, C#, Java',
    'skills.engineering.labview': 'LabVIEW do automatyzacji i systemów sterowania',
    'skills.engineering.architecture': 'Architektura systemów i wzorce projektowe',
    'skills.workflow.title': 'Przepływ Pracy & Narzędzia',
    'skills.workflow.subtitle': 'Przepływ rozwoju i narzędzia produktywności',
    'skills.workflow.versioncontrol': 'Kontrola wersji: Git, GitHub',
    'skills.workflow.design': 'Narzędzia designu: Figma, Adobe XD',
    'skills.workflow.testing': 'Frameworki testowe i potoki CI/CD',

    // New Skills Section
    'skills.authentic.description': 'Technologie, których naprawdę używałem w swoich projektach',
    'skills.used.in': 'Użyte w:',
    'skills.from.course': 'Z kursu:',

    // Courses Section
    'courses.skills.gained': 'Umiejętności zdobyte podczas ukończonych kursów',

    // 404 Page
    'notfound.title': 'Strona nie znaleziona',
    'notfound.message': 'Ups! Strona, której szukasz nie istnieje',
    'notfound.button': 'Wróć do strony głównej',

    // Portfolio Status
    'portfolio.status.closed': 'Projekt zamknięty',
    'portfolio.status.inProgress': 'W trakcie tworzenia',
    'portfolio.updated': 'Ostatnio zaktualizowano',

    // Project Descriptions
    'portfolio.projects.portfolio.title': 'Strona mojego portfolio',
    'portfolio.projects.portfolio.description': 'Strona mojego portfolio prezentująca moje projekty i umiejętności',
    'portfolio.projects.cv.title': 'Strona mojego portfolio',
    'portfolio.projects.cv.description': 'Strona mojego portfolio prezentująca moje projekty i umiejętności',
    'portfolio.projects.e-faktura.title': 'Aplikacja mobilna',
    'portfolio.projects.e-faktura.description': 'Aplikacja mobilna do fakturowania elektronicznego',
    'portfolio.projects.next-ai.title': 'Strona internetowa mojego startupowego projektu',
    'portfolio.projects.next-ai.description': 'Strona internetowa mojego startupowego projektu Next-Ai',
    'portfolio.projects.printwall.title': 'Pierwszy duży projekt - strona firmy z nadrukiem ściennym',
    'portfolio.projects.printwall.description': 'Mój pierwszy duży projekt, strona internetowa dla firmy z nadrukiem ściennym',
  }
};

export default translations;
