import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import QRCode from 'react-qr-code';
import SEO from '../components/SEO';

export default function Contact() {
  useEffect(() => {
    // Elegant redirect if the user scans the brand QR code
    if (window.location.search.includes('connect=whatsapp')) {
      window.location.replace("https://wa.me/917339691814");
    }
  }, []);

  return (
    <PageTransition>
      <SEO 
        title="Contact | Giri Aswin" 
        description="Get in touch to discuss our next project or opportunity. I'm highly responsive on WhatsApp and email."
        keywords="Contact Giri Aswin, hire full-stack developer, freelance, data scientist, WhatsApp contact, software engineer contact"
        path="/contact"
      />
      <div className="mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading mb-4"
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg"
        >
          Let's discuss our next project or opportunity.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-stretch">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-8 h-full"
        >
          <div className="glass-card p-8">
            <h2 className="text-2xl font-heading text-white mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Email</p>
                  <a href="mailto:giriaswin0104@gmail.com" className="text-gray-200 hover:text-primary transition-colors block">giriaswin0104@gmail.com</a>
                  <a href="mailto:giriaswin2209@gmail.com" className="text-gray-400 hover:text-primary transition-colors text-sm block mt-1">giriaswin2209@gmail.com (Alt)</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Phone</p>
                  <a href="tel:+917339691814" className="text-gray-200 hover:text-primary transition-colors">+91 73396 91814</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Location</p>
                  <p className="text-gray-200">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 flex-1 flex flex-col relative overflow-hidden group">
            {/* Subtle background gradient & inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            <h2 className="text-2xl font-heading text-white mb-6 relative z-10">Social Profiles</h2>
            
            <div className="grid grid-cols-2 gap-4 flex-1 relative z-10">
              <a href="https://linkedin.com/in/giriaswin" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 btn-scale hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/10 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(10,102,194,0.15)] group/item">
                <Linkedin size={20} className="text-gray-400 group-hover/item:text-[#0A66C2] transition-colors" />
                <span className="font-medium text-gray-300 group-hover/item:text-white transition-colors">LinkedIn</span>
              </a>
              
              <a href="https://github.com/giriaswin" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 btn-scale hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)] group/item">
                <Github size={20} className="text-gray-400 group-hover/item:text-white transition-colors" />
                <span className="font-medium text-gray-300 group-hover/item:text-white transition-colors">GitHub</span>
              </a>
              
              <a href="https://instagram.com/_ashy.04_" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 btn-scale hover:border-[#E1306C]/30 hover:bg-[#E1306C]/10 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(225,48,108,0.15)] group/item">
                <Instagram size={20} className="text-gray-400 group-hover/item:text-[#E1306C] transition-colors" />
                <span className="font-medium text-gray-300 group-hover/item:text-white transition-colors">Instagram</span>
              </a>

              <a href="mailto:giriaswin0104@gmail.com" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 btn-scale hover:border-primary/30 hover:bg-primary/10 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(124,92,255,0.15)] group/item">
                <Mail size={20} className="text-gray-400 group-hover/item:text-primary transition-colors" />
                <span className="font-medium text-gray-300 group-hover/item:text-white transition-colors">Email</span>
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 relative z-10">
              <p className="text-gray-400 text-sm text-center">Let's connect and collaborate</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 flex flex-col items-center justify-center text-center border-primary/20 h-full"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
            <MessageCircle size={32} />
          </div>
          
          <h2 className="text-3xl font-heading text-white mb-4">Fastest way to reach me</h2>
          <p className="text-gray-300 mb-4 max-w-sm">
            I'm highly responsive on WhatsApp. Send a message and let's discuss how we can work together.
          </p>
          
          <div className="bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            Usually responds within 24 hours!
          </div>
          
          <div className="bg-white p-4 rounded-2xl mb-8 flex flex-col items-center">
            {/* Direct WhatsApp link with prefill text */}
            <QRCode 
              value="https://wa.me/917339691814?text=Hi%20Giri%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."  
              size={180}
              bgColor="#ffffff" 
              fgColor="#000000"
              level="Q"
            />
          </div>
          
          <a 
            href="https://wa.me/917339691814" 
            target="_blank" 
            rel="noreferrer"
            className="w-full max-w-sm flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] text-white rounded-xl font-medium btn-scale shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle size={20} />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </PageTransition>
  );
}
