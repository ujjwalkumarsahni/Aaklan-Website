import React from "react";
import { statsSection } from "../assets/assets";

const StatsSection = () => {
  return (
    <section className="relative w-full py-20 bg-white">
      
      {/* LEFT DOTS */}
      <img
        src={statsSection.pattern}
        alt="pattern"
        className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2 w-[200px] opacity-80"
      />

      {/* RIGHT DOTS */}
      <img
        src={statsSection.pattern}
        alt="pattern"
        className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 w-[200px] opacity-80"
      />

      {/* MAIN CARD */}
      <div className="relative max-w-6xl mx-auto bg-[#f8e1c3] rounded-3xl shadow-xl overflow-hidden">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-10 text-center gap-10">

          {/* Item 1 */}
          <div>
            <img src={statsSection.school1} className="w-14 mx-auto mb-3" />
            <p className="text-xl font-bold text-[#0B234A]">95 +</p>
            <p className="text-gray-600">Associated Schools</p>
          </div>

          {/* Item 2 */}
          <div>
            <img src={statsSection.student} className="w-14 mx-auto mb-3" />
            <p className="text-xl font-bold text-[#0B234A]">100000 +</p>
            <p className="text-gray-600">Students Trained</p>
          </div>

          {/* Item 3 */}
          <div>
            <img src={statsSection.school2} className="w-14 mx-auto mb-3" />
            <p className="text-xl font-bold text-[#0B234A]">98 %</p>
            <p className="text-gray-600">School Retention</p>
          </div>

          {/* Item 4 */}
          <div>
            <img src={statsSection.teacher} className="w-14 mx-auto mb-3" />
            <p className="text-xl font-bold text-[#0B234A]">180 +</p>
            <p className="text-gray-600">Trained Trainer</p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="w-full border-t border-gray-400"></div>

        {/* INCUBATED SECTION */}
        <div className="flex flex-col items-center gap-4 py-10">
          <p className="text-gray-700">Incubated by</p>
          <img src={statsSection.iStart} alt="iStart" className="w-40" />
        </div>

        {/* BOTTOM ORANGE SHADOW */}
        <div className="h-10 bg-orange-500 absolute bottom-0 w-full rounded-b-3xl"></div>

      </div>
    </section>
  );
};

export default StatsSection;
