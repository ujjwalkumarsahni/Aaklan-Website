import { vrFeatures } from "../assets/assets";

export default function VRFeatures() {
  const features = [
    {
      img: vrFeatures.vrFeat1, 
      title: "Hybrid Learning",
      desc: "An expert teacher describes the concept while students enter the world of virtual reality to visually grasp the topic taught.",
    },
    {
      img: vrFeatures.vrFeat2,
      title: "Immersive Experience",
      desc: "Complex science topics become easy to comprehend through holistic VR and 360° virtual science lab.",
    },
    {
      img: vrFeatures.vrFeat3,
      title: "Enjoyable Learning",
      desc: "VR gaming experience seamlessly stitches learning through play, offering an amusing experience.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10">
  
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-14">
        Enthral your brain with{" "}
        <span className="text-orange-500">amazing impressions</span> of the
        lessons through <br />
        <span className="text-orange-500">Virtual Reality</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 flex flex-col items-center text-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 mb-6 object-contain"
            />

            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
