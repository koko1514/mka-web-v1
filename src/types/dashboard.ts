import { LucideIcon } from "lucide-react";

export interface SalesStats {
  total_revenue: number;
  total_orders: number;
  wip_count: number;
}

export interface Order {
  id: string | number;
  order_number: string | number;
  customer_name: string;
  total_amount: number | string;
  status: string;
}

export interface ChartData {
  name: string;
  target: number;
  actual: number;
}

export interface PieData {
  name: string;
  value: number;
}

export interface FioriMenuCard {
  title: string;
  desc: string;
  icon: LucideIcon;
}
