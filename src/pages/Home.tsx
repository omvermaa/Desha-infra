import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ParallaxHero } from "../components/home/ParallaxHero";
import { FeaturedProjects } from "../components/home/FeaturedProjects";
import { SmoothScroll } from "../components/layout/SmoothScroll";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


function StatementSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      id="about"
      className="py-40 px-6 md:px-12 bg-foreground text-background flex items-center justify-center overflow-hidden relative"
    >
      <div className="absolute inset-0 opacity-10">
        {/* architectural lines abstract */}
        <img 
          src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop" 
          alt="Abstract architecture"
          className="w-full h-full object-cover"
        />
      </div>
      <div ref={ref} className="container mx-auto max-w-5xl text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-5xl lg:text-7xl leading-[1.2] font-medium"
        >
          "We do not simply construct buildings. We forge <span className="italic text-accent">legacies</span> that stand the test of time, blending visionary design with uncompromising precision."
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <div className="w-px h-24 bg-accent/50" />
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <SmoothScroll>
      <div className="bg-noise" />
      <Navbar />
      
      <main>
        <ParallaxHero />
        <StatementSection />
        <FeaturedProjects />
      </main>

      <Footer />
    </SmoothScroll>
  );
}
