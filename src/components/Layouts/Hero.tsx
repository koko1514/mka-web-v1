import { Button } from "@/components/Elements/Button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="font-lato relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <Image
        src="/assets/Building.png"
        alt="Hero Background"
        fill
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />

      {/* Overlay gelap */}
      <div className="z-10 absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-8/10 md:w-7/10 mx-auto px-5 py-12 text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
          Crafting outstanding <br className="hidden sm:block" />
          custom vehicle for every <br className="hidden sm:block" />
          need
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-8 max-w-2xl">
          Our goal is to deliver top-quality vehicle manufacturing solutions.{" "}
          <br />
          Comprehensive technical documentation, skilled craftsmanship, and
          dedicated customer support ensure a seamless and reliable experience.
        </p>
        <div className="text-black">
          <Button asChild>
            <Link href="/productservice">Our Service</Link>
          </Button>
        </div>
      </div>

      {/* Decorative Shape */}
      <div className="absolute bottom-0 left-0 w-full h-45 md:h-50 lg:h-58 bg-bgsec clip-bottom-triangle z-20"></div>
    </section>
  );
};

export default Hero;
