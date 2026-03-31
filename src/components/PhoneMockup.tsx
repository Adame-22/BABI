import { ReactNode } from "react";

export function PhoneMockup({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto border-[#EDE7DF] border-[12px] rounded-[3rem] h-[620px] w-[310px] shadow-[0_30px_60px_-15px_rgba(180,170,160,0.4)] overflow-hidden bg-[#FDF9F4]">
      {/* Soft Top Notch / Camera Area (optional, keeping it subtle) */}
      <div className="absolute top-0 inset-x-0 h-5 bg-[#EDE7DF] rounded-b-[1.5rem] w-32 mx-auto z-20 flex justify-center items-center">
        <div className="w-12 h-1.5 rounded-full bg-black/10"></div>
      </div>
      <div className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden pt-10 pb-6 scrollbar-hide">
        {children}
      </div>
    </div>
  );
}
