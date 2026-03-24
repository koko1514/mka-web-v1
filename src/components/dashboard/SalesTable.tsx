import { Order } from "@/types/dashboard";

interface SalesTableProps {
  orders: Order[];
  activeTab: string;
}

const SalesTable = ({ orders, activeTab }: SalesTableProps) => {
  if (activeTab !== "Sales") return null;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-4">
          Daftar Sales Order (Active Orders)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="p-4 font-bold text-slate-600 uppercase tracking-wider text-[11px]">
                  Order #
                </th>
                <th className="p-4 font-bold text-slate-600 uppercase tracking-wider text-[11px]">
                  Customer
                </th>
                <th className="p-4 font-bold text-slate-600 uppercase tracking-wider text-[11px]">
                  Amount
                </th>
                <th className="p-4 font-bold text-slate-600 uppercase tracking-wider text-[11px]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b hover:bg-slate-50 transition-colors"
                  >
                    <td className="p-4 font-medium text-slate-800">
                      {order.order_number}
                    </td>
                    <td className="p-4 text-slate-600">
                      {order.customer_name}
                    </td>
                    <td className="p-4 text-slate-600">
                      Rp {Number(order.total_amount).toLocaleString("id-ID")}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                          order.status === "Completed"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500">
                    Tidak ada data pesanan dari Odoo.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesTable;
