import { useParams, Link } from "wouter";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { SmoothScroll } from "../components/layout/SmoothScroll";
import { useProject } from "../hooks/use-project";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, Lock, X } from "lucide-react";
import { toast } from "sonner";
import sukoon from "@/assets/sukoon.webp";
import sukoon2 from "@/assets/sukoon2.webp";
import sukoon3 from "@/assets/sukoon3.webp";
import sukoonVid from "@/assets/sukoonVid.mp4";
import cottage2 from "@/assets/cottage2.png";
import cottage3 from "@/assets/cottage3.png";
import shreeram from "@/assets/shreeram.mp4";
import desha6 from "@/assets/desha6.webp";
import desha5 from "@/assets/desha5.webp";
import desha2 from "@/assets/desha2.jpg";
import desha7 from "@/assets/desha7.webp";
import desha3 from "@/assets/desha3.webp";
import nilgiri from "@/assets/nilgiri.webp";
import nilgiri2 from "@/assets/nilgiri2.webp";
import nilgiri3 from "@/assets/nilgiri3.webp";
import nilgiriVid from "@/assets/nilgiri.mp4";
import khaatu from "@/assets/khaatu.webp";

interface Project {
  title: string;
  location: string;
  completionDate: string;
  description: string;
  content: string;
  heroImage: string;
  stats?: { label: string; value: string }[] | null;
  gallery?: string[] | null;
  status?: string;
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const [inquireOpen, setInquireOpen] = useState(false);
  const { data: project, isLoading } = useProject(slug || "");
  const heroRef = useRef(null);

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

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHeroText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mock data dictionary
  const mockProjects: Record<string, Project> = {
    "shree-ram-river-cottege": {
      title: "Shree Ram River Cottege",
      location: "Sakar Village, Almora-Kausani",
      completionDate: "2025-2026",
      description:
        "A spiritual sanctuary nestled in the Himalayas, offering panoramic snow-capped views and deep tranquility.",
      content: `Nestled in the Kumaon region—often called the "Switzerland of India"—Shree Ram River Cottege offers a unique blend of spiritual peace and natural majesty. Located on the main Almora-Kausani highway in Sakar Village, this project is designed for those seeking a retreat from the chaos of city life.

      Wake up to the breathtaking sight of the Trishul and Nanda Devi peaks. The location is steeped in history and spirituality, situated just a short drive from the ancient Katarmal Sun Temple and the mystique of Kasar Devi Temple, known globally for its unique "zero magnetic field" atmosphere.
      
      Whether for a personal holiday home, a meditation retreat, or a high-yield Airbnb investment, this project offers modern infrastructure amidst timeless beauty. You are also just 1.5 hours away from the world-famous Neem Karoli Baba Ashram (Kainchi Dham), making it a spiritually priceless investment.`,
      heroImage:
        "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=2070&auto=format&fit=crop",
      stats: [
        { label: "Plot Types", value: "River/Valley View" },
        { label: "Road Width", value: "50 ft" },
        { label: "Dist. to Almora", value: "15 km" },
        { label: "Key Amenity", value: "Pvt. Temple & Gym" },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop", // Mountains
        shreeram,
        cottage2, // Peace/Yoga
        cottage3, // Temple/Culture vibe
      ],
    },
    "Desha-residences": {
      title: "Desha Residences 1/2/3",
      location: "Premium Suburban Enclave",
      completionDate: "2025",
      status: "Delivered",
      description:
        "A meticulously planned plotting destination offering the perfect foundation to build your bespoke dream home.",
      content: `Desha Residences presents a rare opportunity to own a piece of highly sought-after earth in a rapidly developing corridor. This premium plotting project is designed to give you the absolute freedom to architect your vision from the ground up.

      Desha 1 --> Vaidpura, Greater Noida West | Size - 5 Beegha 
      Desha 2 --> Sector 20 Bhanota, | Size - 6 Beegha
      Desha 3 --> Dhoommanik | Size - 14 Beegha

      The township features wide, tree-lined avenues, state-of-the-art underground cabling, dedicated green belts, and robust 24/7 security. Every plot is clearly demarcated and legally approved, ensuring a hassle-free ownership experience.
      
      Whether you are looking for a lucrative, high-appreciation land investment or the perfect canvas to construct a generational family villa, Desha Residences offers unmatched potential, excellent connectivity, and a thriving community atmosphere.`,
      heroImage: desha6,
      stats: [
        { label: "Plot Sizes", value: "50 - 200 Sq.Yd." },
        { label: "Total Area", value: "14 Beegha" },
        { label: "Zoning", value: "Residential" },
        { label: "Road Width", value: "40 ft & 60 ft" },
      ],
      gallery: [
        desha6, // Generated plotting image
        desha2, // Lush green land
        desha3,
        desha5,
        desha7, // Suburban neighborhood/roads
      ],
    },
    "sukoon-villas": {
      title: "Sukoon Villas",
      location: "Sadulapur/Vaidpura, Greater Noida West",
      completionDate: "2026",
      description:
        "A breathtaking marvel of modern engineering, redefining the boundaries of vertical living with unparalleled elegance.",
      content: `Sukoon is an exclusive luxury villa enclave located in
the peaceful surroundings of Sadulapur, Greater Noida
West, where modern living meets true sukoon.

Thoughtfully designed villas offer elegant architecture,
abundant natural light, and serene open spaces, while
enjoying excellent connectivity to reputed schools,
healthcare, shopping, and daily conveniences—creating
a refined lifestyle that is calm, comfortable, and truly
elevated.`,
      heroImage: sukoon,
      stats: [
        { label: "Height", value: "450m" },
        { label: "Levels", value: "112" },
        { label: "Residences", value: "340" },
        { label: "Architect", value: "Foster & Partners" },
      ],
      gallery: [sukoon, sukoonVid, sukoon2, sukoon3],
    },
    "nilgiri-residency": {
      title: "Nilgiri Residency",
      location: "Bhanuta Sector-20, Noida Extension",
      completionDate: "2027",
      description:
        "Premium residential plots offering a perfect blend of connectivity, nature, and modern infrastructure.",
      content: `Nilgiri Residency is a thoughtfully planned residential project located in the prime sector of Bhanuta, Noida Extension (Greater Noida West). Designed for those who cherish the freedom of building their own home, this project offers freehold residential plots in a secure, gated community.

      The development features wide internal roads, electricity and water supply infrastructure, and dedicated green areas to ensure a healthy living environment. Its strategic location offers seamless connectivity to the FNG Expressway, NH-24, and upcoming metro stations, making daily commutes effortless.
      
      Surrounded by established schools, hospitals, and commercial hubs, Nilgiri Residency is not just a plot of land but a foundation for a prosperous future. It represents an excellent investment opportunity in one of NCR's fastest-growing real estate corridors.`,
      heroImage: nilgiri,
      stats: [
        { label: "Plot Sizes", value: "100 - 250 Sq.Yd." },
        { label: "Type", value: "Gated Community" },
        { label: "Possession", value: "Immediate" },
        { label: "Location", value: "Sec-20, Bhanuta" },
      ],
      gallery: [nilgiriVid, nilgiri, nilgiri2, nilgiri3],
    },
    "khaatu-shyam-enclave": {
      title: "Khaatu Shyam Enclave",
      location: "Near Khatu Shyam Mandir, Greater Noida West",
      completionDate: "2025",
      description:
        "A divine living experience offering residential plots in the serenity of Khatu Shyam Mandir.",
      content: `Khaatu Shyam Enclave offers a unique opportunity to build your home in a spiritually charged and peaceful environment. Located just minutes away from the renowned Khatu Shyam Mandir in Greater Noida West, this project combines devotion with modern living.

      The enclave features well-planned residential plots with wide roads, proper drainage, and electricity infrastructure. It is an ideal choice for families looking for a serene neighborhood that stays connected to the city's major hubs.
      
      With schools, markets, and transport facilities nearby, Khaatu Shyam Enclave ensures convenience while providing a tranquil retreat from the urban hustle.`,
      heroImage: khaatu,
      stats: [
        { label: "Plot Sizes", value: "60 - 200 Sq.Yd." },
        { label: "Type", value: "Freehold Plots" },
        { label: "Possession", value: "Immediate" },
        { label: "Location", value: "Gr. Noida West" },
      ],
      gallery: [
        khaatu,
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      ],
    },
  };

