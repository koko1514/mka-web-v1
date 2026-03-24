import {
  ShoppingCart,
  FileText,
  Truck,
  DollarSign,
  Users,
  MessagesSquare,
} from "lucide-react";
import ModuleCard from "../Fragments/ModuleCard";

const Module = () => {
  const modules = [
    { title: "Inquiry", icon: <MessagesSquare /> },
    { title: "Create Purchase Requisition", icon: <ShoppingCart /> },
    { title: "Proses Purchase Requisition", icon: <ShoppingCart /> },
    { title: "Manage RFQ", icon: <FileText /> },
    { title: "Compare Supplier Quotation" },
    { title: "Manage Purchase Dokumen" },
    { title: "Post Goods Receipt", icon: <Truck /> },
    { title: "Manage Supplier Invoice", icon: <FileText /> },
    { title: "Post Payment to GL", icon: <DollarSign /> },
    { title: "Manage Customer/Vendor", icon: <Users /> },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {modules.map((m, i) => (
        <ModuleCard key={i} title={m.title} icon={m.icon} />
      ))}
    </div>
  );
}

export default Module;