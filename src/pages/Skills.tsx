import { motion } from 'motion/react';
import { Award, Code2, Database, Layout, Wrench, Cloud, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

export default function Skills() {
  return (
    <PageTransition>
      <SEO 
        title="Skills & Tools | Giri Aswin" 
        description="Technologies I use to build systems that work, including Python, React, Machine Learning, and Cloud."
        keywords="Python skills, JavaScript tools, machine learning technologies, React, cloud computing, databases, full-stack skills"
        path="/skills"
      />
      <div className="mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading mb-4"
        >
          Skills & Tools
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg"
        >
          Technologies I use to build systems that work.
        </motion.p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-6 gap-4 mb-20 auto-rows-[minmax(120px,auto)]">
        
        {/* Programming (Span 2x2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="col-span-6 md:col-span-2 md:row-span-2 relative overflow-hidden bg-card/80 backdrop-blur-md border border-white/10 p-6 rounded-[18px] group hover-disable hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(124,92,255,0.1)] transition-all duration-[240ms] ease-out z-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.06),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.12),transparent_70%)] transition-all duration-[240ms] ease-out pointer-events-none -z-10" />
          <div className="absolute inset-0 noise-bg opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />
          
          <div className="flex items-center justify-between mb-3 relative z-10">
            <h3 className="text-lg font-heading text-white">Programming</h3>
            <Code2 size={18} className="text-white/20" />
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent mb-4 relative z-10" />
          <div className="flex flex-wrap gap-2 relative z-10">
            {["Python", "JavaScript", "SQL"].map(skill => (
              <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-sm text-gray-300 hover:scale-105 hover:bg-white/10 transition-all duration-[240ms] ease-out cursor-default">{skill}</span>
            ))}
          </div>
        </motion.div>

        {/* Data & ML (Span 4x2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="col-span-6 md:col-span-4 md:row-span-2 relative overflow-hidden bg-card/80 backdrop-blur-md border border-white/10 p-6 rounded-[18px] group hover-disable hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(255,122,24,0.1)] transition-all duration-[240ms] ease-out z-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,24,0.06),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_top_left,rgba(255,122,24,0.12),transparent_70%)] transition-all duration-[240ms] ease-out pointer-events-none -z-10" />
          <div className="absolute inset-0 noise-bg opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />

          <div className="flex items-center justify-between mb-3 relative z-10">
            <h3 className="text-lg font-heading text-white">Data & Machine Learning</h3>
            <Database size={18} className="text-white/20" />
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent mb-4 relative z-10" />
          <div className="flex flex-wrap gap-2 relative z-10">
            {["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"].map(skill => (
              <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-sm text-gray-300 hover:scale-105 hover:bg-white/10 transition-all duration-[240ms] ease-out cursor-default">{skill}</span>
            ))}
          </div>
        </motion.div>

        {/* Web Dev (Span 3x2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="col-span-6 md:col-span-3 md:row-span-2 relative overflow-hidden bg-card/80 backdrop-blur-md border border-white/10 p-6 rounded-[18px] group hover-disable hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(124,92,255,0.1)] transition-all duration-[240ms] ease-out z-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.06),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.12),transparent_70%)] transition-all duration-[240ms] ease-out pointer-events-none -z-10" />
          <div className="absolute inset-0 noise-bg opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />

          <div className="flex items-center justify-between mb-3 relative z-10">
            <h3 className="text-lg font-heading text-white">Web Development</h3>
            <Layout size={18} className="text-white/20" />
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent mb-4 relative z-10" />
          <div className="flex flex-wrap gap-2 relative z-10">
            {["HTML", "CSS", "React", "Flask", "REST APIs"].map(skill => (
              <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-sm text-gray-300 hover:scale-105 hover:bg-white/10 transition-all duration-[240ms] ease-out cursor-default">{skill}</span>
            ))}
          </div>
        </motion.div>

        {/* Databases & Tools (Span 3x2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="col-span-6 md:col-span-3 md:row-span-2 relative overflow-hidden bg-card/80 backdrop-blur-md border border-white/10 p-6 rounded-[18px] group hover-disable hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-[240ms] ease-out z-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_70%)] transition-all duration-[240ms] ease-out pointer-events-none -z-10" />
          <div className="absolute inset-0 noise-bg opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />

          <div className="flex items-center justify-between mb-3 relative z-10">
            <h3 className="text-lg font-heading text-white">Databases & Tools</h3>
            <Wrench size={18} className="text-white/20" />
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent mb-4 relative z-10" />
          <div className="flex flex-wrap gap-2 relative z-10">
            {["MySQL", "Firebase", "Git", "GitHub"].map(skill => (
              <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-sm text-gray-300 hover:scale-105 hover:bg-white/10 transition-all duration-[240ms] ease-out cursor-default">{skill}</span>
            ))}
          </div>
        </motion.div>

        {/* Cloud (Span 2x2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="col-span-6 md:col-span-2 md:row-span-2 relative overflow-hidden bg-card/80 backdrop-blur-md border border-white/10 p-6 rounded-[18px] group hover-disable hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-[240ms] ease-out z-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_70%)] transition-all duration-[240ms] ease-out pointer-events-none -z-10" />
          <div className="absolute inset-0 noise-bg opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />

          <div className="flex items-center justify-between mb-3 relative z-10">
            <h3 className="text-lg font-heading text-white">Cloud (Basic)</h3>
            <Cloud size={18} className="text-white/20" />
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent mb-4 relative z-10" />
          <div className="flex flex-wrap gap-2 relative z-10">
            {["AWS", "GCP"].map(skill => (
              <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-sm text-gray-300 hover:scale-105 hover:bg-white/10 transition-all duration-[240ms] ease-out cursor-default">{skill}</span>
            ))}
          </div>
        </motion.div>

        {/* Highlight Card (Span 4x2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="col-span-6 md:col-span-4 md:row-span-2 relative overflow-hidden bg-card/80 backdrop-blur-md border border-white/10 p-6 rounded-[18px] group hover-disable hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_8px_40px_rgba(124,92,255,0.15)] transition-all duration-[240ms] ease-out flex items-center justify-center text-center z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50 pointer-events-none -z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-[240ms] ease-out pointer-events-none -z-10" />
          <div className="absolute inset-0 noise-bg opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />
          
          <div className="absolute top-4 right-4 text-white/10 group-hover:text-white/20 transition-colors duration-300">
            <Sparkles size={24} />
          </div>

          <h3 className="text-2xl md:text-3xl font-heading text-white relative z-10 leading-tight">
            Data-focused Developer<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">with full-stack capability</span>
          </h3>
        </motion.div>

      </div>

      {/* Certifications Section */}
      <div className="mb-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-heading mb-8"
        >
          Certifications
        </motion.h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="relative w-full md:w-96 glass-card p-6 rounded-[18px] group hover-disable hover:-translate-y-2 hover:rotate-1 transition-all duration-300 border border-white/10 hover:border-primary/50"
          >
            <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full -z-10 group-hover:bg-primary/20 transition-colors duration-500" />
            <div className="absolute inset-0 noise-bg opacity-10 mix-blend-overlay rounded-[18px] pointer-events-none" />
            
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Award size={20} />
              </div>
              <span className="px-2 py-1 bg-green-500/10 text-green-400 text-[10px] uppercase font-bold tracking-wider rounded border border-green-500/20">Verified</span>
            </div>
            
            <h3 className="text-xl font-heading text-white mb-2 relative z-10">Data Science for Beginners</h3>
            <p className="text-sm text-primary mb-1 relative z-10 font-medium">NASSCOM</p>
            <p className="text-sm text-gray-400 relative z-10">Issued 2024</p>
          </motion.div>
        </div>
      </div>

    </PageTransition>
  );
}
