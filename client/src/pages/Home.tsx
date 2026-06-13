import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import logoImg from "../assets/images/logo.png";
import { Button } from "@/components/ui/button";
import { Download, Share2, Sparkles, ChevronDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          y: [0, 80, 0],
          x: [0, -40, 0],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          y: [0, -60, 0],
          x: [0, -20, 0],
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-[-10%] left-[40%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]"
      />
    </div>
  );
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const heroY = useTransform(scrollYProgress, [0, 0.1], [0, 100]);

  const showcaseOpacity = useTransform(scrollYProgress, [0.05, 0.2, 0.4, 0.5], [0, 1, 1, 0]);
  const showcaseScale = useTransform(scrollYProgress, [0.05, 0.2, 0.4, 0.5], [0.8, 1, 1, 0.9]);

  const textOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.4, 0.5], [100, 0]);

  const showcaseRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.8 };
  const x = useSpring(useTransform(mouseX, [-1, 1], [-15, 15]), springConfig);
  const y = useSpring(useTransform(mouseY, [-1, 1], [-15, 15]), springConfig);
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!showcaseRef.current) return;
    const rect = showcaseRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div ref={containerRef} className="bg-[#020202] text-foreground selection:bg-primary/30 selection:text-primary flex flex-col font-sans h-[300vh] relative">
      <FloatingOrbs />

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed top-0 w-full z-50 px-8 py-8 flex justify-between items-center mix-blend-difference"
      >
        <div className="font-serif text-2xl tracking-tighter italic font-light">Lumina</div>
        <div className="flex gap-8">
          <button className="text-xs uppercase tracking-[0.2em] font-light hover:text-white/60 transition-colors">About</button>
          <button className="text-xs uppercase tracking-[0.2em] font-light hover:text-white/60 transition-colors">Works</button>
          <button className="text-xs uppercase tracking-[0.2em] font-light hover:text-white/60 transition-colors">Contact</button>
        </div>
      </motion.nav>

      {/* 1. Hero Section */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="fixed inset-0 w-full h-screen flex flex-col items-center justify-center z-10 px-4"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
          className="text-center"
        >
          <motion.div variants={textVariant} className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors cursor-pointer">
              <Sparkles className="w-4 h-4 text-white/70" />
              <span className="text-xs font-light tracking-[0.25em] uppercase text-white/80">The Next Generation</span>
            </div>
          </motion.div>

          <motion.h1 variants={textVariant} className="text-7xl md:text-9xl lg:text-[10rem] font-serif leading-[0.9] tracking-tighter font-light mb-8">
            <span className="block">Pure</span>
            <span className="block italic text-white/70 pr-8">Brilliance</span>
          </motion.h1>

          <motion.p variants={textVariant} className="text-white/50 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed mt-12">
            An exponential leap in brand identity. We craft monumental digital experiences that defy expectation.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-4"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-light text-white/40">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-white/40" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 2. Massive 3D Logo Showcase */}
      <motion.section
        style={{ opacity: showcaseOpacity, scale: showcaseScale }}
        className="fixed inset-0 w-full h-screen flex items-center justify-center z-20 pointer-events-none px-4"
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-center h-full pointer-events-auto">
          <motion.div
            ref={showcaseRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full relative group perspective-1000"
          >
            <motion.div 
              className="absolute -inset-12 md:-inset-24 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] rounded-[100px] blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div 
              className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2rem] md:rounded-[4rem] p-12 md:p-32 relative overflow-hidden transform-gpu"
              style={{ x, y, rotateX, rotateY }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
              
              <div className="relative aspect-video w-full flex items-center justify-center">
                <motion.div 
                  className="w-64 h-64 md:w-[500px] md:h-[500px] relative"
                  style={{
                    filter: "drop-shadow(0 0 100px rgba(255,255,255,0.15))"
                  }}
                >
                  <img 
                    src={logoImg} 
                    alt="Brand Logo" 
                    className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  />
                </motion.div>
              </div>

              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6">
                <Button variant="outline" size="lg" className="rounded-full bg-white/5 border-white/10 hover:bg-white/20 text-white backdrop-blur-md">
                  <Download className="w-4 h-4 mr-2" /> Download Assets
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. Deep Specs & Typography Grid */}
      <motion.section
        style={{ opacity: textOpacity, y: textY }}
        className="fixed inset-0 w-full h-screen flex flex-col items-center justify-center z-30 px-6 md:px-12 pointer-events-none"
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center pointer-events-auto">
          <div className="md:col-span-5 flex flex-col gap-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-light mb-6 tracking-tight">The Anatomy</h2>
              <p className="text-white/50 text-lg font-light leading-relaxed">
                A geometric triumph. Designed on a molecular level to maintain perfect structural integrity across infinite scales. Every curve, absolute. Every angle, deliberate.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full px-8 bg-white text-black hover:bg-white/90 text-sm tracking-widest uppercase font-semibold">
                Explore System
              </Button>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {/* Ambient background for the grid */}
            <div className="absolute inset-0 bg-primary/5 blur-[100px] -z-10" />

            {[
              { num: "01", title: "Golden Ratio", text: "Proportions derived from nature's absolute law." },
              { num: "02", title: "Negative Space", text: "The absence of form creates the strongest shape." },
              { num: "03", title: "Kinetic Motion", text: "Built to move fluidly in a digital dimension." },
              { num: "04", title: "Infinite Scale", text: "Vector precision from favicons to skyscrapers." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:bg-white/[0.05] transition-colors"
              >
                <div className="text-white/20 font-serif text-3xl mb-6 italic">{item.num}</div>
                <h3 className="text-xl font-light mb-3 text-white/90">{item.title}</h3>
                <p className="text-white/40 font-light text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}