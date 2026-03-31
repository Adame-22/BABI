import { ReactNode } from "react";

export function PhoneMockup({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto border-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl overflow-hidden bg-white">
      <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl w-40 mx-auto z-20"></div>
      <div className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden pt-8 pb-4 bg-gray-50">
        {children}
      </div>
    </div>
  );
}
