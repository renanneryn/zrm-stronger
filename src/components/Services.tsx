import { motion } from "motion/react";
import { Building2, Paintbrush, Droplets, Grid3X3, Zap, HardHat } from "lucide-react";

import construcaoImg from "../assets/construcao.jpg";
import fachadaImg from "../assets/fachada-1.jpg";
import impermeabilidadeImg from "../assets/impermeabilidade.jpg";
import acabamentosImg from "../assets/acabamentos.jpg";
import tecnicasImg from "../assets/tecnicas.jpg";
import aluguelImg from "../assets/aluguel.jpg";

const services = [
  {
    title: "Construção Civil",
    desc: "Prédios, casas e galpões comerciais. Suporte completo em todas as etapas da obra.",
    icon: Building2,
    img: construcaoImg
  },
  {
    title: "SOLUÇÕES COMPLETAS PARA FACHADAS",
    desc: "Limpeza, pintura e aplicação de ladrilhos em edifícios de até 3 pavimentos.",
    icon: Paintbrush,
    img: fachadaImg
  },
  {
    title: "Impermeabilização",
    desc: "Soluções definitivas contra infiltrações em imóveis residenciais, comerciais e industriais.",
    icon: Droplets,
    img: impermeabilidadeImg
  },
  {
    title: "Acabamentos & Interiores",
    desc: "Pisos em porcelanato e granito, drywall, iluminação embutida e pinturas especiais.",
    icon: Grid3X3,
    img: acabamentosImg
  },
  {
    title: "Instalações Técnicas",
    desc: "Projetos e execuções de redes elétricas e hidráulicas residenciais e industriais.",
    icon: Zap,
    img: tecnicasImg
  },
  {
    title: "Aluguel de Equipamentos Comerciais e Industriais",
    desc: "Andaimes em grandes e pequenos navios, pintura em balsas e revestimento de maquinário industrial.",
    icon: HardHat,
    img: aluguelImg
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-slate-900 concrete-texture">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h3 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
              className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none"
            >
              {"SOLUÇÕES COMPLETAS".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 5 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  {char}
                </motion.span>
              ))}
              <br />
              <span className="text-white/50">
                {"PARA SUA OBRA".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 5 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h3>
          </div>
          <p className="text-slate-400 max-w-sm text-sm border-l border-brand-gold pl-6">
            Atuamos em diversos segmentos da construção civil com a solidez e qualidade que seu projeto merece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[400px] overflow-hidden metallic-finish"
              >
                <div className="absolute inset-0 z-0">
                   <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale-0 md:grayscale group-hover:grayscale-0 group-hover:scale-105 md:group-hover:scale-110 transition-all duration-700 opacity-60 md:opacity-40 group-hover:opacity-60"
                    referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-concrete via-brand-concrete/50 to-transparent" />
                </div>

                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-brand-gold rounded font-bold flex flex-shrink-0 items-center justify-center text-brand-concrete mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold italic tracking-tighter uppercase leading-tight mb-2">
                    {service.title}
                  </h4>
                  <div className="h-16 mt-2">
                    <p className="text-slate-300 text-sm opacity-100 md:opacity-0 group-hover:opacity-100 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
