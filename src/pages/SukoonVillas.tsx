// import { Link } from "wouter";
// import { Navbar } from "../components/layout/Navbar";
// import { Footer } from "../components/layout/Footer";
// import { SmoothScroll } from "../components/layout/SmoothScroll";
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import { ArrowLeft, Lock, X, MapPin, Home, TreePine, Shield, Droplets, Sun } from "lucide-react";
// import { toast } from "sonner";
// import sukoon from "@/assets/sukoon.webp";
// import sukoon2 from "@/assets/sukoon2.webp";
// import sukoon3 from "@/assets/sukoon3.webp";
// import sukoonVid from "@/assets/sukoonVid.mp4";

// export default function SukoonVillas() {
//   const [inquireOpen, setInquireOpen] = useState(false);
//   const heroRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
//   const opacityHeroText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

//   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     formData.append("access_key", "285bbd67-f284-4fd4-85b8-6b94bfc9c1d6");

//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });
//       const data = await res.json();

//       if (data.success) {
//         setInquireOpen(false);
//         toast.success("We will contact you soon");
//         event.currentTarget.reset();
//       } else {
//         toast.error("Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       toast.error("Something went wrong. Please try again.");
//     }
//   };

//   useEffect(() => {
//     if (inquireOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [inquireOpen]);

//   const features = [
//     { icon: <Home size={32} strokeWidth={1.5} />, title: "Vastu Compliant", desc: "100% Vastu compliant layouts designed to ensure positive energy flows throughout your home." },
//     { icon: <TreePine size={32} strokeWidth={1.5} />, title: "Lush Greenery", desc: "Abundant landscaped gardens and open green spaces seamlessly integrated into the enclave." },
//     { icon: <Shield size={32} strokeWidth={1.5} />, title: "24/7 Security", desc: "Multi-tier security with advanced CCTV surveillance and controlled access points." },
//     { icon: <MapPin size={32} strokeWidth={1.5} />, title: "Prime Location", desc: "Located in Sadulapur/Vaidpura, enjoying exceptional connectivity to urban conveniences." },
//     { icon: <Droplets size={32} strokeWidth={1.5} />, title: "Rainwater Harvesting", desc: "Eco-friendly sustainable water management and harvesting systems." },
//     { icon: <Sun size={32} strokeWidth={1.5} />, title: "Natural Light", desc: "Exceptional architectural design maximizing natural sunlight and cross ventilation." },
//   ];

//   return (
//     <SmoothScroll>
//       <div className="bg-noise" />
//       <Navbar />

//       <main className="bg-background">
//         {/* Hero Section */}
//         <section ref={heroRef} className="relative h-[90vh] md:h-screen w-full overflow-hidden flex items-end">
//           <motion.div className="absolute inset-0 z-0" style={{ y: yImage }}>
//             <video
//               src={sukoonVid}
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/50" />
//             <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
//           </motion.div>

//           <motion.div
//             style={{ opacity: opacityHeroText }}
//             className="container mx-auto px-6 md:px-12 relative z-10 pb-20 md:pb-32"
//           >
//             <Link
//               href="/projects"
//               className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors mb-8 text-sm uppercase tracking-widest font-bold link-hover pb-1"
//             >
//               <ArrowLeft size={16} /> Back to Portfolio
//             </Link>
            
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.2 }}
//               className="font-display text-5xl md:text-8xl lg:text-[10rem] text-white leading-none tracking-tighter mb-6"
//             >
//               SUKOON<br />VILLAS
//             </motion.h1>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.6 }}
//               className="flex flex-wrap gap-8 md:gap-16 text-white/90 items-center mt-12 md:mt-0"
//             >
//               <div>
//                 <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Location</p>
//                 <p className="font-display text-xl">Greater Noida West</p>
//               </div>
//               <div>
//                 <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Completion</p>
//                 <p className="font-display text-xl">2026</p>
//               </div>
//               <div>
//                 <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Type</p>
//                 <p className="font-display text-xl">Luxury Villas</p>
//               </div>
//               <button
//                 onClick={() => setInquireOpen(true)}
//                 className="md:ml-auto w-full md:w-auto px-8 py-4 bg-accent text-white uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-accent transition-colors duration-300"
//               >
//                 Enquire Now
//               </button>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* Vision Section */}
//         <section className="py-20 md:py-32 px-6 md:px-12">
//           <div className="container mx-auto max-w-6xl">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 1 }}
//               >
//                 <h2 className="font-display text-4xl md:text-6xl leading-tight mb-8 text-foreground">
//                   Where modern living <br />
//                   <span className="italic text-muted-foreground">meets true peace.</span>
//                 </h2>
//                 <div className="w-20 h-px bg-accent mb-8" />
//                 <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
//                   Sukoon is an exclusive luxury villa enclave located in the peaceful surroundings of Sadulapur, Greater Noida West. It is meticulously designed for families seeking a blend of architectural elegance, private spaces, and community living.
//                 </p>
//                 <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
//                   Thoughtfully designed villas offer elegant architecture, abundant natural light, and serene open spaces, while enjoying excellent connectivity to reputed schools, healthcare, shopping, and daily conveniences—creating a refined lifestyle that is calm, comfortable, and truly elevated.
//                 </p>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 1 }}
//                 className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-sm"
//               >
//                 <img src={sukoon} alt="Sukoon Villa Exterior" className="w-full h-full object-cover" />
//                 <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Features/Amenities */}
//         <section className="py-20 md:py-32 px-6 md:px-12 bg-muted/30">
//           <div className="container mx-auto">
//             <div className="text-center mb-16 md:mb-20">
//               <h2 className="text-accent text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4">Amenities</h2>
//               <h3 className="font-display text-4xl md:text-5xl text-foreground">Curated for Elegance</h3>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//               {features.map((feature, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-50px" }}
//                   transition={{ duration: 0.6, delay: i * 0.1 }}
//                   className="bg-background p-8 md:p-10 border border-border/50 hover:border-accent/50 transition-colors group"
//                 >
//                   <div className="text-muted-foreground mb-6 group-hover:text-accent transition-colors">
//                     {feature.icon}
//                   </div>
//                   <h4 className="font-display text-2xl text-foreground mb-4">{feature.title}</h4>
//                   <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{feature.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Expansive Gallery */}
//         <section className="py-20 md:py-32 px-6 md:px-12">
//           <div className="container mx-auto">
//             <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
//               <div>
//                 <h2 className="text-accent text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4">Gallery</h2>
//                 <h3 className="font-display text-4xl md:text-5xl text-foreground">Visual Journey</h3>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.8 }}
//                 className="md:col-span-2 aspect-video md:aspect-[21/9] overflow-hidden rounded-sm relative group"
//               >
//                 <img src={sukoon2} alt="Sukoon Villas Community" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
//               </motion.div>
              
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.8 }}
//                 className="aspect-square overflow-hidden rounded-sm relative group"
//               >
//                 <img src={sukoon} alt="Sukoon Villas Facade" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="aspect-square overflow-hidden rounded-sm relative group"
//               >
//                 <img src={sukoon3} alt="Sukoon Villas Interior Space" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Master & Floor Plans Locked */}
//         <section className="py-24 md:py-32 px-6 md:px-12 bg-foreground text-background">
//           <div className="container mx-auto text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.8 }}
//               className="max-w-3xl mx-auto"
//             >
//               <Lock className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-6 md:mb-8 text-accent opacity-80" />
//               <h2 className="font-display text-4xl md:text-6xl mb-4 md:mb-6">Exclusive Access</h2>
//               <p className="text-background/70 text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
//                 Detailed floor plans, master layout, and pricing structures are available upon request. Register your interest to receive our comprehensive project brochure.
//               </p>
//               <button
//                 onClick={() => setInquireOpen(true)}
//                 className="px-8 py-4 md:px-10 md:py-5 border border-accent text-accent hover:bg-accent hover:text-foreground transition-all duration-300 tracking-[0.2em] uppercase font-bold text-xs md:text-sm"
//               >
//                 Request Floor Plans
//               </button>
//             </motion.div>
//           </div>
//         </section>
//       </main>

