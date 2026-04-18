import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Code, Database, Lightbulb } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useState, useEffect, MouseEvent } from 'react';
import ResumeModal from '../components/ResumeModal';
import SEO from '../components/SEO';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  
  // 3D Tilt Effect logic with buttery smooth spring physics
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);
  
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    rawX.set(event.clientX - centerX);
    rawY.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <PageTransition className="flex flex-col justify-center min-h-[calc(100vh-80px)]">
      <SEO 
        title="Giri Aswin | Data Scientist & Full-Stack Developer" 
        description="I build practical systems that solve real problems. Focused on data-driven development, practical applications, and clean user experiences."
        keywords="Giri Aswin, Portfolio, Data Scientist, Full-Stack Developer, React, Python, Machine Learning, Web Development"
        path="/"
      />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 30, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-[0_0_15px_rgba(124,92,255,0.1)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-gray-300">#OPENTOWORK</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary font-accent text-3xl md:text-4xl mb-4 opacity-90"
          >
            Hi, I'm Giri Aswin
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-[5rem] font-heading leading-[1.1] tracking-tight mb-8"
          >
            Not just building<br />
            projects —<br />
            building systems that<br />
            <span className="relative group cursor-default">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,122,24,0.5)]">
                actually work.
              </span>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed font-body"
          >
            Focused on data-driven development, practical applications, and clean user experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap items-center gap-4"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link 
                to="/projects"
                className="group relative w-full sm:w-[200px] h-14 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full font-medium overflow-hidden btn-scale"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">View Projects</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button 
                onClick={() => setIsResumeOpen(true)}
                className="w-full sm:w-[200px] h-14 flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 rounded-full font-medium btn-scale group"
              >
                <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                Resume
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4 sm:mt-0 sm:ml-4 w-full sm:w-auto">
              <Link 
                to="/services"
                className="text-gray-300 hover:text-white font-medium link-underline py-3 px-2 sm:py-0 sm:px-0 w-full sm:w-auto text-center"
              >
                Explore Services
              </Link>

              <Link 
                to="/contact"
                className="text-gray-300 hover:text-white font-medium link-underline py-3 px-2 sm:py-0 sm:px-0 w-full sm:w-auto text-center"
              >
                Let's Build Something
              </Link>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE - Interactive Identity Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          className="lg:col-span-5 flex justify-center lg:justify-end perspective-1000 relative lg:-translate-y-12 xl:-translate-y-16"
        >
          {/* Floating gradient glow behind card */}
          <motion.div 
            animate={{ 
              scale: [1, 1.02, 1],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-[100px] -z-10"
          />

          <motion.div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full max-w-[350px] h-fit glass-card rounded-[2rem] p-5 sm:p-6 flex flex-col items-center justify-center gap-5 border border-white/10 shadow-2xl overflow-hidden group transform-gpu mx-auto lg:mx-0 lg:ml-auto"
          >
            {/* Inner subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />

            {/* Top Section - Centered Polaroid */}
            <div style={{ transform: "translateZ(40px)" }} className="relative z-10 w-full flex justify-start pl-[2px] transform-gpu mt-0.5">
              {/* Polaroid Headshot */}
              <div className="relative w-[12rem] h-[12.5rem] sm:w-[13rem] sm:h-[13.5rem] bg-[#fcfcfc] p-2.5 pb-8 sm:pb-9 rounded-md shadow-[0_8px_30px_rgba(0,0,0,0.25)] -rotate-2 group-hover:rotate-1 group-hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] transform-gpu cursor-default border border-black/5">
                <div className="w-full h-full bg-gray-200 overflow-hidden relative shadow-inner rounded-sm">
                  <img 
                    src="H1.png" 
                    alt="Giri Aswin" 
                    className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Premium overlay for image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50" />
                </div>
                {/* Doodles */}
                <svg className="absolute bottom-2 right-2.5 w-4 h-4 text-primary/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                <svg className="absolute top-[-12px] left-[-12px] w-8 h-8 text-secondary/90 rotate-12 drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
                <svg className="absolute bottom-1.5 left-2 w-3.5 h-3.5 text-gray-400 -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                </svg>
              </div>
            </div>

            {/* Bottom Section - Animated Tags */}
            <div style={{ transform: "translateZ(50px)" }} className="relative z-10 flex flex-col gap-2.5 w-full mt-0">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 20 }}
                className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 px-4 py-2 rounded-xl backdrop-blur-md transition-colors duration-300 w-full shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
              >
                <div className="p-1.5 rounded-lg bg-white/5 text-secondary">
                  <Code size={14} strokeWidth={2.5} />
                </div>
                <span className="text-xs text-gray-200 font-semibold tracking-wide">Building Full-Stack Projects</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 200, damping: 20 }}
                className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 px-4 py-2 rounded-xl backdrop-blur-md transition-colors duration-300 w-full shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
              >
                <div className="p-1.5 rounded-lg bg-white/5 text-primary">
                  <Database size={14} strokeWidth={2.5} />
                </div>
                <span className="text-xs text-gray-200 font-semibold tracking-wide">Getting Better With Data</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 20 }}
                className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 px-4 py-2 rounded-xl backdrop-blur-md transition-colors duration-300 w-full shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
              >
                <div className="p-1.5 rounded-lg bg-white/5 text-yellow-400">
                  <Lightbulb size={14} strokeWidth={2.5} />
                </div>
                <span className="text-xs text-gray-200 font-semibold tracking-wide">Solving Problems Along The Way</span>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 blur-[50px] rounded-full translate-y-1/2 -translate-x-1/2" />
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
