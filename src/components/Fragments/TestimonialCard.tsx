import { FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

// Define the interface for testimonial prop
interface Testimonial {
  quote: string;
  name: string;
  position: string;
  image: string;
}

// TestimonialCard menerima props (testimonial)
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="font-lato bg-white rounded-xl shadow-lg p-8 text-center max-w-xl mx-auto flex flex-col items-center justify-between min-h-[350px] relative">
      {/* Big Quote Icon at top */}
      <div className="bg-primary text-white rounded-lg p-4 -top-5 z-20 absolute">
        <FaQuoteRight className="text-black bg-primary text-xl" />
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 italic text-xl leading-relaxed z-10 mt-7">
        {testimonial.quote}
      </p>

      {/* Divider */}
      <div className="w-50 h-0.5 bg-primary my-2"></div>

      {/* User Info */}
      <div className="flex flex-col items-center">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover mb-2 shadow-md"
        />
        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
        <p className="text-sm text-gray-500">{testimonial.position}</p>
      </div>
    </div>
  );
};

// Export data & komponen
export default TestimonialCard;
