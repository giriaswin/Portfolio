import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { educationData } from '../data/educationData';
import SEO from '../components/SEO';

export default function Education() {
  const [revealedId, setRevealedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <PageTransition>
      <SEO 
        title="Education | Giri Aswin" 
        description="My academic background, including my M.Sc. in Applied Data Science and BCA."
        keywords="M.Sc. Applied Data Science, BCA, academic background, computer science education, SRM IST, SRM Institute of Science and Technology, data science degree"
        path="/education"
      />
      <div className="mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading mb-4"
        >
          Education
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl"
        >
          Academic journey and qualifications.
        </motion.p>
      </div>

      <div ref={containerRef} className="relative max-w-4xl mx-auto py-10">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2">
          <motion.div 
            style={{ scaleY: scrollYProgress }}
            className="w-full h-full bg-gradient-to-b from-primary to-secondary origin-top"
          />
        </div>

        <div className="space-y-16">
          {educationData.map((edu, index) => {
            const isEven = index % 2 === 0;
            const isRevealed = revealedId === edu.id;
            const isPresent = edu.duration.toLowerCase().includes('present');

            return (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-surface border-2 border-primary transform -translate-x-1/2 mt-6 md:mt-0 z-10 shadow-[0_0_10px_rgba(124,92,255,0.5)] transition-all duration-300 hover:scale-150 hover:bg-primary" />

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="glass-card p-6 md:p-8 relative group cursor-pointer"
                    onHoverStart={() => setRevealedId(edu.id)}
                    onHoverEnd={() => setRevealedId(null)}
                    onClick={() => setRevealedId(isRevealed ? null : edu.id)}
                  >
                    {/* Subtle inner glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                    <div className={`flex flex-col ${isEven ? 'md:items-end' : 'items-start'} mb-4 relative z-10`}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-primary font-mono text-sm">{edu.duration}</span>
                        {isPresent && (
                          <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                            Present
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-heading text-white mb-1">{edu.degree}</h3>
                      <p className="text-gray-400 mb-3">{edu.institution}</p>
                      {edu.focus && (
                        <div className="bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-md mb-2">
                          <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-0.5">Focus</span>
                          <span className="text-sm text-gray-200">{edu.focus}</span>
                        </div>
                      )}
                    </div>

                    <div className={`inline-flex items-center px-4 py-2 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 relative z-10 ${isRevealed ? 'bg-primary/10 border-primary/30' : ''}`}>
                      <span className="text-sm font-medium text-gray-200">{edu.primaryMetric}</span>
                      <AnimatePresence>
                        {isRevealed && edu.secondaryMetric && (
                          <motion.span
                            initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                            animate={{ opacity: 1, width: 'auto', marginLeft: 8 }}
                            exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                            className="text-gray-400 text-sm overflow-hidden whitespace-nowrap"
                          >
                            ({edu.secondaryMetric})
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}
