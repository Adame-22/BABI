"use client";

import { useState } from "react";
import { FadeIn } from "@/components/Animations";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Check } from "lucide-react";

const faqData = [
  { question: "Est-ce dangereux pour mon bébé ?", answer: "Non. Le bracelet utilise la technologie Bluetooth Low Energy (BLE 5.0) qui est la moins émettrice. Les données sont stockées localement et synchronisées ponctuellement, sans émission radio continue." },
  { question: "Comment se charge BABI ?", answer: "Via une batterie externe USB-C 'clip-on' aimantée. Vous n'avez jamais besoin de retirer le bracelet du poignet de votre bébé pour le recharger." },
  { question: "Jusqu'à quel âge ?", answer: "De la naissance à 18 mois, grâce à nos 3 tailles de bracelets évolutifs (0-6 mois, 6-12 mois, 12-18 mois)." },
  { question: "Fonctionne-t-il sans smartphone ?", answer: "Oui ! Le bracelet intègre une alarme sonore locale qui se déclenche immédiatement en cas de constantes vitales alarmantes, même si vous n'avez pas votre téléphone." },
  { question: "Quelle autonomie ?", answer: "BABI offre une autonomie exceptionnelle allant de 5 à 7 jours selon l'intensité des mesures." }
];

const colors = [
  { id: "creme", name: "Crème", hex: "#FDFAF5" },
  { id: "lin", name: "Lin", hex: "#EDE8DF" },
  { id: "lavande", name: "Lavande", hex: "#E8E4F4" },
  { id: "ciel", name: "Ciel", hex: "#E1F0FB" }
];

export default function ProduitPage() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState("0-6");
  const [selectedMaterial, setSelectedMaterial] = useState("silicone");

  return (
    <div className="bg-cream min-h-screen pt-32 pb-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Gallery / Product Viewer */}
        <div className="lg:w-1/2">
          <FadeIn>
            <div 
              className="w-full aspect-square rounded-[3rem] shadow-xl border-4 border-white transition-colors duration-500 ease-in-out flex items-center justify-center p-8 relative overflow-hidden group"
              style={{ backgroundColor: selectedColor.hex }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent object-cover z-0"></div>
              <div className="z-10 bg-white/40 backdrop-blur-sm p-8 rounded-[2rem] border border-white/50 text-center">
                 <div className="text-xs uppercase tracking-widest text-[#2C2C2A]/60 font-bold mb-2">Aperçu</div>
                 <h2 className="text-3xl font-extrabold text-[#2C2C2A]">{selectedColor.name}</h2>
                 <p className="text-sm font-medium mt-4 text-[#2C2C2A]/80">{selectedMaterial === "silicone" ? "Silicone hypoallergénique" : "Tissu respirant"} • {selectedSize} mois</p>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mt-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-white rounded-2xl border border-lin flex items-center justify-center cursor-pointer hover:border-babi transition-colors">
                   <div className="w-8 h-8 rounded-full opacity-50 bg-text"></div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Configurations */}
        <div className="lg:w-1/2 space-y-10">
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-text leading-tight mb-4">
              BABI — Bracelet Connecté
            </h1>
            <p className="text-xl text-muted text-balance border-b border-lin pb-8">
              5 capteurs médicaux. Application dédiée. Zéro stress.
            </p>
          </FadeIn>

          {/* Color Picker */}
          <FadeIn delay={0.2}>
            <div>
              <h3 className="font-bold text-text mb-4">Coloris : {selectedColor.name}</h3>
              <div className="flex gap-4">
                {colors.map(color => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center ${
                      selectedColor.id === color.id ? "border-text scale-110" : "border-transparent hover:scale-105 shadow-sm"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {selectedColor.id === color.id && <Check className="w-5 h-5 text-text/50 mix-blend-difference" />}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Size Picker */}
          <FadeIn delay={0.3}>
            <div>
              <h3 className="font-bold text-text mb-4">Taille (évolutive) :</h3>
              <div className="flex flex-wrap gap-4">
                {["0-6", "6-12", "12-18"].map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-full font-semibold border-2 transition-all ${
                      selectedSize === size 
                      ? "border-babi bg-babi text-white shadow-md shadow-babi/20" 
                      : "border-lin bg-white text-text hover:border-babi/50"
                    }`}
                  >
                    {size} mois
                  </button>
                ))}
              </div>
            </div>
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
