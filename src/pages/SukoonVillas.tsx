import { Link } from "wouter";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { SmoothScroll } from "../components/layout/SmoothScroll";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, Lock, X, MapPin, Home, TreePine, Shield, Droplets, Sun } from "lucide-react";
import { toast } from "sonner";
import sukoon from "@/assets/sukoon.webp";
import sukoon2 from "@/assets/sukoon2.webp";
import sukoon3 from "@/assets/sukoon3.webp";
import sukoonVid from "@/assets/sukoonVid.mp4";

export default function SukoonVillas() {
  const [inquireOpen, setInquireOpen] = useState(false);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHeroText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "285bbd67-f284-4fd4-85b8-6b94bfc9c1d6");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await res.json();

      if (data.success) {
        setInquireOpen(false);
        toast.success("We will contact you soon");
        event.currentTarget.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

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

  const features = [
    { icon: <Home size={32} strokeWidth={1.5} />, title: "Vastu Compliant", desc: "100% Vastu compliant layouts designed to ensure positive energy flows throughout your home." },
    { icon: <TreePine size={32} strokeWidth={1.5} />, title: "Lush Greenery", desc: "Abundant landscaped gardens and open green spaces seamlessly integrated into the enclave." },
    { icon: <Shield size={32} strokeWidth={1.5} />, title: "24/7 Security", desc: "Multi-tier security with advanced CCTV surveillance and controlled access points." },
    { icon: <MapPin size={32} strokeWidth={1.5} />, title: "Prime Location", desc: "Located in Sadulapur/Vaidpura, enjoying exceptional connectivity to urban conveniences." },
    { icon: <Droplets size={32} strokeWidth={1.5} />, title: "Rainwater Harvesting", desc: "Eco-friendly sustainable water management and harvesting systems." },
    { icon: <Sun size={32} strokeWidth={1.5} />, title: "Natural Light", desc: "Exceptional architectural design maximizing natural sunlight and cross ventilation." },
  ];

  return (
    <SmoothScroll>
      <div className="bg-noise" />
      <Navbar />

      <main className="bg-background">
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-[90vh] md:h-screen w-full overflow-hidden flex items-end">
          <motion.div className="absolute inset-0 z-0" style={{ y: yImage }}>
            <video
              src={sukoonVid}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </motion.div>

          <motion.div
            style={{ opacity: opacityHeroText }}
            className="container mx-auto px-6 md:px-12 relative z-10 pb-20 md:pb-32"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors mb-8 text-sm uppercase tracking-widest font-bold link-hover pb-1"
            >
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-5xl md:text-8xl lg:text-[10rem] text-white leading-none tracking-tighter mb-6"
            >
              SUKOON<br />VILLAS
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap gap-8 md:gap-16 text-white/90 items-center mt-12 md:mt-0"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Location</p>
                <p className="font-display text-xl">Greater Noida West</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Completion</p>
                <p className="font-display text-xl">2026</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Type</p>
                <p className="font-display text-xl">Luxury Villas</p>
              </div>
              <button
                onClick={() => setInquireOpen(true)}
                className="md:ml-auto w-full md:w-auto px-8 py-4 bg-accent text-white uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-accent transition-colors duration-300"
              >
                Enquire Now
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Vision Section */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
              >
                <h2 className="font-display text-4xl md:text-6xl leading-tight mb-8 text-foreground">
                  Where modern living <br />
                  <span className="italic text-muted-foreground">meets true peace.</span>
                </h2>
                <div className="w-20 h-px bg-accent mb-8" />
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  Sukoon is an exclusive luxury villa enclave located in the peaceful surroundings of Sadulapur, Greater Noida West. It is meticulously designed for families seeking a blend of architectural elegance, private spaces, and community living.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Thoughtfully designed villas offer elegant architecture, abundant natural light, and serene open spaces, while enjoying excellent connectivity to reputed schools, healthcare, shopping, and daily conveniences—creating a refined lifestyle that is calm, comfortable, and truly elevated.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-sm"
              >
                <img src={sukoon} alt="Sukoon Villa Exterior" className="w-full h-full object-cover" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features/Amenities */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-accent text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4">Amenities</h2>
              <h3 className="font-display text-4xl md:text-5xl text-foreground">Curated for Elegance</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-background p-8 md:p-10 border border-border/50 hover:border-accent/50 transition-colors group"
                >
                  <div className="text-muted-foreground mb-6 group-hover:text-accent transition-colors">
                    {feature.icon}
                  </div>
                  <h4 className="font-display text-2xl text-foreground mb-4">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expansive Gallery */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
              <div>
                <h2 className="text-accent text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4">Gallery</h2>
                <h3 className="font-display text-4xl md:text-5xl text-foreground">Visual Journey</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="md:col-span-2 aspect-video md:aspect-[21/9] overflow-hidden rounded-sm relative group"
              >
                <img src={sukoon2} alt="Sukoon Villas Community" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="aspect-square overflow-hidden rounded-sm relative group"
              >
                <img src={sukoon} alt="Sukoon Villas Facade" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="aspect-square overflow-hidden rounded-sm relative group"
              >
                <img src={sukoon3} alt="Sukoon Villas Interior Space" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Master & Floor Plans Locked */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-foreground text-background">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <Lock className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-6 md:mb-8 text-accent opacity-80" />
              <h2 className="font-display text-4xl md:text-6xl mb-4 md:mb-6">Exclusive Access</h2>
              <p className="text-background/70 text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
                Detailed floor plans, master layout, and pricing structures are available upon request. Register your interest to receive our comprehensive project brochure.
              </p>
              <button
                onClick={() => setInquireOpen(true)}
                className="px-8 py-4 md:px-10 md:py-5 border border-accent text-accent hover:bg-accent hover:text-foreground transition-all duration-300 tracking-[0.2em] uppercase font-bold text-xs md:text-sm"
              >
                Request Floor Plans
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ... keeping standard ProjectDetail style Inquiry Modal below ... */}
      {/* Inquiry Modal */}
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
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-background border border-border p-8 z-[70] shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-display text-2xl md:text-3xl text-foreground">Enquire about Sukoon</h2>
                <button
                  onClick={() => setInquireOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form className="space-y-6" onSubmit={onSubmit}>
                <input type="hidden" name="project" value="Sukoon Villas" />
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                  <input type="text" name="name" required className="w-full bg-secondary/30 border border-border p-3 focus:outline-none focus:border-accent transition-colors text-foreground" placeholder="Your Name" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                    <input type="email" name="email" required className="w-full bg-secondary/30 border border-border p-3 focus:outline-none focus:border-accent transition-colors text-foreground" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                    <input type="tel" name="phone" className="w-full bg-secondary/30 border border-border p-3 focus:outline-none focus:border-accent transition-colors text-foreground" placeholder="+91 9999999999" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea rows={4} name="message" className="w-full bg-secondary/30 border border-border p-3 focus:outline-none focus:border-accent transition-colors text-foreground resize-none" placeholder="I am interested in Sukoon Villas..." />
                </div>

                <button type="submit" className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-sm font-bold hover:bg-accent hover:text-white transition-colors duration-300">
                  Send Enquiry
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </SmoothScroll>
  );
}