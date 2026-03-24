import Image from "next/image";

const TeamCard = () => {
  const member = [
    {
      image: "/assets/chester.jpeg",
      name: "Chester",
      position: "Chief Operations Officer",
      description:
        "Founder and chief visionary, Tony is the driving force behind the company's manufacturing success. He loves to keep his hands full by participating in the development of the manufacturing process, marketing, and customer experience strategies.",
    },
    {
      image: "/assets/thom.jpeg",
      name: "Thom",
      position: "Chief Operations Officer",
      description:
        "Mich loves taking on manufacturing challenges. With his multi-year experience as Commercial Director in the manufacturing industry, Mich has helped the company to get where it is today. Mich is among the best minds in manufacturing.",
    },
    {
      image: "/assets/dolores.jpeg",
      name: "Dolores O'riordan",
      position: "Chief Quality Officer",
      description:
        "Aline is one of the iconic people in life who can say they love what they do. She mentors 100+ in-house manufacturing experts and looks after the community of thousands of manufacturers.",
    },
    {
      image: "/assets/halley.jpeg",
      name: "Halley",
      position: "Chief Supply Chain Officer",
      description:
        "Iris, with her extensive international experience in manufacturing, helps us easily understand the production process and improves it. She is determined to drive success and delivers her professional acumen to bring the company to the next level in manufacturing.",
    },
  ];

  return (
    <>
      {member.map((m, idx) => (
        <div key={idx} className="flex items-center space-x-4 mb-6">
          <Image
            src={m.image}
            alt={m.name}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full object-cover shadow-md"
          />
          <div>
            <h4 className="font-semibold text-lg">{m.name}</h4>
            <p className="text-sm text-gray-500 mb-3">{m.position}</p>
            <p className="text-sm text-black">{m.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
