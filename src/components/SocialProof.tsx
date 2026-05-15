import { motion } from "motion/react";
import { useState, useEffect } from "react";

const proj1 = Object.values(import.meta.glob('../assets/projects/01_Coletor_Tronco_Faria_Timbo_e_Manguinhos/*.jpg', { import: 'default', eager: true })) as string[];
const proj2 = Object.values(import.meta.glob('../assets/projects/02_Ze_Delivre_Ambev_Sao_Cristovao/*.jpg', { import: 'default', eager: true })) as string[];
const proj3 = Object.values(import.meta.glob('../assets/projects/03_Retrofit_Hotel_Novo_Mundo_Uliving/*.jpg', { import: 'default', eager: true })) as string[];
const proj4 = Object.values(import.meta.glob('../assets/projects/04_Terraplanagem_Via_Sul/*.jpg', { import: 'default', eager: true })) as string[];
const proj5 = Object.values(import.meta.glob('../assets/projects/05_Terraplanagem_Emccamp/*.jpg', { import: 'default', eager: true })) as string[];
const proj6 = Object.values(import.meta.glob('../assets/projects/06_Retrofit_Rede_Hoteis_Atlantico/*.jpg', { import: 'default', eager: true })) as string[];
const proj7 = Object.values(import.meta.glob('../assets/projects/07_Condominio_Solar_de_Aveiros/*.jpg', { import: 'default', eager: true })) as string[];
const proj8 = Object.values(import.meta.glob('../assets/projects/08_Condominio_Morada_Carioca/*.jpg', { import: 'default', eager: true })) as string[];
const proj9 = Object.values(import.meta.glob('../assets/projects/09_Residencial_Palazzo_Strelitzia_Biancha/*.jpg', { import: 'default', eager: true })) as string[];

const works = [
  {
    title: "Obra de Finalização do Coletor Tronco de Faria Timbó e Manguinhos",
    category: "Saneamento",
    description: [
      "Atuamos como fiscais de obra no gerenciamento do projeto de saneamento da Obra do Coletor Tronco de Esgoto no Bairro de Faria Timbó e Manguinhos, na cidade do Rio de Janeiro.",
      "Experiência em Relatórios Gerenciais, controle de custos e do Planejamento da obra."
    ],
    images: proj1,
    colSpan: "md:col-span-12 lg:col-span-8 lg:row-span-2"
  },
  {
    title: "Obra de montagem da loja do Zé de Delivre",
    category: "Montagem de Loja",
    description: [
      "Trabalhamos na assessoria da finalização e entrega ao cliente de uma loja de distribuição de bebidas do Zé Delivre direto do centro de distribuição principal da Ambev.",
      "A obra estava com ¼ de conclusão e foi feito uma força tarefa de entrega em tempo recorde de 2 meses com toda a conclusão."
    ],
    images: proj2,
    colSpan: "md:col-span-6 lg:col-span-4"
  },
  {
    title: "Obra de Terraplanagem da empresa Via Sul",
    category: "Terraplanagem",
    description: [
      "Obra de Terraplanagem da empresa Via Sul."
    ],
    images: proj4,
    colSpan: "md:col-span-6 lg:col-span-4"
  },
  {
    title: "Obra de Retrofit do Antigo Hotel Novo Mundo",
    category: "Retrofit e Adaptação Comercial",
    description: [
      "Esta é uma obra de Retrofit, onde o antigo hotel foi todo adaptado e modernizado.",
      "Toda as instalações e móveis dos aptos foram modificadas e atualizadas.",
      "Algumas características foram mantidas e reformadas para manter a identidade do antigo hotel.",
      "Esta é uma obra de Retrofit, onde o antigo hotel foi todo adaptado e modernizado.",
      "Toda as instalações e móveis dos aptos foram modificadas e atualizadas.",
      "Adaptado para um novo seguimento comercial no Rio de Janeiro o Student House.",
      "Algumas características foram mantidas e reformadas para manter a identidade do antigo hotel.",
      "Toda as instalações e móveis dos aptos foram modificadas e atualizadas."
    ],
    images: proj3,
    colSpan: "md:col-span-6 lg:col-span-4 lg:row-span-2"
  },
  {
    title: "Obra de Terraplanagem da empresa Emccamp",
    category: "Terraplanagem",
    description: [
      "Obra de Terraplanagem da empresa Emccamp."
    ],
    images: proj5,
    colSpan: "md:col-span-6 lg:col-span-8"
  },
  {
    title: "Condomínio Solar de Aveiros",
    category: "Muro de Contenção e Talude",
    description: [
      "Construção do muro de contenção. Vista do prédio vizinho da parte superior da contenção.",
      "Logo abaixo, o talude em 45º com 300 grampos de 25,00m cada.",
      "Aplicação da manta vegetal e tela sobre o talude com a fixação por grampos de 25,00m cada.",
      "Plantação de capim Vertiver no talude: importado do Congo, este tipo de capim chega a 1,00m de altura e sua raiz, a 5,00m de profundidade.",
      "Forma e armação do 2º muro atirantado na divisa do terreno e no nível da construção, deixando tudo preparado."
    ],
    images: proj7,
    colSpan: "md:col-span-12 lg:col-span-8"
  },
  {
    title: "Obra de Retrofit da Rede de hotéis Atlântico",
    category: "Retrofit",
    description: [
      "Obra de Retrofit da Rede de hotéis Atlântico na Av Gomes Freire 196 – Centro – RJ."
    ],
    images: proj6,
    colSpan: "md:col-span-12 lg:col-span-12"
  },
  {
    title: "Condomínio Morada Carioca",
    category: "Acabamento e Paisagismo",
    description: [
      "Início da fase de acabamento.",
      "Inicio da pavimentação com intertravado.",
      "Área comum e paisagismo do prédio finalizado.",
      "Apartamento pronto para entrega ao cliente."
    ],
    images: proj8,
    colSpan: "md:col-span-6 lg:col-span-6"
  },
  {
    title: "Residencial Palazzo Strelitzia Biancha",
    category: "Fase de Acabamento",
    description: [
      "Fase de acabamento: aplicação de pastilha na fachada.",
      "Stand de vendas: entrada da construção."
    ],
    images: proj9,
    colSpan: "md:col-span-6 lg:col-span-6"
  }
];

