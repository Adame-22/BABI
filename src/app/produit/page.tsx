"use client";

import { useState } from "react";
import { FadeIn } from "@/components/Animations";
import { FAQAccordion } from "@/components/FAQAccordion";


const faqData = [
  { question: "Est-ce dangereux pour mon bébé ?", answer: "Non. Le bracelet utilise la technologie Bluetooth Low Energy (BLE 5.0) qui est la moins émettrice. Les données sont stockées localement et synchronisées ponctuellement, sans émission radio continue." },
  { question: "Comment se charge BABI ?", answer: "Via une batterie externe USB-C 'clip-on' aimantée. Vous n'avez jamais besoin de retirer le bracelet de la cheville de votre bébé pour le recharger." },
  { question: "Jusqu'à quel âge ?", answer: "De la naissance à 18 mois. Le design repensé avec boucle infinie en matériau extensible s'adapte confortablement à la cheville de votre bébé tout au long de sa croissance, en une seule taille universelle." },
  { question: "Fonctionne-t-il sans smartphone ?", answer: "Oui ! Le bracelet intègre une alarme sonore locale qui se déclenche immédiatement en cas de constantes vitales alarmantes, même si vous n'avez pas votre téléphone." },
  { question: "Quelle autonomie ?", answer: "BABI offre une autonomie exceptionnelle allant de 5 à 7 jours selon l'intensité des mesures." }
];

