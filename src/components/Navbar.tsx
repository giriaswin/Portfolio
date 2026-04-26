import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Home, User, Briefcase, BrainCircuit, History, GraduationCap, Code2, Layers, Mail, Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

const navLinks = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: User },
  { path: '/projects', label: 'Projects', icon: Briefcase },
  { path: '/predictions', label: 'Predictions', icon: BrainCircuit },
  { path: '/experience', label: 'Experience', icon: History },
  { path: '/education', label: 'Education', icon: GraduationCap },
  { path: '/skills', label: 'Skills', icon: Code2 },
  { path: '/services', label: 'What I Do', icon: Layers },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center pt-4 px-4',
          isScrolled ? 'pt-2' : 'pt-6'
        )}
      >
        {/* Desktop Navbar */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full glass shadow-xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={cn(
                  'relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300',
                  isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-full bg-primary/20 border border-primary/30 shadow-[0_0_15px_rgba(124,92,255,0.3)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.5 }}
                    style={{ willChange: 'transform' }}
                  />
                )}
                <Icon size={16} className="relative z-10" />
                <span className="relative z-10">{link.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile Navbar Toggle */}
        <div className="lg:hidden w-full flex justify-end">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-3 rounded-full glass shadow-lg text-gray-200 hover:text-white transition-colors"
            aria-label="Open mobile menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-surface border-l border-white/10 z-50 flex flex-col lg:hidden shadow-2xl"
            >
              <div className="p-4 flex justify-end">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-2 px-4 pb-8 overflow-y-auto">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;
                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={cn(
                        'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200',
                        isActive ? 'bg-primary/20 text-primary border border-primary/20' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                      )}
                    >
                      <Icon size={18} />
                      {link.label}
                    </NavLink>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
