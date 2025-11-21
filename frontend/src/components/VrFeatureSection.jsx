import React from 'react'
import { motion } from 'framer-motion'
import { vrFeatures } from '../assets/assets';

const VrFeatureSection = () => {
    return (
        <section className="w-full py-16 px-4 bg-white">
        
            <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-14">
                Gear up for a fascinating,{" "}
                <span className="text-orange-500">unforgettable</span>, and deep learning<br />
                <span className="text-orange-500">experience with Aaklan</span>
            </h2>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-xl flex items-center justify-center">
                        <img
                            src={vrFeatures.AaklanVr}
                            alt="AI & Robotics Kits"
                            className="w-[65%] object-contain"
                        />

                        <motion.img
                            src={vrFeatures.d_elements}
                            alt="Extra VR Feature"
                            className="w-full object-contain absolute right-0 translate-x-6"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />

                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#082046] leading-snug">
                        Explore endless creativity through the lens of Virtual Reality
                    </h2>

                    <p className="text-gray-700 text-lg mt-4 leading-relaxed">
                        AaklanVR's immersive VR technology creates an artificial world with numerous educational activities. Here, students have the freedom to explore, experiment, and encounter a multitude of things, fostering their creativity and imagination.
                        <br />
                        Immersive Virtual Explorations
                        <br />
                        Engaging Interactive Educational Activities
                        <br />
                        Practical Learning in Virtual Reality
                        <br />
                        A Comprehensive Library of 850+ Learning Concepts
                    </p>

                    <button className="mt-8 bg-[#EA8E0A] hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg transition">
                        Explore Vr Now
                    </button>
                </div>

            </div>
        </section>
    );
}

export default VrFeatureSection;
