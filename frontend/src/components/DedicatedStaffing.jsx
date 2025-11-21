import { CheckCircle } from "lucide-react";
import { some } from "../assets/assets";

export default function DedicatedStaffing() {
  const points = [
    "School signs-up with Aaklan",
    "Program Manager is assigned",
    "Teacher is recruited and trained",
    "Teacher starts classes over tech platform",
    "Regular audits of classes by Program Manager",
    "School track progress over tech-platform",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      
      <h2 className="text-center text-3xl md:text-4xl font-bold leading-snug">
        Empowering Success with{" "}
        <span className="text-orange-500">Dedicated Staffing</span> Solutions
      </h2>

      <div className="mt-12 flex flex-col md:flex-row items-center gap-10">
        
        <div className="md:w-1/2">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We take full responsibility of impeccable class delivery and student
            impact.
          </p>

          <ul className="space-y-4">
            {points.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-orange-500 shrink-0" />
                <span className="text-gray-700 text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-gray-100 rounded-3xl p-4 md:p-6 shadow-sm">
            <img
              src={some.dedicatedStaffing}
              alt="Teacher showing code on screen"
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
