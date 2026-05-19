import { motion } from "motion/react";
import { UserCheck, Clock, TrendingUp, ShieldCheck } from "lucide-react";

const values = [
  {
    title: "Profissionais Qualificados",
    desc: (
      <>
        Mão de obra treinada e experiente em cada especialidade, incluindo profissionais com <strong className="text-brand-gold font-bold border-b border-brand-gold/30 pb-0.5">mais de 15 anos de experiência</strong> no mercado.
      </>
    ),
    icon: UserCheck
  },
  {
    title: "Agilidade e Pontualidade",
    desc: "Cronogramas seguidos à risca para garantir a entrega no prazo.",
    icon: Clock
  },
  {
    title: "Resultado que Valoriza",
    desc: "Trabalhos que elevam o valor de mercado do seu imóvel.",
    icon: TrendingUp
  },
  {
    title: "Segurança e Confiança",
    desc: "Processos transparentes e garantia total em todos os serviços.",
    icon: ShieldCheck
  }
];

export default function Values() {
  return (
    <section id="values" className="py-24 md:py-32 bg-brand-concrete relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="text-brand-gold font-mono text-sm tracking-[0.3em] uppercase mb-4">Por que nos escolher</h2>
          <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">
            NOSSOS <br />
            <span className="text-white/50">DIFERENCIAIS</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full border border-brand-gold/30 flex items-center justify-center mb-6 relative hover:border-brand-gold transition-colors duration-500">
                <div className="absolute inset-0 rounded-full bg-brand-gold/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <value.icon className="w-8 h-8 text-brand-gold" />
              </div>
              <h4 className="text-xl font-bold italic tracking-tighter uppercase mb-3">
                {value.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
