import data from "../../data/index.json";

export default function Achievements() {
    return (
        <section className="relative bg-white py-12 overflow-hidden" id="Achievements">
            <div className="absolute top-0 left-0 w-full h-full bg-white/20 z-10"></div>

            <div className="relative z-20 container mx-auto">
                <h2 className="lg:text-[50px] md:text-4xl text-[35px] font-bold text-center mb-10">
                    Achievements
                </h2>
                <div className="grid gap-20 md:grid-cols-3 px-10 md:px-20">
                    {data.achievements.map((cert) => (
                        <div
                            key={cert.id}
                            className="bg-white/90 shadow-lg rounded-xl p-6 flex flex-col items-center text-center h-full hover:scale-105 transition-transform duration-300"
                        >
                            <div className="w-24 h-24">
                                <img
                                    src={cert.img}
                                    alt={cert.institute}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold"> {cert.degree} </h3>
                            <p className="text-gray-600 mb-5"> {cert.institute} </p>
                            <a href={cert.link} target="_blank" className="mt-auto">
                                <span className="text-sm text-gray-500 portfolio--link"> View Credentials
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 20 19"
                                        fill="none"
                                    >
                                        <path
                                            d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                            stroke="currentColor"
                                            stroke-width="2.66667"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    ))}
                </div>
                <a href="https://www.linkedin.com/in/nisal-wishwajith-163aa5314/details/achievements/" target="_blank" className="flex justify-center mt-10">
                    <button className="btn btn-primary mx-auto block"> View All </button>
                </a>
            </div>
        </section>
    );
}
