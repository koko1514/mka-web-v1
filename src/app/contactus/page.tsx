import ContactForm from "@/components/Layouts/ContactForm";
import Header from "@/components/Layouts/Header";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="font-lato w-full flex flex-col min-h-screen">
      <Header title="Contact Us" bgImage="/assets/Building.svg" />

      <section className="w-full py-15 grid md:grid-cols-3 gap-5 max-w-7/10 mx-auto">
        {/* Form */}
        <div className="md:col-span-2">
          <p className="text-md text-gray-500 mb-6 bg">
            Contact us about anything related to our company or services.
            <br />
            We&apos;ll do our best to get back to you as soon as possible.
          </p>
          <ContactForm />
        </div>

        {/* Company Info */}
        <div className="flex flex-col space-y-6 border-t md:border-t-0 md:border-l md:pl-6 border-gray-300">
          <div>
            <h3 className="font-bold text-xl">CV Mandiri Kerja Abadi</h3>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <FaMapMarkerAlt className="mt-2.5 size-4 flex-shrink-0" />
            <span>
              Jl. Raya Jabon No. 6, Jabonotoyo, Jabon, Kec. Mojoanyar, Kabupaten
              Mojokerto - Jawa Timur 61364 - Indonesia
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <FaPhone />
            <span>0812-3456-7890</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <FaEnvelope />
            <span>info@ptmka.com</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