//       <Footer />

//       {/* ... keeping standard ProjectDetail style Inquiry Modal below ... */}
//       {/* Inquiry Modal */}
//       <AnimatePresence>
//         {inquireOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setInquireOpen(false)}
//               className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60]"
//             />
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95, y: 20 }}
//               transition={{ duration: 0.3 }}
//               className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-background border border-border p-8 z-[70] shadow-2xl"
//             >
//               <div className="flex justify-between items-center mb-8">
//                 <h2 className="font-display text-2xl md:text-3xl text-foreground">Enquire about Sukoon</h2>
//                 <button
//                   onClick={() => setInquireOpen(false)}
//                   className="text-muted-foreground hover:text-foreground transition-colors"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>

//               <form className="space-y-6" onSubmit={onSubmit}>
//                 <input type="hidden" name="project" value="Sukoon Villas" />
//                 <div className="space-y-2">
//                   <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
//                   <input type="text" name="name" required className="w-full bg-secondary/30 border border-border p-3 focus:outline-none focus:border-accent transition-colors text-foreground" placeholder="Your Name" />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
//                     <input type="email" name="email" required className="w-full bg-secondary/30 border border-border p-3 focus:outline-none focus:border-accent transition-colors text-foreground" placeholder="john@example.com" />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
//                     <input type="tel" name="phone" className="w-full bg-secondary/30 border border-border p-3 focus:outline-none focus:border-accent transition-colors text-foreground" placeholder="+91 9999999999" />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
//                   <textarea rows={4} name="message" className="w-full bg-secondary/30 border border-border p-3 focus:outline-none focus:border-accent transition-colors text-foreground resize-none" placeholder="I am interested in Sukoon Villas..." />
//                 </div>

//                 <button type="submit" className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-sm font-bold hover:bg-accent hover:text-white transition-colors duration-300">
//                   Send Enquiry
//                 </button>
//               </form>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </SmoothScroll>
//   );
// }


// import {
//   Train,
//   ShoppingBag,
//   Stethoscope,
//   GraduationCap,
//   ArrowRight,
//   Building,
//   Bed,
//   Lock,
//   BedDouble,
//   Utensils,
//   DoorOpen,
//   Droplets,
//   MapPin,
//   Users,
//   Leaf,
//   Zap,
//   ShieldCheck
// } from "lucide-react";
// import VirtualTour from "../components/VirtualTour";
// import FadeIn from "../components/FadeIn";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../components/ui/Carousel";
// import Autoplay from "embla-carousel-autoplay";

// import image1 from "@/assets/jacuzzi.webp"
// import image2 from "@/assets/gym.webp";
// import image3 from "@/assets/swimming-pool.webp";
// import image4 from "@/assets/club.webp";
// import image5 from "@/assets/running.webp";

