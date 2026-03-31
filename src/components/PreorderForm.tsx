"use client";

import { useForm, useWatch } from "react-hook-form";
import { useState } from "react";
import { CheckCircle2, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type PreorderFormData = {
  firstname: string;
  email: string;
  material: string;
};

export function PreorderForm() {
  const { register, handleSubmit, control, formState: { errors } } = useForm<PreorderFormData>({
    defaultValues: {
      material: "tissu"
    }
  });
  
  const selectedMaterial = useWatch({
    control,
    name: "material",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: PreorderFormData) => {
    console.log("Preorder submitted: ", data);
    setIsSubmitted(true);
  };

  // Image source path based on material
  const materialImage = selectedMaterial === "silicone" 
    ? "/bracelet-silicone.jpg" 
    : "/bracelet-tissu.jpg";

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/80 backdrop-blur-xl border border-white rounded-[2.5rem] p-12 text-center flex flex-col items-center shadow-[0_10px_40px_-10px_rgba(200,190,180,0.3)]"
      >
        <div className="w-20 h-20 bg-[#E4ECE6] rounded-full flex items-center justify-center mb-6 shadow-inner">
           <CheckCircle2 className="w-10 h-10 text-[#65796A]" strokeWidth={3} />
        </div>
        <h3 className="text-3xl font-light text-[#7C756E] mb-3">Précommande enregistrée</h3>
        <p className="text-[#A8A198] max-w-sm leading-relaxed">
          Merci ! Vous serez prioritaire lors du lancement officiel. Votre choix de bracelet ({selectedMaterial}) a bien été noté.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white/60 backdrop-blur-xl rounded-[3rem] p-6 lg:p-8 shadow-[0_20px_50px_-10px_rgba(200,190,180,0.3)] border border-white">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Left: Dynamic Product Preview */}
        <div className="lg:w-1/2 relative bg-[#FDF9F4] rounded-[2rem] overflow-hidden min-h-[300px] flex items-center justify-center border border-[#F5EFE8]">
          <div className="absolute top-6 left-6 z-10">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white shadow-sm">
               <Package size={16} className="text-[#C1A88B]" />
               <span className="text-xs font-semibold text-[#8B847C] uppercase tracking-widest">Aperçu {selectedMaterial}</span>
            </div>
          </div>
          
          <AnimatePresence mode="wait">
             <motion.div
               key={selectedMaterial}
               initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
               animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
               exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
               transition={{ duration: 0.4 }}
               className="absolute inset-0 w-full h-full flex flex-col items-center justify-center"
             >
               {/* Note: In a real app we'd use <Image src={materialImage} layout="fill" objectFit="cover" /> 
                   For now, we instruct the user to put those images in /public, and display a gentle placeholder if not found */}
               <div className="w-full h-full bg-[#EAE5DF] flex flex-col items-center justify-center relative">
                   <img src={materialImage} alt={`Bracelet en ${selectedMaterial}`} className="object-cover w-full h-full absolute inset-0 z-0 opacity-0 transition-opacity duration-500" onLoad={(e) => e.currentTarget.classList.remove('opacity-0')} />
                   
                   {/* Fallback visual if image doesn't exist yet */}
                   <div className="z-10 text-center opacity-50 px-4">
                      <p className="text-[#8F857D] font-medium">[ L'image <b>{materialImage}</b> s'affichera ici ]</p>
                      <p className="text-sm text-[#A8A198]">Glissez l'image correspondante dans le dossier <i>public</i>.</p>
                   </div>
               </div>
             </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: The pre-order configurator */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div>
              <h3 className="text-3xl font-light text-[#7C746D] mb-2 tracking-tight">Réservez votre BABI</h3>
              <p className="text-[#A8A198] text-sm">Quantité limitée au lancement. Configuez votre futur bracelet ci-dessous.</p>
            </div>

            {/* Material Choice - VISUAL RADIO BUTTONS */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-[#B5ABA1] uppercase tracking-wider">Matière du bracelet</label>
              <div className="grid grid-cols-2 gap-4">
                <label className={`cursor-pointer border-2 rounded-2xl p-4 flex flex-col gap-2 transition-all ${selectedMaterial === 'tissu' ? 'border-[#C1A88B] bg-[#FCFAF7] shadow-sm' : 'border-[#F5EFE8] bg-white hover:border-[#D1C8BC]'}`}>
                  <input type="radio" value="tissu" {...register("material")} className="sr-only" />
                  <span className="font-medium text-[#7C746D]">Tissu respirant</span>
                  <span className="text-xs text-[#A8A198]">Ultra-doux et léger, idéal par temps chaud</span>
                  {selectedMaterial === 'tissu' && <CheckCircle2 className="w-5 h-5 text-[#C1A88B] absolute top-4 right-4" />}
                </label>

                <label className={`relative cursor-pointer border-2 rounded-2xl p-4 flex flex-col gap-2 transition-all ${selectedMaterial === 'silicone' ? 'border-[#C1A88B] bg-[#FCFAF7] shadow-sm' : 'border-[#F5EFE8] bg-white hover:border-[#D1C8BC]'}`}>
                  <input type="radio" value="silicone" {...register("material")} className="sr-only" />
                  <span className="font-medium text-[#7C746D]">Silicone médical</span>
                  <span className="text-xs text-[#A8A198]">Hypoallergénique, parfait pour peaux sensibles</span>
                  {selectedMaterial === 'silicone' && <CheckCircle2 className="w-5 h-5 text-[#C1A88B] absolute top-4 right-4" />}
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#B5ABA1] uppercase tracking-wider">Prénom</label>
                <input
                  {...register("firstname", { required: true })}
                  placeholder="Ex: Emma"
                  className="w-full px-5 py-4 rounded-xl bg-white border border-[#F5EFE8] focus:border-[#C1A88B] outline-none transition-all placeholder:text-[#D1C8BC] text-[#7C746D] font-medium shadow-sm"
                />
                {errors.firstname && <span className="text-red-400 text-xs mt-1 block">Ce champ est requis</span>}
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#B5ABA1] uppercase tracking-wider">Email de contact</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="vous@email.com"
                  className="w-full px-5 py-4 rounded-xl bg-white border border-[#F5EFE8] focus:border-[#C1A88B] outline-none transition-all placeholder:text-[#D1C8BC] text-[#7C746D] font-medium shadow-sm"
                />
                {errors.email && <span className="text-red-400 text-xs mt-1 block">Ce champ est requis</span>}
              </div>
            </div>


            <button
              type="submit"
              className="w-full bg-white/90 backdrop-blur-xl border border-white text-[#7F7972] font-semibold text-lg py-5 rounded-2xl hover:scale-[1.02] transition-transform shadow-[0_20px_40px_-10px_rgba(180,170,160,0.4)] flex justify-center items-center gap-2"
            >
              Valider mon bracelet (1)
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
