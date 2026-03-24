import Image from "next/image";
import logoSCN from "@/assets/PT.SCN.svg";
import logoPRIA from "@/assets/PT.PRIA.svg";
import logoBS from "@/assets/PT.BS.png";
import logoASM from "@/assets/PT.ASM.png";
import logoAminTrans from "@/assets/PT.AminTrans.jpg";
import Marquee from "react-fast-marquee";

const logos = [
  { src: logoSCN, alt: "SCN" },
  { src: logoPRIA, alt: "PRIA" },
  { src: logoBS, alt: "BS" },
  { src: logoASM, alt: "ASM" },
  { src: logoAminTrans, alt: "Amin Trans" },
];

const Partner = () => {
  return (
    <div className="w-full bg-white py-4 ">
      <div className="relative w-full overflow-hidden">
        {/* Gradient kiri */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />

        {/* Gradient kanan */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Marquee */}
        <Marquee pauseOnHover gradient={false} speed={40}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-10 sm:px-18 md:px-25 py-5 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                className="h-20 w-auto max-w-[200px] mx-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300 transform hover:scale-125"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Partner;
