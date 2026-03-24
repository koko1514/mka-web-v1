import { NextResponse } from "next/server";
import { executeOdoo } from "@/lib/odoo";

export async function GET() {
  try {
    // 1. AMBIL DATA TREND PENJUALAN (Untuk Bar & Area Chart) !!
    // Kita kelompokkan berdasarkan bulan pemesanan
    const salesTrend = await executeOdoo("sale.order", "read_group", [[
      [["state", "in", ["sale", "done"]]], // Hanya ambil order yang sudah deal
      ["amount_total"], // Field yang mau dijumlahkan
      ["date_order:month"], // Kelompokkan berdasarkan bulan
    ]]);

    // Format datanya agar sesuai dengan library Recharts
    const formattedTrend = salesTrend.map((item) => {
      // Odoo mengembalikan format "January 2026", kita potong jadi "JAN"
      const monthRaw = item["date_order:month"];
      const monthName = monthRaw
        ? monthRaw.split(" ")[0].substring(0, 3).toUpperCase()
        : "UNK";

      return {
        name: monthName,
        actual: item.amount_total,
        // Karena belum ada fitur target di Odoo, kita buat target dinamis (misal aktual + 20%) untuk visual
        target: item.amount_total > 0 ? item.amount_total * 1.2 : 5000000,
      };
    });

    // 2. AMBIL DATA STATUS PRODUKSI (Untuk Donut Chart)
    const mrpStatus = await executeOdoo("mrp.production", "read_group", [[
      [], // Ambil semua data MO
      ["id"],
      ["state"], // Kelompokkan berdasarkan statusnya
    ]]);

    let doneCount = 0;
    let progressCount = 0;

    mrpStatus.forEach((status) => {
      if (status.state === "done") {
        doneCount += status.mrp_production_count || status.state_count || 0;
      } else if (status.state !== "cancel") {
        progressCount += status.mrp_production_count || status.state_count || 0;
      }
    });

    const formattedPie = [
      { name: "Selesai", value: doneCount },
      { name: "Sisa Produksi", value: progressCount },
    ];

    return NextResponse.json({
      success: true,
      trend: formattedTrend,
      pie: formattedPie,
    });
  } catch (error) {
    console.error("Dashboard API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
