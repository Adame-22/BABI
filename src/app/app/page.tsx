"use client";

import { FadeIn } from "@/components/Animations";
import { CheckCircle2 } from "lucide-react";

export default function AppPage() {
  return (
    <div className="bg-ciel/20 min-h-screen pt-32 pb-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-text mb-6 text-balance">
              Tout est sous contrôle,<br className="hidden md:block" /> du bout des doigts.
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto text-balance">
              L'application BABI retranscrit les signaux vitaux de votre bébé en informations claires et exploitables.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start mt-20">
           {/* Section 1: Dashboard */}
           <FadeIn delay={0.1}>
             <div className="text-center space-y-6">
                <div className="w-full max-w-[320px] aspect-[1/2] rounded-[3rem] border-[10px] border-white shadow-2xl mx-auto overflow-hidden bg-white group relative">
                  <div className="absolute top-0 inset-x-0 h-6 bg-transparent z-20 flex justify-center">
                     <div className="w-24 h-5 bg-white rounded-b-xl"></div>
                  </div>
                  <img src="/app-accueil.jpg" alt="Accueil BABI" className="w-full h-full object-cover relative z-10" />
                  <div className="absolute inset-0 z-0 bg-cream animate-pulse flex items-center justify-center">
                    <span className="text-muted text-xs font-semibold uppercase tracking-widest text-[#B5ABA1]">Accueil</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#7C746D] tracking-tight">Dashboard Santé</h3>
                <p className="text-[#A8A198] text-sm">Aperçu instantané du rythme cardiaque, de la SpO2 et de la température corporelle.</p>
             </div>
           </FadeIn>

           {/* Section 2: Sommeil */}
           <FadeIn delay={0.2}>
             <div className="text-center space-y-6">
                 <div className="w-full max-w-[320px] aspect-[1/2] rounded-[3rem] border-[10px] border-white shadow-2xl mx-auto overflow-hidden bg-white group relative">
                  <div className="absolute top-0 inset-x-0 h-6 bg-transparent z-20 flex justify-center">
                     <div className="w-24 h-5 bg-white rounded-b-xl"></div>
                  </div>
                  <img src="/app-sommeil.jpg" alt="Sommeil BABI" className="w-full h-full object-cover relative z-10" />
                  <div className="absolute inset-0 z-0 bg-lavande/20 animate-pulse flex items-center justify-center text-center">
                    <span className="text-muted text-xs font-semibold uppercase tracking-widest text-[#A29CA8]">Sommeil</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#7C746D] tracking-tight">Analyse du sommeil</h3>
                <p className="text-[#A8A198] text-sm">Durée de sommeil profond et léger pour mieux comprendre le rythme de votre bébé.</p>
             </div>
           </FadeIn>

           {/* Section 3: Historique */}
           <FadeIn delay={0.3}>
             <div className="text-center space-y-6">
                 <div className="w-full max-w-[320px] aspect-[1/2] rounded-[3rem] border-[10px] border-white shadow-2xl mx-auto overflow-hidden bg-white group relative">
                  <div className="absolute top-0 inset-x-0 h-6 bg-transparent z-20 flex justify-center">
                     <div className="w-24 h-5 bg-white rounded-b-xl"></div>
                  </div>
                  <img src="/app-historique.jpg" alt="Historique BABI" className="w-full h-full object-cover relative z-10" />
                  <div className="absolute inset-0 z-0 bg-ciel/20 animate-pulse flex items-center justify-center text-center">
                    <span className="text-muted text-xs font-semibold uppercase tracking-widest text-[#9EA8AF]">Historique</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#7C746D] tracking-tight">Tendances Historiques</h3>
                <p className="text-[#A8A198] text-sm">Suivi hebdomadaire et alertes paramétrables sur 30 jours pour votre médecin.</p>
             </div>
           </FadeIn>
        </div>

        {/* Freemium Section */}
        <FadeIn delay={0.4}>
          <div className="mt-32 max-w-5xl mx-auto">
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-light text-[#7C746D] tracking-tight mb-4">Une application pensée pour <strong className="font-extrabold text-[#C1A88B]">chaque famille</strong></h2>
               <p className="text-[#A8A198] text-lg max-w-2xl mx-auto">Toutes les fonctionnalités vitales sont complètement gratuites. Découvrez BABI+ pour débloquer des analyses expertes à partager avec votre médecin.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
               {/* Free Tier */}
               <div className="bg-[#FDF9F4]/50 border border-[#EAE5DF] rounded-[3rem] p-10 shadow-sm flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-[#7C746D] mb-2 tracking-tight">App BABI</h3>
                  <div className="text-4xl font-light text-[#A8A198] mb-8 uppercase tracking-widest text-sm mt-2">Inclus avec le bracelet</div>
                  
                  <div className="flex-grow">
                    <ul className="space-y-5 text-[#8E867E] text-sm">
                      <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-[#D1C8BC] shrink-0"/> <span>Surveillance vitale en temps réel <br/><span className="text-[#B5ABA1] text-xs">(Rythme cardiaque, Température, SpO2, Position)</span></span></li>
                      <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-[#D1C8BC] shrink-0"/> <span>Alertes d'urgence locales et notifications smartphone</span></li>
                      <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-[#D1C8BC] shrink-0"/> <span>Historique de la santé (24 dernières heures)</span></li>
                      <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-[#D1C8BC] shrink-0"/> <span>Détail complet de la nuit précédente</span></li>
                      <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-[#D1C8BC] shrink-0"/> <span>Synchronisation avec 1 téléphone parent</span></li>
                    </ul>
                  </div>
               </div>

               {/* Premium Tier */}
               <div className="bg-white border-[3px] border-[#C1A88B] rounded-[3rem] p-10 shadow-[0_20px_50px_-10px_rgba(193,168,139,0.3)] relative flex flex-col h-full">
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#C1A88B] text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-md shadow-[#C1A88B]/30">Essai 30 j. inclus</div>
                  <h3 className="text-2xl font-extrabold text-[#7C746D] mb-2 tracking-tight">BABI+</h3>
                  <div className="text-4xl font-extrabold text-[#C1A88B] mb-8">9,99 €<span className="text-base font-medium text-[#A8A198] ml-1">/mois</span></div>
                  
                  <div className="flex-grow">
                    <ul className="space-y-5 text-[#7C746D] text-sm font-medium">
                      <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-[#C1A88B] shrink-0"/> <span className="text-[#C1A88B] font-bold">Toutes les fonctionnalités gratuites, plus :</span></li>
                      <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-[#C1A88B] shrink-0"/> <span>Historique de santé et de sommeil <strong className="font-extrabold">illimité</strong></span></li>
                      <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-[#C1A88B] shrink-0"/> <span>Exports cliniques PDF détaillés pour le pédiatre</span></li>
                      <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-[#C1A88B] shrink-0"/> <span>Partage "Famille/Nounou" multi-comptes sécurisé</span></li>

                    </ul>
                  </div>
               </div>
             </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-24 flex flex-col sm:flex-row justify-center gap-6">
             <button className="bg-text text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:scale-105 transition-transform hover:shadow-lg">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-6 h-6 fill-current">
                 <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
               </svg>
               App Store
             </button>
             
             <button className="bg-text text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:scale-105 transition-transform hover:shadow-lg">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current">
                 <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
               </svg>
               Google Play
             </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
