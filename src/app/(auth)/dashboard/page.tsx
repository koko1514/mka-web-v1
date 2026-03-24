"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DollarSign, Package, Activity, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import KpiCard from "@/components/dashboard/KpiCard";
import OverviewCharts from "@/components/dashboard/OverviewCharts";
import FioriCards from "@/components/dashboard/FioriCards";
import SalesTable from "@/components/dashboard/SalesTable";
import { SalesStats, Order, ChartData, PieData } from "@/types/dashboard";
import { fioriMenuData } from "@/lib/dashboard-data";

const Dashboard = () => {
  const router = useRouter();
  const { toast } = useToast();

  const [activeTab, setActiveTab] = useState("Overview");
  const [adminName, setAdminName] = useState("Admin");

  // State untuk Data Odoo
  const [salesStats, setSalesStats] = useState<SalesStats>({
    total_revenue: 0,
    total_orders: 0,
    wip_count: 0,
  });
  const [orders, setOrders] = useState<Order[]>([]);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [pieData, setPieData] = useState<PieData[]>([
    { name: "Belum Ada Data", value: 1 }, // Fallback awal
  ]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const storedAdminName = localStorage.getItem("adminName");

    if (storedAdminName) {
      setAdminName(storedAdminName);
    }

    if (!isLoggedIn) {
      toast({
        title: "Akses Ditolak",
        description: "Silakan login terlebih dahulu.",
        variant: "destructive",
      });
      router.push("/login");
      return;
    }

    if (activeTab === "Sales" || activeTab === "Overview") {
      // Fetch KPI Stats
      fetch("/api/sales/stats")
        .then((res) => {
          if (!res.ok) throw new Error("API not ready");
          return res.json();
        })
        .then((data) => setSalesStats(data))
        .catch(() => console.log("Gagal memuat Stats KPI"));

      // Fetch Sales Orders Tabel
      fetch("/api/sales/orders")
        .then((res) => {
          if (!res.ok) throw new Error("API not ready");
          return res.json();
        })
        .then((data) => setOrders(data))
        .catch(() => console.log("Gagal memuat Tabel Orders"));

      // Fetch Data Grafik & Pie Chart Dashboard
      fetch("/api/dashboard")
        .then((res) => {
          if (!res.ok) throw new Error("API not ready");
          return res.json();
        })
        .then((data) => {
          if (data.success) {
            if (data.trend && data.trend.length > 0) setChartData(data.trend);
            if (data.pie && data.pie.length > 0) setPieData(data.pie);
          }
        })
        .catch(() => console.log("Gagal memuat Grafik Dashboard"));
    }
  }, [router, toast, activeTab]);

  const salesKpis = [
    {
      title: "Revenue",
      subtitle: "Total Penjualan",
      value: `Rp ${Number(salesStats.total_revenue).toLocaleString("id-ID")}`,
      icon: DollarSign,
    },
    {
      title: "Sales Orders",
      subtitle: "Total Pesanan",
      value: salesStats.total_orders.toString(),
      icon: Package,
    },
    {
      title: "Work In Progress",
      subtitle: "Produksi Berjalan",
      value: salesStats.wip_count.toString(),
      icon: Activity,
    },
    {
      title: "Gross Profit",
      subtitle: "Margin Unit",
      value: "15%", // Anda bisa update ini juga ke depannya jika butuh
      icon: TrendingUp,
    },
  ];

  const activeMenuCards = fioriMenuData[activeTab] || [];

  // Hitung persentase untuk Donut Chart
  const totalPie = pieData.reduce((sum, item) => sum + item.value, 0);
  const doneValue = pieData.find((p) => p.name === "Selesai")?.value || 0;
  const percentage = totalPie === 0 ? 0 : Math.round((doneValue / totalPie) * 100);

  return (
    <div className="flex flex-col h-screen bg-bgsec">
      <DashboardHeader />
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar active={activeTab} setActive={setActiveTab} />

        <main className="flex-1 overflow-y-auto p-6 bg-slate-50">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-800">
              Selamat Datang, {adminName}!
            </h1>
            <p className="text-slate-500">
              Modul Aktif:{" "}
              <span className="font-semibold text-primary">{activeTab}</span>
            </p>
          </div>

          {/* 2. RENDER KPI & VISUAL DASHBOARD KHUSUS OVERVIEW */}
          {activeTab === "Overview" && (
            <>
              {/* Bagian KPI */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-slate-700 mb-5 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Key Performance Indicator
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                  {salesKpis.map((kpi) => (
                    <KpiCard key={kpi.title} {...kpi} />
                  ))}
                </div>
              </div>

              {/* Bagian Visual Grafik (Recharts) */}
              <OverviewCharts 
                chartData={chartData} 
                pieData={pieData} 
                percentage={percentage} 
                orders={orders} 
              />
            </>
          )}

          {/* 3. RENDER SAP FIORI CARDS JIKA TAB MEMILIKI SUB-MODUL */}
          <FioriCards activeTab={activeTab} activeMenuCards={activeMenuCards} />

          {/* 4. RENDER TABEL KHUSUS TAB SALES */}
          <SalesTable activeTab={activeTab} orders={orders} />

          {/* TAMPILAN FALLBACK JIKA MENU TIDAK ADA DI MAPPING */}
          {activeTab !== "Overview" &&
            activeMenuCards.length === 0 &&
            activeTab !== "Sales" && (
              <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-slate-300 rounded-xl bg-slate-50/50">
                <p className="text-slate-500 italic">
                  Konten untuk modul &quot;{activeTab}&quot; sedang disiapkan.
                </p>
              </div>
            )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
