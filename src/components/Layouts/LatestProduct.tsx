import Image from "next/image";

const LatestProduct = () => {

     const latestProducts = [
       {
         id: 1,
         name: "Custom Mini Bus",
         image: "/assets/custom.jpeg",
         description: "A fully customized mini bus for executive travel.",
       },
       {
         id: 2,
         name: "Aluminum Box Truck",
         image: "/assets/alumunium.jpeg",
         description: "Durable and lightweight aluminum box for logistics.",
       },
     ];
    
  // Kalau tidak ada produk, return null (tidak render apapun)
  if (!latestProducts || latestProducts.length === 0) {
    return null;
  }

  return (
    <section className="font-lato py-20 bg-bgsec">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Latest Projects
        </h2>
        <div className="flex flex-wrap md:grid-cols-3 gap-8 justify-center">
          {latestProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden w-full max-w-sm"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={192}
                className="w-full h-48 object-cover"
                style={{ objectFit: "cover" }}
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProduct;
