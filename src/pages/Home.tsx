import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ParallaxHero } from "../components/home/ParallaxHero";
import { FeaturedProjects } from "../components/home/FeaturedProjects";
import { SmoothScroll } from "../components/layout/SmoothScroll";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";


function StatementSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [inquireOpen, setInquireOpen] = useState(false);

  useEffect(() => {
    if (inquireOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [inquireOpen]);

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
          className="mt-12 flex flex-col items-center gap-8"
        >
          <div className="w-px h-24 bg-accent/50" />
          <motion.button
            onClick={() => setInquireOpen(true)}
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: ["0 0 0px rgba(217, 166, 35, 0)", "0 0 20px rgba(217, 166, 35, 0.3)", "0 0 0px rgba(217, 166, 35, 0)"]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(217, 166, 35, 0.5)" }}
            className="px-10 py-4 border border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-300 tracking-[0.2em] text-sm uppercase font-bold"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {inquireOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setInquireOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-background border border-border p-8 z-[70] shadow-2xl text-left"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-display text-3xl text-foreground">
                  Enquire
                </h2>
                <button
                  onClick={() => setInquireOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquireOpen(false);
                  toast.success("We will contact you soon");
                }}
              >
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-secondary/30 border border-border p-3 focus:outline-none focus:border-accent transition-colors text-foreground"
                    placeholder="Your Name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-secondary/30 border border-border p-3 focus:outline-none focus:border-accent transition-colors text-foreground"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-secondary/30 border border-border p-3 focus:outline-none focus:border-accent transition-colors text-foreground"
                      placeholder="+91 9999999999"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-secondary/30 border border-border p-3 focus:outline-none focus:border-accent transition-colors text-foreground resize-none"
                    placeholder="Tell us about your interest..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-sm font-bold hover:bg-accent hover:text-white transition-colors duration-300"
                >
                  Send Enquiry
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
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
