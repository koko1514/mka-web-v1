import {
  ShoppingCart,
  Warehouse,
  Factory,
  FolderKanban,
  Calculator,
  LayoutDashboard,
} from "lucide-react";

interface SidebarProps {
  active: string;
  setActive: (title: string) => void;
}

const menuItems = [
  { title: "Sales", icon: ShoppingCart },
  { title: "Inventory Management", icon: Warehouse },
  { title: "Manufacture", icon: Factory },
  { title: "Project", icon: FolderKanban },
  { title: "Accounting", icon: Calculator },
];

const DashboardSidebar = ({ active, setActive }: SidebarProps) => {
  return (
    <aside className="w-[250px] bg-admin border-r border-white/10 h-full overflow-y-auto hidden md:block">
      <nav className="py-4">
        {/* ... bagian General Setting ... */}

        <div className="mt-4">
          <ul className="mt-1 space-y-0.5 px-2">
            {menuItems.map((item) => {
              const isActive = active === item.title; // Menggunakan active dari props
              return (
                <li key={item.title}>
                  <button
                    onClick={() => setActive(item.title)} // Menggunakan setActive dari props
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary font-medium border-l-[3px] border-primary"
                        : "text-white/70 hover:bg-white/5"
                    }`}
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    <span>{item.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Dashboard Overview */}
        <div className="mt-6">
          <ul className="px-2">
            <li>
              <button
                onClick={() => setActive("Overview")}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors ${
                  active === "Overview"
                    ? "bg-primary/10 text-primary font-medium border-l-[3px] border-primary"
                    : "text-white/70 hover:bg-white/5"
                }`}
              >
                <LayoutDashboard className="h-4 w-4 shrink-0" />
                <span>Dashboard Overview</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
