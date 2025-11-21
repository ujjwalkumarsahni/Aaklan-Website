import { some } from "../assets/assets";

export default function KitsSection() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={some.roboticsLab}
            alt="AI & Robotics Kits"
            className="w-full max-w-xl object-contain"
          />
        </div>

      
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082046] leading-snug">
            Kits for AI & Robotics Lab
          </h2>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-lg shadow-sm">
            <p className="text-gray-800 text-lg leading-relaxed">
              <span className="font-semibold text-[#082046]">Next-Gen AI Laboratory Kits:&nbsp;</span>
              Equip your school with advanced AI-learning Quarky DIY kits such as:
              <span className="font-medium text-[#082046]">
                {" "}AI Delivery Robot, Gripper Robot, IR Detector, Edge Detector,
              </span>
              {" "}and several hands-on project activities designed to make your students’ AI learning journey engaging, practical, and fun.
            </p>
          </div>

          <button className="mt-8 bg-[#EA8E0A] hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg transition">
            Explore Robotics and Quarky Kits
          </button>
        </div>

      </div>
    </section>
  );
}