export default function ProduitPage() {
  const [selectedMaterial, setSelectedMaterial] = useState("tissu");
  
  const materialImage = selectedMaterial === "silicone" 
    ? "/bracelet-silicone.jpg" 
    : "/bracelet-tissu.jpg";

  return (
    <div className="bg-cream min-h-screen pt-32 pb-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Gallery / Product Viewer */}
        <div className="lg:w-1/2">
          <FadeIn>
            <div 
              className="w-full aspect-square rounded-[3rem] shadow-[0_20px_50px_-10px_rgba(200,190,180,0.3)] border border-white transition-all duration-500 ease-in-out relative overflow-hidden group bg-[#FDF9F4]"
            >
              {/* Image Preview */}
              <img 
                 src={materialImage} 
                 alt={`BABI Bracelet en ${selectedMaterial}`} 
                 className="absolute inset-0 w-full h-full object-cover z-0" 
              />
              
              <div className="absolute top-6 left-6 z-10 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white shadow-sm">
                 <span className="text-xs uppercase tracking-widest text-[#8B847C] font-semibold">Aperçu {selectedMaterial}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <button 
                onClick={() => setSelectedMaterial("tissu")}
                className={`aspect-[4/3] rounded-2xl border-2 flex items-center justify-center cursor-pointer transition-all overflow-hidden relative ${selectedMaterial === 'tissu' ? 'border-[#C1A88B] shadow-md' : 'border-white hover:border-[#D1C8BC]'}`}
              >
                 <img src="/bracelet-tissu.jpg" className="w-full h-full object-cover" alt="Tissu" />
              </button>
              <button 
                onClick={() => setSelectedMaterial("silicone")}
                className={`aspect-[4/3] rounded-2xl border-2 flex items-center justify-center cursor-pointer transition-all overflow-hidden relative ${selectedMaterial === 'silicone' ? 'border-[#C1A88B] shadow-md' : 'border-white hover:border-[#D1C8BC]'}`}
              >
                 <img src="/bracelet-silicone.jpg" className="w-full h-full object-cover" alt="Silicone" />
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Configurations */}
        <div className="lg:w-1/2 space-y-10">
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-light text-[#7C746D] leading-tight mb-2 tracking-tight">
              BABI — Bracelet Connecté
            </h1>
            <p className="text-lg text-[#A8A198] text-balance mb-8">
              5 capteurs médicaux. Application dédiée. Zéro stress.
            </p>
            <div className="w-full h-[1px] bg-gradient-to-r from-[#EAE5DF] to-transparent mb-8"></div>
          </FadeIn>


          {/* Material Picker */}
          <FadeIn delay={0.4}>
            <div>
              <h3 className="font-bold text-text mb-4">Matière du bracelet :</h3>
              <div className="flex flex-col gap-3">
                <label className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                  selectedMaterial === "silicone" ? "border-babi bg-babi/5" : "border-lin bg-white"
                }`}>
                  <div className="flex items-center gap-4">
                    <input 
                      type="radio" 
                      name="material" 
                      value="silicone" 
                      checked={selectedMaterial === "silicone"} 
                      onChange={() => setSelectedMaterial("silicone")}
                      className="w-5 h-5 accent-babi"
                    />
                    <div>
                      <h4 className="font-bold text-text">Silicone médical</h4>
                      <p className="text-sm text-muted">Hypoallergénique, résistant à l'eau</p>
                    </div>
                  </div>
                </label>
                <label className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                  selectedMaterial === "tissu" ? "border-babi bg-babi/5" : "border-lin bg-white"
                }`}>
                  <div className="flex items-center gap-4">
                    <input 
                      type="radio" 
                      name="material" 
                      value="tissu" 
                      checked={selectedMaterial === "tissu"} 
                      onChange={() => setSelectedMaterial("tissu")}
                      className="w-5 h-5 accent-babi"
                    />
                    <div>
                      <h4 className="font-bold text-text">Tissu respirant</h4>
                      <p className="text-sm text-muted">Ultra-léger, anti-transpirant</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </FadeIn>

          {/* Reservation Block */}
          <FadeIn delay={0.5}>
            <div className="mt-12 bg-white rounded-3xl p-8 border border-lin shadow-[0_8px_30px_rgba(200,190,180,0.2)]">
               <div className="flex justify-between items-center mb-6">
                 <h3 className="text-2xl font-bold text-[#7C746D] tracking-tight">Réserver</h3>
                 <div className="text-2xl font-extrabold text-[#C1A88B]">189 €</div>
               </div>
               
               <form 
                 onSubmit={(e) => { e.preventDefault(); alert("Réservation confirmée pour " + selectedMaterial + " !"); }} 
                 className="space-y-4"
               >
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                     <label className="block text-xs font-semibold mb-1 text-[#B5ABA1] uppercase tracking-wider">Prénom parent</label>
                     <input required type="text" placeholder="Ex: Emma" className="w-full px-4 py-3 rounded-xl bg-[#FDF9F4] border border-[#EAE5DF] focus:border-[#C1A88B] outline-none transition-all placeholder:text-[#D1C8BC] text-[#7C746D] text-sm font-medium" />
                   </div>
                   <div>
                     <label className="block text-xs font-semibold mb-1 text-[#B5ABA1] uppercase tracking-wider">Email</label>
                     <input required type="email" placeholder="emma@email.com" className="w-full px-4 py-3 rounded-xl bg-[#FDF9F4] border border-[#EAE5DF] focus:border-[#C1A88B] outline-none transition-all placeholder:text-[#D1C8BC] text-[#7C746D] text-sm font-medium" />
                   </div>
                 </div>
                 <button type="submit" className="w-full bg-[#C1A88B] hover:bg-[#A38C6D] text-white font-bold py-4 rounded-xl mt-4 transition-colors flex items-center justify-center gap-2">
                   Précommander l'édition {selectedMaterial}
                 </button>
                 <p className="text-center text-xs text-[#B5ABA1] mt-4 flex items-center justify-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    Paiement sécurisé à l'expédition.
                 </p>
               </form>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* FAQ SECTION */}
      <div className="max-w-4xl mx-auto mt-32">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Foire Aux Questions</h2>
            <p className="text-muted">Tout ce que vous devez savoir sur BABI.</p>
          </div>
          <FAQAccordion items={faqData} />
        </FadeIn>
      </div>
    </div>
  );
}