function ProjectCard({ work, index, colSpan }: { work: any; index: number; colSpan: string }) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (work.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % work.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [work.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`group relative overflow-hidden border border-white/10 bg-slate-800 h-[400px] md:h-auto ${colSpan}`}
    >
      {work.images.map((img: string, i: number) => (
        <img 
          key={i}
          src={img} 
          alt={`${work.title} - photo ${i+1}`} 
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${i === activeImage ? 'opacity-40 group-hover:opacity-40 group-hover:scale-105 z-0' : 'opacity-0 z-[-1]'}`}
          referrerPolicy="no-referrer"
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 z-10">
        <div className="text-brand-gold font-bold text-xs uppercase tracking-[0.2em] mb-2 transition-all duration-500 delay-100">
          {work.category}
        </div>
        <h4 className="text-2xl md:text-3xl font-black italic uppercase leading-none mb-3 transition-all duration-500">
          {work.title}
        </h4>
        <div className="min-h-[60px] flex items-end">
          <motion.p 
            key={activeImage}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-slate-300 text-sm max-w-xl w-full"
          >
            {Array.isArray(work.description) 
              ? work.description[activeImage % work.description.length] 
              : work.description}
          </motion.p>
        </div>
        
        {work.images.length > 1 && (
          <div className="absolute top-4 right-4 flex space-x-1">
            {work.images.map((_: any, i: number) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-500 ${i === activeImage ? 'w-4 bg-brand-gold' : 'w-1.5 bg-white/30'}`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function SocialProof() {
  return (
    <section className="py-24 bg-slate-900 concrete-texture relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-gold font-mono text-sm tracking-[0.3em] uppercase mb-4">Nossas Obras</h2>
            <h3 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase mb-6 text-white text-shadow-sm">
              PROJETOS CONCLUÍDOS
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Confira alguns dos nossos projetos baseados na excelência e qualidade técnica exigida em cada segmento.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[300px]">
          {works.map((work, index) => {
            return <ProjectCard key={index} work={work} index={index} colSpan={work.colSpan} />;
          })}
        </div>
      </div>
    </section>
  );
}
