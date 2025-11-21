import React from 'react'
import { card } from '../assets/assets';

const FullServices = () => {
    const items = [
        {
            title: "21st Century Skill-labs",
            desc: "Choose from Communication, STEM and Financial Literacy lab",
            img: card.one,
        },
        {
            title: "Interactive Content",
            desc: "Audio visual content. Think > Apply > Create Pedagogy",
            img: card.two,
        },
        {
            title: "Top-rated Teachers",
            desc: "Curriculum delivered by AAKLAN Expert Faculty",
            img: card.three,
        },
        {
            title: "Impact & Certifications",
            desc: "Full responsibility to create impact and show results",
            img: card.four,
        },
        {
            title: "Access to Tech platform",
            desc: "Track and audit progress of the lessons seamlessly",
            img: card.five,
        },
    ];

    return (
        <div className="w-full bg-[#0c2344] py-16 px-4">
            <h2 className="text-center text-white text-3xl md:text-4xl font-bold">
                Full Service Solution
            </h2>

            <h3 className="text-center text-white text-xl md:text-3xl font-semibold mt-2">
                for <span className="text-orange-400">Skill-education</span> in Schools
            </h3>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
                    >
                        <img src={item.img} alt={item.title} className="w-40 h-40 object-contain mb-4" />
                        <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FullServices