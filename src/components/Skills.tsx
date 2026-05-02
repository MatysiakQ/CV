import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Network, PenTool, GitBranch, BookOpen } from "lucide-react";

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(0);

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      color: "#3b82f6",
      bgColor: "rgba(59, 130, 246, 0.05)",
      borderColor: "rgba(59, 130, 246, 0.2)",
      skills: [
        { name: "React", projects: ["portfolio", "E-faktura", "hand-tracking", "Next-Ai"] },
        { name: "TypeScript", projects: ["portfolio", "E-faktura", "hand-tracking", "Next-Ai"] },
        { name: "JavaScript", projects: ["portfolio", "E-faktura", "hand-tracking", "Next-Ai", "PrintWall"] },
        { name: "HTML5/CSS3", projects: ["portfolio", "Next-Ai", "PrintWall"] },
        { name: "Tailwind CSS", projects: ["portfolio", "Next-Ai"] },
        { name: "Responsive Design", projects: ["portfolio", "E-faktura", "Next-Ai"] },
        { name: "Vite", projects: ["portfolio"] },
      ],
    },
    {
      icon: Database,
      title: "Backend & Mobile",
      color: "#a855f7",
      bgColor: "rgba(168, 85, 247, 0.05)",
      borderColor: "rgba(168, 85, 247, 0.2)",
      skills: [
        { name: "React Native", projects: ["E-faktura"] },
        { name: "Firebase", projects: ["E-faktura"] },
        { name: "Node.js", projects: ["E-faktura"] },
        { name: "REST API", projects: ["E-faktura", "hand-tracking"] },
      ],
    },
    {
      icon: Network,
      title: "Infrastructure",
      color: "#f97316",
      bgColor: "rgba(249, 115, 22, 0.05)",
      borderColor: "rgba(249, 115, 22, 0.2)",
      skills: [
        { name: "Azure Fundamentals", projects: [], course: "Azure Fundamentals" },
        { name: "Windows Server", projects: [], course: "Windows Server Admin" },
        { name: "Networking", projects: [], course: "Networking Fundamentals" },
      ],
    },
    {
      icon: PenTool,
      title: "Design & Tools",
      color: "#ec4899",
      bgColor: "rgba(236, 72, 153, 0.05)",
      borderColor: "rgba(236, 72, 153, 0.2)",
      skills: [
        { name: "Figma", projects: ["portfolio", "Next-Ai"] },
        { name: "UI/UX Design", projects: ["portfolio", "E-faktura", "Next-Ai"] },
        { name: "Adobe Photoshop", projects: [], course: "Web Design" },
      ],
    },
    {
      icon: GitBranch,
      title: "Development Tools",
      color: "#10b981",
      bgColor: "rgba(16, 185, 129, 0.05)",
      borderColor: "rgba(16, 185, 129, 0.2)",
      skills: [
        { name: "Git & GitHub", projects: ["portfolio", "E-faktura", "hand-tracking", "Next-Ai", "PrintWall"] },
        { name: "ESLint", projects: ["portfolio", "Next-Ai"] },
        { name: "Package Management", projects: ["portfolio", "E-faktura", "Next-Ai"] },
      ],
    },
  ];

  const courses = [
    { title: "Web Design", icon: "🎨", category: "IT", skills: ["HTML5/CSS3", "Adobe Photoshop", "UI Design"] },
    { title: "Azure Fundamentals", icon: "☁️", category: "IT", skills: ["Azure Fundamentals", "Cloud Basics"] },
    { title: "Windows Server Admin", icon: "🖥️", category: "IT", skills: ["Windows Server", "System Admin"] },
    { title: "Algorithms & Data Structures", icon: "🔍", category: "IT", skills: ["Data Structures", "Algorithms"] },
    { title: "Business for All", icon: "💼", category: "Business", skills: ["Business Strategy", "Management"] },
    { title: "Autodesk Certified User", icon: "🏆", category: "IT", skills: ["CAD", "3D Modeling"] },
  ];

  const currentCategory = skillCategories[selectedCategory];
  const Icon = currentCategory.icon;

  return (
    <section id="tech-stack" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{t('skills.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('skills.authentic.description')}
          </p>
        </motion.div>

        {/* Main Skills Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-24">
          {/* Category Navigation */}
          <motion.div
            className="lg:col-span-1 space-y-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skillCategories.map((category, idx) => {
              const CatIcon = category.icon;
              const isSelected = selectedCategory === idx;
              return (
                <motion.button
                  key={idx}
                  onClick={() => setSelectedCategory(idx)}
                  className="w-full text-left"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className={`p-3 rounded-xl transition-all duration-300 flex items-center gap-3 border-2 ${
                      isSelected
                        ? "border-current bg-primary/10 shadow-lg"
                        : "border-transparent hover:border-muted-foreground/30 bg-muted/50"
                    }`}
                    style={isSelected ? { borderColor: category.color } : {}}
                  >
                    <CatIcon
                      className="w-5 h-5 flex-shrink-0 transition-colors"
                      style={{ color: isSelected ? category.color : "currentColor" }}
                    />
                    <span className={`font-semibold text-sm ${isSelected ? "text-foreground" : "text-muted-foreground"}`}>
                      {category.title}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Skills Content */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl p-8 border-2 backdrop-blur-sm min-h-96"
                style={{
                  backgroundColor: currentCategory.bgColor,
                  borderColor: currentCategory.borderColor,
                }}
              >
                {/* Category Header */}
                <div className="mb-8 flex items-center gap-4">
                  <div
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${currentCategory.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: currentCategory.color }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{currentCategory.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {currentCategory.skills.filter(s => s.projects.length > 0).length} skills used in projects • {currentCategory.skills.filter(s => s.course).length} from courses
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <AnimatePresence>
                    {currentCategory.skills.map((skill, idx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ delay: idx * 0.05 }}
                        className="group"
                      >
                        <div className="p-4 rounded-lg border border-border/50 hover:border-current transition-all duration-300 bg-background/50 hover:bg-background"
                          style={{ borderColor: `rgba(${currentCategory.color === '#3b82f6' ? '59, 130, 246' : currentCategory.color === '#a855f7' ? '168, 85, 247' : currentCategory.color === '#f97316' ? '249, 115, 22' : currentCategory.color === '#ec4899' ? '236, 72, 153' : '16, 185, 129'}, 0.3)` }}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-semibold text-sm">{skill.name}</span>
                            <div className="flex items-center gap-1">
                              {skill.projects.length > 0 && (
                                <Badge className="text-xs px-2 py-0.5 bg-green-500/20 text-green-700 border-green-500/30">
                                  {skill.projects.length} project{skill.projects.length !== 1 ? 's' : ''}
                                </Badge>
                              )}
                              {skill.course && (
                                <Badge variant="outline" className="text-xs px-2 py-0.5">
                                  Course
                                </Badge>
                              )}
                            </div>
                          </div>

                          {/* Projects */}
                          {skill.projects.length > 0 && (
                            <div className="mb-2">
                              <p className="text-xs text-muted-foreground mb-1">{t('skills.used.in')}</p>
                              <div className="flex flex-wrap gap-1">
                                {skill.projects.map((project) => (
                                  <Badge key={project} variant="secondary" className="text-xs px-2 py-0.5">
                                    {project}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Course source */}
                          {skill.course && (
                            <div className="text-xs text-muted-foreground">
                              📚 {t('skills.from.course')} {skill.course}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Courses Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="gradient-text">{t('courses.title')}</span>
            </h3>
            <p className="text-muted-foreground">{t('courses.skills.gained')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <div className="relative group overflow-hidden rounded-xl border border-border/60 bg-muted/30 p-5 hover:border-primary/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-4xl">{course.icon}</div>
                      <Badge variant="outline" className="text-xs bg-muted/50">{course.category}</Badge>
                    </div>
                    <h4 className="font-semibold text-sm mb-2 line-clamp-2">{course.title}</h4>
                    <div className="text-xs text-muted-foreground">
                      <BookOpen className="w-3 h-3 inline mr-1" />
                      Skills: {course.skills.join(', ')}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {[
            { value: "500+", label: "GitHub Commits", icon: "📊", desc: "Active development" },
            { value: "41+", label: "Completed Courses", icon: "🎓", desc: "Continuous learning" },
            { value: "8", label: "Featured Projects", icon: "🚀", desc: "Real-world experience" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-center p-6 rounded-xl border border-border/50 bg-muted/30 hover:border-primary/30 transition-all"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <p className="text-sm font-medium mb-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