// const amenities = [
//   { title: "Modern Gym", image: image2, description: "Fully equipped gym amenities" },
//   { title: "Badminton Court", image: image3, description: "Dedicated spaces for active sports" },
//   { title: "Jogging Track", image: image5, description: "Dedicated tracks for your morning jogs" },
//   { title: "Luxurious Club House", image: image4, description: "A perfect space for recreation" },
//   { title: "Jacuzzi", image: image1, description: "Premium jacuzzi in every unit" },
// ];

// export function AmenitiesCarousel() {
//   return (
//     <Carousel
//       opts={{
//         align: "start",
//         loop: true,
//       }}
//       plugins={[
//         Autoplay({
//           delay: 2000,
//         }),
//       ]}
//       className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//     >
//       <CarouselContent className="-ml-2 md:-ml-4">
//         {amenities.map((item, index) => (
//           <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
//             <div className="relative aspect-[4/3] overflow-hidden rounded-xl group cursor-pointer">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />
//               <div className="absolute bottom-0 left-0 p-6">
//                 <h3 className="text-white text-xl font-bold">{item.title}</h3>
//                 <p className="text-gray-200 text-sm mt-2">{item.description}</p>
//               </div>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <div className="hidden md:block">
//         <CarouselPrevious className="left-8 bg-white/10 hover:bg-white/20 text-white border-white/20" />
//         <CarouselNext className="right-8 bg-white/10 hover:bg-white/20 text-white border-white/20" />
//       </div>
//     </Carousel>
//   );
// }

// const Property = ({ onOpenEnquiry }: { onOpenEnquiry: () => void }) => {
//   return (
//     <div className="w-full bg-slate-50">
//       {/* ==========================================
//           1. ABOUT SECTION
//       ========================================== */}
//       <section
//         id="about"
//         className="py-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//       >
//         <div className="sm:flex sm:flex-col lg:grid-cols-2 gap-16 items-center">
//           <FadeIn direction="right" className="w-full">
//             <div className="w-full">
//               <div className="flex items-center gap-2 mb-4">
//                 <span className="h-px w-8 bg-amber-500"></span>
//                 <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">
//                   The Philosophy
//                 </span>
//               </div>
//               <h2 className="text-4xl md:text-5xl sm:text-center font-extrabold text-slate-900 mb-2 leading-tight">
//                 Where Modern Living Meets <br />{" "}
//                 <span className="text-amber-500">True Sukoon</span>.
//               </h2>
//               <p className="text-center text-lg text-slate-600 font-medium mb-6">4 & 6 BHK MODERN VILLAS</p>

//               <iframe
//                 className="sm:h-[70vh] sm:w-auto h-50 mx-auto mb-10 aspect-video rounded-xl shadow-lg"
//                 src="https://www.youtube.com/embed/0pyxvluCi4s?si=A6BoHR4tj7D5o-oE&autoplay=1&mute=1&playsinline=1"
//                 title="YouTube video player"
//                 allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 referrerPolicy="strict-origin-when-cross-origin"
//                 allowFullScreen
//                 loading="lazy"
//               ></iframe>

//               <div className="space-y-8 mt-8 px-2 mb-5 sm:px-50">
//                 <div className="flex gap-5 items-start group">
//                   <div className="shrink-0 mt-1 w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-active:bg-amber-500 group-active:text-white transition-colors duration-300 shadow-sm">
//                     <MapPin size={20} />
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-bold text-slate-900 mb-2">
//                       Prime Location
//                     </h4>
//                     <p className="text-gray-600 leading-relaxed">
//                       Sukoon is an exclusive luxury villa gated enclave located
//                       in the peaceful surroundings of Sadulapur/Vaidpura Greater
//                       Noida West. We believe a home is shaped around the lives
//                       lived within it.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-5 items-start group">
//                   <div className="shrink-0 mt-1 w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-active:bg-amber-500 group-active:text-white transition-colors duration-300 shadow-sm">
//                     <Users size={20} />
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-bold text-slate-900 mb-2">
//                       Designed for Everyone
//                     </h4>
//                     <p className="text-gray-600 leading-relaxed">
//                       Every detail is designed to bring comfort to elders, joy
//                       to children, and ease to everyday living—created for{" "}
//                       <span className="font-semibold text-slate-900">
//                         every generation
//                       </span>
//                       .
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-5 items-start group">
//                   <div className="shrink-0 mt-1 w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-active:bg-amber-500 group-active:text-white transition-colors duration-300 shadow-sm">
//                     <Leaf size={20} />
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-bold text-slate-900 mb-2">
//                       Nature & Harmony
//                     </h4>
//                     <p className="text-gray-600 leading-relaxed">
//                       Experience a lifestyle deeply connected to nature with
//                       lush green parks, Vastu-compliant architecture, and open
//                       spaces that breathe life into your daily routine.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </FadeIn>

//           <FadeIn
//             direction="left"
//             delay={200}
//             className="w-full flex justify-center"
//           >
//             <div className="relative w-full sm:w-auto">
//               <div className="aspect-square sm:aspect-video sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
//                 <AmenitiesCarousel />
//               </div>
//               <div className="absolute -bottom-10 -left-10 bg-slate-900 text-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
//                 <p className="text-2xl font-bold mb-1">100%</p>
//                 <p className="text-gray-400 text-sm">
//                   Vastu Compliant Layouts{" "}
//                 </p>
//               </div>
//             </div>
//           </FadeIn>
//         </div>
//       </section>

//       {/* ==========================================
//           2. AMENITIES SECTION
//       ========================================== */}
//       <section
//         id="amenities"
//         className="py-24 bg-slate-900 text-white relative overflow-hidden"
//       >
//         <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/50 skew-x-12 pointer-events-none"></div>

