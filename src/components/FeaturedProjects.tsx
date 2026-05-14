import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchStarredRepos } from "@/services/github";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { GitHubRepo } from "@/types/github";
import FeaturedProjectCard, {
  type FeaturedProjectDetails,
} from "./FeaturedProjectCard";

const FEATURED_PROJECTS = ['E-faktura', 'Next-Ai', 'hand-tracking'] as const;

const normalizeProjectName = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]/g, '');

const PROJECT_DETAILS: Record<string, FeaturedProjectDetails> = {
  'E-faktura': {
    title: 'E-Faktura',
    description:
      'Profesjonalna aplikacja mobilna do zarządzania fakturami z integracją KSeF i Białej Listy MF. Automatyczne generowanie PDF, śledzenie płatności i statystyki finansowe.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Room', 'KSeF API'],
    category: 'Mobile App',
    icon: Sparkles,
    gradient: 'from-blue-500 to-cyan-500',
    features: ['KSeF Integration', 'PDF Generation', 'Financial Analytics', 'QR Scanner'],
  },
  'Next-Ai': {
    title: 'Next-Ai Reborn Project',
    description:
      'Zaawansowana platforma AI wykorzystująca najnowsze technologie uczenia maszynowego. Inteligentne przetwarzanie danych i predykcyjne analizy.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'Docker'],
    category: 'AI Platform',
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-500',
    features: ['Machine Learning', 'Predictive Analytics', 'REST API', 'Scalable Architecture'],
  },
  'hand-tracking': {
    title: 'Hand Tracking Control System',
    description:
      'Innowacyjny system śledzenia dłoni wykorzystujący computer vision i machine learning. Zaawansowane rozpoznawanie gestów i kontrola urządzeń.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'MediaPipe', 'NumPy'],
    category: 'Computer Vision',
    icon: Sparkles,
    gradient: 'from-green-500 to-emerald-500',
    features: ['Gesture Recognition', 'Real-time Processing', 'Computer Vision', 'ML Models'],
  },
};

const PROJECT_IMAGES: Record<string, string> = {
  'hand-tracking': '/images/c37ccb7a-5662-447b-9d38-c871374ff306.png',
};

const FeaturedProjects = () => {
  const { t } = useLanguage();

  const { data: allProjects, isLoading, error } = useQuery<GitHubRepo[], Error>({
    queryKey: ['github-starred', 'MatysiakQ'],
    queryFn: () => fetchStarredRepos('MatysiakQ'),
  });

  const projects = useMemo(() => {
    return (
      allProjects
        ?.filter((repo) =>
          FEATURED_PROJECTS.some(
            (featured) => normalizeProjectName(repo.name) === normalizeProjectName(featured)
          )
        )
        .map((repo) => {
              const matchedKey = FEATURED_PROJECTS.find(
                (featured) => normalizeProjectName(repo.name) === normalizeProjectName(featured)
              );
              return {
                ...repo,
                image: matchedKey ? PROJECT_IMAGES[matchedKey] ?? null : null,
                details: matchedKey ? PROJECT_DETAILS[matchedKey] : undefined,
              };
            }) ?? []
    );
  }, [allProjects]);

  const titleParts = t('featured.title').split(' ');
  const headline = titleParts.shift() ?? '';
  const subtitle = titleParts.join(' ');

  if (isLoading) {
    return (
      <section id="featured-projects" className="py-24 px-6 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                {headline} <span className="gradient-text">{subtitle}</span>
              </h2>
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('featured.subtitle')}
            </p>
          </motion.div>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary/50 rounded-full backdrop-blur-sm border border-primary/20">
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-lg text-muted-foreground">{t('portfolio.loading')}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || projects.length === 0) {
    return (
      <section id="featured-projects" className="py-24 px-6 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              {headline} <span className="gradient-text">{subtitle}</span>
            </h2>
          </div>
          <div className="text-center">
            <p className="text-xl text-muted-foreground">{t('portfolio.error')}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="featured-projects" className="py-24 px-6 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
              <Sparkles className="h-8 w-8 text-primary" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              {headline} <span className="gradient-text">{subtitle}</span>
            </h2>
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
              <Sparkles className="h-8 w-8 text-primary" />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {t('featured.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-colors duration-300 cursor-pointer group">
            <Sparkles className="h-5 w-5 text-primary group-hover:animate-pulse" />
            <span className="text-foreground font-medium">Zobacz wszystkie projekty na GitHub</span>
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              →
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
