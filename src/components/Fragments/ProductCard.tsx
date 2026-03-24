import Image from "next/image";

const ProductCard = () => {
  const products = [
    {
      image: "/assets/container.jpeg",
      title: "Container Body Build & Installation",
    },
    {
      image: "/assets/industrial.jpeg",
      title: "Industrial Dump Truck Body Engineering",
    },
    {
      image: "/assets/tanker.jpeg",
      title: "Tanker Fabrication and Installation",
    },
    {
      image: "/assets/trailer.jpeg",
      title: "Trailer Chassis & Body Engineering",
    },
  ];

  return (
    <div className="font-lato grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
        >
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={192}
            className="w-full h-48 object-cover"
            style={{ width: "100%", height: "12rem", objectFit: "cover" }}
            priority={index === 0}
          />
          <div className="p-4">
            <h3 className="text-primary font-semibold hover:underline cursor-pointer">
              {product.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
