import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const DashboardHeader = () => {
  return (
    <header className="bg-admin text-white flex items-center justify-between px-10 py-3">
      {/* Logo & Nama */}
      <div className="flex items-center gap-5">
        <div className="">
          <Image
            src="/assets/LogoMKA.png"
            alt="Logo MKA"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
        <span className="font-semibold">CV MANDIRI KERJA ABADI</span>
      </div>

      {/* Search */}
      <div className=" flex items-center gap-2 w-7/10 justify-center">
        <div className="w-full max-w-lg min-w-[200px]">
          <div className="relative w-full flex items-center border-b border-white opacity-50 hover:opacity-100 focus-within:opacity-100 transition duration-300 ease group">
            <input
              className="w-full bg-transparent placeholder:text-white text-sm pl-3 pr-10 py-2 focus:outline-none"
              placeholder="Search Here..."
            />
            <button
              className="absolute top-1/2 -translate-y-1/2 right-1 flex items-center justify-center rounded py-1 px-2.5 text-white "
              type="button"
            >
              <FaSearch className="text-white text-base" />
            </button>
          </div>
        </div>
      </div>

      {/* User */}
      <div className="flex right-0 items-center gap-3">
        <span>Name (Position)</span>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
};

export default DashboardHeader;
