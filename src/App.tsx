import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDownRight, Quote, Plus, Target, CheckCircle2 } from 'lucide-react';
import React from 'react';

// Reusable micro-component for grid boundaries
const Crosshair = ({ className = "" }) => (
  <Plus className={`w-4 h-4 text-ink flex-shrink-0 opacity-30 ${className}`} strokeWidth={1} />
);

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      
      {/* EXTREME BRUTALIST NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference border-b border-white/20">
        <div className="w-full flex items-stretch h-14">
          <div className="px-6 flex items-center justify-center border-r border-white/20 font-display italic text-2xl text-white">
            H.A.T
          </div>
          <div className="flex-1 hidden md:flex items-center gap-8 px-6 font-mono text-xs uppercase tracking-widest text-[#a0a0a0]">
            <a href="#vision" className="hover:text-white transition-colors">La Vision</a>
            <a href="#formation" className="hover:text-white transition-colors">Formation</a>
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a href="#projets" className="hover:text-white transition-colors">Projets</a>
          </div>
          <div className="px-6 flex items-center justify-center font-mono text-xs font-bold bg-white text-black hover:bg-[#e0e0e0] transition-colors cursor-pointer uppercase tracking-widest">
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* 1. TYPOGRAPHIC HERO */}
        <section className="relative min-h-[90vh] pt-24 pb-12 px-4 md:px-8 border-b border-grid flex flex-col justify-between">
          <div className="w-full relative z-10">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <h1 className="font-display text-[14vw] md:text-[12vw] leading-[0.8] tracking-tighter uppercase text-ink">
                Hamou
              </h1>
              <div className="flex items-center gap-4 md:gap-8">
                <div className="hidden md:block w-32 h-[1px] bg-ink"></div>
                <h1 className="font-display text-[14vw] md:text-[12vw] leading-[0.8] tracking-tighter italic text-accent">
                  Ahmed
                </h1>
              </div>
              <h1 className="font-display text-[14vw] md:text-[12vw] leading-[0.8] tracking-tighter text-right uppercase text-ink">
                Tagira.
              </h1>
            </motion.div>
          </div>

          <div className="mt-20 md:mt-0 grid grid-cols-1 md:grid-cols-4 gap-8 items-end relative z-20">
            <div className="col-span-1 border-l-2 border-accent pl-4">
              <p className="font-mono text-xs uppercase tracking-widest text-ink/60 mb-2">Statut Actuel</p>
              <p className="font-bold text-sm tracking-wide uppercase">ESCEP • 1ère Année</p>
              <p className="font-mono text-xs text-ink/80 mt-1">Management & Économie Numérique</p>
            </div>
            
            <div className="col-span-1 md:col-span-2 hidden md:flex justify-center relative">
              {/* Overlapping portrait element */}
              <motion.div 
                 initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
                 animate={{ scale: 1, opacity: 1, rotate: 0 }}
                 transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                 className="relative w-48 h-64 border border-ink bg-paper-light p-2 shadow-2xl z-20"
              >
                <img 
                  src="https://picsum.photos/seed/portrait44/400/600?grayscale" 
                  alt="Hamou Portrait" 
                  className="w-full h-full object-cover filter contrast-125"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-4 -right-4 bg-accent text-white p-2 border border-ink shadow-[4px_4px_0px_#111110]">
                  <ArrowDownRight className="w-6 h-6" />
                </div>
              </motion.div>
            </div>

            <div className="col-span-1 md:text-right">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <p className="font-display text-2xl italic leading-snug text-balance">
                  "Rigueur, adaptation et vision numérique au service de l'évolution des organisations."
                </p>
              </motion.div>
            </div>
          </div>
          
          {/* Background graphical elements */}
          <div className="absolute top-1/4 right-[10%] opacity-10 pointer-events-none">
            <div className="text-[30vw] font-mono leading-none tracking-tighter">01</div>
          </div>
        </section>

        {/* MARQUEE SEPARATOR */}
        <div className="border-b border-grid bg-ink text-paper py-3 overflow-hidden flex whitespace-nowrap">
          <div className="animate-marquee shrink-0 flex items-center font-mono text-sm uppercase tracking-widest">
            <span className="mx-4">AVAILABLE FOR INTERNSHIP 2026</span><Target className="w-4 h-4 text-accent mx-4"/>
            <span className="mx-4">STRATÉGIE DIGITALE</span><Target className="w-4 h-4 text-accent mx-4"/>
            <span className="mx-4">MANAGEMENT DE L'INNOVATION</span><Target className="w-4 h-4 text-accent mx-4"/>
            <span className="mx-4">AVAILABLE FOR INTERNSHIP 2026</span><Target className="w-4 h-4 text-accent mx-4"/>
            <span className="mx-4">STRATÉGIE DIGITALE</span><Target className="w-4 h-4 text-accent mx-4"/>
            <span className="mx-4">MANAGEMENT DE L'INNOVATION</span><Target className="w-4 h-4 text-accent mx-4"/>
                        <span className="mx-4">AIMENT LES OUTILS  IA</span><Target className="w-4 h-4 text-accent mx-4"/>

          </div>
        </div>

        {/* 2. VISION & A PROPOS */}
        <section id="vision" className="grid grid-cols-1 md:grid-cols-12 border-b border-grid">
          {/* Vertical section label */}
          <div className="hidden md:flex flex-col items-center justify-between col-span-1 border-r border-grid py-12 text-ink/40">
            <Crosshair />
            <span className="vertical-text font-mono text-xs tracking-[0.3em] uppercase">La Vision</span>
            <Crosshair />
          </div>

          <div className="col-span-1 md:col-span-11 p-8 md:p-16 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Quote className="absolute -top-12 -left-8 w-24 h-24 text-accent opacity-20" />
              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-accent mb-8">
                Construire les organisations<br/>
                <span className="text-ink italic">de demain.</span>
              </h2>
              <div className="bg-ink text-paper p-8 border-l-4 border-accent">
                <p className="font-mono text-sm uppercase tracking-wide opacity-70 mb-4">Objectif 2026</p>
                <p className="text-xl">Recherche active d'une alternance ou d'un stage pour mettre ma rigueur au service d'un projet concret et innovant.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center space-y-6 text-lg md:text-xl leading-relaxed text-ink/80"
            >
              <p>
                Actuellement en première année du programme <strong className="text-ink font-bold">Management et Économie Numérique</strong>, je suis animé par une double curiosité : celle des organisations humaines et celle des outils digitaux transforment notre économie.
              </p>
              <p>
                Ce qui me caractérise le plus est mon <strong className="text-accent underline decoration-2 underline-offset-4">sens aigu du travail bien fait</strong>. 
                Chaque tâche, même la plus modeste, est une pierre apportée à l'édifice.
              </p>
              <p>
                Je n'ai pas vocation à subir les problèmes. Je cherche des solutions. Mon ambition est de comprendre comment les entreprises peuvent se réinventer pour être <em>plus efficaces</em>, <em>plus agiles</em> et <em>plus responsables</em>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. EXPERTISE GRID (BRUTALIST TABLE) */}
        <section id="expertise" className="border-b border-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            
            {/* Soft Skills Pillar */}
            <div className="col-span-1 lg:col-span-2 border-r border-grid flex flex-col">
              <div className="p-6 border-b border-grid bg-paper-light">
                <h3 className="font-mono text-sm uppercase tracking-widest font-bold">Le Savoir-Être</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 flex-grow">
                <div className="p-8 border-r border-b border-grid group hover:bg-ink hover:text-white transition-colors duration-300">
                  <span className="font-display italic text-4xl text-accent mb-4 block group-hover:text-white">01</span>
                  <h4 className="font-bold text-xl uppercase mb-3">Rigueur<br/>& Organisation</h4>
                  <p className="font-mono text-xs opacity-70 leading-relaxed">Le sens profond du travail abouti, le perfectionnisme dans l'exécution et le respect indéfectible des délais.</p>
                </div>
                <div className="p-8 border-b border-grid group hover:bg-ink hover:text-white transition-colors duration-300">
                  <span className="font-display italic text-4xl text-accent mb-4 block group-hover:text-white">02</span>
                  <h4 className="font-bold text-xl uppercase mb-3">Curiosité<br/>pour L'Innovation</h4>
                  <p className="font-mono text-xs opacity-70 leading-relaxed">Observer, comprendre et décoder les nouveaux enjeux du web pour anticiper l'évolution des marchés.</p>
                </div>
                <div className="p-8 border-r md:border-b-0 border-b border-grid group hover:bg-ink hover:text-white transition-colors duration-300">
                  <span className="font-display italic text-4xl text-accent mb-4 block group-hover:text-white">03</span>
                  <h4 className="font-bold text-xl uppercase mb-3">Force de<br/>Proposition</h4>
                  <p className="font-mono text-xs opacity-70 leading-relaxed">Améliorer les processus. Chercher des solutions tangibles plutôt que de subir l'inefficacité des problèmes.</p>
                </div>
                <div className="p-8 group hover:bg-ink hover:text-white transition-colors duration-300">
                  <span className="font-display italic text-4xl text-accent mb-4 block group-hover:text-white">04</span>
                  <h4 className="font-bold text-xl uppercase mb-3">Esprit<br/>d'Équipe</h4>
                  <p className="font-mono text-xs opacity-70 leading-relaxed">L'avancement commun prime sur la réussite individuelle. La cohésion est la clé d'un collectif performant.</p>
                </div>
              </div>
            </div>

            {/* Hard Skills Pillar */}
            <div className="col-span-1 lg:col-span-2 flex flex-col">
              <div className="p-6 border-b border-grid bg-ink text-paper">
                <h3 className="font-mono text-sm uppercase tracking-widest font-bold">L'Outillage Stratégique (Hard Skills)</h3>
              </div>
              <ul className="flex flex-col flex-grow">
                <SkillListItem 
                  title="SUITE MICROSOFT 365" 
                  details="Excel avancé, modélisation de données, PowerPoint, Teams."
                  perc="85%" 
                />
                <SkillListItem 
                  title="GESTION DE PROJET" 
                  details="Trello, Notion, Méthodologies agiles (Notions)."
                  perc="75%" 
                />
                <SkillListItem 
                  title="VEILLE ÉCONOMIQUE & NUMÉRIQUE" 
                  details="Analyses concurentielles, synthèses stratégiques complexes."
                  perc="90%" 
                />
                <SkillListItem 
                  title="ANGLAIS PROFESSIONNEL" 
                  details="Niveau B2 – Pratique écrite et orale de niveau professionnel."
                  perc="75%" 
                  isLast={true}
                />
              </ul>
            </div>

          </div>
        </section>

        {/* 4. PROJETS & RÉALISATIONS ACADÉMIQUES */}
        <section id="projets" className="border-b border-grid">
          <div className="p-6 md:p-12 text-center border-b border-grid relative overflow-hidden">
            <h2 className="font-display text-5xl md:text-7xl uppercase text-ink relative z-10">
              Réalisations <span className="italic text-accent">Académiques</span>
            </h2>
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <span className="font-display text-[20vw] italic">Work</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="border-r border-grid flex flex-col group cursor-pointer"
            >
              <div className="p-8 md:p-12 flex-grow relative overflow-hidden">
                <div className="absolute top-8 right-8 w-12 h-12 bg-ink text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-300 z-20">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">Projet 01 // Étude de Cas</div>
                <h3 className="font-sans text-3xl md:text-4xl font-bold uppercase mb-4 leading-tight group-hover:text-accent transition-colors">
                  Digitalisation TPE locale
                </h3>
                <p className="text-ink/70 mb-8 max-w-md">
                  Dans le cadre de l'économie numérique, analyse complète d'un commerce de proximité et conception d'une stratégie de croissance digitale.
                </p>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-start gap-4 p-4 border border-grid bg-white/40">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>Audit de la présence en ligne actuelle (Google Maps, Réseaux).</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 border border-grid bg-white/40">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>Recommandation et plan d'action à 3 mois pour le R.O.I via le digital.</span>
                  </div>
                </div>
              </div>
              <div className="h-64 md:h-80 w-full bg-grid relative overflow-hidden border-t border-grid">
                <img src="https://picsum.photos/seed/retailarch/800/600" className="w-full h-full object-cover filter grayscale mix-blend-multiply group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" alt="Retail architecture" />
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="p-8 md:p-12 flex-grow relative overflow-hidden">
                 <div className="absolute top-8 right-8 w-12 h-12 bg-ink text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-300 z-20">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">Projet 02 // Outil d'Aide à la Décision</div>
                <h3 className="font-sans text-3xl md:text-4xl font-bold uppercase mb-4 leading-tight group-hover:text-accent transition-colors">
                  Dashboard de Suivi Dynamique
                </h3>
                <p className="text-ink/70 mb-8 max-w-md">
                  Mise en pratique de l'ingénierie et de la Business Intelligence de base. Création d'un tableau de bord de pilotage sous Excel.
                </p>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-start gap-4 p-4 border border-grid bg-white/40">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>Création de KPIs, graphiques, de données budgétaires fictives.</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 border border-grid bg-white/40">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>Capacité à synthétiser des données brutes pour la prise de décision.</span>
                  </div>
                </div>
              </div>
              <div className="h-64 md:h-80 w-full bg-grid relative overflow-hidden border-t border-grid">
                <img src="https://picsum.photos/seed/dashboardexcel/800/600" className="w-full h-full object-cover filter grayscale mix-blend-multiply group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" alt="Data dashboard" />
              </div>
            </motion.div>

          </div>
        </section>

        {/* 5. FOOTER / CONTACT */}
        <section id="contact" className="py-24 px-6 bg-ink text-paper text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-full opacity-10 blur-[100px] bg-accent rounded-full pointer-events-none"></div>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <h2 className="font-display text-5xl md:text-8xl italic mb-6 text-paper">Engageons la discussion.</h2>
            <p className="font-mono uppercase tracking-widest text-paper/60 mb-12 text-sm md:text-base">
              Rigueur • Sérieux • Regard Neuf
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <a href="mailto:hamou.ahmed.tagira@escep.edu" className="px-8 py-4 bg-accent text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-ink transition-colors border-2 border-accent hover:border-white shadow-[8px_8px_0px_rgba(255,61,0,0.4)]">
                Email / Contact
              </a>
              <a href="#" className="px-8 py-4 bg-transparent text-paper font-bold uppercase tracking-widest text-sm border-2 border-paper/40 hover:border-paper hover:bg-paper/10 transition-colors shadow-[8px_8px_0px_rgba(255,255,255,0.05)]">
                Profil LinkedIn
              </a>
            </div>

            <div className="font-mono text-xs text-paper/40 flex flex-col md:flex-row justify-center gap-4 md:gap-12 uppercase tracking-widest">
               <span>Localisation: Niamey, Niger</span>
               <span>Mobilité: Internationale</span>
               <span>Diplôme visé: 2028</span>
            </div>
          </motion.div>
        </section>

      </main>

    </div>
  );
}

/* HELPER COMPONENT FOR SKILL LIST */
function SkillListItem({ title, details, perc, isLast = false }: { title: string, details: string, perc: string, isLast?: boolean }) {
  return (
    <li className={`group p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-white/40 transition-colors ${!isLast ? 'border-b border-grid' : ''}`}>
      <div className="max-w-md">
        <h4 className="font-bold text-lg uppercase tracking-wide mb-2 group-hover:text-accent transition-colors">{title}</h4>
        <p className="font-mono text-sm text-ink/70 leading-relaxed">{details}</p>
      </div>
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="w-full md:w-32 h-[1px] bg-grid relative overflow-hidden mt-1 md:mt-0">
          <motion.div 
            className="absolute top-0 left-0 bottom-0 bg-accent"
            initial={{ width: 0 }}
            whileInView={{ width: perc }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <span className="font-mono font-bold text-xl">{perc}</span>
      </div>
    </li>
  );
}