  // Fallback to generic title if slug not found
  const defaultMock: Project = {
    title:
      slug
        ?.split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ") || "Project Details",
    location: "Location Pending",
    completionDate: "TBD",
    description: "Project details are currently being updated.",
    content: "Content coming soon...",
    heroImage: sukoon,
    stats: [],
    gallery: [],
  };

  const displayData: Project = project || mockProjects[slug || ""] || defaultMock;

  if (isLoading && !project) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-background text-foreground">
        <div className="w-px h-16 bg-accent animate-pulse mb-8" />
        <p className="font-display tracking-widest uppercase text-sm">
          Loading Experience
        </p>
      </div>
    );
  }

  return (
    <SmoothScroll>
      <div className="bg-noise" />
      <Navbar />

      <main className="bg-background">
        {/* Project Hero */}
        <section
          ref={heroRef}
          className="relative h-[90vh] md:h-screen w-full overflow-hidden flex items-end"
        >
          <motion.div className="absolute inset-0 z-0" style={{ y: yImage }}>
            <img
              src={displayData.heroImage}
              alt={displayData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          </motion.div>

          <motion.div
            style={{ opacity: opacityHeroText }}
            className="container mx-auto px-6 md:px-12 relative z-10 pb-20 gap-5 md:pb-32"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors mb-8 text-sm uppercase tracking-widest font-bold link-hover pb-1"
            >
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
            {displayData.status && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="inline-block bg-accent text-white text-xs font-bold px-4 py-2 tracking-widest uppercase rounded-sm ml-5 mb-6"
              >
                {displayData.status}
              </motion.div>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl lg:text-[8rem] text-white leading-none tracking-tighter mb-6"
            >
              {displayData.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap gap-8 md:gap-16 text-white/90"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">
                  Location
                </p>
                <p className="font-display text-xl">{displayData.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">
                  Completion
                </p>
                <p className="font-display text-xl">
                  {displayData.completionDate}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="py-32 px-6 md:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left col - Stats */}
              <div className="lg:col-span-4">
                <div className="sticky top-40 space-y-12">
                  <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-foreground/50 mb-8 border-b border-border pb-4">
                    Project Specifications
                  </h3>

                  {displayData.stats?.map(
                    (stat: { label: string; value: string }, idx: number) => (
                      <div key={idx} className="border-l border-accent pl-6">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                          {stat.label}
                        </p>
                        <p className="font-display text-2xl md:text-3xl text-foreground">
                          {stat.value}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Right col - Text & Gallery */}
              <div className="lg:col-span-8">
                <div className="mb-24">
                  <h2 className="font-display text-3xl md:text-5xl leading-tight mb-12 text-foreground">
                    {displayData.description}
                  </h2>
                  <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none font-body text-muted-foreground whitespace-pre-line leading-relaxed w-full">
                    {displayData.content}
                  </div>
                </div>

                {/* Gallery masonry */}
                {displayData.gallery && displayData.gallery.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {displayData.gallery.map((item: string, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className={`overflow-hidden rounded-sm ${i === 0 ? "md:col-span-2 aspect-video" : "aspect-square"}`}
                      >
                        {typeof item === "string" && item.endsWith(".mp4") ? (
                          <video
                            src={item}
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            src={item}
                            alt={`${displayData.title} gallery view ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Blurry Plans & Pricing Section */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-muted/20 border-t border-border">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="mb-12 md:mb-16 text-center md:text-left"
            >
              <h2 className="font-display text-4xl md:text-5xl mb-4 text-foreground">
                Project Plans
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Unlock detailed master plans and flexible payment schedules.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Master Plan */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="group relative overflow-hidden rounded-sm border border-border aspect-[4/3] md:aspect-video bg-background flex items-center justify-center"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                    alt="Master Plan Preview"
                    className="w-full h-full object-cover blur-[8px] opacity-40 scale-105 transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="relative z-10 flex flex-col items-center text-center p-3 sm:p-4 md:p-6">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-background/20 border border-border/50 flex items-center justify-center mb-3 md:mb-6 backdrop-blur-md shadow-xl">
                    <Lock className="w-4 h-4 md:w-6 md:h-6 text-foreground" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl md:text-3xl mb-2 md:mb-3 text-foreground drop-shadow-md">
                    Master Plan
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80 mb-4 md:mb-8 max-w-[200px] md:max-w-xs drop-shadow-sm">
                    View the complete layout, zoning, and plot dimensions
                  </p>
                  <button
                    onClick={() => setInquireOpen(true)}
                    className="px-4 py-2 md:px-8 md:py-3 bg-foreground text-background text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold rounded-sm hover:bg-accent hover:text-foreground transition-colors"
                  >
                    Request Access
                  </button>
                </div>
              </motion.div>

              {/* Payment Plan */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="group relative overflow-hidden rounded-sm border border-border aspect-[4/3] md:aspect-video bg-background flex items-center justify-center"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop"
                    alt="Payment Plan Preview"
                    className="w-full h-full object-cover blur-[8px] opacity-40 scale-105 transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="relative z-10 flex flex-col items-center text-center p-3 sm:p-4 md:p-6">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-background/20 border border-border/50 flex items-center justify-center mb-3 md:mb-6 backdrop-blur-md shadow-xl">
                    <Lock className="w-4 h-4 md:w-6 md:h-6 text-foreground" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl md:text-3xl mb-2 md:mb-3 text-foreground drop-shadow-md">
                    Payment Plan
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80 mb-4 md:mb-8 max-w-[200px] md:max-w-xs drop-shadow-sm">
                    Explore flexible payment milestones and pricing structures
                  </p>
                  <button
                    onClick={() => setInquireOpen(true)}
                    className="px-4 py-2 md:px-8 md:py-3 bg-foreground text-background text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold rounded-sm hover:bg-accent hover:text-foreground transition-colors"
                  >
                    Request Access
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

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
    </SmoothScroll>
  );
}
