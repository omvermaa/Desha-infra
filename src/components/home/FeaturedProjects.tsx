import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useProjects } from "../../hooks/use-project";
import { ArrowRight } from "lucide-react";
import sukoon from "@/assets/sukoon.webp";
import desha1 from "@/assets/desha5.webp";
import nilgiri from "@/assets/nilgiri.webp";
import khaatu from "@/assets/khaatu.webp";


interface Project {
  id: number;
  title: string;
  slug: string;
  location: string;
  completionDate: string;
  heroImage: string;
  description?: string;
  status?: string;
}

function ProjectCard({ project, index }: { project: Project, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col gap-4 md:gap-6"
    >
      <Link href={`/projects/${project.slug}`} className="block overflow-hidden relative aspect-[4/5] sm:aspect-video md:aspect-[4/5] w-full rounded-sm">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
        {project.status && (
          <div className="absolute top-4 right-4 bg-accent text-white text-[10px] font-bold px-3 py-1 tracking-widest uppercase rounded-sm z-20">
            {project.status}
          </div>
        )}
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          src={project.heroImage} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        
        {/* Reveal Details - Visible on Mobile, Hover on Desktop */}
        <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 z-20 translate-y-0 md:translate-y-8 opacity-100 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <p className="text-white text-xs md:text-sm tracking-widest uppercase mb-2 line-clamp-1">{project.location}</p>
          <div className="w-8 md:w-12 h-px bg-accent mb-3 md:mb-4" />
          <p className="text-white/90 line-clamp-2 text-xs md:text-sm">{project.description}</p>
        </div>
      </Link>
      
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-medium mb-1 md:mb-2 group-hover:text-accent transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-xs md:text-sm uppercase tracking-widest">{project.completionDate}</p>
        </div>
        <Link href={`/projects/${project.slug}`} className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-300">
          <ArrowRight size={18} strokeWidth={1.5} className="group-hover:-rotate-45 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
}

export function FeaturedProjects() {
  const { data: projects, isLoading } = useProjects();

  if (isLoading) {
    return <div className="h-[50vh] flex items-center justify-center text-muted-foreground">Loading portfolio...</div>;
  }

  // Fallback data if none exists
  const displayProjects = projects && projects.length > 0 ? projects : [
    {
      id: 1,
      title: "Sukoon Villas",
      slug: "sukoon-villas",
      location: "Sadulapur/Vaidpura, Greater Noida West",
      completionDate: "2026",
      heroImage: sukoon,
      description: "Sukoon is an exclusive luxury villa enclave located in peaceful surroundings"
    },
    {
      id: 2,
      title: "Desha Residences",
      slug: "Desha-residences",
      location: "Premium Suburban Enclave",
      completionDate: "2025",
      heroImage: desha1,
      description: "A meticulously planned plotting township offering the perfect foundation to build your bespoke dream home.",
      status: "Delivered"
    },
    {
      id: 3,
      title: "Shree Ram River Cottege",
      slug: "shree-ram-river-cottege",
      location: "Sakar Village, Almora-Kausani",
      completionDate: "2025-2026",
      heroImage: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=2070&auto=format&fit=crop",
      description: "A spiritual sanctuary nestled in the Himalayas, offering panoramic snow-capped views and deep tranquility."
    },
    {
      id: 4,
      title: "Nilgiri Residency",
      slug: "nilgiri-residency",
      location: "Bhanuta Sector-20, Noida Extension",
      completionDate: "2027",
      heroImage: nilgiri,
      description: "Premium residential plots offering a perfect blend of connectivity, nature, and modern infrastructure."
    },
    {
      id: 5,
      title: "Khaatu Shyam Enclave",
      slug: "khaatu-shyam-enclave",
      location: "Near Khatu Shyam Mandir, Greater Noida West",
      completionDate: "2025",
      heroImage: khaatu,
      description: "A divine living experience offering residential plots in the serenity of Khatu Shyam Mandir."
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-background">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row text-left md:items-end justify-between mb-16 md:mb-24 gap-6 md:gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-accent text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 md:mb-6">Selected Works</h2>
            <h3 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Masterpieces in<br className="hidden sm:block" />
              <span className="italic text-muted-foreground sm:ml-2 md:ml-0">concrete & light</span>
            </h3>
          </div>
          <Link href="/projects" className="group inline-flex items-center gap-3 text-xs md:text-sm tracking-widest uppercase font-semibold link-hover pb-1 w-fit">
            View All Projects 
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-16 md:gap-y-24">
          {displayProjects.map((project, idx) => (
            <div key={project.id} className={idx % 2 !== 0 ? "md:mt-32" : ""}>
              <ProjectCard project={project} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}