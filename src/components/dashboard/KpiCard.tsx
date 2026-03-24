import type { LucideIcon } from "lucide-react";

interface KpiCardProps {
  title: string;
  subtitle: string;
  value: string;
  icon: LucideIcon;
}

const KpiCard = ({ title, subtitle, value, icon: Icon }: KpiCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-sm border border-border p-5 flex items-start justify-between gap-4">
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-card-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
        <p className="text-2xl font-bold text-card-foreground mt-3">{value}</p>
      </div>
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>
    </div>
  );
};

export default KpiCard;
