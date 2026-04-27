import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { projectsData } from '../data/projectsData';
import SEO from '../components/SEO';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate data fetching for skeleton loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);
  
  // Optimized animation transition settings for a 'buttery smooth' feel
  const layoutTransition = { 
    type: "tween", 
    ease: [0.25, 1, 0.5, 1], 
    duration: 0.3 
  };
  const modalTransition = { 
    type: "tween", 
    ease: [0.22, 1, 0.36, 1], 
    duration: 0.3 
  };
  const [highlightedProject, setHighlightedProject] = useState<string | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

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
      if (fullscreenImage) {
        setFullscreenImage(null);
      } else if (selectedProject) {
        // Only clear selected project if we are going back from the project modal
        setSelectedProject(null);
      }
    };
    
    // Toggle scroll lock based on modal state and compensate for scrollbar width
    if (selectedProject || fullscreenImage) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [selectedProject, fullscreenImage]);

  const openProject = (id: string) => {
    window.history.pushState({ modal: id }, '');
    setSelectedProject(id);
  };

  const openFullscreenImage = (image: string) => {
    window.history.pushState({ modal: 'image' }, '');
    setFullscreenImage(image);
  };

  const closeProject = () => {
    if (fullscreenImage) {
      if (window.history.state?.modal === 'image') {
        window.history.back();
      } else {
        setFullscreenImage(null);
      }
      return;
    }
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
        description="Explore present and past works, including full-stack applications, data visualization dashboards, and AI-driven systems."
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
          Projects
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl"
        >
          Engineered systems and applications designed for performance, scalability and meaningful real-world impact.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, idx) => (
            <div key={`skeleton-${idx}`} className="bg-[#111111] border border-white/5 rounded-2xl shadow-xl flex flex-col h-full relative overflow-hidden focus:outline-none">
              <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent z-10" />
              
              {/* Project Image Skeleton */}
              <div className="w-full h-48 sm:h-52 overflow-hidden relative border-b border-white/5 bg-white/5" />

              <div className="relative z-10 flex flex-col h-full p-6">
                <div className="mb-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="h-6 w-1/2 bg-white/10 rounded-md" />
                    {idx % 3 === 0 && <div className="h-4 w-12 bg-secondary/10 border border-secondary/20 rounded-[3px]" />}
                  </div>
                  <div className="h-3 w-1/3 bg-primary/20 rounded-md mt-4" />
                </div>
                
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="h-3 w-full bg-white/5 rounded-md" />
                  <div className="h-3 w-full bg-white/5 rounded-md" />
                  <div className="h-3 w-2/3 bg-white/5 rounded-md" />
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  <div className="h-5 w-16 bg-[#161616] border border-white/10 rounded-[3px]" />
                  <div className="h-5 w-20 bg-[#161616] border border-white/10 rounded-[3px]" />
                  <div className="h-5 w-14 bg-[#161616] border border-white/10 rounded-[3px]" />
                </div>
              </div>
            </div>
          ))
        ) : (
          projectsData.map((p, idx) => (
            <motion.div
              key={p.id}
              id={`project-card-container-${p.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                default: { duration: 0.3, delay: (idx % 3) * 0.1, ease: "easeOut" }
              }}
              onClick={() => openProject(p.id)}
              className={`bg-[#111111] border ${highlightedProject === p.id ? 'border-primary/50' : 'border-white/5'} rounded-2xl shadow-xl cursor-pointer group flex flex-col h-full relative overflow-hidden focus:outline-none hover:border-white/10 transition-all duration-300`}
            >
              {/* Subtle hover blur gradient inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Project Image */}
              {p.image && (
                <div className="w-full h-48 sm:h-52 overflow-hidden relative border-b border-white/5">
                  <div className="absolute inset-0 bg-[#0a0a0a]/40 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <motion.img 
                    src={p.image} 
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-300 ease-out"
                  />
                </div>
              )}

              <div className="relative z-10 flex flex-col h-full p-6">
                <div className="mb-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-2xl font-heading text-white tracking-[0.5px] group-hover:text-primary transition-colors">{p.title}</h3>
                    {p.featured && (
                      <span className="text-[9px] uppercase tracking-[2px] font-bold px-2.5 py-1 bg-secondary/10 text-secondary rounded-[3px] border border-secondary/20 shrink-0">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-[0.7rem] font-body font-medium tracking-[1.5px] uppercase text-primary/80 mt-2">{p.punchline}</p>
                </div>
                
                <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                  {p.summary}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {p.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-[0.6rem] font-body tracking-[1.5px] uppercase px-2 py-1 bg-[#161616] border border-white/10 rounded-[3px] text-[#A0A0A0] shadow-[inset_0_1px_rgba(255,255,255,0.05)] group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:text-white transition-all duration-300">
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 3 && (
                    <span className="text-[0.6rem] font-body tracking-[1.5px] uppercase px-2 py-1 bg-[#161616] border border-white/10 rounded-[3px] text-[#A0A0A0] shadow-[inset_0_1px_rgba(255,255,255,0.05)] group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:text-white transition-all duration-300">
                      +{p.tech.length - 3}
                    </span>
                  )}
                </div>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-sm"
            onClick={closeProject}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.3 }}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto overscroll-contain bg-[#111111] rounded-3xl border border-white/10 shadow-2xl relative flex flex-col"
              onClick={e => e.stopPropagation()}
              data-lenis-prevent="true"
            >
              {/* Inner ambient glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[40px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[40px] pointer-events-none" />

              <div className="sticky top-0 flex justify-end p-4 z-20 pointer-events-none">
                <button 
                  onClick={closeProject}
                  className="p-3 bg-black/40 hover:bg-black/60 text-white hover:text-primary rounded-full backdrop-blur-md border border-white/10 transition-all btn-scale pointer-events-auto shadow-xl"
                  aria-label="Close project"
                >
                  <X size={24} />
                </button>
              </div>
              
              {project.image && (
                <div 
                  className="w-full h-64 md:h-96 -mt-20 overflow-hidden relative border-b border-white/5 shrink-0 cursor-zoom-in group/img"
                  onClick={() => openFullscreenImage(project.image!)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/40 z-10 transition-opacity duration-300 group-hover/img:opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 scale-90 group-hover/img:scale-100">
                    <div className="bg-black/60 backdrop-blur-md p-3 rounded-full text-white border border-white/10 shadow-xl">
                      <Maximize2 size={24} />
                    </div>
                  </div>
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover/img:scale-105"
                  />
                </div>
              )}
              
              <div className={`px-8 pb-12 md:px-12 relative z-10 ${project.image ? 'mt-8' : 'mt-12'}`}>
                <div className="mb-10">
                  <h2 className="text-4xl md:text-6xl font-heading text-white tracking-[0.5px] uppercase mb-4 drop-shadow-md">{project.title}</h2>
                  <p className="text-[0.9rem] md:text-[1rem] text-primary font-body font-bold tracking-[2px] uppercase">{project.punchline}</p>
                </div>

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
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {project.solution}
                      </p>
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
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-[0.7rem] font-body tracking-[1.5px] uppercase px-3 py-1.5 bg-[#161616] border border-white/10 rounded-[4px] text-[#A0A0A0] shadow-[inset_0_1px_rgba(255,255,255,0.05)] hover:border-primary/40 hover:bg-primary/5 hover:text-white transition-all duration-300 cursor-default">
                          {t}
                        </span>
                      ))}
                    </div>
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

      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 cursor-zoom-out"
            onClick={closeProject}
          >
            <button 
              className="absolute top-6 right-6 p-3 bg-black/40 hover:bg-black/60 text-white rounded-full border border-white/10 transition-all btn-scale shadow-xl z-50"
              onClick={closeProject}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.3 }}
              src={fullscreenImage}
              alt="Project Full View"
              loading="lazy"
              decoding="async"
              className="max-w-full max-h-full object-contain rounded-lg border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
