import { motion } from "motion/react";
import { Shield, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-concrete via-brand-concrete/90 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
          alt="Construction Site" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <Shield className="text-brand-gold w-5 h-5" />
            <span className="text-brand-gold font-mono text-sm tracking-[0.3em] uppercase">
              Solidez e Segurança
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.9] mb-8"
          >
            PROTEÇÃO <br />
            <span className="text-brand-gold">DA SUA OBRA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed"
          >
            Especialistas em construções e empreendimentos. Do alicerce ao acabamento, 
            entregamos resultados que valorizam seu imóvel residencial, comercial ou industrial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#services"
              className="bg-brand-gold text-brand-concrete px-8 py-4 font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-colors group"
            >
              Nossos Serviços
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/5521988602815?text=Ol%C3%A1%20vim%20do%20site%20ZTM%20Strong%20e%20fiquei%20interessado%20em%20seus%20servi%C3%A7os."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-brand-gold hover:text-brand-gold px-8 py-4 font-bold uppercase tracking-widest flex items-center justify-center transition-all bg-white/5 backdrop-blur-sm"
            >
              Fale com um Especialista
            </a>
          </motion.div>
        </div>
      </div>

      {/* Side Decorative Text removed as requested */}
    </section>
  );
}
