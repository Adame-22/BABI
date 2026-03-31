import { ReactNode } from "react";

interface CapteurCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color?: string; // e.g. "bg-lavande" or custom
}

export function CapteurCard({ icon, title, description, color = "bg-lavande" }: CapteurCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-lin hover:-translate-y-1 transition-transform h-full">
      <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center text-babi-dark mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-text mb-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}
