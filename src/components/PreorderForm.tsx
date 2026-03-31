"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

type PreorderFormData = {
  firstname: string;
  email: string;
  color: string;
  size: string;
  material: string;
};

export function PreorderForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<PreorderFormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: PreorderFormData) => {
    // Simulate an API call
    console.log("Preorder submitted: ", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-cream border border-lin rounded-3xl p-10 text-center flex flex-col items-center shadow-sm"
      >
        <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
        <h3 className="text-2xl font-bold text-text mb-2">Merci !</h3>
        <p className="text-muted max-w-sm">
          Vous serez contacté(e) en priorité au lancement de BABI. Nous sommes impatients de vous accompagner avec votre bébé.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-lin">
      <h3 className="text-2xl font-bold text-text mb-6">Réservez votre BABI</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-text">Prénom</label>
          <input
            {...register("firstname", { required: true })}
            placeholder="Votre prénom"
            className="w-full px-4 py-3 rounded-xl bg-cream border border-lin focus:border-babi focus:ring-2 focus:ring-babi/20 outline-none transition-all placeholder:text-muted/50"
          />
          {errors.firstname && <span className="text-red-500 text-xs mt-1 block">Ce champ est requis</span>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-text">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="vous@email.com"
            className="w-full px-4 py-3 rounded-xl bg-cream border border-lin focus:border-babi focus:ring-2 focus:ring-babi/20 outline-none transition-all placeholder:text-muted/50"
          />
          {errors.email && <span className="text-red-500 text-xs mt-1 block">Ce champ est requis</span>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-text">Coloris souhaité</label>
            <select
              {...register("color")}
              className="w-full px-4 py-3 rounded-xl bg-cream border border-lin focus:border-babi outline-none appearance-none cursor-pointer"
            >
              <option value="creme">Crème</option>
              <option value="lin">Lin</option>
              <option value="lavande">Lavande</option>
              <option value="ciel">Ciel</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-text">Taille estimée</label>
            <select
              {...register("size")}
              className="w-full px-4 py-3 rounded-xl bg-cream border border-lin focus:border-babi outline-none appearance-none cursor-pointer"
            >
              <option value="0-6">0–6 mois</option>
              <option value="6-12">6–12 mois</option>
              <option value="12-18">12–18 mois</option>
            </select>
          </div>
        </div>

        <div>
           <label className="block text-sm font-semibold mb-2 text-text">Choix de la matière</label>
           <select
              {...register("material")}
              className="w-full px-4 py-3 rounded-xl bg-cream border border-lin focus:border-babi outline-none appearance-none cursor-pointer"
            >
              <option value="silicone">Silicone médical hypoallergénique</option>
              <option value="tissu">Tissu respirant</option>
            </select>
        </div>

        <button
          type="submit"
          className="w-full bg-babi text-white font-bold py-4 rounded-xl hover:bg-babi-dark hover:-translate-y-1 transition-all shadow-lg shadow-babi/30"
        >
          Je précommande BABI
        </button>
      </div>
    </form>
  );
}
