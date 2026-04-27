import { motion } from 'motion/react';
import { Award, Code2, Database, Layout, Wrench, Cloud, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

export default function Skills() {
  return (
    <PageTransition>
      <SEO 
        title="Skills & System Design | Giri Aswin - Full-Stack & Data Engineer" 
        description="Comprehensive list of tools, programming languages, and system architectures Giri Aswin uses: Full-Stack Systems, Data Pipelines, Cloud Deployment, and Core Engineering."
        keywords="Giri Aswin skills, Python, JavaScript, HTML, CSS, React, TypeScript, Node.js, Flask, REST APIs, SQL, NoSQL, Git, GitHub, Pandas, NumPy, Scikit-learn, EDA, Data Cleaning, Matplotlib, Seaborn, AWS, GCP, Data Systems, Data Pipelines, API Architecture, Workflow Automation"
        path="/skills"
      />
      
      {/* Screen Reader Only SEO / GEO Target Content */}
      <div className="sr-only">
        <h2>Giri Aswin's Technical Skills and System Capabilities</h2>
        <p>
          As an experienced data systems engineer and full-stack developer, I possess a deep skill set organized into critical domains.
          Under Full-Stack Systems, I build end-to-end applications using HTML, CSS, React, TypeScript, Node.js, Flask, REST APIs, SQL, NoSQL, Git, and GitHub.
          My Data Systems expertise covers analytics and pipelines using Pandas, NumPy, Scikit-learn, EDA, Data Cleaning, Matplotlib, and Seaborn.
          Core Engineering involves logic and system building with Python, JavaScript, and SQL.
          For Cloud and Deployment, I operate in running environments utilizing AWS, GCP, and API Hosting.
          And for System Design, Structureing and connecting workflows like Data to Insight Pipelines, API Architectures, and Workflow Automation.
          I am passionate about building data-driven systems with full-stack execution.
        </p>
      </div>
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
          Technologies that I use to build systems that actually work.
        </motion.p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-20 auto-rows-[minmax(140px,auto)]">
        
        {/* Full-Stack Systems (Span 7) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="col-span-1 md:col-span-7 md:row-span-2 relative overflow-hidden bg-card/80 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[18px] group hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] transition-all duration-[300ms] ease-out z-10 flex flex-col"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.06),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_70%)] transition-all duration-[300ms] ease-out pointer-events-none -z-10" />
          <div className="absolute inset-0 noise-bg opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />

          <div className="flex items-start justify-between mb-2 relative z-10">
            <div>
              <h3 className="text-xl font-heading text-white group-hover:text-blue-400 transition-colors duration-300">Full-Stack Systems</h3>
              <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-400 mt-1 mb-4">End-to-end application development</p>
            </div>
            <Layout size={20} className="text-white/20 group-hover:text-blue-400/50 transition-colors" />
          </div>
          <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
            {["HTML", "CSS", "React", "TypeScript", "Node.js", "Flask", "REST APIs", "SQL & NoSQL", "Git", "GitHub"].map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-sm text-gray-200 hover:scale-105 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-[240ms] ease-out cursor-default shadow-[inset_0_1px_rgba(255,255,255,0.05)] text-center sm:text-left">{skill}</span>
            ))}
          </div>
        </motion.div>

        {/* Data Systems (Span 5) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="col-span-1 md:col-span-5 md:row-span-2 relative overflow-hidden bg-card/80 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[18px] group hover:-translate-y-1 hover:border-secondary/40 hover:shadow-[0_8px_30px_rgba(255,122,24,0.15)] transition-all duration-[300ms] ease-out z-10 flex flex-col"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,24,0.06),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_top_left,rgba(255,122,24,0.15),transparent_70%)] transition-all duration-[300ms] ease-out pointer-events-none -z-10" />
          <div className="absolute inset-0 noise-bg opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />

          <div className="flex items-start justify-between mb-2 relative z-10">
            <div>
              <h3 className="text-xl font-heading text-white group-hover:text-secondary transition-colors duration-300">Data Systems</h3>
              <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-400 mt-1 mb-4">Analytics & pipelines</p>
            </div>
            <Database size={20} className="text-white/20 group-hover:text-secondary/50 transition-colors" />
          </div>
          <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
            {["Pandas", "NumPy", "Scikit-learn", "EDA", "Data Cleaning", "Matplotlib", "Seaborn"].map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-sm text-gray-200 hover:scale-105 hover:bg-secondary/20 hover:border-secondary/30 transition-all duration-[240ms] ease-out cursor-default shadow-[inset_0_1px_rgba(255,255,255,0.05)] text-center sm:text-left">{skill}</span>
            ))}
          </div>
        </motion.div>

        {/* Core Engineering (Span 6) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="col-span-1 md:col-span-6 md:row-span-2 relative overflow-hidden bg-card/80 backdrop-blur-md border border-white/10 p-6 rounded-[18px] group hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(124,92,255,0.15)] transition-all duration-[300ms] ease-out z-10 flex flex-col"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.06),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.15),transparent_70%)] transition-all duration-[300ms] ease-out pointer-events-none -z-10" />
          <div className="absolute inset-0 noise-bg opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />
          
          <div className="flex items-start justify-between mb-2 relative z-10">
            <div>
              <h3 className="text-lg font-heading text-white group-hover:text-primary transition-colors duration-300">Core Engineering</h3>
              <p className="text-[10px] uppercase tracking-wider text-gray-400 mt-1 mb-3">Logic & system building</p>
            </div>
            <Code2 size={18} className="text-white/20 group-hover:text-primary/50 transition-colors" />
          </div>
          <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
            {["Python", "JavaScript", "SQL"].map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-sm text-gray-200 hover:scale-105 hover:bg-primary/20 hover:border-primary/30 transition-all duration-[240ms] ease-out cursor-default shadow-[inset_0_1px_rgba(255,255,255,0.05)] w-full sm:w-auto text-center">{skill}</span>
            ))}
          </div>
        </motion.div>

        {/* Cloud & Deployment (Span 6) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="col-span-1 md:col-span-6 md:row-span-2 relative overflow-hidden bg-card/80 backdrop-blur-md border border-white/10 p-6 rounded-[18px] group hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] transition-all duration-[300ms] ease-out z-10 flex flex-col"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.06),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.15),transparent_70%)] transition-all duration-[300ms] ease-out pointer-events-none -z-10" />
          <div className="absolute inset-0 noise-bg opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />

          <div className="flex items-start justify-between mb-2 relative z-10">
            <div>
              <h3 className="text-lg font-heading text-white group-hover:text-emerald-400 transition-colors duration-300">Cloud & Deployment</h3>
              <p className="text-[10px] uppercase tracking-wider text-gray-400 mt-1 mb-3">Running environments</p>
            </div>
            <Cloud size={18} className="text-white/20 group-hover:text-emerald-400/50 transition-colors" />
          </div>
          <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
            {["AWS", "GCP", "API Hosting"].map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-sm text-gray-200 hover:scale-105 hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-[240ms] ease-out cursor-default shadow-[inset_0_1px_rgba(255,255,255,0.05)] w-full sm:w-auto text-center">{skill}</span>
            ))}
          </div>
        </motion.div>

        {/* System Design (Span 5) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="col-span-1 md:col-span-5 md:row-span-2 relative overflow-hidden bg-card/80 backdrop-blur-md border border-white/10 p-6 rounded-[18px] group hover:-translate-y-1 hover:border-fuchsia-400/40 hover:shadow-[0_8px_30px_rgba(232,121,249,0.15)] transition-all duration-[300ms] ease-out z-10 flex flex-col"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,121,249,0.06),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_top_left,rgba(232,121,249,0.15),transparent_70%)] transition-all duration-[300ms] ease-out pointer-events-none -z-10" />
          <div className="absolute inset-0 noise-bg opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />

          <div className="flex items-start justify-between mb-2 relative z-10">
            <div>
              <h3 className="text-lg font-heading text-white group-hover:text-fuchsia-400 transition-colors duration-300">System Design</h3>
              <p className="text-[10px] uppercase tracking-wider text-gray-400 mt-1 mb-3">Connecting workflows</p>
            </div>
            <Wrench size={18} className="text-white/20 group-hover:text-fuchsia-400/50 transition-colors" />
          </div>
          <div className="flex flex-col gap-2 relative z-10 mt-auto">
            {["Data → Insight Pipelines", "API Architecture", "Workflow Automation"].map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-sm text-gray-200 hover:scale-105 hover:bg-fuchsia-500/20 hover:border-fuchsia-500/30 transition-all duration-[240ms] ease-out cursor-default shadow-[inset_0_1px_rgba(255,255,255,0.05)]">{skill}</span>
            ))}
          </div>
        </motion.div>

        {/* Hero Card (Span 7) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="col-span-1 md:col-span-7 md:row-span-2 relative overflow-hidden bg-card/80 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[18px] hover:-translate-y-1 hover:border-white/20 transition-all duration-[300ms] hover:shadow-[0_8px_40px_rgba(124,92,255,0.15)] ease-out flex items-center justify-center text-center md:text-left z-10 group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50 pointer-events-none -z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-[300ms] ease-out pointer-events-none -z-10" />
          <div className="absolute inset-0 noise-bg opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />
          
          <div className="absolute top-4 right-4 md:top-6 md:right-6 text-white/10 group-hover:text-white/30 transition-colors duration-300">
            <Sparkles size={24} />
          </div>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading text-white relative z-10 leading-tight w-full">
            Building data-driven systems<br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ml-1 md:ml-0 md:mt-2 block">with full-stack execution.</span>
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
