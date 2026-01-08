import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="tech-stack" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t('skills.title')}</span>
          </h2>
          <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">{t('skills.subtitle')}</p>
        </header>

        <div className="border-t border-[hsl(var(--border))]" />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Frontend Ecosystem */}
          <article className="flex flex-col h-full p-6 bg-[hsl(var(--card))]/95 text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))] rounded-lg text-left items-start shadow-sm hover:shadow-2xl hover:shadow-primary/30 hover:ring-4 hover:ring-primary/20 hover:scale-105 transition-all duration-500 ease-out">
            <div className="flex items-start gap-4 min-h-[140px]">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center text-[hsl(var(--primary))] border border-[hsl(var(--border))]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[hsl(var(--primary))] leading-tight">{t('skills.frontend.title')}</h3>
                <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{t('skills.frontend.subtitle')}</p>
              </div>
            </div>

            <div className="border-t border-[hsl(var(--border))]" />

            <div className="flex-grow mt-4">
              <ul className="space-y-4 list-none text-left">
                <li className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--primary))]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span>{t('skills.frontend.react')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--primary))]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span>{t('skills.frontend.typescript')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--primary))]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span>{t('skills.frontend.javascript')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--primary))]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span>{t('skills.frontend.htmlcss')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--primary))]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span>{t('skills.frontend.uilibraries')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--primary))]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span>{t('skills.frontend.tools')}</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto pt-6 flex items-center justify-between">
              <a href="#projects" className="text-sm text-[hsl(var(--primary))] hover:underline">{t('skills.viewProjects')}</a>
              <span className="text-xs text-[hsl(var(--muted-foreground))]">{t('skills.updated')}</span>
            </div>
          </article>

          {/* Backend & Data */}
          <article className="flex flex-col h-full p-6 bg-[hsl(var(--card))]/95 text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))] rounded-lg text-left items-start shadow-sm hover:shadow-2xl hover:shadow-primary/30 hover:ring-4 hover:ring-primary/20 hover:scale-105 transition-all duration-500 ease-out">
            <div className="flex items-start gap-4 min-h-[140px]">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center text-[hsl(var(--primary))] border border-[hsl(var(--border))]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[hsl(var(--primary))] leading-tight">{t('skills.backend.title')}</h3>
                <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{t('skills.backend.subtitle')}</p>
              </div>
            </div>

            <div className="border-t border-[hsl(var(--border))]" />

            <div className="flex-grow mt-4">
              <ul className="space-y-4 list-none text-left">
                <li className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--primary))]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span>{t('skills.backend.databases')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--primary))]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span>{t('skills.backend.logic')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--primary))]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span>{t('skills.backend.cloud')}</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto pt-6 flex items-center justify-between">
              <a href="#projects" className="text-sm text-[hsl(var(--primary))] hover:underline">{t('skills.viewProjects')}</a>
              <span className="text-xs text-[hsl(var(--muted-foreground))]">{t('skills.updated')}</span>
            </div>
          </article>

          {/* Engineering & Mobile */}
          <article className="flex flex-col h-full p-6 bg-[hsl(var(--card))]/95 text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))] rounded-lg text-left items-start shadow-sm hover:shadow-2xl hover:shadow-primary/30 hover:ring-4 hover:ring-primary/20 hover:scale-105 transition-all duration-500 ease-out">
            <div className="flex items-start gap-4 min-h-[140px]">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center text-[hsl(var(--primary))] border border-[hsl(var(--border))]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 1.143c.214.2.357.471.429.747a1.125 1.125 0 01-.234 1.105l-1.064.878a1.125 1.125 0 00-.26 1.43l.593 1.143a1.125 1.125 0 01-.965 1.605l-1.216.456a1.125 1.125 0 00-.75 1.218l.214 1.281c.09.542-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281a1.125 1.125 0 00-.645-.87.125.125 0 01-.22-.127l-.593-1.143a1.125 1.125 0 00-.26-1.43l-1.064-.878a1.125 1.125 0 01-.234-1.105l1.296-1.143a1.125 1.125 0 011.37-.49l1.217.456c.355.133.75.072 1.075-.124.073-.044.146-.086.22-.127.332-.184.582-.496.645-.87l.213-1.28z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[hsl(var(--primary))] leading-tight">{t('skills.engineering.title')}</h3>
                <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{t('skills.engineering.subtitle')}</p>
              </div>
            </div>

            <div className="border-t border-[hsl(var(--border))]" />

            <div className="flex-grow mt-4">
              <ul className="space-y-4 list-none text-left">
                <li className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--primary))]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span>{t('skills.engineering.languages')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--primary))]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span>{t('skills.engineering.labview')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--primary))]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span>{t('skills.engineering.architecture')}</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto pt-6 flex items-center justify-between">
              <a href="#projects" className="text-sm text-[hsl(var(--primary))] hover:underline">{t('skills.viewProjects')}</a>
              <span className="text-xs text-[hsl(var(--muted-foreground))]">{t('skills.updated')}</span>
            </div>
          </article>

          {/* Workflow & Tools */}
          <article className="flex flex-col h-full p-6 bg-[hsl(var(--card))]/95 text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))] rounded-lg text-left items-start shadow-sm hover:shadow-2xl hover:shadow-primary/30 hover:ring-4 hover:ring-primary/20 hover:scale-105 transition-all duration-500 ease-out">
            <div className="flex items-start gap-4 min-h-[140px]">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center text-[hsl(var(--primary))] border border-[hsl(var(--border))]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[hsl(var(--primary))] leading-tight">{t('skills.workflow.title')}</h3>
                <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{t('skills.workflow.subtitle')}</p>
              </div>
            </div>

            <div className="border-t border-[hsl(var(--border))]" />

            <div className="flex-grow mt-4">
              <ul className="space-y-4 list-none text-left">
                <li className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--primary))]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span>{t('skills.workflow.versioncontrol')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--primary))]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span>{t('skills.workflow.design')}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--primary))]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span>{t('skills.workflow.testing')}</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto pt-6 flex items-center justify-between">
              <a href="#projects" className="text-sm text-[hsl(var(--primary))] hover:underline">{t('skills.viewProjects')}</a>
              <span className="text-xs text-[hsl(var(--muted-foreground))]">{t('skills.updated')}</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Skills;
