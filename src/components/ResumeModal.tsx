import { motion, AnimatePresence } from 'motion/react';
import { X, Download, FileText, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  // Reset states when modal closes or opens to prevent jank
  useEffect(() => {
    if (isOpen) {
      // STRICT SCROLL LOCK: Prevent global Lenis from hijacking PDF scroll events
      document.body.style.overflow = 'hidden';
      // Completely pause Lenis RAF loops
      // @ts-ignore
      if (window.lenis) window.lenis.stop();
    } else {
      document.body.style.overflow = 'unset';
      // @ts-ignore
      if (window.lenis) window.lenis.start();

      setTimeout(() => {
        setIsAnimationComplete(false);
        setIsLoading(true);
      }, 300); // Wait for exit animation to finish
    }

    // Cleanup when component force unmounts
    return () => {
      document.body.style.overflow = 'unset';
      // @ts-ignore
      if (window.lenis) window.lenis.start();
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'linear' }}
          onClick={onClose}
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 sm:p-6 md:p-12"
        >
          {/* Main Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => setIsAnimationComplete(true)}
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent="true"
            className="relative w-full max-w-5xl h-[85vh] bg-[#1a1c20] border border-white/10 rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden overscroll-contain"
          >
            {/* Inner ambient glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Premium Header */}
            <div className="relative z-20 flex items-center justify-between p-4 px-6 md:px-8 border-b border-white/10 bg-white/5 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-xl border border-primary/30">
                  <FileText size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-white tracking-wide">Curriculum Vitae</h3>
                  <p className="text-xs text-gray-400 font-mono">GiriAswin.pdf</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <a
                  href="https://drive.google.com/uc?export=download&id=1urAlDi1oeSytbHpmha47wxzioE0MviiE"
                  className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-primary border border-white/10 hover:border-primary/50 text-white rounded-full text-sm font-medium transition-all duration-300 btn-scale group shadow-lg"
                >
                  <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                  <span>Download</span>
                </a>
                
                <button
                  onClick={onClose}
                  className="p-2.5 text-gray-400 bg-white/5 hover:bg-white/10 hover:text-white rounded-full transition-all border border-white/5 btn-scale"
                  aria-label="Close resume"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Embedded PDF Content */}
            <div className="relative flex-1 w-full bg-[#323639] z-10 flex items-center justify-center">
              {(!isAnimationComplete || isLoading) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface/80 backdrop-blur-sm z-20">
                  <Loader2 size={32} className="text-primary animate-spin mb-4" />
                  <p className="text-gray-400 font-medium animate-pulse">Loading Document...</p>
                </div>
              )}
              
              {/* 
                Zero-Latency Render Guard: We only mount the iframe AFTER the 
                bezier-curve entrance animation has completely settled.
              */}
              {isAnimationComplete && (
                <iframe
                  src="https://drive.google.com/file/d/1urAlDi1oeSytbHpmha47wxzioE0MviiE/preview"
                  className="w-full h-full border-0"
                  data-lenis-prevent="true"
                  allow="autoplay"
                  onLoad={() => setIsLoading(false)}
                ></iframe>
              )}
            </div>

            {/* Mobile Download CTA (fixed to bottom for small screens) */}
            <div className="sm:hidden absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
              <a
                href="https://drive.google.com/uc?export=download&id=1urAlDi1oeSytbHpmha47wxzioE0MviiE"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-sm font-medium btn-scale shadow-[0_10px_40px_rgba(124,92,255,0.4)]"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
