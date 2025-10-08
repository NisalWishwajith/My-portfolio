import data from "../../data/index.json";

export default function Skills() {
  return (
    <section className="py-8 skills--section" id="Skills">
      <div className="text-center mb-8">
        <h2 className="lg:text-[50px] font-bold md:text-4xl text-[35px]"> Skills </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-10 md:px-20">
        {data?.skills?.map((group, index) => (
          <div
            key={index}
            className="bg-white p-4 border-indigo-100 border rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition duration-300 ease-in-out"
          >
            <p className="text-lg font-bold my-2">{group.title}</p>
            <div className="grid grid-cols-3 gap-4">
              {group.items?.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center p-2 rounded-lg"
                >
                  <img
                    src={skill.img}
                    alt={skill.label}
                    className="w-12 h-12 mb-2"
                  />
                  <p className="text-sm text-center font-semibold">
                    {skill.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
