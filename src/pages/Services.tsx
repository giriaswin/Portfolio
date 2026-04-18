import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle, Target, Zap, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { servicesData } from '../data/servicesData';
import SEO from '../components/SEO';

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PageTransition>
      <SEO 
        title="Services | Giri Aswin" 
        description="I build clean, responsive websites and systems that don't just look good — they actually work. Explore my freelance services."
        keywords="Freelance web development, data science consulting, full-stack services, custom web applications, UI/UX design"
        path="/services"
      />
      <div className="mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading mb-4"
        >
          Freelance Engineering Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl"
        >
          I build high-performance web applications and data systems engineered for absolute precision and real-world scale.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-4">
          {servicesData.map((service, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`glass-card overflow-hidden transition-colors duration-300 ${isOpen ? 'border-primary/30 bg-surface/90' : 'hover:border-white/20'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <h3 className={`text-xl font-heading transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-white group-hover:text-primary/80'}`}>
                    {service.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={`p-2 rounded-full transition-colors duration-300 ${isOpen ? 'bg-primary/20 text-primary' : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-primary/70'}`}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5">
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">What is delivered</h4>
                            <p className="text-sm text-gray-300">{service.delivered}</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Who it's for</h4>
                            <p className="text-sm text-gray-300">{service.forWho}</p>
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 mb-6 p-4 bg-white/5 rounded-xl border border-white/5">
                          <div>
                            <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Estimated Timeline</h4>
                            <p className="text-sm text-white font-medium">{service.timeline}</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Engagement Type</h4>
                            <p className="text-sm text-white font-medium">{service.engagementType}</p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Previous Work</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.previousWork.map(work => (
                              <Link 
                                key={work} 
                                to={`/projects?project=${encodeURIComponent(work)}`}
                                className="text-xs px-3 py-1.5 bg-white/5 rounded-md text-gray-400 border border-white/5 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
                              >
                                {work}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="lg:col-span-5">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 sticky top-32 border-primary/20"
          >
            <h3 className="text-2xl font-heading text-white mb-4">Architect Your Vision</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Seeking an engineering partner who bridges the gap between premium design and bulletproof technical execution? Let's discuss your requirements and build something extraordinary.
            </p>
            
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 mb-8 text-center backdrop-blur-sm">
              <span className="text-sm text-primary/80 font-medium tracking-wide">Investment scales precisely with project scope and technical requirements.</span>
            </div>
            
            <Link 
              to="/contact"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-primary text-white rounded-xl font-medium btn-scale shadow-lg shadow-primary/20 group hover:shadow-primary/30"
            >
              <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              <span>Discuss Your Build</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* What You Can Expect Section */}
      <div className="mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-heading mb-4">Engineering Philosophy</h2>
          <p className="text-gray-400 text-center max-w-xl mx-auto px-4">The architectural standards and principles I bring to every tech stack.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="glass-card p-6 pb-8 flex flex-col group"
          >
            <div className="mb-4 text-white/50 group-hover:text-primary transition-colors">
              <MessageCircle size={20} />
            </div>
            <h3 className="text-lg font-heading text-white mb-2 group-hover:text-primary transition-colors duration-300">Radical Transparency</h3>
            <p className="text-gray-300 leading-relaxed text-sm group-hover:-translate-y-[2px] transition-transform duration-300">
              No technical jargon screens. I provide clear, asynchronous communication pipelines so you always know exactly where your build stands.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="glass-card p-6 pb-8 flex flex-col group"
          >
            <div className="mb-4 text-white/50 group-hover:text-primary transition-colors">
              <Target size={20} />
            </div>
            <h3 className="text-lg font-heading text-white mb-2 group-hover:text-primary transition-colors duration-300">Data-Driven Execution</h3>
            <p className="text-gray-300 leading-relaxed text-sm group-hover:-translate-y-[2px] transition-transform duration-300">
              Every system is engineered to solve a specific problem. If a feature doesn't directly contribute to your KPI strategy, we don't build it.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="glass-card p-6 pb-8 flex flex-col group"
          >
            <div className="mb-4 text-white/50 group-hover:text-primary transition-colors">
              <Zap size={20} />
            </div>
            <h3 className="text-lg font-heading text-white mb-2 group-hover:text-primary transition-colors duration-300">Zero-Latency Priority</h3>
            <p className="text-gray-300 leading-relaxed text-sm group-hover:-translate-y-[2px] transition-transform duration-300">
              Performance isn't an afterthought. From edge caching to rigorous bundle optimization, the product will operate at the absolute speed limit.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            className="glass-card p-6 pb-8 flex flex-col group"
          >
            <div className="mb-4 text-white/50 group-hover:text-primary transition-colors">
              <Layers size={20} />
            </div>
            <h3 className="text-lg font-heading text-white mb-2 group-hover:text-primary transition-colors duration-300">Modular Architecture</h3>
            <p className="text-gray-300 leading-relaxed text-sm group-hover:-translate-y-[2px] transition-transform duration-300">
              Systems are designed to scale. I build robust, decoupled components and strict type safety so your future team can build on top seamlessly.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-2xl font-heading mb-6">Ready to initiate the build?</h2>
        <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium btn-scale shadow-lg shadow-primary/20 hover:shadow-primary/30">
          Initialize Contact
        </Link>
      </div>
    </PageTransition>
  );
}
