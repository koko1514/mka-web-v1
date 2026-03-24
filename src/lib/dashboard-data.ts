import {
  Package,
  Activity,
  Users,
  FileText,
  ShoppingCart,
  Receipt,
  Truck,
  Box,
  Wrench,
  ClipboardList,
  Briefcase,
  Clock,
  FileSpreadsheet,
  CreditCard,
  Landmark,
} from "lucide-react";
import { FioriMenuCard } from "@/types/dashboard";

export const fioriMenuData: Record<string, FioriMenuCard[]> = {
  Sales: [
    { title: "Manage Customers", desc: "Data Perusahaan Otobus (PO)", icon: Users },
    { title: "Manage Quotations", desc: "Buat Penawaran Harga", icon: FileText },
    { title: "Sales Orders", desc: "Daftar SPK Aktif", icon: ShoppingCart },
    { title: "Invoicing Status", desc: "Status Tagihan Klien", icon: Receipt },
  ],
  "Inventory Management": [
    { title: "Master Data Produk", desc: "Katalog Rangka, Plat, dll", icon: Box },
    { title: "Inbound (Barang Masuk)", desc: "Penerimaan dari Supplier", icon: Truck },
    { title: "Outbound (Barang Keluar)", desc: "Surat Jalan / Pengiriman", icon: Package },
    { title: "Stock Valuation", desc: "Cek Stok Real-time", icon: Activity },
  ],
  Manufacture: [
    { title: "Bill of Materials", desc: "Resep Bodi Bus", icon: ClipboardList },
    { title: "Manufacturing Orders", desc: "Perintah Kerja Produksi (MO)", icon: Wrench },
    { title: "Work Centers", desc: "Stasiun Kerja (Las, Dempul, Cat)", icon: Activity },
    { title: "Scrap Management", desc: "Catat Sisa Material", icon: Box },
  ],
  Project: [
    { title: "Daftar Proyek", desc: "Pantau Progres Bus", icon: Briefcase },
    { title: "Task Management", desc: "Tugas Spesifik Divisi", icon: ClipboardList },
    { title: "Timesheets", desc: "Jam Kerja Teknisi", icon: Clock },
  ],
  Accounting: [
    { title: "Customer Invoices", desc: "Piutang Pelanggan", icon: FileSpreadsheet },
    { title: "Vendor Bills", desc: "Hutang Supplier", icon: CreditCard },
    { title: "Bank & Cash", desc: "Buku Kasir", icon: Landmark },
  ],
};

export const PIE_COLORS = ["#0284c7", "#e2e8f0"];
