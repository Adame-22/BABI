interface StatBadgeProps {
  number: string;
  label: string;
}

export function StatBadge({ number, label }: StatBadgeProps) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-lin flex flex-col items-center justify-center text-center h-full hover:shadow-md transition-shadow">
      <div className="text-4xl md:text-5xl font-extrabold text-babi mb-3">
        {number}
      </div>
      <div className="text-sm font-medium text-text text-balance">
        {label}
      </div>
    </div>
  );
}
