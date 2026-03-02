import { useParams, Link } from "wouter";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { SmoothScroll } from "../components/layout/SmoothScroll";
import { useProject } from "../hooks/use-project";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import sukoon from "@/assets/sukoon.webp";
import sukoon2 from "@/assets/sukoon2.webp";
import sukoon3 from "@/assets/sukoon3.webp";

export default function ProjectDetail() {
  const { slug } = useParams();
  const { data: project, isLoading } = useProject(slug || "");
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHeroText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mock data fallback for beautiful demonstration if backend hasn't seeded yet
  const displayData = project || {
    title:
      slug
        ?.split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ") || "The Obsidian Tower",
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
    // luxury tall building
    heroImage: sukoon,
    stats: [
      { label: "Height", value: "450m" },
      { label: "Levels", value: "112" },
      { label: "Residences", value: "340" },
      { label: "Architect", value: "Foster & Partners" },
    ],
    gallery: [
      sukoon, // luxury interior
      sukoon2, // luxury interior
      sukoon3, // luxury interior
    ],
  };

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
                    {displayData.gallery.map((img: string, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className={`overflow-hidden rounded-sm ${i === 0 ? "md:col-span-2 aspect-video" : "aspect-square"}`}
                      >
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          src={img}
                          alt={`${displayData.title} gallery view ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
