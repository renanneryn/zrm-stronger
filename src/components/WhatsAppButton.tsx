import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5521988602815?text=Ol%C3%A1%20vim%20do%20site%20ZTM%20Strong%20e%20fiquei%20interessado%20em%20seus%20servi%C3%A7os." 
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-brand-gold text-brand-concrete p-4 rounded-full shadow-2xl hover:bg-white transition-colors glow-bronze flex items-center justify-center"
    >
      <MessageCircle className="w-8 h-8 fill-brand-concrete" />
      <span className="absolute right-full mr-4 bg-brand-concrete text-white px-4 py-2 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-bold uppercase tracking-widest hidden md:block border border-white/10">
        Solicite seu Orçamento
      </span>
    </motion.a>
  );
}