//         <div className="w-full mx-auto px-1 relative z-10">
//           <FadeIn direction="up">
//             <div className="text-center mb-16">
//               <h2 className="text-amber-400 font-bold tracking-widest uppercase mb-2">
//                 Exclusive Features
//               </h2>
//               <h3 className="text-[28px] mx-2 md:text-3xl font-extrabold">
//                 All Comforts Within Reach
//               </h3>
//               <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
//                 From fitness to leisure, enjoy a township designed for a refined
//                 lifestyle.
//               </p>
//             </div>
//           </FadeIn>

//           <FadeIn delay={200}>
//             <AmenitiesCarousel />
//           </FadeIn>

//           <FadeIn delay={400}>
//             <div id="3d-tour" className="mt-24 mx-auto">
//               <VirtualTour />
//             </div>
//           </FadeIn>
//         </div>
//       </section>

//       {/* ==========================================
//           3. SPECIFICATIONS SECTION
//       ========================================== */}
//       <section id="specifications" className="py-16 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <FadeIn>
//             <div className="text-center mb-10">
//               <div className="flex items-center justify-center gap-2 mb-4">
//                 <span className="h-px w-8 bg-amber-500"></span>
//                 <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">
//                   Finest Details
//                 </span>
//                 <span className="h-px w-8 bg-amber-500"></span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
//                 Specifications & Features
//               </h2>
//               <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
//                 Crafted with precision and premium materials to ensure a
//                 lifestyle of elegance and durability.
//               </p>
//             </div>
//           </FadeIn>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* Left Column: Detailed Specs Grid */}
//             <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* Card 1: Living Room */}
//               <FadeIn delay={100} className="h-full">
//                 <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md active:shadow-md transition-all group h-full">
//                   <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-500 group-hover:text-white group-active:bg-amber-500 group-active:text-white transition-colors">
//                     <Building size={20} />
//                   </div>
//                   <h4 className="text-lg font-bold text-slate-900 mb-3">
//                     Living / Dining Room
//                   </h4>
//                   <ul className="space-y-2">
//                     <li className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-slate-50 pb-2 gap-1 sm:gap-0">
//                       <span className="text-slate-500">Flooring</span>
//                       <span className="text-slate-900 font-medium text-left sm:text-right">
//                         Vitrified Tiles (600x600)
//                       </span>
//                     </li>
//                     <li className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-slate-50 pb-2 gap-1 sm:gap-0">
//                       <span className="text-slate-500">Walls</span>
//                       <span className="text-slate-900 font-medium text-left sm:text-right">
//                         O.B.D Paints
//                       </span>
//                     </li>
//                     <li className="flex flex-col sm:flex-row sm:justify-between text-sm gap-1 sm:gap-0">
//                       <span className="text-slate-500">Ceiling</span>
//                       <span className="text-slate-900 font-medium text-left sm:text-right">
//                         Designer POP
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </FadeIn>

//               {/* Card 2: Bedroom */}
//               <FadeIn delay={200} className="h-full">
//                 <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md active:shadow-md transition-all group h-full">
//                   <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-500 group-hover:text-white group-active:bg-amber-500 group-active:text-white transition-colors">
//                     <Bed size={20} />
//                   </div>
//                   <h4 className="text-lg font-bold text-slate-900 mb-3">
//                     Bedroom
//                   </h4>
//                   <ul className="space-y-2">
//                     <li className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-slate-50 pb-2 gap-1 sm:gap-0">
//                       <span className="text-slate-500">Flooring</span>
//                       <span className="text-slate-900 font-medium text-left sm:text-right">
//                         Vitrified Tiles (600x600)
//                       </span>
//                     </li>
//                     <li className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-slate-50 pb-2 gap-1 sm:gap-0">
//                       <span className="text-slate-500">Walls</span>
//                       <span className="text-slate-900 font-medium text-left sm:text-right">
//                         O.B.D Paints
//                       </span>
//                     </li>
//                     <li className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-slate-50 pb-2 gap-1 sm:gap-0">
//                       <span className="text-slate-500">Ceiling</span>
//                       <span className="text-slate-900 font-medium text-left sm:text-right">
//                         Designer POP
//                       </span>
//                     </li>
//                     <li className="flex flex-col sm:flex-row sm:justify-between text-sm gap-1 sm:gap-0">
//                       <span className="text-slate-500">Balcony</span>
//                       <span className="text-slate-900 font-medium text-left sm:text-right">
//                         Anti Skid Ceramic Tiles
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </FadeIn>

//               {/* Card 3: Master Bedroom */}
//               <FadeIn delay={300} className="h-full">
//                 <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md active:shadow-md transition-all group h-full">
//                   <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-500 group-hover:text-white group-active:bg-amber-500 group-active:text-white transition-colors">
//                     <BedDouble size={20} />
//                   </div>
//                   <h4 className="text-lg font-bold text-slate-900 mb-3">
//                     Master Bedroom
//                   </h4>
//                   <ul className="space-y-2">
//                     <li className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-slate-50 pb-2 gap-1 sm:gap-0">
//                       <span className="text-slate-500">Flooring</span>
//                       <span className="text-slate-900 font-medium text-left sm:text-right">
//                         Vitrified Tiles (600x600)
//                       </span>
//                     </li>
//                     <li className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-slate-50 pb-2 gap-1 sm:gap-0">
//                       <span className="text-slate-500">Walls</span>
//                       <span className="text-slate-900 font-medium text-left sm:text-right">
//                         O.B.D Paints
//                       </span>
//                     </li>
//                     <li className="flex flex-col sm:flex-row sm:justify-between text-sm gap-1 sm:gap-0">
//                       <span className="text-slate-500">Ceiling</span>
//                       <span className="text-slate-900 font-medium text-left sm:text-right">
//                         Designer POP
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </FadeIn>

