import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import logo from "@/assets/logo.png"



export function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax speeds for different layers
  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scaleFront = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacityFront = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Background layer - Distant sky/clouds */}
      {/* abstract dark cloud texture */}
      {/* <motion.div 
        className="absolute inset-0 z-0 w-full h-[120%]"
        style={{ 
          y: yBg,
          backgroundImage: "url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </motion.div> */}

      {/* Midground - Main Skyscraper */}
      {/* ultra luxury modern skyscraper looking up */}
      <motion.div 
        className="absolute inset-0 z-10 w-full h-[120%]"
        style={{ 
          y: yMid,
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.8
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />
      </motion.div>

       <div className="z-20 relative flex items-center justify-center">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[30vh] bg-black/50 blur-3xl" />
        <img src={logo} className="relative z-10 invert hue-rotate-180 h-[35vh] sm:h-[60vh] drop-shadow-2xl"/>
      </div>
      {/* Typography Layer - Sits between mid and front to give depth */}
      {/* <motion.div 
        className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full"
        style={{ y: yText, opacity: opacityText }}
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-accent uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-6"
        >
          Elevating The Horizon
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl sm:text-8xl md:text-[8rem] lg:text-[10rem] text-white font-medium leading-none tracking-tighter"
        >
          BEYOND<br />
          <span className="italic text-white/90">vision</span>
        </motion.h1>
      </motion.div> */}

      {/* Foreground - Mist / Overlapping structures passing by */}
      <motion.div 
        className="absolute inset-0 z-30 w-full h-full pointer-events-none"
        style={{ 
          scale: scaleFront,
          opacity: opacityFront,
          background: "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.8) 100%)"
        }}
      />
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-4 text-white/70"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </div>
  );
}
