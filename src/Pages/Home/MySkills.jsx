import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="py-8" id="mySkills">
      <div className="text-center mb-8">

        <h2 className="text-3xl font-bold">My Skills </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-10 md:px-20">
        {data?.skills?.map((item, index) => (
          <div key={index} className="bg-white p-4 border-indigo-100 border rounded-lg shadow-md flex flex-col items-center hover:scale-110 transition duration-500">
            <p className="text-lg font-bold my-2">{item.title}</p>
            <div className="grid grid-cols-3 gap-4">
              {item.img1 && (
                <div className="flex flex-col items-center p-2 rounded-lg">
                  <img
                    src={item.img1}
                    alt="Skill 1"
                    className="w-12 h-12 mb-2"
                  />
                  <p className="text-sm text-center font-semibold">{item.item1}</p>
                </div>
              )}
              {item.img2 && (
                <div className="flex flex-col items-center p-2  rounded-lg">
                  <img
                    src={item.img2}
                    alt="Skill 2"
                    className="w-12 h-12 mb-2"
                  />
                  <p className="text-sm text-center font-semibold">{item.item2}</p>
                </div>
              )}
              {item.img3 && (
                <div className="flex flex-col items-center p-2  rounded-lg">
                  <img
                    src={item.img3}
                    alt="Skill 3"
                    className="w-12 h-12 mb-2"
                  />
                  <p className="text-sm text-center font-semibold">{item.item3}</p>
                </div>
              )}
              {item.img4 && (
                <div className="flex flex-col items-center p-2  rounded-lg">
                  <img
                    src={item.img4}
                    alt="Skill 4"
                    className="w-12 h-12 mb-2"
                  />
                  <p className="text-sm text-center font-semibold">{item.item4}</p>
                </div>
              )}
              {item.img5 && (
                <div className="flex flex-col items-center p-2  rounded-lg">
                  <img
                    src={item.img5}
                    alt="Skill 5"
                    className="w-12 h-12 mb-2"
                  />
                  <p className="text-sm text-center font-semibold">{item.item5}</p>
                </div>
              )}
                {item.img6 && (
                <div className="flex flex-col items-center p-2  rounded-lg">
                  <img
                    src={item.img6}
                    alt="Skill 6"
                    className="w-12 h-12 mb-2"
                  />
                  <p className="text-sm text-center font-semibold">{item.item6}</p>
                </div>
              )}
                {item.img7 && (
                <div className="flex flex-col items-center p-2  rounded-lg">
                  <img
                    src={item.img7}
                    alt="Skill 7"
                    className="w-12 h-12 mb-2"
                  />
                  <p className="text-sm text-center font-semibold">{item.item7}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
