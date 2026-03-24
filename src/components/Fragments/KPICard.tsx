import { IconType } from "react-icons";
import { FaAngry } from "react-icons/fa";


interface KpiCardProps {
  title: string;
  subtitle: string;
  value: string | number;
  icon?: IconType;
}

const KpiCard = ({ title, subtitle, value, icon: Icon = FaAngry} : KpiCardProps) => {
  return (
    <div className="bg-white shadow rounded p-5">
      <p className="font-semibold text-lg">{title}</p>
      <p className="text-xs text-gray-500 mb-2">{subtitle}</p>
      <div className="flex items-center justify-between mt-4 p-6">
        <Icon className="size-10" />
        <div className="text-center w-1/2">
          <span className=" text-3xl font-bold">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default KpiCard;