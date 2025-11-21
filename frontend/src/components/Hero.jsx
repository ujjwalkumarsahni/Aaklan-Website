import React, { useState, useEffect } from "react";
import { assets, buttonCard } from "../assets/assets.js";
import ButtonCard from "./ButtonCard.jsx";

const Hero = () => {
  const textList = [
    "A DeepTech-Driven",
    "An Innovative",
    "A Future-Ready",
    "A Next-Gen",
  ];

  const [index, setIndex] = useState(0);
  const [typingText, setTypingText] = useState("");

  // Fast typing animation
  useEffect(() => {
    const currentText = textList[index];
    let char = 0;

    const speed = 50; // FAST TYPING SPEED

    const typer = setInterval(() => {
      setTypingText(currentText.substring(0, char));
      char++;

      if (char > currentText.length) {
        clearInterval(typer);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % textList.length);
        }, 1000);
      }
    }, speed);

    return () => clearInterval(typer);
  }, [index]);

  return (
    <section
      className="w-full relative pt-10 lg:pt-20 pb-20 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${assets.banner})`,
      }}
    >
      {/* HERO GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-6 gap-12">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B234A] leading-snug">
            <span className="text-white">{typingText}</span>
<span className="text-white animate-pulse">|</span>
            <br />
            EdTech Ecosystem for Viksit Bharat
          </h1>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full flex justify-center">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[380px] md:w-[480px] h-[380px] md:h-[480px] 
              rounded-full blur-3xl bg-orange-300 opacity-30 animate-pulse">
            </div>
          </div>

          <img
            src={assets.heroBanner}
            alt="Kids Robotics"
            className="relative w-[330px] md:w-[420px] rounded-full object-cover animate-float"
          />
        </div>
      </div>

      {/* BOTTOM CARDS */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        <div className="transition transform hover:-translate-y-2 hover:shadow-xl hover:scale-[1.03] duration-300">
          <ButtonCard image={buttonCard.coding} text={"Coding"} />
        </div>

        <div className="transition transform hover:-translate-y-2 hover:shadow-xl hover:scale-[1.03] duration-300">
          <ButtonCard image={buttonCard.robot} text={"Robotics & AI"} />
        </div>

        <div className="transition transform hover:-translate-y-2 hover:shadow-xl hover:scale-[1.03] duration-300">
          <ButtonCard image={buttonCard.virtual} text={"VR / AR"} />
        </div>

        <div className="transition transform hover:-translate-y-2 hover:shadow-xl hover:scale-[1.03] duration-300">
          <ButtonCard image={buttonCard.entrepreneurship} text={"Entrepreneurship"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
