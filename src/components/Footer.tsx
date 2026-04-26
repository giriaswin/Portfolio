import { useState, useEffect, useRef } from 'react';
import { motion, animate, useMotionValue, useTransform, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { doc, getDoc, setDoc, updateDoc, increment, onSnapshot } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';

function CountUp({ to }: { to: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    const controls = animate(count, to, { duration: 1.5, ease: "easeOut" });
    return controls.stop;
  }, [count, to]);

  return <motion.span>{rounded}</motion.span>;
}

export default function Footer() {
  const [views, setViews] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [buttonBottom, setButtonBottom] = useState(32);
  const [buttonOpacity, setButtonOpacity] = useState(1);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const statsDocRef = doc(db, 'views', 'portfolio');

    const initializeOrIncrementViews = async () => {
      try {
        console.log('[Firebase Views] Fetching current views directly...');
        const docSnap = await getDoc(statsDocRef);
        console.log('[Firebase Views] Current document exists:', docSnap.exists());
        
        // If the document doesn't exist, we MUST create it for everyone (whether they've visited or not)
        if (!docSnap.exists()) {
          console.log('[Firebase Views] Creating initial generic document.');
          await setDoc(statsDocRef, { count: 1 });
          localStorage.setItem("visited", "true");
          setViews(1);
          return;
        }
        
        // If it exists, but user hasn't visited, increment it
        if (!localStorage.getItem("visited")) {
          console.log('[Firebase Views] First visit detected! Incrementing by 1...');
          await updateDoc(statsDocRef, { count: increment(1) });
          // Must correctly set the local storage flag to prevent infinite reloads incrementing
          localStorage.setItem("visited", "true");
          console.log('[Firebase Views] Local visited token planted.');
        } else {
           console.log('[Firebase Views] Returning visitor, bypassing increment calculation.');
        }
      } catch (err) {
        // Handle error gracefully so we don't break the UI
        console.error("[Firebase Views] Firestore Error on Views Init: ", err);
      }
    };

    initializeOrIncrementViews();

    // Subscribe to real-time updates
    console.log('[Firebase Views] Binding to onSnapshot Listener...');
    const unsubscribe = onSnapshot(
      statsDocRef,
      (docSnap) => {
        if (docSnap.exists() && typeof docSnap.data().count === 'number') {
          console.log('[Firebase Views] Socket returned updated views successfully:', docSnap.data().count);
          setViews(docSnap.data().count);
        } else {
          console.warn('[Firebase Views] View fetch resulted in a missing or improperly formatted payload, fallback rendering to 1.');
          // If the snapshot triggers before creation finishes, or if the document structure is weird, fallback to 1 
          setViews(1);
        }
      },
      (err) => {
        // We log silently here so we don't throw blocking errors to the user UI
        console.error("[Firebase Views] Firestore onSnapshot Error:", err);
        setViews(1); // Failsafe
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 500;
      setShowBackToTop(isScrolled);
      
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        if (footerRect.top < viewportHeight) {
          // Footer is visible
          const visibleFooterHeight = viewportHeight - footerRect.top;
          setButtonBottom(visibleFooterHeight + 32);
          
          // Reduce opacity as it gets closer to the footer
          const overlapRatio = Math.min(1, Math.max(0, visibleFooterHeight / 100));
          setButtonOpacity(1 - (overlapRatio * 0.5)); // Reduce opacity by up to 50%
        } else {
          // Footer is not visible
          setButtonBottom(32);
          setButtonOpacity(1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerText = "Let's build something";

  return (
    <footer ref={footerRef} className="relative mt-8 pt-12 pb-8 overflow-hidden">
      {/* Background Signature Touch */}
      <div className="absolute inset-0 bg-surface-light/30 border-t border-white/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <motion.div 
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 origin-bottom w-full h-[500px] bg-gradient-to-t from-primary/10 to-transparent blur-[100px] -z-10 pointer-events-none" 
      />
      
      {/* Noise texture */}
      <div className="absolute inset-0 noise-bg mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* 1. TOP — STATEMENT */}
        <div className="mb-4 overflow-hidden flex justify-center flex-wrap gap-x-3 items-baseline pb-4">
          {footerText.split(' ').map((word, wordIdx) => (
            <div key={wordIdx} className="overflow-visible flex">
              {word.split('').map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  initial={{ y: '100%', opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.3, 
                    delay: (wordIdx * 0.05) + (charIdx * 0.01),
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  className="font-heading text-4xl md:text-5xl lg:text-6xl text-white inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          ))}
          <div className="overflow-visible flex">
            <motion.span
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary inline-block"
            >
              real.
            </motion.span>
          </div>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="text-gray-400 text-lg mb-12 max-w-md"
        >
          Open to collaborations, projects, and meaningful work.
        </motion.p>

        {/* 2. CENTER — SOCIAL */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <motion.a 
            href="https://linkedin.com/in/giriaswin" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="LinkedIn Profile"
            whileHover={{ scale: 1.02, y: -4, boxShadow: "0 8px 24px rgba(10,102,194,0.25)" }}
            whileTap={{ scale: 0.98 }}
            className="hover-disable relative overflow-hidden flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/5 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition-colors duration-300 group"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
            <Linkedin size={18} className="relative z-10 text-gray-400 group-hover:text-[#0A66C2] transition-colors" />
            <div className="text-left relative z-10">
              <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors leading-tight">LinkedIn</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">Let's connect</p>
            </div>
          </motion.a>
          
          <motion.a 
            href="https://github.com/giriaswin" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="GitHub Profile"
            whileHover={{ scale: 1.02, y: -4, boxShadow: "0 8px 24px rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.98 }}
            className="hover-disable relative overflow-hidden flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/5 hover:border-white/30 hover:bg-white/10 transition-colors duration-300 group"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
            <Github size={18} className="relative z-10 text-gray-400 group-hover:text-white transition-colors" />
            <div className="text-left relative z-10">
              <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors leading-tight">GitHub</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">View code</p>
            </div>
          </motion.a>
          
          <motion.a 
            href="https://instagram.com/_ashy.04_" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Instagram Profile"
            whileHover={{ scale: 1.02, y: -4, boxShadow: "0 8px 24px rgba(225,48,108,0.25)" }}
            whileTap={{ scale: 0.98 }}
            className="hover-disable relative overflow-hidden flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/5 hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10 transition-colors duration-300 group"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
            <Instagram size={18} className="relative z-10 text-gray-400 group-hover:text-[#E1306C] transition-colors" />
            <div className="text-left relative z-10">
              <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors leading-tight">Instagram</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">Follow me</p>
            </div>
          </motion.a>
        </div>

        {/* 4. BOTTOM — STRUCTURE */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full pt-8 border-t border-white/5">
          <div className="text-left mb-6 md:mb-0">
            <p className="text-sm text-gray-300 font-medium">© {new Date().getFullYear()} Giri Aswin</p>
            <p className="text-xs text-gray-500 mt-1"><em>Built with precision & intent</em></p>
          </div>
          
          {/* 3. RIGHT SIDE — VIEW COUNT */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full shadow-[0_0_15px_rgba(124,92,255,0.05)] overflow-hidden">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-gray-300 flex items-center gap-1.5 h-5 relative">
              <AnimatePresence mode="popLayout" initial={false}>
                {views !== null ? (
                  <motion.span
                    key={views}
                    initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
                    className="flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <span className="text-white tabular-nums tracking-tight font-semibold"><CountUp to={views} /></span> Views
                  </motion.span>
                ) : (
                  <motion.span 
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="whitespace-nowrap"
                  >
                    Loading views...
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: showBackToTop ? buttonOpacity : 0, 
          y: showBackToTop ? 0 : 10,
          bottom: buttonBottom
        }}
        transition={{ 
          opacity: { duration: 0.1 }, // Fast update for opacity
          y: { duration: 0.3, ease: "easeOut" },
          bottom: { duration: 0 } // Instant update to stick to footer without lag
        }}
        onClick={scrollToTop}
        className={`fixed right-8 p-3.5 rounded-full bg-surface/80 backdrop-blur-md border border-white/10 text-white shadow-[0_0_20px_rgba(124,92,255,0.3)] hover:bg-primary hover:border-primary hover:!opacity-100 transition-colors z-50 ${showBackToTop ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
