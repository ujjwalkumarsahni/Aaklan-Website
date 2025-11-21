export default function ImpactSection() {
  const data = [
    {
      percent: "100%",
      color: "from-purple-500 to-purple-300",
      title: "Students Interest",
      desc: "VR transforms learning into a captivating adventure with 3D content and engaging graphics, sparking curiosity for deeper academic exploration."
    },
    {
      percent: "99%",
      color: "from-green-500 to-green-300",
      title: "Makes Learning Easy",
      desc: "Virtual reality technology simplifies learning, transforming difficult concepts into interactive, hands-on experiences, thereby enhancing understanding and engagement."
    },
    {
      percent: "99%",
      color: "from-blue-500 to-blue-300",
      title: "Improved Teacher's Communication",
      desc: "With the help of Aaklan VR, teachers have the ability to provide textbook information with real-life experiences. It improves teacher's communication."
    },
    {
      percent: "98%",
      color: "from-red-500 to-red-300",
      title: "Comfortable Hardware",
      desc: "You can conduct various practical experiments and experiences in a safe virtual space without the need for physical resources or heavy hardware."
    }
  ];

  return (
    <section className="py-12 px-4 md:px-10">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        Impact of <span className="text-orange-500">VR in Education</span> and Classroom engagement
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100"
          >
            {/* Circle Badge */}
            <div className="flex items-center justify-center mb-5">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-semibold text-lg bg-linear-to-br ${item.color}`}
                >
                  {item.percent}
                </div>
              </div>
            </div>

            <h3 className="font-bold text-lg mb-3 text-gray-900">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
