import Image from "next/image";

const stats = [
  { title: "Sales Growth", value: "54%" },
  { title: "Production Runs Completed", value: "+225" },
  { title: "Projected Sales", value: "$50M" },
  { title: "Registered Clients", value: "235,403" },
  { title: "Client Loyalty", value: "85%" },
  { title: "Production Efficiency", value: "4x" },
  { title: "Website Traffic", value: "100,000" },
  { title: "Manufactured Units", value: "45,958" },
];

const Statistic = () => {
  return (
    <section className="font-lato relative bg-[#082c25] py-20 overflow-hidden">
      {/* background abstract shape */}
      <div className="absolute inset-0 z-0 scale-105 opacity-50 animate-breathing-float">
        <Image
          src="/assets/Statsbg.svg"
          alt="Background Shape"
          className="object-cover object-bottom-left md:object-center"
          fill
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-black/35 p-6 rounded shadow text-white flex justify-between flex-col"
          >
            <h4 className="text-sm font-semibold mb-2">{item.title}</h4>
            <p className="text-2xl md:text-3xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistic;
