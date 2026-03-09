import { motion } from "framer-motion";
import logoImg from "../assets/images/logo.png";
import { Button } from "@/components/ui/button";
import { Download, Share2, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground flex flex-col font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
        <div className="font-serif text-xl tracking-tighter italic">Lumina</div>
        <div className="flex gap-4">
          <Button variant="ghost" className="rounded-full text-xs uppercase tracking-widest hover:bg-white/10">About</Button>
          <Button variant="ghost" className="rounded-full text-xs uppercase tracking-widest hover:bg-white/10">Contact</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden px-4 py-24">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        </div>

        <div className="z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <Sparkles className="w-4 h-4 text-primary/70" />
              <span className="text-xs font-medium tracking-wide uppercase text-primary/70">Brand Identity Showcase</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-center leading-tight mb-16 tracking-tight max-w-4xl mx-auto">
              The essence of <br className="hidden md:block" />
              <span className="italic text-primary/80">modern</span> minimalism
            </h1>
          </motion.div>

          {/* Logo Presentation Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative group perspective-1000"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />
            
            <div className="glass-panel rounded-2xl md:rounded-[2.5rem] p-4 md:p-12 relative overflow-hidden transform-gpu transition-all duration-700 hover:shadow-[0_0_80px_-20px_rgba(255,255,255,0.1)]">
              {/* Grid overlay for presentation */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
              
              <div className="relative aspect-square md:aspect-[21/9] w-full flex items-center justify-center">
                <motion.div 
                  className="w-48 h-48 md:w-80 md:h-80 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <img 
                    src={logoImg} 
                    alt="Brand Logo" 
                    className="w-full h-full object-contain filter drop-shadow-2xl"
                  />
                </motion.div>
              </div>

              {/* Toolbar */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-xl border border-white/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20 text-white/70 hover:text-white">
                  <Download className="w-4 h-4" />
                </Button>
                <div className="w-px h-4 bg-white/10" />
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20 text-white/70 hover:text-white">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full text-center md:text-left"
          >
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary/50 mb-3">Concept</h3>
              <p className="text-primary/80 font-light leading-relaxed">
                A distillation of complex ideas into a singular, memorable geometric form. Designed to scale seamlessly from app icons to billboards.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary/50 mb-3">Geometry</h3>
              <p className="text-primary/80 font-light leading-relaxed">
                Built on a strict 8px grid system, ensuring perfect proportions and absolute visual balance across all touchpoints.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary/50 mb-3">Typography</h3>
              <p className="text-primary/80 font-light leading-relaxed">
                Paired with classic serif and modern sans-serif typography to create a tension between heritage and future.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-xs text-primary/40 uppercase tracking-widest">
        Lumina Identity © 2025
      </footer>
    </div>
  );
}