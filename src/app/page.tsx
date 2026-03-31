"use client";

import Link from "next/link";
import { FadeIn, ScaleIn } from "@/components/Animations";
import { StatBadge } from "@/components/StatBadge";
import { CapteurCard } from "@/components/CapteurCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PhoneMockup } from "@/components/PhoneMockup";
import { PreorderForm } from "@/components/PreorderForm";
import { HeartPulse, Wind, Thermometer, ActivitySquare, MoonStar, ShieldCheck, Link2, Sparkles, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      {/* HERO SECTION */}
      <section className="w-full relative min-h-[90vh] flex items-center justify-center bg-[#FDF9F4] px-4 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          {/* Default image placeholder for the baby foot / heroine visual */}
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-80 mix-blend-multiply" />
          {/* Subtle gradient to ensure text readability at the top and transition at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDF9F4]/80 via-transparent to-[#FDF9F4]" />
        </div>
        
        <div className="max-w-5xl mx-auto text-center z-10 pt-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-light text-[#A39B94] tracking-[0.2em] mb-2 uppercase">
              B A B I
            </h1>
            <h2 className="text-sm md:text-base font-medium text-[#A39B94] tracking-[0.3em] mb-12 uppercase">
              Baby Alert Biometric Intelligence
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col items-center gap-4 mb-16">
              <div className="px-8 py-3.5 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_rgba(200,190,180,0.2)] flex items-center gap-4 text-[#8E867E] font-semibold text-sm tracking-widest uppercase hover:bg-white/50 transition-colors cursor-default">
                <HeartPulse size={20} className="text-[#E79495]" fill="#E79495" />
                Rythme cardiaque stable
              </div>
              <div className="px-8 py-3.5 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_rgba(200,190,180,0.2)] flex items-center gap-4 text-[#8E867E] font-semibold text-sm tracking-widest uppercase hover:bg-white/50 transition-colors cursor-default">
                <Thermometer size={20} className="text-[#C1A88B]" />
                Température 36.8°C
              </div>
              <div className="px-8 py-3.5 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_rgba(200,190,180,0.2)] flex items-center gap-4 text-[#8E867E] font-semibold text-sm tracking-widest uppercase hover:bg-white/50 transition-colors cursor-default">
                <Wind size={20} className="text-[#A2B5C1]" />
                O₂ Oxygène 98 %
              </div>
              <div className="px-8 py-3.5 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_rgba(200,190,180,0.2)] flex items-center gap-4 text-[#8E867E] font-semibold text-sm tracking-widest uppercase hover:bg-white/50 transition-colors cursor-default">
                <MoonStar size={20} className="text-[#B5B0A8]" />
                Sommeil sécurisé
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h3 className="text-4xl md:text-5xl font-medium text-[#B6ACA4] tracking-tight mb-4 text-balance">
              Surveillez ce qui<br/>compte vraiment
            </h3>
            <p className="text-lg md:text-xl text-[#9A938C] max-w-2xl mx-auto mb-10 font-light text-balance leading-relaxed">
              Protégez votre bébé jour et nuit <br className="hidden md:block"/> grâce à un bracelet de cheville intelligent, <br className="hidden md:block"/> ultra fin et confortable
            </p>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-20">
              <Link 
                href="#produit" 
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/90 backdrop-blur-xl border border-white/50 shadow-[0_20px_40px_-10px_rgba(180,170,160,0.4)] text-[#7F7972] font-semibold text-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
              >
                <Link2 size={24} className="text-[#6C8FC5]" />
                Découvrir Babi
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROBLEMATIQUE */}
      <section className="w-full py-24 px-4 bg-white relative">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-text mb-6 text-balance">
                250 à 350 morts inattendues du nourrisson chaque année en France
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Les solutions existantes (tapis, matelas) sont limitées : un seul capteur, uniquement la nuit, fausses alertes fréquentes. <strong>BABI fait plus.</strong>
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}><StatBadge number="75%" label="surviennent avant 6 mois" /></FadeIn>
            <FadeIn delay={0.2}><StatBadge number="2–4" label="mois : pic de survenue" /></FadeIn>
            <FadeIn delay={0.3}><StatBadge number="3e" label="cause de mortalité infantile en France" /></FadeIn>
          </div>
        </div>
      </section>

      {/* SOLUTION - 5 CAPTEURS */}
      <section id="produit" className="w-full py-24 px-4 bg-lin/30">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-text mb-6">
                Un bracelet. 5 capteurs. Une sérénité totale.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <FadeIn delay={0.1}>
              <CapteurCard icon={<HeartPulse />} title="Rythme cardiaque" description="Alerte immédiate en cas de tachycardie ou bradycardie détectée." color="bg-red-100 text-red-600" />
            </FadeIn>
            <FadeIn delay={0.2}>
              <CapteurCard icon={<Wind />} title="Saturation O₂" description="Mesure de l'oxygénation sanguine pour prévenir les risques d'asphyxie." color="bg-blue-100 text-blue-600" />
            </FadeIn>
            <FadeIn delay={0.3}>
              <CapteurCard icon={<Thermometer />} title="Température" description="Suivi continu de la température corporelle avec alerte fièvre." color="bg-orange-100 text-orange-600" />
            </FadeIn>
            <FadeIn delay={0.4}>
              <CapteurCard icon={<ActivitySquare />} title="Accéléromètre" description="Détecte la position, retournement sur le ventre et absence de mouvement." color="bg-green-100 text-green-600" />
            </FadeIn>
            <FadeIn delay={0.5}>
              <CapteurCard icon={<MoonStar />} title="Analyse du sommeil" description="Phases, durée et qualité du sommeil visualisées sur l'application." color="bg-lavande text-babi" />
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="bg-gradient-to-br from-babi to-babi-dark rounded-3xl p-6 text-white flex flex-col justify-center h-full shadow-lg">
                <h3 className="text-xl font-bold mb-2">Technologie médicale</h3>
                <p className="text-cream/80 text-sm">Précision chirurgicale dans un format miniaturisé pour respecter le confort de votre bébé.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* DIFFERENCIATION */}
      <section className="w-full py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-text mb-12 text-center">Pourquoi BABI est différent</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <ComparisonTable />
          </FadeIn>
        </div>
      </section>

      {/* APP PREVIEW (Image 2 Design) */}
      <section className="w-full py-24 px-4 bg-gradient-to-b from-[#FAF7F2] to-[#F1EBE1] relative">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-light text-[#8F857D] mb-4 text-balance">
                Votre bébé sous surveillance.<br />
                En toute sérénité.
              </h2>
            </div>
          </FadeIn>

          {/* Top 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16">
            <FadeIn delay={0.1}>
              <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-[0_10px_40px_-10px_rgba(200,190,180,0.3)] border border-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#EFEBE4] flex items-center justify-center text-[#9E958C]">
                    {/* Placeholder Icon */}
                    <div className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center"><div className="w-1 h-2 bg-current rounded-full" /></div>
                  </div>
                  <h4 className="text-xl font-medium text-[#7C746D]">Vigilance discrète</h4>
                </div>
                <p className="text-[#968E87] leading-relaxed">
                  Surveillance en temps réel du rythme cardiaque, de l'oxygène et de la température.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-[0_10px_40px_-10px_rgba(200,190,180,0.3)] border border-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#EAD4D5] flex items-center justify-center text-[#B5898A]">
                    <ShieldCheck size={20} />
                  </div>
                  <h4 className="text-xl font-medium text-[#7C746D]">Alertes immédiates</h4>
                </div>
                <p className="text-[#968E87] leading-relaxed">
                  Notifications instantanées en cas d'anomalie, avec recommandations de sécurité.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 w-full items-center">
            {/* Phone Left */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end w-full relative z-10">
              <FadeIn delay={0.3}>
                <ScaleIn delay={0.4}>
                  <PhoneMockup>
                    <div className="px-5 pb-5 overflow-hidden h-full flex flex-col bg-[#FDF9F4]">
                      <div className="flex justify-between items-center mb-6 pt-2">
                        <span className="text-xs font-medium text-[#B5ABA1]">9:41</span>
                        <div className="flex gap-1 text-[10px] font-bold text-[#B5ABA1] items-center">
                          <span>BT</span>
                          <div className="w-5 h-2.5 border border-current rounded-[3px] p-px"><div className="w-full h-full bg-current rounded-[1px]"></div></div>
                        </div>
                      </div>
                      
                      <h4 className="text-2xl font-light text-[#7C756E] mb-1">Bonjour, Emma</h4>
                      <p className="text-xs text-[#A8A198] mb-6">Lucas · 4 mois · Tout va bien</p>
                      
                      <div className="grid grid-cols-3 gap-2 mb-8">
                        <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center shadow-[inset_0_2px_10px_rgba(220,210,200,0.3)] border border-[#F5EFE8]">
                            <span className="text-xl font-medium text-[#7C756E]">128</span>
                            <span className="text-[10px] text-[#A8A198]">bpm</span>
                        </div>
                        <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center shadow-[inset_0_2px_10px_rgba(220,210,200,0.3)] border border-[#F5EFE8]">
                            <span className="text-xl font-medium text-[#7C756E]">98%</span>
                            <span className="text-[10px] text-[#A8A198]">SpO₂</span>
                        </div>
                        <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center shadow-[inset_0_2px_10px_rgba(220,210,200,0.3)] border border-[#F5EFE8]">
                            <span className="text-xl font-medium text-[#7C756E]">36.8°</span>
                            <span className="text-[10px] text-[#A8A198]">temp.</span>
                        </div>
                      </div>

                      <h5 className="text-sm font-medium text-[#B5ABA1] mb-3">Statut</h5>
                      
                      <div className="space-y-3 flex-1">
                        <div className="bg-[#E4ECE6] rounded-2xl p-4 flex items-center gap-3">
                            <div className="bg-[#8DAA96] text-white rounded-full p-1"><CheckCircle2 size={16} strokeWidth={3}/></div>
                            <span className="text-sm font-medium text-[#65796A] leading-tight">Rythme cardiaque<br/>normal</span>
                        </div>
                        <div className="bg-[#E4ECE6] rounded-2xl p-4 flex items-center gap-3">
                            <div className="bg-[#8DAA96] text-white rounded-full p-1"><CheckCircle2 size={16} strokeWidth={3}/></div>
                            <span className="text-sm font-medium text-[#65796A]">Position : sur le dos</span>
                        </div>
                        <div className="bg-[#F3EFEA] rounded-2xl p-4 flex items-center gap-3 opacity-60">
                            <div className="bg-[#E2DCD4] rounded-full w-6 h-6 border-2 border-[#F3EFEA] shadow-inner"></div>
                            <span className="text-sm font-medium text-[#A69E96]">Dans la zone sécurisée</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-between px-2 text-[11px] text-[#BDB4AA] font-medium">
                        <span className="text-[#8B847C]">Accueil</span>
                        <span>Sommeil</span>
                        <span>Historique</span>
                        <span>Réglages</span>
                      </div>
                    </div>
                  </PhoneMockup>
                </ScaleIn>
              </FadeIn>
            </div>

            {/* List Right */}
            <div className="lg:w-1/2 flex flex-col space-y-6">
              <FadeIn delay={0.4}>
                <div className="bg-white/50 backdrop-blur-md rounded-[2rem] p-6 flex gap-5 items-start border border-white/60">
                  <div className="w-12 h-12 bg-[#F6ECE2] rounded-full flex items-center justify-center text-[#CDA381] shrink-0">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#7C746D] mb-1">Affichage discret</h4>
                    <p className="text-sm text-[#968E87] leading-relaxed">Affiche une lumière douce<br/>en cas de risque</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div className="bg-white/50 backdrop-blur-md rounded-[2rem] p-6 flex gap-5 items-start border border-white/60">
                  <div className="w-12 h-12 bg-[#E6EBE6] rounded-full flex items-center justify-center text-[#8C9C8F] shrink-0">
                    <ActivitySquare size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#7C746D] mb-1">Surveille ce qui compte</h4>
                    <p className="text-sm text-[#968E87] leading-relaxed">Rythme cardiaque, oxygène,<br/>température, position</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.6}>
                <div className="bg-white/50 backdrop-blur-md rounded-[2rem] p-6 flex gap-5 items-start border border-white/60">
                  <div className="w-12 h-12 bg-[#EAE8EF] rounded-full flex items-center justify-center text-[#9994AD] shrink-0">
                    <Wind size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#7C746D] mb-1">Ultra confortable</h4>
                    <p className="text-sm text-[#968E87] leading-relaxed">Bande hypoallergénique<br/>en tissu respirant</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
          
          {/* Matériaux Sans Danger Pill */}
          <FadeIn delay={0.7} className="w-full mt-16 pb-8">
            <div className="w-full max-w-4xl mx-auto bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-6 text-center border border-white/80 shadow-[0_10px_40px_-10px_rgba(200,190,180,0.2)]">
              <h5 className="text-[#8F857D] font-medium mb-4 text-lg">Matériaux sans danger</h5>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center text-[#8C847B] text-sm">
                <div className="flex items-center justify-center gap-2 bg-white/60 rounded-full px-5 py-2.5 shadow-sm border border-white">
                  <ShieldCheck size={18} className="text-[#CBA88D]"/> Hypoallergénique
                </div>
                <div className="flex items-center justify-center gap-2 bg-white/60 rounded-full px-5 py-2.5 shadow-sm border border-white">
                  <MoonStar size={18} className="text-[#A2B5C1]"/> Sans ondes fortes
                </div>
                <div className="flex items-center justify-center gap-2 bg-white/60 rounded-full px-5 py-2.5 shadow-sm border border-white">
                  <Wind size={18} className="text-[#AAB6CC]"/> Résistant à l'eau
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* REASSURANCE ONDES */}
      <section className="w-full py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-text mb-6">
              La sécurité avant tout — même pour les ondes
            </h2>
            <div className="bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-full inline-block mb-10 text-sm">
              Certification CE dispositif médical classe IIb (en cours)
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h4 className="font-bold text-lg mb-2">Bluetooth Low Energy (BLE 5.0)</h4>
                <p className="text-sm text-muted">Technologie la moins émettrice, sans danger prouvé pour le cerveau en développement des nourrissons.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Stockage local des données</h4>
                <p className="text-sm text-muted">Synchronisation ponctuelle des données, pas d'émission continue d'ondes radio.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Alarme sonore locale</h4>
                <p className="text-sm text-muted">Même en cas de perte de connexion, le bracelet émet une puissante alerte sonore autonome en cas d'urgence.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA FINAL PRE-ORDER */}
      <section className="w-full py-24 px-4 bg-lavande/40">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <PreorderForm />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
