import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export default function PageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.99, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.99, y: -15 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 25,
        mass: 0.5
      }}
      style={{ willChange: 'transform, opacity', transformOrigin: 'top center' }}
      className={`min-h-screen pt-24 pb-12 px-6 lg:px-8 max-w-7xl mx-auto transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  );
}
