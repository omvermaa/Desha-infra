import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";


export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inquireOpen, setInquireOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/#about" },
    { name: "Contact", path: "/#contact" },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path === "/") {
      if (location === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (path.startsWith("/#")) {
      if (location === "/") {
        e.preventDefault();
        const id = path.replace("/#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", path);
        }
      }
    } else {
      window.scrollTo(0, 0);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md"
            : "bg-transparent py-6 text-white"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* <Link href="/" className="group relative z-50">
            <span className="font-display text-2xl font-semibold tracking-wider text-foreground">
              
              <span className="text-accent">.</span>
            </span> */}
            <Link href="/" className="group relative z-50" onClick={(e) => handleNavClick(e, "/")}>
              <img
                src={logo}
                alt="Logo"
                className={`z-10 transition-all duration-300 w-auto ${
                  scrolled ? "h-20" : "hidden"
                }`}
              />
            </Link>
          {/* </Link> */}

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => {
              const isHashLink = link.path.startsWith("/#");
              const className = `text-sm font-medium uppercase tracking-widest link-hover ${
                location === link.path
                  ? "text-accent"
                  : scrolled
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-white/80 hover:text-white"
              }`;

              if (isHashLink) {
                return (
                  <a key={link.name} href={link.path} className={className} onClick={(e) => handleNavClick(e, link.path)}>
                    {link.name}
                  </a>
                );
              }
              return (
                <Link key={link.name} href={link.path} className={className} onClick={(e) => handleNavClick(e, link.path)}>
                  {link.name}
                </Link>
              );
            })}
            <button 
              onClick={() => setInquireOpen(true)}
              className={`px-6 py-2 border transition-colors duration-300 text-sm tracking-widest uppercase ${
                scrolled ? "border-foreground/20 hover:border-foreground" : "border-white/20 hover:border-white"
              }`}
            >
              Enquire
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden relative z-50 ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={28} strokeWidth={1} />
            ) : (
              <Menu size={28} strokeWidth={1} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <motion.div
        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          clipPath: mobileMenuOpen
            ? "circle(150% at 100% 0)"
            : "circle(0% at 100% 0)",
        }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 bg-background z-40 flex flex-col justify-center items-center px-6"
        style={{ pointerEvents: mobileMenuOpen ? "auto" : "none" }}
      >
        <div className="flex flex-col gap-8 text-center w-full">
          {navLinks.map((link, i) => {
            const isHashLink = link.path.startsWith("/#");
            const className = "font-display text-4xl sm:text-5xl text-foreground hover:text-accent transition-colors";

            return (
              <motion.div
                key={link.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: mobileMenuOpen ? 0 : 20,
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              >
                {isHashLink ? (
                  <a href={link.path} className={className} onClick={(e) => handleNavClick(e, link.path)}>
                    {link.name}
                  </a>
                ) : (
                  <Link href={link.path} className={className} onClick={(e) => handleNavClick(e, link.path)}>
                    {link.name}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

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
                <h2 className="font-display text-3xl text-foreground">Inquire</h2>
                <button 
                  onClick={() => setInquireOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setInquireOpen(false); }}>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                  <input type="text" required className="w-full bg-secondary/30 border border-border p-3 focus:outline-none focus:border-accent transition-colors text-foreground" placeholder="Your Name" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                    <input type="email" required className="w-full bg-secondary/30 border border-border p-3 focus:outline-none focus:border-accent transition-colors text-foreground" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                    <input type="tel" className="w-full bg-secondary/30 border border-border p-3 focus:outline-none focus:border-accent transition-colors text-foreground" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea rows={4} className="w-full bg-secondary/30 border border-border p-3 focus:outline-none focus:border-accent transition-colors text-foreground resize-none" placeholder="Tell us about your interest..." />
                </div>

                <button type="submit" className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-sm font-bold hover:bg-accent hover:text-white transition-colors duration-300">
                  Send Inquiry
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
