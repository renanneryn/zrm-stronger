import { motion } from "motion/react";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-concrete/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 lg:px-8 py-3 lg:py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center p-1"
            id="logo-container"
          >
            <img 
              src={logo} 
              alt="ZTM STRONG" 
              className="h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback to text if image fails to load
                (e.target as HTMLImageElement).style.display = 'none';
                const parent = (e.target as HTMLImageElement).parentElement;
                if (parent && !parent.querySelector('.fallback-text')) {
                  const span = document.createElement('span');
                  span.className = 'fallback-text font-bold text-xl text-brand-gold';
                  span.innerText = 'ZTM STRONG';
                  parent.appendChild(span);
                }
              }}
            />
          </motion.div>
        </div>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-slate-400">
          <a href="#services" className="hover:text-brand-gold transition-colors">Serviços</a>
          <a href="#about" className="hover:text-brand-gold transition-colors">Sobre</a>
          <a href="#values" className="hover:text-brand-gold transition-colors">Diferenciais</a>
          <a href="#contact" className="hover:text-brand-gold transition-colors">Contato</a>
        </nav>

        <a 
          href="https://wa.me/5521988602815?text=Ol%C3%A1%20vim%20do%20site%20ZTM%20Strong%20e%20fiquei%20interessado%20em%20seus%20servi%C3%A7os." 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-brand-bronze hover:bg-brand-gold text-white px-5 py-2 rounded-none font-bold text-xs uppercase tracking-widest transition-all glow-bronze"
        >
          Orçamento
        </a>
      </div>
    </header>
  );
}
