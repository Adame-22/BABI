import { CheckCircle2, Minus, XCircle } from "lucide-react";

export function ComparisonTable() {
  const rows = [
    { label: "Capteurs", babi: "5", nanny: "1 (respiration)", tomy: "1 (mouvement)" },
    { label: "Porté sur bébé", babi: true, nanny: false, tomy: false },
    { label: "Jour et nuit", babi: true, nanny: false, tomy: false },
    { label: "Application", babi: true, nanny: false, tomy: false },
    { label: "0–18 mois", babi: true, nanny: "Limité", tomy: "Limité" },
  ];

  const renderValue = (val: string | boolean | "Limité") => {
    if (val === true) return <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />;
    if (val === false) return <XCircle className="w-5 h-5 text-red-500 mx-auto" />;
    if (val === "Limité") return <span className="text-orange-500 text-sm font-medium">Limité</span>;
    return <span className="text-sm font-medium text-text">{val}</span>;
  };

  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="min-w-[600px] bg-white rounded-3xl border border-lin shadow-sm overflow-hidden text-center">
        <div className="grid grid-cols-4 bg-cream border-b border-lin p-4 items-center">
          <div className="text-left font-semibold text-muted text-sm uppercase tracking-wider">Fonctionnalité</div>
          <div className="font-bold text-babi text-lg">BABI</div>
          <div className="font-semibold text-text">Nanny Care</div>
          <div className="font-semibold text-text">TOMY</div>
        </div>
        
        {rows.map((row, idx) => (
          <div 
            key={idx} 
            className={`grid grid-cols-4 p-4 items-center ${idx !== rows.length - 1 ? "border-b border-lin/50" : ""}`}
          >
            <div className="text-left font-medium text-sm text-text">{row.label}</div>
            <div className="bg-lavande/30 rounded-lg py-2">{renderValue(row.babi)}</div>
            <div>{renderValue(row.nanny)}</div>
            <div>{renderValue(row.tomy)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
