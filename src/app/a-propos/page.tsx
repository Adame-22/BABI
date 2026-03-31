"use client";

import { FadeIn } from "@/components/Animations";
import { Users } from "lucide-react";

export default function AProposPage() {
  const team = [
    { name: "Adame", role: "Équipe BABI" },
    { name: "Nadia", role: "Équipe BABI" },
    { name: "Wayan", role: "Équipe BABI" },
    { name: "Annaëlle", role: "Équipe BABI" },
    { name: "Sthely", role: "Équipe BABI" },
  ];

  return (
    <div className="bg-white min-h-screen py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-text mb-6">
              Nés d'une <span className="text-babi">conviction</span>
            </h1>
            <p className="text-xl text-muted leading-relaxed text-balance">
              "Permettre à chaque parent de dormir sereinement, en sachant que leur bébé est entièrement protégé par une technologie fiable et discrète."
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-ciel/30 border border-lin rounded-3xl p-10 mb-16 text-left shadow-sm">
            <h2 className="text-2xl font-bold text-text mb-4">Notre Histoire</h2>
            <p className="text-muted leading-relaxed">
              BABI (Baby Alert Biometric Intelligence) est né d'un projet étudiant ambitieux mené par 5 étudiants de l'<strong>ISD Flaubert</strong> (MDC 2026). 
              Confrontés aux statistiques alarmantes concernant la mort inattendue du nourrisson 
              et constatant les limites technologiques des solutions actuelles sur le marché, 
              nous avons décidé de concevoir le moniteur de santé pour bébé le plus avancé, rassurant et fiable.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lavande text-babi-dark mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-text mb-10">L'équipe derrière BABI</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {team.map((member, idx) => (
                <div key={idx} className="bg-cream rounded-2xl p-6 border border-lin hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-text">{member.name}</h3>
                  <p className="text-sm font-medium text-babi">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
