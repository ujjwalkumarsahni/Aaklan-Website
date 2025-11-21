import { some } from "../assets/assets";

export default function StructuredCurriculum() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={some.Aaklanbooks}
            alt="Structured Curriculum"
            className="w-full max-w-xl object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082046] leading-snug">
            Structured Curriculum & Resources
          </h2>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-lg shadow-sm">
            <p className="text-gray-800 text-lg leading-relaxed">
              <span className="font-semibold text-[#082046]">Age-Appropriate AI Curriculum:&nbsp;</span>
              Our certified AI curriculum is carefully designed for all age groups — with a unique early-learning program for 
              <span className="font-medium text-[#082046]"> grades 1 & 2</span> and a structured, grade-wise syllabus for 
              <span className="font-medium text-[#082046]"> grades 3 to 12.</span>  
              <br /><br />
              <span className="font-semibold text-[#082046]">Globally Aligned Standards:&nbsp;</span>
              The content aligns with major international frameworks such as  
              <span className="font-medium text-[#082046]"> CBSE, IB, IGCSE, ICSE, CSTA, and CIE.</span>  
              <br /><br />
              Students explore technologies like  
              <span className="font-medium text-[#082046]"> Artificial Intelligence, Robotics, and Coding</span> 
              through well-structured textbooks, activity workbooks, and hands-on projects — building essential future-ready skills.
            </p>
          </div>

          <button className="mt-8 bg-[#EA8E0A] hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg transition">
            Explore AAKLAN Curriculum
          </button>
        </div>

      </div>
    </section>
  );
}
