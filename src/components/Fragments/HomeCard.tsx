import Image from 'next/image';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const HomeCard = ({ image, title, description }: CardProps) => {
  return (
    <div className="font-lato bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <Image src={image} alt={title} width={400} height={192} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
