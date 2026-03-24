import { FioriMenuCard } from "@/types/dashboard";

interface FioriCardsProps {
  activeTab: string;
  activeMenuCards: FioriMenuCard[];
}

const FioriCards = ({ activeTab, activeMenuCards }: FioriCardsProps) => {
  if (activeMenuCards.length === 0) return null;

  return (
    <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-xl font-bold text-slate-700 mb-5">
        All Modules: {activeTab}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {activeMenuCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md hover:border-primary/50 transition-all cursor-pointer group flex flex-col gap-4"
            >
              <div className="p-3 bg-primary/10 w-fit rounded-lg group-hover:bg-primary transition-colors">
                <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500">{card.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FioriCards;
