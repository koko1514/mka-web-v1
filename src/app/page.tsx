import { Button } from "@/components/Elements/Button";
import Link from "next/link";
import Hero from "@/components/Layouts/Hero";
import Statistic from "@/components/Layouts/Statistic";
import Image from "next/image";
import HomeCard from "@/components/Fragments/HomeCard";
import Partner from "@/components/Fragments/Partner";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="font-lato w-full flex flex-col min-h-screen">
      <Hero />

      <section className="py-10 relative bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-bgsec clip-top-triangle z-10"></div>

        {/* Konten */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-20">
          {/* Teks */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-snug">
              Reliable and durable bodywork that exceeds customer expectations
            </h2>
            <p className="text-black leading-relaxed">
              At our coachbuilding facility, we take pride in delivering
              bodywork that goes beyond aesthetics — we build for strength,
              safety, and long-term performance. Every vehicle body we produce
              is engineered with precision, using high-quality materials and
              expert craftsmanship to ensure durability in all conditions.
            </p>
          </div>

          <div className="relative w-fit mx-auto">
            <Image
              src="/assets/truk1.png" // ganti dengan path gambar kamu
              alt="Truck"
              width={350}
              height={100}
              className="w-full max-w-md shadow-xl"
            />
            {/* Optional: Efek tumpukan */}
            <div className="absolute top-2 left-2 w-full h-full border border-gray-300 -z-10"></div>
          </div>
        </div>
      </section>

      <Statistic />

      <section className="relative bg-white">
        <div className="relative max-w-6xl mx-auto mb-0 px-6 py-25 pb-0 flex flex-col md:flex-row items-center z-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              The Technology <br /> Behind Our Manufacturing
            </h2>
            <p className="text-text-black mb-4">
              Our manufacturing services are designed to meet the unique needs
              of our customers. We offer a wide range of products and services
              that are tailored to your specific requirements.
            </p>
            <p className="text-text-black mb-6">
              Our focus is on meeting the needs of our customers. We work
              closely with you to understand your requirements and provide the
              best solutions.
            </p>
            <Button asChild>
              <Link href="/aboutus">Learn More</Link>
            </Button>
          </div>

          <div className="w-full md:w-1/2 relative flex justify-center items-center">
            {/* Circle Background */}
            <div className="absolute bg-bgsec rounded-full z-0 w-85 h-85 mt-25 md:mt-0 md:w-96 md:h-96 lg:w-110 lg:h-110 md:ml-30"></div>

            {/* Image */}
            <Image
              src="/assets/gadget.png"
              alt="Technology Devices"
              width={800}
              height={600}
              className="relative object-contain w-110 h-70 mt-25 md:mt-0 scale-110 md:scale-125 lg:scale-150 md:ml-30 "
            />
          </div>
        </div>
      </section>

      <section className="relative bg-bgsec py-50 pb-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-50 bg-white clip-top-left-triangle z-0"></div>

        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Competitive Advantage
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <HomeCard
              image="/assets/manekin.png"
              title="Uncompromising Build Quality"
              description="Ideal for manufacturers. Essential features to streamline production and distribution. Perfect for small teams."
            />
            <HomeCard
              image="/assets/stamp.png"
              title="Tailored Solutions for Every Industry"
              description="Innovative solutions for manufacturing excellence. Streamline your production and enhance efficiency across."
            />
            <HomeCard
              image="/assets/trucktank.png"
              title="End-to-End Manufacturing Expertise"
              description="Comprehensive solutions for manufacturers. State-of-the-art technology and dedicated support for optimal output."
            />
          </div>
        </div>
      </section>

      <section className="relative py-16 pb-25">
        <div className="absolute top-0 left-0 w-full h-50 bg-bgsec clip-top-left-triangle z-0"></div>

        <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Our trusted partners and industry references
          </h2>
          <p className="text-gray-500 mb-4">
            Explore how our experience in manufacturing enhances your business
            operations.
          </p>
          <a
            href="#success-stories"
            className="text-primary font-medium hover:underline inline-flex items-center mb-10"
          >
            Explore our success stories
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
          <Partner />
        </div>
      </section>
    </div>
  );
};

export default Home;
