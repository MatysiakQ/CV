import { useQuery } from "@tanstack/react-query";
import { fetchStarredRepos } from "@/services/github";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Code2, Smartphone, Zap } from "lucide-react";

// Featured projects - only these should be shown on home page
const FEATURED_PROJECTS = [
  'E-faktura',
  'Next-Ai',
  'hand-tracking'
];

// Enhanced project data with detailed descriptions
const PROJECT_DETAILS = {
  'E-faktura': {
    title: 'E-Faktura',
    description: 'Profesjonalna aplikacja mobilna do zarządzania fakturami z integracją KSeF i Białej Listy MF. Automatyczne generowanie PDF, śledzenie płatności i statystyki finansowe.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Room', 'KSeF API'],
    category: 'Mobile App',
    icon: Smartphone,
    gradient: 'from-blue-500 to-cyan-500',
    features: ['KSeF Integration', 'PDF Generation', 'Financial Analytics', 'QR Scanner']
  },
  'Next-Ai': {
    title: 'Next-Ai Reborn Project',
    description: 'Zaawansowana platforma AI wykorzystująca najnowsze technologie uczenia maszynowego. Inteligentne przetwarzanie danych i predykcyjne analizy.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'Docker'],
    category: 'AI Platform',
    icon: Zap,
    gradient: 'from-purple-500 to-pink-500',
    features: ['Machine Learning', 'Predictive Analytics', 'REST API', 'Scalable Architecture']
  },
  'hand-tracking': {
    title: 'Hand Tracking Control System',
    description: 'Innowacyjny system śledzenia dłoni wykorzystujący computer vision i machine learning. Zaawansowane rozpoznawanie gestów i kontrola urządzeń.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'MediaPipe', 'NumPy'],
    category: 'Computer Vision',
    icon: Code2,
    gradient: 'from-green-500 to-emerald-500',
    features: ['Gesture Recognition', 'Real-time Processing', 'Computer Vision', 'ML Models']
  }
};

// Project images mapping - add image paths for projects that have them
const PROJECT_IMAGES: Record<string, string> = {
  'hand-tracking': '/lovable-uploads/c37ccb7a-5662-447b-9d38-c871374ff306.png',
  // Add more project images here as needed
  // 'project-name': '/path/to/image.jpg',
};

const FeaturedProjects = () => {
  const { t } = useLanguage();

  const { data: allProjects, isLoading, error } = useQuery({
    queryKey: ['github-starred', 'MatysiakQ'],
    queryFn: () => fetchStarredRepos('MatysiakQ'),
  });

  // Filter to show only featured projects and add images
  const projects = allProjects?.filter(repo =>
    FEATURED_PROJECTS.some(featured =>
      repo.name.toLowerCase().includes(featured.toLowerCase())
    )
  ).map(repo => ({
    ...repo,
    image: PROJECT_IMAGES[repo.name] || null,
    details: PROJECT_DETAILS[repo.name as keyof typeof PROJECT_DETAILS]
  })) || [];

  if (isLoading) {
    return (
      <section id="featured-projects" className="py-24 px-6 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                {t('featured.title').split(' ')[0]} <span className="gradient-text">{t('featured.title').split(' ').slice(1).join(' ')}</span>
              </h2>
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('featured.subtitle')}
            </p>
          </motion.div>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary/50 rounded-full backdrop-blur-sm border border-primary/20">
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
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
              {t('featured.title').split(' ')[0]} <span className="gradient-text">{t('featured.title').split(' ').slice(1).join(' ')}</span>
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
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-8 w-8 text-primary" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              {t('featured.title').split(' ')[0]} <span className="gradient-text">{t('featured.title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
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

        {/* Featured projects grid with enhanced layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => {
            const details = project.details;
            const IconComponent = details?.icon || Code2;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="glass-effect card-glow group overflow-hidden border border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 relative">
                  {/* Project category badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <Badge
                      variant="secondary"
                      className={`bg-gradient-to-r ${details?.gradient || 'from-gray-500 to-gray-600'} text-white border-0 shadow-lg`}
                    >
                      <IconComponent className="h-3 w-3 mr-1" />
                      {details?.category || 'Project'}
                    </Badge>
                  </div>

                  {/* Enhanced image section */}
                  <div className="relative overflow-hidden">
                    {project.image ? (
                      <motion.img
                        src={project.image}
                        alt={details?.title || project.name}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                        whileHover={{ scale: 1.1 }}
                      />
                    ) : (
                      <div
                        className={`w-full h-56 flex items-center justify-center relative bg-gradient-to-br ${details?.gradient || 'from-gray-100 to-gray-200'} group-hover:scale-105 transition-transform duration-500`}
                      >
                        <motion.div
                          animate={{
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <IconComponent className="h-20 w-20 text-white/80 drop-shadow-lg" />
                        </motion.div>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      </div>
                    )}

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Enhanced content section */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {details?.title || project.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {details?.description || project.description || t('portfolio.noDescription')}
                    </p>

                    {/* Technologies */}
                    {details?.technologies && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {details.technologies.slice(0, 3).map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: (index * 0.2) + (techIndex * 0.1) }}
                              className="px-2 py-1 bg-secondary/50 text-xs rounded-full text-muted-foreground border border-primary/20"
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {details.technologies.length > 3 && (
                            <span className="px-2 py-1 bg-secondary/30 text-xs rounded-full text-muted-foreground">
                              +{details.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Key features */}
                    {details?.features && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {details.features.slice(0, 2).map((feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: (index * 0.2) + (featureIndex * 0.1) + 0.3 }}
                              className="flex items-center gap-1 text-xs text-primary"
                            >
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* GitHub stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        {(project as any).stargazers_count > 0 && (
                          <div className="flex items-center gap-1">
                            <Sparkles className="h-3 w-3" />
                            {(project as any).stargazers_count}
                          </div>
                        )}
                        {(project as any).forks_count > 0 && (
                          <div className="flex items-center gap-1">
                            <Code2 className="h-3 w-3" />
                            {(project as any).forks_count}
                          </div>
                        )}
                      </div>

                      <motion.a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary text-xs rounded-full transition-colors duration-300 group/link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Code2 className="h-3 w-3" />
                        <span>View Code</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
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
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;