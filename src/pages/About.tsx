import { useState } from 'react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

const FlipCard = ({ title, items, delay = 0 }: { title: string, items: string[], delay?: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="relative w-full h-72 cursor-pointer perspective-book" 
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Right Page (Always visible, contains the content) */}
      <div className="absolute right-0 w-full md:w-[90%] h-full glass-card p-6 md:pl-12 bg-surface-light border-l border-white/5 shadow-inner flex flex-col justify-center rounded-2xl md:rounded-l-sm rounded-r-2xl overflow-hidden group-hover:border-primary/20 transition-colors">
        {/* Subtle noise texture on the inner page */}
        <div className="absolute inset-0 noise-bg opacity-10 mix-blend-overlay pointer-events-none" />
        
        <ul className="space-y-4 relative z-10">
          {items.map((item, idx) => {
            const [award, event] = item.split(' — ');
            return (
              <motion.li 
                key={idx} 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 10 }}
                transition={{ duration: 0.3, delay: isOpen ? 0.3 + (idx * 0.1) : 0 }}
                className="text-sm border-l-2 border-primary/30 pl-3"
              >
                <span className="text-white font-medium block text-base">{award}</span>
                {event && <span className="text-gray-400 block mt-1 text-xs uppercase tracking-wider">{event}</span>}
              </motion.li>
            );
          })}
        </ul>
      </div>

      {/* Left Page / Cover (Flips open) */}
      <motion.div
        className="absolute left-0 md:left-[10%] w-full md:w-[90%] h-full origin-left preserve-3d z-10"
        animate={{ rotateY: isOpen ? -180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Front Cover */}
        <div className="absolute inset-0 backface-hidden glass-card flex flex-col items-center justify-center p-6 shadow-[5px_5px_20px_rgba(0,0,0,0.3)] bg-gradient-to-br from-surface to-[#1a1a2e] rounded-2xl md:rounded-l-sm rounded-r-2xl border-l-4 border-l-primary/50 group-hover:shadow-[5px_5px_30px_rgba(124,92,255,0.15)] transition-shadow">
          {/* Noise texture for premium feel */}
          <div className="absolute inset-0 noise-bg opacity-20 mix-blend-overlay pointer-events-none rounded-2xl md:rounded-l-sm rounded-r-2xl" />
          
          {/* Spine highlight */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/40 to-transparent rounded-l-sm" />
          {/* Page edge highlight */}
          <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-l from-white/10 to-transparent rounded-r-2xl" />
          
          <h3 className="text-2xl font-heading text-white text-center relative z-10 tracking-wide">{title}</h3>
          
          {/* Decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/5 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/5 rounded-full pointer-events-none" />
          
          <p className="absolute bottom-6 text-[10px] text-primary font-bold tracking-[0.2em] uppercase flex items-center gap-2">
            <span className="w-4 h-px bg-primary/50" />
            Open Book
            <span className="w-4 h-px bg-primary/50" />
          </p>
        </div>
        
        {/* Back of Cover */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 glass-card bg-surface shadow-[-5px_5px_20px_rgba(0,0,0,0.3)] rounded-2xl md:rounded-r-sm rounded-l-2xl border-r-4 border-r-primary/30">
          {/* Shadow sweep during flip */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent pointer-events-none rounded-2xl md:rounded-r-sm rounded-l-2xl" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function About() {
  return (
    <PageTransition>
      <SEO 
        title="About | Giri Aswin" 
        description="Learn more about my builder mindset, career objective, and how I approach solving complex problems through data science and web development."
        keywords="About Giri Aswin, Data Science Student, Web Developer, Problem Solver, Tech Journey, Software Engineering"
        path="/about"
      />
      <div className="max-w-4xl mx-auto">
        <div className="relative inline-block mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading relative z-10"
          >
            About Me
          </motion.h1>
          {/* Minimal Doodle (Underline) */}
          <motion.svg 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="absolute -bottom-3 left-0 w-full h-4 text-primary/60 -z-0" 
            viewBox="0 0 200 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <motion.path 
              d="M2 15C50 5 150 5 198 15" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
            />
          </motion.svg>
        </div>

        <div className="space-y-12 mb-20">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="glass-card p-8 md:p-10"
          >
            <h2 className="text-2xl font-heading mb-4 text-primary">The Engineering Paradigm</h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              I don't just write code; I architect systems that solve complex problems. Striking the balance between data science and full-stack engineering, I operate with a bias for action and a zero-tolerance policy for bloat. My philosophy is simple: build it lean, build it fast, and make it bulletproof.
            </p>
            <p className="text-white font-medium leading-relaxed text-lg border-l-2 border-secondary pl-4 py-1 bg-secondary/5 rounded-r-lg">
              Every system I build is engineered for real-world impact—merging rigorous data logic with unparalleled, intuitive user experiences.
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="glass-card p-8 md:p-10"
          >
            <h2 className="text-2xl font-heading mb-4 text-secondary">The Trajectory</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              My objective is to constantly push the boundaries of what a solo engineer can deploy. By aggressively pursuing bleeding-edge tech and high-stakes problem solving, I aim to build platforms that don't just function—they dominate.
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="glass-card p-8 md:p-10"
          >
            <h2 className="text-2xl font-heading mb-4">Execution Protocol</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-mono">01.</span>
                <div>
                  <strong className="text-white block tracking-wide">First Principles Thinking</strong>
                  Before writing syntax, I deconstruct the problem to its fundamental truths. What is the actual bottleneck? Why does this system need to exist?
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-mono">02.</span>
                <div>
                  <strong className="text-white block tracking-wide">Design for Clarity</strong>
                  Minimalism isn't just an aesthetic; it's a performance metric. I strip away the superfluous to ensure intuitive UX and pristine architecture.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-mono">03.</span>
                <div>
                  <strong className="text-white block tracking-wide">Relentless Execution</strong>
                  From training complex ML models to deploying edge networks, the focus remains unwavering: performance, scale, and uncompromising quality.
                </div>
              </li>
            </ul>
          </motion.section>
        </div>

        {/* Achievements Section */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-3xl font-heading mb-8"
          >
            Achievements
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <FlipCard 
              title="Technical Quiz" 
              delay={0.1}
              items={[
                "Winner — Tech Xtras ’23 (Inter-College)",
                "Winner — Conquer ’24, Mailam Engineering College"
              ]} 
            />
            <FlipCard 
              title="Data Visualization" 
              delay={0.2}
              items={[
                "Winner — Boardroom Blitz, NEXGEN ’25, RSB Chennai",
                "Runner-Up — Thinklytics, Login ’25, PSG Coimbatore",
                "Third Place — Lucky Metrics, Prometheus ’25, XIME Chennai"
              ]} 
            />
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
