import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { CheckCircle2 } from "lucide-react";
import { ChartData, PieData, Order } from "@/types/dashboard";
import { PIE_COLORS } from "@/lib/dashboard-data";

interface OverviewChartsProps {
  chartData: ChartData[];
  pieData: PieData[];
  percentage: number;
  orders: Order[];
}

const OverviewCharts = ({ chartData, pieData, percentage, orders }: OverviewChartsProps) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* KOLOM KIRI (Berisi Bar Chart & Bottom Charts) */}
        <div className="lg:col-span-2 space-y-6">
          {/* BAR CHART: Result Sales */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-bold text-slate-800">
                  Result (Sales by Month)
                </h3>
                <p className="text-xs text-slate-500">
                  Perbandingan Target vs Aktual
                </p>
              </div>
              <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                Check Now
              </button>
            </div>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                {chartData.length > 0 ? (
                  <BarChart
                    data={chartData}
                    margin={{
                      top: 10,
                      right: 10,
                      left: -20,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#e2e8f0"
                    />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 12, fill: "#64748b" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 12, fill: "#64748b" }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(value) =>
                        `Rp ${value >= 1000000 ? (value / 1000000).toFixed(0) + "M" : value}`
                      }
                    />
                    <Tooltip
                      cursor={{ fill: "#f1f5f9" }}
                      contentStyle={{
                        borderRadius: "8px",
                        border: "none",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                      formatter={(value: string | number | readonly (string | number)[] | undefined) =>
                        `Rp ${Number(Array.isArray(value) ? value[0] : (value || 0)).toLocaleString("id-ID")}`
                      }
                    />
                    <Legend
                      iconType="circle"
                      wrapperStyle={{ fontSize: "12px" }}
                    />
                    <Bar
                      dataKey="target"
                      name="Target Penjualan"
                      fill="#94a3b8"
                      radius={[4, 4, 0, 0]}
                      barSize={20}
                    />
                    <Bar
                      dataKey="actual"
                      name="Aktual Penjualan"
                      fill="#0284c7"
                      radius={[4, 4, 0, 0]}
                      barSize={20}
                    />
                  </BarChart>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    Memuat data grafik dari Odoo...
                  </div>
                )}
              </ResponsiveContainer>
            </div>
          </div>

          {/* BOTTOM ROW: Area Chart & Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Area Chart */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-64 flex flex-col">
              <div className="mb-4">
                <h3 className="font-bold text-slate-800">
                  Cashflow Trend
                </h3>
                <p className="text-xs text-slate-500">
                  Pertumbuhan nilai penjualan
                </p>
              </div>
              <div className="flex-1 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartData}
                    margin={{
                      top: 0,
                      right: 0,
                      left: -30,
                      bottom: 0,
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="colorActual"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#0284c7"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#0284c7"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Tooltip
                      contentStyle={{
                        borderRadius: "8px",
                        border: "none",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="actual"
                      stroke="#0284c7"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorActual)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Jadwal Terdekat */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-64 flex flex-col">
              <h3 className="font-bold text-slate-800 mb-4">
                Aktivitas Terbaru
              </h3>
              <div className="flex-1 space-y-4 overflow-y-auto pr-2">
                {orders.slice(0, 3).map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 border-b border-slate-100 pb-2"
                  >
                    <div className="bg-slate-100 text-slate-600 rounded px-2 py-1 text-xs font-bold text-center min-w-[50px]">
                      {item.order_number}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800 line-clamp-1">
                        {item.customer_name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {item.status}
                      </p>
                    </div>
                  </div>
                ))}
                {orders.length === 0 && (
                  <p className="text-sm text-slate-400 italic">
                    Belum ada aktivitas pesanan.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* KOLOM KANAN (Donut Chart & List) */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full flex flex-col">
            <h3 className="font-bold text-slate-800 text-center mb-6">
              Penyelesaian Produksi
            </h3>

            <div className="h-48 relative mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={85}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                    cornerRadius={4}
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={PIE_COLORS[index % PIE_COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-3xl font-bold text-slate-800">
                  {percentage}%
                </span>
                <span className="text-xs text-slate-500">
                  Selesai
                </span>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              {[
                { name: "Persiapan Material", done: percentage > 10 },
                { name: "Perakitan Rangka", done: percentage > 30 },
                { name: "Pengecatan Bodi", done: percentage > 60 },
                {
                  name: "Pemasangan Interior",
                  done: percentage > 90,
                },
              ].map((task, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      className={`w-4 h-4 ${task.done ? "text-emerald-500" : "text-slate-300"}`}
                    />
                    <span
                      className={`text-sm ${task.done ? "text-slate-800" : "text-slate-500"}`}
                    >
                      {task.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 bg-secondary text-white py-2.5 rounded-md text-sm font-medium hover:bg-secondary/90 transition-colors">
              Lihat Detail Manufaktur
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCharts;
