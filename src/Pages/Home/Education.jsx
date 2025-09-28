import data from "../../data/index.json";

export default function Education() {
  return (
    <section className="relative bg-white py-12 overflow-hidden" id="Education">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="./img/herobackground.mov" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/70 z-10"></div>

      {/* Content on top */}
      <div className="relative z-20 container mx-auto">
        <h2 className="lg:text-[50px] md:text-4xl font-bold text-center mb-10">
          Education
        </h2>
        <div className="grid gap-8 md:grid-cols-3 px-10 md:px-20">
          {data.education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white/90 shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-24 h-24 mb-4">
                <img
                  src={edu.img}
                  alt={edu.institute}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm text-gray-500"> {edu.year} </span>
              <h3 className="text-xl font-semibold mt-2"> {edu.degree} </h3>
              <p className="text-gray-600 mt-1"> {edu.institute} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