//               {/* Card 4: Kitchen */}
//               <FadeIn delay={400} className="h-full">
//                 <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md active:shadow-md transition-all group h-full">
//                   <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-500 group-hover:text-white group-active:bg-amber-500 group-active:text-white transition-colors">
//                     <Utensils size={20} />
//                   </div>
//                   <h4 className="text-lg font-bold text-slate-900 mb-3">
//                     Kitchen
//                   </h4>
//                   <ul className="space-y-2">
//                     <li className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-slate-50 pb-2 gap-1 sm:gap-0">
//                       <span className="text-slate-500">Counter</span>
//                       <span className="text-slate-900 font-medium text-left sm:text-right">
//                         Marble with SS single bowl sink
//                       </span>
//                     </li>
//                     <li className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-slate-50 pb-2 gap-1 sm:gap-0">
//                       <span className="text-slate-500">Type</span>
//                       <span className="text-slate-900 font-medium text-left sm:text-right">
//                         Modular Type Kitchen
//                       </span>
//                     </li>
//                     <li className="flex flex-col sm:flex-row sm:justify-between text-sm gap-1 sm:gap-0">
//                       <span className="text-slate-500">Walls</span>
//                       <span className="text-slate-900 font-medium text-left sm:text-right">
//                         O.B.D Paints, Tiles above counter
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </FadeIn>

//               {/* Card 5: Doors */}
//               <FadeIn delay={500} className="h-full">
//                 <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md active:shadow-md transition-all group h-full">
//                   <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-500 group-hover:text-white group-active:bg-amber-500 group-active:text-white transition-colors">
//                     <DoorOpen size={20} />
//                   </div>
//                   <h4 className="text-lg font-bold text-slate-900 mb-3">
//                     Doors & Windows
//                   </h4>
//                   <p className="text-sm text-gray-600 leading-relaxed">
//                     Premium Hardwood Laminated Panels with Sunmica finish for
//                     both external and internal doors.
//                   </p>
//                 </div>
//               </FadeIn>

//               {/* Card 6: Electrical & Structure */}
//               <FadeIn delay={600} className="h-full">
//                 <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md active:shadow-md transition-all group h-full">
//                   <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-500 group-hover:text-white group-active:bg-amber-500 group-active:text-white transition-colors">
//                     <ShieldCheck size={20} />
//                   </div>
//                   <h4 className="text-lg font-bold text-slate-900 mb-3">
//                     Structure & Electrical
//                   </h4>
//                   <ul className="space-y-2">
//                     <li className="flex items-center gap-2 text-sm text-gray-600">
//                       <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
//                       Earthquake Resistant Bricks structure
//                     </li>
//                     <li className="flex items-center gap-2 text-sm text-gray-600">
//                       <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
//                       Modular Switches & Electrical Wirings
//                     </li>
//                     <li className="flex items-center gap-2 text-sm text-gray-600">
//                       <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
//                       Branded China Ware Fixtures & CP Fittings
//                     </li>
//                   </ul>
//                 </div>
//               </FadeIn>
//             </div>

//             {/* Right Column: Highlights */}
//             <div className="lg:col-span-1">
//               <FadeIn direction="left" delay={300} className="sticky top-24">
//                 <div className="bg-slate-900 text-white p-6 rounded-2xl sticky top-24 shadow-xl">
//                   <div className="mb-6">
//                     <h3 className="text-xl font-bold mb-1">
//                       Project Highlights
//                     </h3>
//                     <p className="text-slate-400 text-sm">
//                       Experience a lifestyle of unlimited freedom.
//                     </p>
//                   </div>

//                   <ul className="space-y-0 divide-y divide-slate-800">
//                     {[
//                       "Vaastu Compliant Layouts",
//                       "Complete Sewerage System",
//                       "LED Street Lighting",
//                       "Wide RCC Roads",
//                       "Earthquake Resistant Structure",
//                       "Private Jacuzzi",
//                       "Lush Green Parks",
//                       "Modern Gymnasium",
//                       "Jogging Track",
//                       "Badminton Court",
//                     ].map((item, index) => (
//                       <li
//                         key={index}
//                         className="py-3 flex items-center gap-3 text-sm font-medium text-slate-300 hover:text-white hover:pl-2 active:text-white active:pl-2 transition-all"
//                       >
//                         <span className="text-amber-500">✓</span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>

//                   <div className="mt-6 pt-4 border-t border-slate-800">
//                     <div className="flex items-center gap-4">
//                       <div className="text-4xl font-bold text-amber-500">
//                         100%
//                       </div>
//                       <div className="text-sm text-slate-400 leading-tight">
//                         Quality
//                         <br />
//                         Assurance
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </FadeIn>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==========================================
//           4. FLOOR PLAN & MASTER PLAN (GATED CONTENT)
//       ========================================== */}
//       <section
//         id="floor-plans"
//         className="py-24 bg-slate-50 border-b border-slate-200"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <FadeIn direction="up">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
//                 Sukoon Villas Floor Plan & Master Plan
//               </h2>
//               <p className="text-lg md:text-xl text-gray-600 font-light">
//                 Spacious Unit Types: 1887 sqft & 2727 sqft
//               </p>
//             </div>
//           </FadeIn>

