import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { SmoothScroll } from "../components/layout/SmoothScroll";
import { useProjects } from "../hooks/use-project";
import { motion } from "framer-motion";
import { Link } from "wouter";
import sukoon from "@/assets/sukoon.webp"
import desha5 from "@/assets/desha5.webp"
import nilgiri from "@/assets/nilgiri.webp";
import khaatu from "@/assets/khaatu.webp";

interface Project {
  id: number;
  title: string;
  slug: string;
  location: string;
  completionDate: string;
  heroImage: string;
  status?: string;
}

export default function Projects() {
  const { data: projects, isLoading } = useProjects();

  // Mock data if backend is empty
  const mockProjects = [
    {
      id: 1, title: "Sukoon Villas", slug: "sukoon-villas",
      location: "Sadulapur/Vaidpura, Greater Noida West", completionDate: "2026",
      heroImage: sukoon
    },
    {
      id: 2, title: "Desha Residences", slug: "Desha-residences",
      location: "Premium Suburban Enclave", completionDate: "2025",
      heroImage: desha5,
      status: "Delivered"
    },
    {
      id: 3, title: "Shree Ram River Cottege", slug: "shree-ram-river-cottege",
      location: "Sakar Village, Almora-Kausani", completionDate: "2025-2026",
      heroImage: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4, title: "Nilgiri Residency", slug: "nilgiri-residency",
      location: "Bhanuta Sector-20, Noida Extension", completionDate: "2027",
      heroImage: nilgiri
    },
    {
      id: 5, title: "Khaatu Shyam Enclave", slug: "khaatu-shyam-enclave",
      location: "Near Khatu Shyam Mandir, Greater Noida West", completionDate: "2025",
      heroImage: khaatu
    }
  ];

  const displayProjects = projects?.length ? projects : mockProjects;

  return (
    <SmoothScroll>
      <div className="bg-noise" />
      <Navbar />
      
      <main className="pt-28 md:pt-40 pb-20 md:pb-32 min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 md:mb-32"
          >
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] tracking-tighter leading-none break-words">
              PORTFOLIO<span className="text-accent">.</span>
            </h1>
            <div className="w-full h-px bg-border mt-8 md:mt-12" />
          </motion.div>

          {isLoading ? (
            <div className="h-[40vh] flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-muted border-t-accent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-16 md:gap-y-24 lg:gap-y-32">
              {displayProjects.map((project: Project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: (idx % 2) * 0.2 }}
                  className={`group relative flex flex-col gap-4 md:gap-6 ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
                >
                  <Link href={`/projects/${project.slug}`} className="block overflow-hidden relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-sm">
                    <motion.div 
                      className="w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <img 
                        src={project.heroImage} 
                        alt={project.title} 
                        className="w-full h-full object-cover filter grayscale-0 md:grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {project.status && (
                      <div className="absolute top-4 right-4 bg-accent text-white text-[10px] font-bold px-3 py-1 tracking-widest uppercase rounded-sm z-10">
                        {project.status}
                      </div>
                    )}
                  </Link>
                  
                  <div className="flex flex-col">
                    <div className="flex flex-wrap justify-between items-center mb-2 text-muted-foreground text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase gap-2">
                      <span className="truncate max-w-[70%]">{project.location}</span>
                      <span>{project.completionDate}</span>
                    </div>
                    <Link href={`/projects/${project.slug}`}>
                      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl group-hover:text-accent transition-colors link-hover inline-block">
                        {project.title}
                      </h2>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </main>
      
      <Footer />
    </SmoothScroll>
  );
}