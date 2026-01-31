import data from "../../data/index.json";

const Experience = () => {
  const milestones = data.experience;

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="lg:text-[50px] md:text-4xl text-[35px] font-bold text-center mb-16"> Working Experience </h2>

      <div className="relative">
        {/* Desktop vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#5e3bee] transform -translate-x-1/2"></div>

        {/* Mobile vertical line */}
        <div className="md:hidden absolute left-[10px] top-0 bottom-0 w-1 bg-[#5e3bee]"></div>

        {milestones.map((milestone, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                isEven ? "md:justify-end" : "md:justify-start"
              } mb-20 relative`}
            >
              {/* Dot */}
              <div className="absolute md:left-1/2 left-3 transform -translate-x-1/2 z-10">
                <div className="w-6 h-6 rounded-full border-4 border-white shadow-md" style={{ backgroundColor: "#5e3bee" }}></div>
              </div>

              {/* Card Content */}
              <div
                className={`md:w-1/2 pl-7 ${
                  isEven ? "md:pl-16 md:text-left" : "md:pr-16 md:text-right"
                } text-left`}
              >
                <div className="bg-[#e3def9]/50 p-6 rounded-xl border-2 border-[#5e3bee] hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl text-[#5e3bee] md:text-2xl font-bold md:leading-none"> {milestone.title} </h3>
                  <p className="text-sm leading-none mb-3"> {milestone.company} </p>
                  <p className="text-justify text-gray-500"> {milestone.responsibilities} </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
