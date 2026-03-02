import { Link } from "wouter";
import logo from "@/assets/logo.png"
export function Footer() {
  return (
    <footer id="contact" className="bg-background sm:pt-32 pb-12 border-t border-border/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24">
          <div className="md:col-span-2">
           <img src={logo} className="items-start w-44 -mx-5"/>
            <p className="text-muted-foreground max-w-sm text-lg leading-relaxed">
              Redefining the skyline. Crafting environments that blend visionary architecture with timeless elegance.
            </p>
          </div>
          
          <div>
            <h4 className="sm:mt-16 font-sans font-bold text-xs tracking-widest uppercase mb-8 text-foreground">Navigation</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/" className="hover:text-accent transition-colors link-hover">Home</Link></li>
              <li><Link href="/projects" className="hover:text-accent transition-colors link-hover">Projects</Link></li>
              <li><a href="/#about" className="hover:text-accent transition-colors link-hover">About Us</a></li>
              <li><a href="/#contact" className="hover:text-accent transition-colors link-hover">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="sm:mt-16 font-sans font-bold text-xs tracking-widest uppercase mb-8 text-foreground">Contact</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="mailto:info@auradevelopment.com" className="hover:text-accent transition-colors link-hover">info@auradevelopment.com</a></li>
              <li><a href="tel:+12125550199" className="hover:text-accent transition-colors link-hover">+1 (212) 555-0199</a></li>
              <li className="pt-4">100 Premium Way,<br/>New York, NY 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Desha Development. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
