import { Link } from "wouter";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      <div className="bg-noise" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <h1 className="font-display text-[10rem] md:text-[15rem] leading-none text-muted-foreground/10 font-bold select-none">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Space Not Found</h2>
          <p className="text-muted-foreground max-w-md mb-10 font-body">
            The foundation you are looking for does not exist or has been relocated.
          </p>
          <Link href="/">
            <button className="px-8 py-4 border border-foreground/20 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-500 tracking-[0.2em] text-sm uppercase">
              Return Home
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
