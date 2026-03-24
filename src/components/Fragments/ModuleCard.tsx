import { MoreVertical } from "lucide-react";

interface ModuleCardProps {
  title: string;
  icon?: React.ReactNode; // opsional
}

 const ModuleCard = ({ title, icon }: ModuleCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out pb-15">
      <div className="flex justify-between items-start">
        <div className="text-3xl text-gray-700">
          {icon ?? (
            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
              📦 {/* default icon */}
            </div>
          )}
        </div>
        <MoreVertical className="w-4 h-4 text-gray-400 cursor-pointer" />
      </div>
      <h3 className="mt-4 text-sm font-medium text-gray-800">{title}</h3>
    </div>
  );
}

export default ModuleCard;