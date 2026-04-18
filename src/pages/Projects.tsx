import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { projectsData } from '../data/projectsData';
import SEO from '../components/SEO';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [highlightedProject, setHighlightedProject] = useState<string | null>(null);

  useEffect(() => {
    // Simulate data fetching for skeleton loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const projectQuery = searchParams.get('project');
    if (projectQuery && !isLoading) {
      // Find project by title (case-insensitive) or ID
      const found = projectsData.find(p => 
        p.title.toLowerCase() === projectQuery.toLowerCase() || 
        p.id === projectQuery
      );
      if (found) {
        setHighlightedProject(found.id);
        // Smooth scroll to the specific project card
        setTimeout(() => {
          const element = document.getElementById(`project-card-container-${found.id}`);
          if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      }
      // Clean up URL after opening
      setSearchParams({}, { replace: true });
    }
  }, [searchParams, setSearchParams, isLoading]);

  // Handle browser back button and scroll lock for modal
  useEffect(() => {
    const handlePopState = () => {
      if (selectedProject) {
        setSelectedProject(null);
      }
    };
    
    // Toggle scroll lock based on modal state
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const openProject = (id: string) => {
    window.history.pushState({ modal: id }, '');
    setSelectedProject(id);
  };

  const closeProject = () => {
    if (window.history.state?.modal) {
      window.history.back();
    } else {
      setSelectedProject(null);
    }
  };

  const project = projectsData.find(p => p.id === selectedProject);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projectsData.map((p, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": p.title,
        "description": p.solution,
        "applicationCategory": "WebApplication",
        "operatingSystem": "Web"
      }
    }))
  };

  return (
    <PageTransition>
      <SEO 
        title="Projects | Giri Aswin" 
        description="Explore my selected work, including full-stack applications, data visualization dashboards, and AI-driven systems."
        keywords="React projects, full-stack development, data visualization projects, AI systems, portfolio projects, web applications"
        path="/projects"
        structuredData={structuredData}
      />
      <div className="mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading mb-4"
        >
          Engineering Portfolio
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl"
        >
          Engineered systems and applications built for absolute performance, scale, and real-world impact.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, idx) => (
            <div key={`skeleton-${idx}`} className="glass-card p-6 h-64 flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent z-10" />
              <div className="mb-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="h-6 w-1/2 bg-white/10 rounded-md" />
                  {idx % 3 === 0 && <div className="h-5 w-16 bg-white/5 rounded-full" />}
                </div>
                <div className="h-4 w-1/3 bg-white/5 rounded-md mt-2" />
              </div>
              <div className="space-y-2 mb-6">
                <div className="h-3 w-full bg-white/5 rounded-md" />
                <div className="h-3 w-full bg-white/5 rounded-md" />
                <div className="h-3 w-2/3 bg-white/5 rounded-md" />
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <div className="h-6 w-16 bg-white/5 rounded-md" />
                <div className="h-6 w-20 bg-white/5 rounded-md" />
                <div className="h-6 w-14 bg-white/5 rounded-md" />
              </div>
            </div>
          ))
        ) : (
          projectsData.map((p, idx) => (
            <motion.div
              key={p.id}
              id={`project-card-container-${p.id}`}
              layoutId={`project-card-${p.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={highlightedProject === p.id ? { 
                opacity: 1, 
                y: 0,
                boxShadow: ['0 0 0px rgba(124,92,255,0)', '0 0 30px rgba(124,92,255,0.6)', '0 0 0px rgba(124,92,255,0)'],
                borderColor: ['rgba(255,255,255,0.1)', 'rgba(124,92,255,0.5)', 'rgba(255,255,255,0.1)']
              } : { opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -5 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={highlightedProject === p.id ? {
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1]
              } : {
                layout: { type: "spring", stiffness: 350, damping: 30 },
                scale: { type: "spring", stiffness: 300, damping: 20 },
                y: { type: "spring", stiffness: 300, damping: 20 },
                default: { duration: 0.5, delay: (idx % 3) * 0.1, ease: "easeOut" }
              }}
              onClick={() => openProject(p.id)}
              className="bg-card/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-6 cursor-pointer group flex flex-col h-full relative overflow-hidden focus:outline-none"
            >
              {/* Subtle hover blur gradient inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              
              <div className="relative z-10 flex flex-col h-full">
                <motion.div layoutId={`project-header-${p.id}`} className="mb-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-heading text-white group-hover:text-primary transition-colors">{p.title}</h3>
                    {p.featured && (
                      <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-secondary/20 text-secondary rounded-full border border-secondary/20 shrink-0">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{p.punchline}</p>
                </motion.div>
                
                <motion.p layoutId={`project-desc-${p.id}`} className="text-gray-300 text-sm line-clamp-3 mb-6 flex-grow">
                  {p.solution}
                </motion.p>

                <motion.div layoutId={`project-tech-${p.id}`} className="flex flex-wrap gap-2 mt-auto">
                  {p.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-xs px-2 py-1 bg-white/5 border border-white/5 rounded-md text-gray-400 group-hover:border-primary/20 group-hover:text-gray-200 transition-colors">
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-white/5 border border-white/5 rounded-md text-gray-400 group-hover:border-primary/20 group-hover:text-gray-200 transition-colors">
                      +{p.tech.length - 3}
                    </span>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Expanded Project Modal */}
      <AnimatePresence>
        {selectedProject && project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-md"
            onClick={closeProject}
          >
            <motion.div
              layoutId={`project-card-${project.id}`}
              transition={{ layout: { type: "spring", stiffness: 350, damping: 30 } }}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto overscroll-contain bg-surface/95 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative flex flex-col"
              onClick={e => e.stopPropagation()}
              data-lenis-prevent="true"
            >
              {/* Inner ambient glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

              <div className="sticky top-0 flex justify-end p-4 bg-gradient-to-b from-surface/90 to-transparent z-10 pointer-events-none">
                <button 
                  onClick={closeProject}
                  className="p-3 bg-white/10 hover:bg-white/20 hover:text-primary rounded-full backdrop-blur-md transition-all btn-scale pointer-events-auto"
                  aria-label="Close project"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="px-8 pb-12 md:px-12 relative z-10">
                <motion.div layoutId={`project-header-${project.id}`} className="mb-10">
                  <h2 className="text-4xl md:text-6xl font-heading text-white mb-4">{project.title}</h2>
                  <p className="text-xl md:text-2xl text-primary font-medium tracking-wide">{project.punchline}</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-10">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.1, duration: 0.2 }}
                    >
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">The Problem</h4>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {project.problem}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.15, duration: 0.2 }}
                    >
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">The Solution</h4>
                      <motion.p layoutId={`project-desc-${project.id}`} className="text-gray-300 leading-relaxed text-lg">
                        {project.solution}
                      </motion.p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.2, duration: 0.2 }}
                    >
                      <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">The Outcome</h4>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative text-white leading-relaxed bg-surface/50 backdrop-blur-sm p-6 rounded-2xl border border-primary/20">
                          {project.outcome}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ delay: 0.1, duration: 0.2 }}
                  >
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Tech Stack</h4>
                    <motion.div layoutId={`project-tech-${project.id}`} className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-sm px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:border-primary/40 hover:text-white transition-colors cursor-default">
                          {t}
                        </span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Mobile Bottom Close Button for Thumb Reach */}
                <div className="mt-12 sm:hidden flex justify-center">
                  <button 
                    onClick={closeProject}
                    className="w-full py-4 bg-white/5 border border-white/10 rounded-full text-white font-medium btn-scale"
                  >
                    Close Project
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
