"use client";

import { FadeIn } from "@/components/Animations";
import { PhoneMockup } from "@/components/PhoneMockup";
import { MoonStar, HeartPulse, MapPin, Bell } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
           {/* Section 1: Dashboard */}
           <FadeIn delay={0.1}>
             <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold">Dashboard Santé en temps réel</h3>
                <p className="text-muted">Un aperçu instantané du rythme cardiaque, de la saturation et de la température corporelle.</p>
                <PhoneMockup>
                   <div className="p-4 space-y-4">
                     <div className="bg-white p-4 rounded-xl shadow-sm border border-lin animate-pulse"><HeartPulse className="text-red-500 mb-2"/> <div className="text-xl font-bold">115 bpm</div><div className="text-xs text-muted">Normal pour l'âge</div></div>
                     <div className="bg-babi text-white p-4 rounded-xl shadow-sm flex items-center justify-between"><span className="font-semibold">Bébé sur le dos</span></div>
                   </div>
                </PhoneMockup>
             </div>
           </FadeIn>

           {/* Section 2: Sommeil */}
           <FadeIn delay={0.2}>
             <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold">Analyse du sommeil</h3>
                <p className="text-muted">Analysez la durée de sommeil profond et léger pour mieux comprendre le rythme de votre bébé.</p>
                <PhoneMockup>
                   <div className="p-4 space-y-4">
                     <div className="bg-lavande p-4 rounded-xl shadow-sm text-center">
                        <MoonStar className="text-babi-dark mx-auto mb-2 w-8 h-8"/> 
                        <div className="text-2xl font-extrabold text-babi-dark">8h 45m</div>
                        <div className="text-sm font-semibold text-babi">Total sommeil cette nuit</div>
                     </div>
                     <div className="bg-white p-3 rounded-xl border border-lin flex gap-2">
                        <div className="w-1/3 bg-babi h-8 rounded-full" title="Sommeil Profond"></div>
                        <div className="w-1/2 bg-ciel h-8 rounded-full" title="Sommeil Léger"></div>
                        <div className="w-1/6 bg-orange-100 h-8 rounded-full" title="Phase d'éveil"></div>
                     </div>
                   </div>
                </PhoneMockup>
             </div>
           </FadeIn>

           {/* Section 3: Alertes */}
           <FadeIn delay={0.3}>
             <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold">Urgences & Historique</h3>
                <p className="text-muted">Exports pour votre pédiatre sur 30 jours, alertes paramétrables, et guidages SAMU intégrés.</p>
                <PhoneMockup>
                   <div className="p-4 h-full flex flex-col justify-center space-y-4 align-middle">
                     <div className="bg-red-50 p-6 rounded-2xl shadow-sm border border-red-200 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-red-500 rounded-bl-full animate-ping opacity-20"></div>
                        <Bell className="text-red-600 mx-auto mb-2 w-10 h-10 animate-bounce"/> 
                        <div className="text-xl font-extrabold text-red-600 mb-2">Anomalie O₂ détectée</div>
                        <button className="bg-red-600 w-full text-white font-bold py-3 mt-4 rounded-xl">APPELER URGENCE (15)</button>
                     </div>
                   </div>
                </PhoneMockup>
             </div>
           </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-24 flex flex-col sm:flex-row justify-center gap-6">
             <button className="bg-black text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"><span className="text-xl"></span> App Store</button>
             <button className="bg-black text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"><span className="text-xl">▶</span> Google Play</button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