//           <FadeIn delay={200}>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {/* Card 1: Floor Plan */}
//               <div
//                 onClick={onOpenEnquiry}
//                 className="group relative cursor-pointer overflow-hidden rounded-sm border border-slate-200 bg-white shadow-md hover:shadow-2xl active:shadow-2xl transition-all duration-300 flex flex-col"
//               >
//                 <div className="relative aspect-[4/3] overflow-hidden bg-white p-2">
//                   <img
//                     src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1470&auto=format&fit=crop"
//                     alt="Floor Plan"
//                     className="h-full w-full object-cover blur-[6px] opacity-60 transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
//                   />
//                   <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/10 group-hover:bg-slate-900/40 group-active:bg-slate-900/40 transition-colors duration-300">
//                     <div className="bg-amber-400 text-slate-900 p-4 rounded-full shadow-lg mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100 transition-all duration-300">
//                       <Lock size={24} />
//                     </div>
//                     <span className="text-slate-900 bg-white/90 backdrop-blur px-6 py-2 font-bold uppercase tracking-wider text-sm shadow-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100 transition-all duration-300 delay-75">
//                       Click to Unlock
//                     </span>
//                   </div>
//                 </div>
//                 <div className="bg-slate-900 py-4 text-center mt-auto">
//                   <h4 className="text-lg font-medium text-white tracking-wide">
//                     Floor Plan Details
//                   </h4>
//                 </div>
//               </div>

//               {/* Card 2: Master Plan */}
//               <div
//                 onClick={onOpenEnquiry}
//                 className="group relative cursor-pointer overflow-hidden rounded-sm border border-slate-200 bg-white shadow-md hover:shadow-2xl active:shadow-2xl transition-all duration-300 flex flex-col"
//               >
//                 <div className="relative aspect-[4/3] overflow-hidden bg-white p-2">
//                   <img
//                     src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?q=80&w=1470&auto=format&fit=crop"
//                     alt="Master Plan"
//                     className="h-full w-full object-cover blur-[6px] opacity-60 transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
//                   />
//                   <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/10 group-hover:bg-slate-900/40 group-active:bg-slate-900/40 transition-colors duration-300">
//                     <div className="bg-amber-400 text-slate-900 p-4 rounded-full shadow-lg mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100 transition-all duration-300">
//                       <Lock size={24} />
//                     </div>
//                     <span className="text-slate-900 bg-white/90 backdrop-blur px-6 py-2 font-bold uppercase tracking-wider text-sm shadow-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100 transition-all duration-300 delay-75">
//                       Click to Unlock
//                     </span>
//                   </div>
//                 </div>
//                 <div className="bg-slate-900 py-4 text-center mt-auto">
//                   <h4 className="text-lg font-medium text-white tracking-wide">
//                     Master Plan Details
//                   </h4>
//                 </div>
//               </div>

//               {/* Card 3: Payment Plan */}
//               <div
//                 onClick={onOpenEnquiry}
//                 className="group relative cursor-pointer overflow-hidden rounded-sm border border-slate-200 bg-white shadow-md hover:shadow-2xl active:shadow-2xl transition-all duration-300 flex flex-col"
//               >
//                 <div className="relative aspect-[4/3] overflow-hidden bg-white p-2">
//                   <img
//                     src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1470&auto=format&fit=crop"
//                     alt="Payment Plan"
//                     className="h-full w-full object-cover blur-[6px] opacity-60 transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
//                   />
//                   <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/10 group-hover:bg-slate-900/40 group-active:bg-slate-900/40 transition-colors duration-300">
//                     <div className="bg-amber-400 text-slate-900 p-4 rounded-full shadow-lg mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100 transition-all duration-300">
//                       <Lock size={24} />
//                     </div>
//                     <span className="text-slate-900 bg-white/90 backdrop-blur px-6 py-2 font-bold uppercase tracking-wider text-sm shadow-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100 transition-all duration-300 delay-75">
//                       Click to Unlock
//                     </span>
//                   </div>
//                 </div>
//                 <div className="bg-slate-900 py-4 text-center mt-auto">
//                   <h4 className="text-lg font-medium text-white tracking-wide">
//                     Payment Plan Details
//                   </h4>
//                 </div>
//               </div>
//             </div>
//           </FadeIn>
//         </div>
//       </section>

//       {/* ==========================================
//           5. LOCATION SECTION
//       ========================================== */}
//       <section
//         id="location"
//         className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50"
//       >
//         <div className="flex flex-col items-center lg:flex-row gap-12">
//           <FadeIn direction="right" className="w-full lg:w-1/3">
//             <div className="w-full">
//               <div className="flex items-center gap-2 mb-4">
//                 <span className="h-px w-8 bg-amber-500"></span>
//                 <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">
//                   Connectivity
//                 </span>
//               </div>
//               <h3 className="text-3xl font-extrabold text-slate-900 mb-6">
//                 Connected to Everything.
//               </h3>
//               <p className="text-gray-600 mb-8">
//                 Strategically located in Sadulapur/Vaidpura, Greater Noida West
//                 offering seamless access to major hubs and IT parks.
//               </p>

//               <div className="space-y-8">
//                 {/* Transport */}
//                 <div className="flex gap-5 items-start group">
//                   <div className="shrink-0 w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 group-hover:border-amber-400 group-hover:text-amber-500 group-active:border-amber-400 group-active:text-amber-500 transition-all duration-300 shadow-sm">
//                     <Train size={22} strokeWidth={1.5} />
//                   </div>
//                   <div className="flex-1 pt-1">
//                     <div className="flex items-center justify-between mb-2">
//                       <h5 className="text-lg font-bold text-slate-900">
//                         Transport
//                       </h5>
//                     </div>
//                     <p className="text-slate-600 leading-relaxed text-sm">
//                       <span className="font-semibold">Walking Distance:</span> Maripat Railway Station<br/>
//                       <span className="font-semibold">20 Mins:</span> Sector-52 Metro, Gaziabad Railway<br/>
//                       <span className="font-semibold">Future Access:</span> Proposed 6 lane Highway
//                     </p>
//                   </div>
//                 </div>

