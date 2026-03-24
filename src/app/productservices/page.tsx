import ProductCard from "@/components/Fragments/ProductCard";
import Header from "@/components/Layouts/Header";
import LatestProduct from "@/components/Layouts/LatestProduct";
import Testimonial from "@/components/Layouts/Testimonial";

const ProductServices = () => {
  return (
    <div className="font-lato w-full flex flex-col min-h-screen">
      <Header title="Product & Service" bgImage="/assets/Building.svg" />

      <section className="relative py-23 px-50 z-10">
        <div className="relative mb-8 z-10">
          <h2 className="text-4xl font-bold">
            Our Manufacture Products & Services
          </h2>
          <p className="text-gray-500 text-lg">
            Check out what&#39;s new in our company !
          </p>
        </div>

        {/* Product Cards */}
        <div className="relative z-10">
          <ProductCard />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-25 bg-bgsec clip-bottom-triangle z-0"></div>
      </section>

      <LatestProduct />

      <Testimonial />
    </div>
  );
};

export default ProductServices;
