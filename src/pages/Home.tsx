import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Calendar } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useState, useEffect, MouseEvent } from 'react';
import ResumeModal from '../components/ResumeModal';
import SEO from '../components/SEO';
import QRCode from 'react-qr-code';

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
        title="Giri Aswin | Data Systems & Full-Stack Engineer" 
        description="Building practical systems that solve real problems. Specializing in end-to-end full-stack systems, data pipelines, API architecture, workflow automation, and React, Node.js, Python development."
        keywords="Giri Aswin, Portfolio, Data Scientist, Full-Stack Developer, React, Python, Machine Learning, Web Development, Data Systems, Node.js, Flask, AWS, GCP, API Architecture, Software Engineer"
        path="/"
      />
      
      {/* Screen Reader Only SEO / GEO Target Content */}
      <div className="sr-only">
        <h1>Giri Aswin - Data Systems & Full-Stack Engineer</h1>
        <p>
          Welcome to the portfolio. I am a software engineer and data scientist specializing
          in building data-driven systems with full-stack execution. My core engineering skills include
          Python, JavaScript, TypeScript, React, Node.js, Flask, SQL, and NoSQL. I design robust data systems
          using Pandas, NumPy, Scikit-learn, EDA, Matplotlib, and Seaborn. I also lead cloud and deployment
          efforts using AWS, GCP, and API hosting. Through advanced system design, I create Data-to-Insight
          pipelines, API architectures, and automated workflows.
        </p>
      </div>
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
            <span className="text-[10px] font-bold tracking-[2px] uppercase text-gray-300">#OPENTOWORK</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary font-accent text-3xl md:text-4xl mb-4 opacity-90"
          >
            Bonjour!
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-[5rem] font-heading leading-[1.1] tracking-[0.5px] mb-8"
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
            Focused on data-driven development, practical applications and clean user experiences.
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

        {/* RIGHT SIDE - ID Card Lanyard */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          className="lg:col-span-5 flex justify-center lg:justify-end perspective-1000 relative lg:-translate-y-16 xl:-translate-y-20"
        >
          {/* Floating gradient glow behind lanyard */}
          <motion.div 
            animate={{ 
              scale: [1, 1.02, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-[100px] -z-10"
          />

          <motion.div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative flex flex-col items-center group transform-gpu mx-auto lg:mx-0 lg:ml-auto w-full max-w-[320px] mt-28 lg:mt-4"
          >
            {/* Lanyard Strap */}
            <div className="flex h-40 lg:h-[400px] w-10 bg-[#161616] absolute -top-[150px] lg:-top-[380px] rounded-sm -z-10 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] shadow-[inset_0_0_15px_rgba(0,0,0,0.8)] border-x border-white/5 flex-col items-center justify-end pb-8 overflow-hidden pointer-events-none">
                <div className="text-white/20 font-body font-bold tracking-[2px] text-[12px] rotate-180 whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>DATA SCIENTIST  •  FULL-STACK</div>
                <div className="text-white/20 font-body font-bold tracking-[2px] text-[12px] rotate-180 mt-12 whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>DATA SCIENTIST  •  FULL-STACK</div>
            </div>
              
            {/* Lanyard Clip / Attachment */}
            <div className="flex relative mt-2 lg:mt-8 z-10 flex-col items-center gap-0 drop-shadow-2xl pointer-events-none" style={{ transform: "translateZ(20px)" }}>
              {/* Plastic buckle */}
              <div className="w-11 h-14 bg-[#111] rounded-b-sm rounded-t-md shadow-[0_5px_15px_rgba(0,0,0,0.8)] border-x border-white/10 border-t border-white/20 flex flex-col items-center justify-between py-1 relative">
                <div className="w-7 h-2 bg-black rounded-sm border-b border-gray-800"></div>
                <div className="w-8 h-4 bg-[#0a0a0a] rounded-sm flex items-center justify-center border border-gray-800"></div>
                <div className="w-7 h-2 bg-black rounded-sm border-t border-gray-800"></div>
              </div>

              {/* Connection Ring & Hook SVG */}
              <div className="relative z-10 -mt-2 -mb-2 drop-shadow-2xl text-gray-300 pointer-events-none mr-0.5">
                 <svg width="40" height="55" viewBox="0 0 32 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                   {/* Ring */}
                   <path d="M16 4 C20 4, 23 7, 23 11 C23 15, 20 18, 16 18 C12 18, 9 15, 9 11 C9 7, 12 4, 16 4 Z" stroke="#9ca3af" strokeWidth="2.5" fill="none" />
                   {/* Middle swivel connector */}
                   <path d="M13 18 L19 18 L19 24 L13 24 Z" fill="#9ca3af" />
                   <path d="M14 24 L18 24 L18 30 L14 30 Z" fill="#6b7280" />
                   {/* The Snap Hook Body */}
                   <path d="M16 28 C20 28, 22 32, 22 36 L22 45 C22 48, 18 48, 16 48 C12 48, 10 45, 10 36 C10 32, 12 28, 16 28 Z" stroke="#e5e7eb" strokeWidth="2.5" fill="none" />
                   {/* Clip opening/lever */}
                   <path d="M10 35 L14 38 L14 44 Z" fill="#9ca3af" />
                 </svg>
              </div>
            </div>

            {/* The ID Card */}
            <div 
              style={{ transform: "translateZ(40px)" }} 
              className="relative w-full bg-[#111111] rounded-xl flex flex-col overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-white/10"
            >
              {/* Card slot hole */}
              <div className="block absolute top-2.5 left-1/2 -translate-x-1/2 w-10 h-2.5 rounded-full bg-[#050505] shadow-inner drop-shadow-md border border-[#222]"></div>
              
              {/* Card - Top Section (Dark) */}
              <div className="px-5 pt-8 pb-4 flex flex-col relative z-10 border-b border-white/5">
                {/* Header: Small ID details instead of IG logo */}
                <div className="flex justify-between items-start mb-6 mt-2">
                  <div className="flex flex-col opacity-70">
                    <span className="font-bold font-body text-white tracking-[2px] uppercase mb-0.5" style={{ fontSize: '0.5rem' }}>ID // 879-0104</span>
                    <span className="font-medium font-body text-white/50 tracking-[2px] uppercase" style={{ fontSize: '0.45rem' }}>ACCESS // ALL</span>
                  </div>
                  <div className="text-right flex flex-col items-end justify-end opacity-70">
                    <span className="font-bold font-body text-primary tracking-[2px] uppercase" style={{ fontSize: '0.45rem' }}>SYSTEM // ACTIVE</span>
                  </div>
                </div>

                {/* Headshot container - Centered and nicely proportioned */}
                <div className="w-[180px] h-[220px] mx-auto bg-[#1A1D23] mb-6 relative overflow-hidden pointer-events-none rounded-[3px] border border-white/10 shadow-[inner_0_4px_20px_rgba(0,0,0,0.5)] group-hover:border-primary/40 transition-colors duration-500">
                  <picture>
                    <source srcSet="/H1.webp" type="image/webp" />
                    <img 
                      src="/H1.webp" 
                      alt="Giri Aswin" 
                      width={180}
                      height={220}
                      className="w-full h-full object-cover grayscale brightness-90 contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-105 scale-105"
                    />
                  </picture>
                  <div className="absolute inset-0 block shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] z-10" />
                </div>

                {/* Clean Name underneath instead of huge text */}
                <h2 className="text-[1.6rem] font-heading font-normal text-center text-white leading-tight tracking-[0.5px] uppercase mt-0">
                  GIRI ASWIN
                </h2>
                <p className="text-center font-body text-primary text-[0.7rem] tracking-[2px] font-medium mt-1 uppercase">Aspiring Data Engineer</p>
              </div>

              {/* Card - Bottom Section (Accent Color - Matching Theme) */}
              <div className="bg-primary/90 pt-8 pb-6 px-5 flex flex-col relative z-10 transition-colors duration-500 group-hover:bg-primary">
                <div className="w-full flex justify-between items-end relative gap-3">
                  
                  {/* Description / Role Info & Availability */}
                  <div className="flex flex-col flex-1 pb-1 justify-end">
                    <div className="flex flex-col mb-2.5">
                      <svg className="w-16 h-5 mb-2 opacity-80" viewBox="0 0 100 20" preserveAspectRatio="none">
                        <path d="M0,0 h3 v20 h-3 Z M5,0 h1 v20 h-1 Z M8,0 h4 v20 h-4 Z M14,0 h1 v20 h-1 Z M17,0 h3 v20 h-3 Z M22,0 h2 v20 h-2 Z M26,0 h1 v20 h-1 Z M29,0 h5 v20 h-5 Z M36,0 h2 v20 h-2 Z M40,0 h1 v20 h-1 Z M43,0 h3 v20 h-3 Z M48,0 h2 v20 h-2 Z M52,0 h4 v20 h-4 Z M58,0 h1 v20 h-1 Z M61,0 h2 v20 h-2 Z M65,0 h5 v20 h-5 Z M72,0 h1 v20 h-1 Z M75,0 h3 v20 h-3 Z M80,0 h2 v20 h-2 Z M84,0 h1 v20 h-1 Z M87,0 h4 v20 h-4 Z M93,0 h2 v20 h-2 Z M97,0 h3 v20 h-3 Z" fill="white" />
                      </svg>
                      <span className="text-white font-bold text-[0.65rem] leading-none font-body tracking-[1.5px] uppercase mb-1">AVAILABLE TO JOIN</span>
                      <span className="text-white/80 font-medium text-[0.55rem] leading-none font-body tracking-[1px] uppercase">IMMEDIATELY</span>
                    </div>
                    <div className="text-white/90 font-bold text-[0.65rem] leading-none font-body tracking-[1.5px] uppercase">
                      CHENNAI, TN, INDIA
                    </div>
                  </div>

                  {/* QR Code linking to WhatsApp - Fixed scannability */}
                  <div className="relative bg-white p-1.5 rounded-[4px] shadow-lg shrink-0">
                    <QRCode 
                      value="https://wa.me/917339691814?text=Hi%20Giri%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."  
                      size={46}
                      bgColor="#ffffff" 
                      fgColor="#000000"
                      level="M"
                    />
                  </div>

                </div>
              </div>
              
              {/* Interactive gradient overlay to simulate card gloss */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay z-20" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
