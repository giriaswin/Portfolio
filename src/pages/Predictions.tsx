import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { predictionsData } from '../data/predictionsData';
import SEO from '../components/SEO';

export default function Predictions() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching for skeleton loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition>
      <SEO 
        title="ML Predictions | Giri Aswin" 
        description="Designing ML models and systems to solve complex forecasting and classification problems. View my ML prediction projects."
        keywords="Machine learning predictions, forecasting models, classification problems, data science projects, ML portfolio, Python ML"
        path="/predictions"
      />
      <div className="mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
          className="text-4xl md:text-5xl font-heading mb-4 transform-gpu"
        >
          ML Predictions
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 30, delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl transform-gpu"
        >
          Developed ML models and systems to solve complex forecasting and classification problems.
        </motion.p>
      </div>

      <div className="space-y-6">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, idx) => (
            <div key={`skeleton-${idx}`} className="glass-card p-6 md:p-8 relative overflow-hidden">
              <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent z-10" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                <div className="w-full md:w-1/2">
                  <div className="h-8 w-3/4 bg-white/10 rounded-md mb-3" />
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-24 bg-white/5 rounded" />
                    <div className="h-6 w-32 bg-white/5 rounded" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end w-full md:w-1/3">
                  <div className="h-6 w-16 bg-white/5 rounded-md" />
                  <div className="h-6 w-20 bg-white/5 rounded-md" />
                  <div className="h-6 w-14 bg-white/5 rounded-md" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 h-28">
                  <div className="h-3 w-1/3 bg-white/10 rounded mb-3" />
                  <div className="h-3 w-full bg-white/5 rounded mb-2" />
                  <div className="h-3 w-4/5 bg-white/5 rounded" />
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 h-28">
                  <div className="h-3 w-1/3 bg-white/10 rounded mb-3" />
                  <div className="h-3 w-full bg-white/5 rounded mb-2" />
                  <div className="h-3 w-5/6 bg-white/5 rounded" />
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 h-28">
                  <div className="h-3 w-1/3 bg-white/10 rounded mb-3" />
                  <div className="h-3 w-full bg-white/5 rounded mb-2" />
                  <div className="h-3 w-3/4 bg-white/5 rounded" />
                </div>
              </div>
            </div>
          ))
        ) : (
          predictionsData.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                <div>
                  <h3 className="text-2xl font-heading text-white mb-2">{p.title}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-secondary bg-secondary/10 px-2 py-1 rounded border border-secondary/20">
                      {p.modelType}
                    </span>
                    <span className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-400/20">
                      {p.metrics}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {p.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Problem</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{p.problem}</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Approach</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{p.approach}</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Outcome</h4>
                  <p className="text-sm text-gray-200 leading-relaxed">{p.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </PageTransition>
  );
}
