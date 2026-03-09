import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import logoImg from "../assets/images/logo.png";
import { Button } from "@/components/ui/button";
import { Download, Share2, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const x = useSpring(useTransform(mouseX, [-1, 1], [-8, 8]), springConfig);
  const y = useSpring(useTransform(mouseY, [-1, 1], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set((e.clientX - centerX) / 100);
    mouseY.set((e.clientY - centerY) / 100);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95 text-foreground selection:bg-primary selection:text-primary-foreground flex flex-col font-sans">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full z-50 px-6 md:px-8 py-6 flex justify-between items-center backdrop-blur-sm bg-background/50 border-b border-white/5"
      >
        <motion.div 
          className="font-serif text-lg md:text-xl tracking-tighter italic font-light"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          Lumina
        </motion.div>
        <div className="flex gap-3 md:gap-6">
          <Button variant="ghost" className="rounded-full text-xs uppercase tracking-widest font-light hover:bg-white/10 transition-all duration-300">About</Button>
          <Button variant="ghost" className="rounded-full text-xs uppercase tracking-widest font-light hover:bg-white/10 transition-all duration-300">Contact</Button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden px-4 py-32 md:py-24">
        {/* Background effects - more subtle */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)]" />
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary/3 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/2 blur-[100px] rounded-full pointer-events-none" />
        </div>

        <div className="z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/8 backdrop-blur-xl mb-12 cursor-pointer transition-all duration-300 hover:border-white/25 hover:bg-white/12"
          >
            <Sparkles className="w-4 h-4 text-primary/60" />
            <span className="text-xs font-light tracking-widest uppercase text-primary/70">Premium Brand Identity</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-center mb-20 md:mb-28"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-tight mb-6 tracking-tight font-light">
              <span className="block">Where precision</span>
              <span className="block">
                meets <span className="italic text-primary/70">elegance</span>
              </span>
            </h1>
            <p className="text-primary/60 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
              A modern identity system designed for contemporary brands that demand sophistication and clarity in every interaction.
            </p>
          </motion.div>

          {/* Logo Showcase with Interactive 3D Effect */}
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative group perspective-1000 mb-24 md:mb-32"
          >
            {/* Glow effect - animated */}
            <motion.div 
              className="absolute -inset-4 md:-inset-8 bg-gradient-to-r from-primary/15 via-primary/8 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0, 0.05, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div 
              className="glass-panel rounded-2xl md:rounded-3xl p-8 md:p-16 relative overflow-hidden transform-gpu transition-all duration-700 hover:shadow-[0_0_120px_-30px_rgba(255,255,255,0.15)]"
              style={{ x, y }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              {/* Refined grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_0%,transparent_100%)]" />
              
              <div className="relative aspect-square w-full flex items-center justify-center">
                <motion.div 
                  className="w-56 h-56 md:w-96 md:h-96 relative"
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        "0 0 60px -15px rgba(255,255,255,0.1)",
                        "0 0 100px -10px rgba(255,255,255,0.2)",
                        "0 0 60px -15px rgba(255,255,255,0.1)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-full h-full rounded-2xl"
                  >
                    <img 
                      src={logoImg} 
                      alt="Brand Logo" 
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </motion.div>
              </div>

              {/* Interactive toolbar */}
              <motion.div 
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/60 backdrop-blur-xl border border-white/15 px-3 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0"
                whileHover={{ scale: 1.05 }}
              >
                <motion.button 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full hover:bg-white/20 text-white/60 hover:text-white transition-colors duration-300"
                >
                  <Download className="w-4 h-4" />
                </motion.button>
                <div className="w-px h-5 bg-white/10" />
                <motion.button 
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full hover:bg-white/20 text-white/60 hover:text-white transition-colors duration-300"
                >
                  <Share2 className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Specifications Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {[
              { 
                title: "Concept", 
                description: "A distillation of complex ideas into a singular, memorable geometric form. Designed to scale seamlessly across all mediums and applications." 
              },
              { 
                title: "Geometry", 
                description: "Built on an 8px modular grid system, ensuring absolute proportional harmony and visual coherence at every scale and application." 
              },
              { 
                title: "Typography", 
                description: "Paired serif and sans-serif typefaces create dynamic visual tension between heritage elegance and contemporary sophistication." 
              },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer"
              >
                <div className="rounded-xl p-6 md:p-8 border border-white/5 bg-white/3 backdrop-blur-sm transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/6">
                  <h3 className="text-sm font-light uppercase tracking-widest text-primary/50 mb-4 group-hover:text-primary/70 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-primary/70 text-sm md:text-base font-light leading-relaxed group-hover:text-primary/90 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-20 md:mt-28 flex flex-col md:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-light tracking-wider uppercase text-xs transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              View Guidelines
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border border-white/20 text-primary/80 font-light tracking-wider uppercase text-xs transition-all duration-300 hover:border-white/40 hover:text-primary/100"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="border-t border-white/5 py-10 md:py-12 px-6 text-center"
      >
        <p className="text-xs text-primary/40 uppercase tracking-widest font-light">
          Lumina Identity System © 2025 · Crafted with precision
        </p>
      </motion.footer>
    </div>
  );
}