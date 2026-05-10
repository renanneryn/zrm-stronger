import { Shield, Building2, Home, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={logo} 
                alt="ZTM STRONG" 
                className="h-14 w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
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
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              ZTM STRONG CONSTRUÇÕES E EMPREENDIMENTOS LTDA. <br />
              Referência em construção civil e manutenção especializada, entregando solidez do alicerce à fachada.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 border border-white/10 rounded flex items-center justify-center hover:bg-brand-gold hover:text-brand-concrete transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="h-10 w-10 border border-white/10 rounded flex items-center justify-center hover:bg-brand-gold hover:text-brand-concrete transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-sm mb-6 pb-2 border-b border-brand-gold w-fit">Navegação</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Serviços</a></li>
              <li><a href="#values" className="hover:text-brand-gold transition-colors">Diferenciais</a></li>
              <li><a href="#contact" className="hover:text-brand-gold transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-sm mb-6 pb-2 border-b border-brand-gold w-fit">Serviços</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li>Construção de Galpões</li>
              <li>Reforma de Fachadas</li>
              <li>Impermeabilização</li>
              <li>Manutenção Industrial</li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-sm mb-6 pb-2 border-b border-brand-gold w-fit">Contato</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold" />
                (21) 98860-2815
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold" />
                contato@ztmstrong.com.br
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-1" />
                <span>Atendimento em toda região <br />Metropolitana.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-[10px] uppercase tracking-widest font-mono">
          <p>© 2026 ZTM STRONG CONSTRUÇÕES. TODOS OS DIREITOS RESERVADOS.</p>
          <p>DESENVOLVIDO COM SOLIDEZ.</p>
        </div>
      </div>
    </footer>
  );
}
