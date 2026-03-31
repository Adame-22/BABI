"use client";

import Link from "next/link";
import { FadeIn, ScaleIn } from "@/components/Animations";
import { StatBadge } from "@/components/StatBadge";
import { CapteurCard } from "@/components/CapteurCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PhoneMockup } from "@/components/PhoneMockup";
import { PreorderForm } from "@/components/PreorderForm";
import { HeartPulse, Wind, Thermometer, ActivitySquare, MoonStar, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      {/* HERO SECTION */}
      <section className="w-full relative min-h-[90vh] flex items-center justify-center bg-cream px-4 bg-[radial-gradient(ellipse_at_top_right,_var(--color-ciel)_0%,_transparent_70%)]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-lavande)_0%,_transparent_50%)] opacity-50 z-0 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center z-10">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-extrabold text-text tracking-tight mb-6">
              Votre bébé, surveillé. <br />
              <span className="text-babi">Vous, sereins.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed text-balance">
              BABI est le bracelet connecté qui surveille les constantes vitales de votre nourrisson 24h/24, de 0 à 18 mois.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="#produit" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-text text-white font-semibold text-lg hover:bg-black hover:scale-105 transition-all"
              >
                Découvrir BABI
              </Link>
              <Link 
                href="/precommande" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-babi text-white font-semibold text-lg hover:bg-babi-dark hover:scale-105 transition-all shadow-lg shadow-babi/30"
              >
                Précommander
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

      {/* APP PREVIEW */}
      <section className="w-full py-24 px-4 bg-ciel/30 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold text-text mb-6">
                L'app BABI — tout sous les yeux
              </h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                Gardez le contrôle où que vous soyez. BABI transmet les constantes vitales en temps réel à votre smartphone via Bluetooth Low Energy.
              </p>
              <ul className="space-y-4">
                {[
                  "Dashboard constantes en temps réel",
                  "Analyse du sommeil (phases, durée, qualité)",
                  "Écran d'alerte urgence avec conseils + bouton SAMU",
                  "Partage de l'historique avec votre pédiatre"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-babi/20 flex flex-shrink-0 items-center justify-center text-babi">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-text">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/app" className="text-babi font-semibold hover:underline flex items-center gap-2">
                  Voir toutes les fonctionnalités de l'App &rarr;
                </Link>
              </div>
            </FadeIn>
          </div>
          <div className="lg:w-1/2 flex justify-center w-full">
            <FadeIn delay={0.3}>
              <ScaleIn delay={0.4}>
                <PhoneMockup>
                  <div className="p-4 space-y-4">
                    <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-lin animate-pulse">
                      <div>
                         <p className="text-xs text-muted font-semibold">Rythme Cardiaque</p>
                         <p className="text-2xl font-bold text-red-500">120 bpm</p>
                      </div>
                      <HeartPulse className="text-red-500" />
                    </div>
                    <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-lin">
                      <div>
                         <p className="text-xs text-muted font-semibold">Saturation O₂</p>
                         <p className="text-2xl font-bold text-blue-500">98%</p>
                      </div>
                      <Wind className="text-blue-500" />
                    </div>
                    <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-lin">
                      <div>
                         <p className="text-xs text-muted font-semibold">Température</p>
                         <p className="text-2xl font-bold text-orange-500">36.8°C</p>
                      </div>
                      <Thermometer className="text-orange-500" />
                    </div>
                  </div>
                </PhoneMockup>
              </ScaleIn>
            </FadeIn>
          </div>
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