//                 {/* Healthcare */}
//                 <div className="flex gap-5 items-start group">
//                   <div className="shrink-0 w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 group-hover:border-amber-400 group-hover:text-amber-500 group-active:border-amber-400 group-active:text-amber-500 transition-all duration-300 shadow-sm">
//                     <Stethoscope size={22} strokeWidth={1.5} />
//                   </div>
//                   <div className="flex-1 pt-1">
//                     <div className="flex items-center justify-between mb-2">
//                       <h5 className="text-lg font-bold text-slate-900">
//                         Healthcare
//                       </h5>
//                     </div>
//                     <p className="text-slate-600 leading-relaxed text-sm">
//                       <span className="font-semibold">Walking Distance:</span> Rajesh Pilot Hospital<br/>
//                       <span className="font-semibold">Nearby:</span> Numed Super Speciality, Yatharth Super Speciality, KDSG Super Speciality (350+ bedded)
//                     </p>
//                   </div>
//                 </div>

//                 {/* Shopping & Hubs */}
//                 <div className="flex gap-5 items-start group">
//                   <div className="shrink-0 w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 group-hover:border-amber-400 group-hover:text-amber-500 group-active:border-amber-400 group-active:text-amber-500 transition-all duration-300 shadow-sm">
//                     <ShoppingBag size={22} strokeWidth={1.5} />
//                   </div>
//                   <div className="flex-1 pt-1">
//                     <div className="flex items-center justify-between mb-2">
//                       <h5 className="text-lg font-bold text-slate-900">
//                         Shopping & Hubs
//                       </h5>
//                     </div>
//                     <p className="text-slate-600 leading-relaxed text-sm">
//                       <span className="font-semibold">10 Mins:</span> Gaur City Mall<br/>
//                       <span className="font-semibold">Commercial:</span> Near IT Hub and Knowledge Park V
//                     </p>
//                   </div>
//                 </div>

//                 {/* Education */}
//                 <div className="flex gap-5 items-start group">
//                   <div className="shrink-0 w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 group-hover:border-amber-400 group-hover:text-amber-500 group-active:border-amber-400 group-active:text-amber-500 transition-all duration-300 shadow-sm">
//                     <GraduationCap size={22} strokeWidth={1.5} />
//                   </div>
//                   <div className="flex-1 pt-1">
//                     <div className="flex items-center justify-between mb-2">
//                       <h5 className="text-lg font-bold text-slate-900">
//                         Education
//                       </h5>
//                     </div>
//                     <p className="text-slate-600 leading-relaxed text-sm">
//                       <span className="font-semibold">Walking Distance:</span> Sant Vinoba Inter College<br/>
//                       <span className="font-semibold">Nearby:</span> Shri Ram Global School, Trinity School, BGS Vijnatham School
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </FadeIn>

//           <FadeIn direction="left" delay={200} className="w-full lg:w-2/3">
//             <div className="w-full flex justify-center items-center lg:w-full h-[500px] bg-slate-200 rounded-2xl overflow-hidden shadow-inner relative group">
//               <div className="absolute inset-0 flex items-center justify-center bg-slate-300">
//                 <iframe
//                   className="relative h-full w-full"
//                   src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3503.460547630334!2d77.48982507549911!3d28.58595747569022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM1JzA5LjUiTiA3N8KwMjknMzIuNiJF!5e0!3m2!1sen!2sin!4v1771683165473!5m2!1sen!2sin"
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>

//               <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs z-10 hidden sm:block">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
//                     S
//                   </div>
//                   <div>
//                     <p className="font-bold text-slate-900">Sukoon Villas</p>
//                     <p className="text-xs text-gray-500">
//                       Sadulapur, Greater Noida West
//                     </p>
//                   </div>
//                   <a
//                     href="https://www.google.com/maps/dir/?api=1&destination=28.5859575,77.4898251"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="ml-auto bg-slate-100 p-2 rounded-full hover:bg-slate-200 active:bg-slate-200"
//                   >
//                     <ArrowRight size={16} className="text-slate-600" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </FadeIn>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Property;



import { Link } from "wouter";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { SmoothScroll } from "../components/layout/SmoothScroll";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, Lock, X } from "lucide-react";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import VirtualTour from "../components/VirtualTour";

import image1 from "@/assets/jacuzzi.webp";
import image2 from "@/assets/gym.webp";
import image4 from "@/assets/club.webp";
import image5 from "@/assets/running.webp";
import sukoon2 from "@/assets/sukoon2.webp";
import sukoon3 from "@/assets/sukoon3.webp";

const amenities = [
  { title: "Modern Gym", image: image2, description: "Fully equipped gym amenities" },
  { title: "Running Track", image: image5, description: "Dedicated tracks for your morning jogs" },
  { title: "Luxurious Club House", image: image4, description: "A perfect space for recreation" },
  { title: "Jacuzzi", image: image1, description: "Premium jacuzzi in every unit" },
  { title: "Modern Living", image: sukoon3, description: "Abundant natural light & open spaces" },
  { title: "Vastu Compliant", image: sukoon2, description: "Harmonious Vastu compliant layouts" },
];

