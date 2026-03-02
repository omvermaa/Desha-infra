// import { Navbar } from "../components/layout/Navbar";
// import { Footer } from "../components/layout/Footer";
// import { SmoothScroll } from "../components/layout/SmoothScroll";
// import { useProjects } from "../hooks/use-project";
// import { motion } from "framer-motion";
// import { Link } from "wouter";
// import sukoon from "@/assets/sukoon.webp"

// export default function Projects() {
//   const { data: projects, isLoading } = useProjects();

//   // Mock data if backend is empty
//   const mockProjects = [
//     {
//       id: 1, title: "Sukoon Villas", slug: "sukoon-villas",
//       location: "Sadulapur/Vaidpura, Greater Noida West", completionDate: "2026",
//       // modern skyscraper
//       heroImage: sukoon
//     },
//     {
//       id: 2, title: "Desha Residences", slug: "Desha-residences",
//       location: "Miami, USA", completionDate: "2025",
//       // luxury building
//       heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
//     },
//     {
//       id: 3, title: "Lumina Plaza", slug: "lumina-plaza",
//       location: "London, UK", completionDate: "2024",
//       // sleek glass facade
//       heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
//     },
//     {
//       id: 4, title: "Vertex Heights", slug: "vertex-heights",
//       location: "New York, USA", completionDate: "2027",
//       // tall architecture
//       heroImage: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2010&auto=format&fit=crop"
//     }
//   ];

//   const displayProjects = projects?.length ? projects : mockProjects;

//   return (
//     <SmoothScroll>
//       <div className="bg-noise" />
//       <Navbar />
      
//       <main className="pt-40 pb-32 min-h-screen bg-background">
//         <div className="container mx-auto px-6 md:px-12">
          
//           <motion.div 
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//             className="mb-24 md:mb-32"
//           >
//             <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] tracking-tighter leading-none">
//               PORTFOLIO<span className="text-accent">.</span>
//             </h1>
//             <div className="w-full h-px bg-border mt-12" />
//           </motion.div>

//           {isLoading ? (
//             <div className="h-[40vh] flex items-center justify-center">
//               <div className="w-16 h-16 border-2 border-muted border-t-accent rounded-full animate-spin" />
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 lg:gap-y-32">
//               {displayProjects.map((project, idx) => (
//                 <motion.div
//                   key={project.id}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-100px" }}
//                   transition={{ duration: 0.8, delay: (idx % 2) * 0.2 }}
//                   className={`group relative flex flex-col gap-6 ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
//                 >
//                   <Link href={`/projects/${project.slug}`} className="block overflow-hidden relative aspect-[3/4] w-full">
//                     <motion.div 
//                       className="w-full h-full"
//                       whileHover={{ scale: 1.05 }}
//                       transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//                     >
//                       <img 
//                         src={project.heroImage} 
//                         alt={project.title} 
//                         className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
//                       />
//                     </motion.div>
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                   </Link>
                  
//                   <div className="flex flex-col">
//                     <div className="flex justify-between items-center mb-2 text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase">
//                       <span>{project.location}</span>
//                       <span>{project.completionDate}</span>
//                     </div>
//                     <Link href={`/projects/${project.slug}`}>
//                       <h2 className="font-display text-3xl md:text-4xl group-hover:text-accent transition-colors link-hover inline-block">
//                         {project.title}
//                       </h2>
//                     </Link>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}

//         </div>
//       </main>
      
//       <Footer />
//     </SmoothScroll>
//   );
// }


import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { SmoothScroll } from "../components/layout/SmoothScroll";
import { useProjects } from "../hooks/use-project";
import { motion } from "framer-motion";
import { Link } from "wouter";
import sukoon from "@/assets/sukoon.webp"

export default function Projects() {
  const { data: projects, isLoading } = useProjects();

  // Mock data if backend is empty
  const mockProjects = [
    {
      id: 1, title: "Sukoon Villas", slug: "sukoon-villas",
      location: "Sadulapur/Vaidpura, Greater Noida West", completionDate: "2026",
      // modern skyscraper
      heroImage: sukoon
    },
    {
      id: 2, title: "Desha Residences", slug: "Desha-residences",
      location: "Miami, USA", completionDate: "2025",
      // luxury building
      heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
    },
    {
      id: 3, title: "Shree Ram River Cottege", slug: "shree-ram-river-cottege",
      location: "Sakar Village, Almora-Kausani", completionDate: "2025-2026",
      // Plot-based project offering serene Himalayan views, near Neem Karoli Baba Ashram, Jageshwar Temple, and Katarmal Sun Temple
      heroImage: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4, title: "Vertex Heights", slug: "vertex-heights",
      location: "New York, USA", completionDate: "2027",
      // tall architecture
      heroImage: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2010&auto=format&fit=crop"
    }
  ];

  const displayProjects = projects?.length ? projects : mockProjects;

  return (
    <SmoothScroll>
      <div className="bg-noise" />
      <Navbar />
      
      <main className="pt-40 pb-32 min-h-screen bg-background">
        <div className="container mx-auto px-6 md:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-24 md:mb-32"
          >
            <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] tracking-tighter leading-none">
              PORTFOLIO<span className="text-accent">.</span>
            </h1>
            <div className="w-full h-px bg-border mt-12" />
          </motion.div>

          {isLoading ? (
            <div className="h-[40vh] flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-muted border-t-accent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 lg:gap-y-32">
              {displayProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: (idx % 2) * 0.2 }}
                  className={`group relative flex flex-col gap-6 ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
                >
                  <Link href={`/projects/${project.slug}`} className="block overflow-hidden relative aspect-[3/4] w-full">
                    <motion.div 
                      className="w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <img 
                        src={project.heroImage} 
                        alt={project.title} 
                        className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Link>
                  
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-2 text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase">
                      <span>{project.location}</span>
                      <span>{project.completionDate}</span>
                    </div>
                    <Link href={`/projects/${project.slug}`}>
                      <h2 className="font-display text-3xl md:text-4xl group-hover:text-accent transition-colors link-hover inline-block">
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