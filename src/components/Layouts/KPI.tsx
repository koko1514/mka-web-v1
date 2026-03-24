import KpiCard from "../Fragments/KPICard";

const kpiData = [
  {
    title: "Stock on Hand",
    subtitle: "Unit totals",
    value: "20",
  },
  {
    title: "Backlog Order",
    subtitle: "Total Pending Orders",
    value: "5",
  },
  {
    title: "Revenue",
    subtitle: "Monthly Sales Revenue",
    value: "$250,000",
  },
  {
    title: "Gross Profit",
    subtitle: "Margin per Unit",
    value: "15%",
  },
  {
    title: "Work in Progress",
    subtitle: "Unit totals in progress",
    value: "7",
  },
];

const KPI = () => { 
    return (
      <>
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpiData.map((item, index) => (
            <KpiCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              value={item.value}
            />
          ))}
        </div>
      </>
    );
};

export default KPI;