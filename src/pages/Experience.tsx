import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { experienceData } from '../data/experienceData';
import SEO from '../components/SEO';

export default function Experience() {
  return (
    <PageTransition>
      <SEO 
        title="Experience | Giri Aswin" 
        description="Professional journey and internships in Data Science and Cloud Computing."
        keywords="Data science internship, cloud computing experience, professional journey, software engineering roles, tech experiences"
        path="/experience"
      />
      <div className="mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading mb-4"
        >
          Experience
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg"
        >
          Professional journey and internships.
        </motion.p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {experienceData.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-bg-base bg-surface-light shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="w-2 h-2 bg-primary rounded-full" />
            </div>
            
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-heading text-white">{exp.role}</h3>
                  <div className="text-primary font-medium">{exp.company}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full inline-block">{exp.duration}</div>
                  <div className="text-xs text-gray-500 mt-1">{exp.location} • {exp.type}</div>
                </div>
              </div>
              
              <ul className="space-y-3 mt-6">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                    <span className="text-primary mt-1.5 opacity-50">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-white/5">
                <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Impact</h4>
                <p className="text-sm text-white leading-relaxed">{exp.impact}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageTransition>
  );
}
