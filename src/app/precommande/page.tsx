"use client";

import { PreorderForm } from "@/components/PreorderForm";
import { FadeIn } from "@/components/Animations";

export default function PrecommandePage() {
  return (
    <div className="bg-cream min-h-screen py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-text mb-4">
              Passez en priorité
            </h1>
            <p className="text-muted text-lg text-balance max-w-lg mx-auto">
              La demande pour BABI est forte. Précommandez aujourd'hui sans frais pour garantir votre exemplaire à notre lancement.
            </p>
          </div>
          <PreorderForm />
        </FadeIn>
      </div>
    </div>
  );
}
