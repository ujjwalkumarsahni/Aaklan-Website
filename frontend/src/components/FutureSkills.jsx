import React from "react";
import { futures } from "../assets/assets.js";

const items = [
  "Coding - Graphical & Python",
  "Artificial Intelligence",
  "Machine Learning",
  "Robotics",
  "AR & VR Tech",
  "Internet of Things (IoT)",
  "Biomimetic Robot",
  "Advanced Robotics",
];
const FutureSkills = () => {
  return (
    <section className="py-16 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Empowering Kids with the Right{" "}
          <span className="text-orange-500">Future Skills</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          With the hands-on approach to AI, Coding, Robotics, and STEM, we cultivate
          a generation of innovators by providing the 21st-century skills to unleash
          the true potential of young minds.
        </p>
        <div className="mt-12 overflow-hidden">
          <div className="flex gap-8 slider-track w-max">
            {[...items, ...items].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border p-4 w-64 shrink-0"
              >
                <img
                  src={futures.ProgrammingImg}
                  className="rounded-md w-full h-40 object-cover"
                />
                <p className="mt-3 font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FutureSkills;