export default function SukoonVillas() {
  const [inquireOpen, setInquireOpen] = useState(false);
  const heroRef = useRef(null);

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

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHeroText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const projectData = {
    title: "Sukoon Villas",
    location: "Sadulapur/Vaidpura, Gr. Noida West",
    completionDate: "2026",
    status: "Under Construction",
    description: "4 & 6 BHK Modern Villas where modern living meets true sukoon.",
    content: `Sukoon is an exclusive luxury villa enclave located in the peaceful surroundings of Sadulapur, Greater Noida West, where modern living meets true sukoon.

    Thoughtfully designed villas offer elegant architecture, abundant natural light, and serene open spaces, while enjoying excellent connectivity to reputed schools, healthcare, shopping, and daily conveniences—creating a refined lifestyle that is calm, comfortable, and truly elevated.
    
    Every detail is designed to bring comfort to elders, joy to children, and ease to everyday living—so that each moment feels considered and meaningful. Experience a lifestyle of unlimited freedom with complete sewerage systems, RCC roads, Vastu-compliant layouts, and a sprawling, lush green park.`,
    stats: [
      { label: "Configuration", value: "4 & 6 BHK Villas" },
      { label: "Unit Types", value: "1887 & 2727 sqft" },
      { label: "Location", value: "Gr. Noida West" },
      { label: "Structure", value: "Earthquake Resistant" },
    ],
  };

  return (
    <SmoothScroll>
      <div className="bg-noise" />
      <Navbar />

      <main className="bg-background">
        {/* Project Hero with YouTube Background */}
        <section
          ref={heroRef}
          className="relative h-[90vh] md:h-screen w-full overflow-hidden flex items-end bg-black"
        >
          <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ y: yImage }}>
            <div className="w-full h-full relative">
              {/* CSS trick to make iframe cover the entire background like object-fit: cover */}
              <iframe
                src="https://www.youtube.com/embed/0pyxvluCi4s?autoplay=1&mute=1&loop=1&playlist=0pyxvluCi4s&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                className="absolute top-1/2 left-1/2 w-[300vw] h-[300vh] sm:w-[150vw] sm:h-[150vh] min-w-[100vw] min-h-[100vh] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
                allow="autoplay; encrypted-media"
                frameBorder="0"
                title="Sukoon Villas Background Video"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />
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
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="inline-block bg-accent text-white text-xs font-bold px-4 py-2 tracking-widest uppercase rounded-sm ml-5 mb-6"
            >
              {projectData.status}
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl lg:text-[8rem] text-white leading-none tracking-tighter mb-6"
            >
              {projectData.title}
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
                <p className="font-display text-xl">{projectData.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">
                  Completion
                </p>
                <p className="font-display text-xl">
                  {projectData.completionDate}
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

                  {projectData.stats.map((stat, idx) => (
                    <div key={idx} className="border-l border-accent pl-6">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                        {stat.label}
                      </p>
                      <p className="font-display text-2xl md:text-3xl text-foreground">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right col - Text & Amenities Carousel */}
              <div className="lg:col-span-8">
                <div className="mb-20">
                  <h2 className="font-display text-3xl md:text-5xl leading-tight mb-12 text-foreground">
                    {projectData.description}
                  </h2>
                  <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none font-body text-muted-foreground whitespace-pre-line leading-relaxed w-full">
                    {projectData.content}
                  </div>
                </div>

                {/* Amenities Carousel Replacing the standard masonry grid */}
                <div className="w-full mt-10">
                  <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-foreground/50 mb-8 border-b border-border pb-4">
                    Exclusive Features
                  </h3>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <Carousel
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      plugins={[
                        Autoplay({
                          delay: 3000,
                        }),
                      ]}
                      className="w-full relative"
                    >
                      <CarouselContent className="-ml-2 md:-ml-4">
                        {amenities.map((item, index) => (
                          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-sm group cursor-pointer border border-border">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />
                              <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-white font-display text-xl md:text-2xl tracking-wide">{item.title}</h3>
                                <p className="text-gray-300 text-sm mt-2">{item.description}</p>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="hidden md:flex justify-end gap-2 mt-6">
                        <CarouselPrevious className="relative left-0 bg-secondary border-border hover:bg-accent hover:text-white" />
                        <CarouselNext className="relative right-0 bg-secondary border-border hover:bg-accent hover:text-white" />
                      </div>
                    </Carousel>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <VirtualTour />

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
                    src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?q=80&w=1470&auto=format&fit=crop"
                    alt="Master Plan Preview"
                    className="w-full h-full object-cover blur-[8px] opacity-40 scale-105 transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="relative z-10 flex flex-col items-center text-center p-3 sm:p-4 md:p-6">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-background/20 border border-border/50 flex items-center justify-center mb-3 md:mb-6 backdrop-blur-md shadow-xl">
                    <Lock className="w-4 h-4 md:w-6 md:h-6 text-foreground" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl md:text-3xl mb-2 md:mb-3 text-foreground drop-shadow-md">
                    Master & Floor Plans
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80 mb-4 md:mb-8 max-w-[200px] md:max-w-xs drop-shadow-sm">
                    View 1887 & 2727 sqft layouts, zoning, and plot dimensions
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
                onSubmit={onSubmit}
              >
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
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
                      name="email"
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
                      name="phone"
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
                    name="message"
                    className="w-full bg-secondary/30 border border-border p-3 focus:outline-none focus:border-accent transition-colors text-foreground resize-none"
                    placeholder="I am interested in Sukoon Villas..."
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