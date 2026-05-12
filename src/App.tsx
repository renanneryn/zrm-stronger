/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Values from "./components/Values";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-brand-gold selection:text-brand-concrete">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gold origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Header />
      
      <main>
        <Hero />
        
        <Services />
        <Values />
        
        {/* About Short Section */}
        <section id="about" className="py-24 bg-brand-concrete relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative lg:order-1"
              >
                {/* Visual content for the left side */}
                <div className="relative aspect-square bg-slate-800 overflow-hidden border border-brand-gold/10 shadow-2xl rounded-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" 
                    alt="ZTM Strong Obra Profissional" 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-concrete/60 to-transparent" />
                </div>
                {/* Accent Boxes */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-brand-gold/40 -z-10" />
                <div className="absolute -top-6 -left-6 w-48 h-48 border border-white/5 -z-10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:order-2"
              >
                <h2 className="text-brand-gold font-mono text-sm tracking-[0.3em] uppercase mb-4">Tradição & Inovação</h2>
                <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-6 leading-none">
                  TRANSFORMAMOS <br />
                  <span className="text-white/50">PROJETO EM REALIDADE</span>
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  A ZTM STRONG é uma empresa apta para suprir todas as suas necessidades construtivas. 
                  Com uma equipe multidisciplinar, suportamos todas as etapas da obra com profissionalismo, 
                  desde a terraplanagem até as instalações finais.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Projetamos e Executamos Condomínios Residenciais",
                    "Construção de Galpões e Mercados",
                    "Instalações Elétricas, Hidráulicas e Sanitárias Industriais",
                    "Engenharia, Projeto e Mão de Obra Civil Completa",
                    "Serviços de Terraplanagem e Fundações",
                    "Especialistas em Limpeza e Pintura de Fachadas",
                    "Aluguel de Andaimes para Navios e Construções"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 bg-brand-gold flex-shrink-0 rotate-45" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Pain Points / Solutions Callout */}
        <section className="py-24 bg-brand-gold text-brand-concrete">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase mb-6">
              SUA OBRA SEM DOR DE CABEÇA
            </h3>
            <p className="text-brand-concrete/80 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-medium leading-relaxed">
              Chega de dor de cabeça com obra atrasada, desperdício de material e serviço mal executado. A ZTM Strong assume o controle para você não ter preocupações. Entregamos seu projeto no prazo, com respeito ao seu orçamento e qualidade de verdade.
            </p>
            <a 
              href="https://wa.me/5521980881200?text=Ol%C3%A1%20vim%20do%20site%20ZTM%20Strong%20e%20fiquei%20interessado%20em%20seus%20servi%C3%A7os."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-concrete text-white px-10 py-5 font-black uppercase tracking-[0.2em] hover:bg-white hover:text-brand-concrete transition-all shadow-2xl"
            >
              Consultar Agora
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

