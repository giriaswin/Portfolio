import { motion, AnimatePresence } from 'motion/react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { useEffect } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
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
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm bg-surface/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden p-6"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary/20 rounded-xl border border-primary/30">
                  <FileText size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-white tracking-wide">Resume</h3>
                  <p className="text-xs text-gray-400 font-mono">GiriAswin.pdf</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <a
                href="/GiriAswin.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-between px-4 py-3.5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-white rounded-xl text-sm font-medium transition-all group"
              >
                <div className="flex items-center gap-2">
                  <ExternalLink size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                  <span>View in Browser</span>
                </div>
                <span className="text-[10px] text-gray-500 font-mono group-hover:text-gray-400">Opens new tab</span>
              </a>
              
              <a
                href="/GiriAswin.pdf"
                download="GiriAswin.pdf"
                onClick={onClose}
                className="flex items-center justify-between px-4 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-xl text-sm font-medium transition-all group shadow-lg shadow-primary/20"
              >
                <div className="flex items-center gap-2">
                  <Download size={18} className="text-white/80 group-hover:text-white transition-colors group-hover:-translate-y-0.5" />
                  <span>Download PDF</span>
                </div>
                <span className="text-[10px] text-white/50 font-mono">Direct download</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
