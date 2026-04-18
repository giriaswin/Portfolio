import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <PageTransition className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center">
      <SEO 
        title="404 | Page Not Found" 
        description="The page you are looking for does not exist."
        path="/404"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <h1 className="text-[120px] md:text-[180px] font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-heading text-white mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8 max-w-md">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-medium transition-all duration-300 btn-scale"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </motion.div>
    </PageTransition>
  );
}
