import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, LayoutGrid, User, ChevronDown, LogOut } from "lucide-react";

const DashboardHeader = () => {
  const router = useRouter();
  const [adminName, setAdminName] = useState("Guest");
  const [adminRole, setAdminRole] = useState("Administrator");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // --- AMBIL NAMA & ROLE USER DARI LOCALSTORAGE ---
  useEffect(() => {
    const storedName = localStorage.getItem("adminName");
    const storedRole = localStorage.getItem("adminRole"); // Ambil role yang disimpan saat login

    if (storedName) {
      setAdminName(storedName);
    }
    if (storedRole) {
      setAdminRole(storedRole);
    }
  }, []);

  // --- FUNGSI LOGOUT ---
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("adminName");
    localStorage.removeItem("adminRole"); // Hapus role juga saat logout
    router.push("/");
  };

  return (
    <header className="h-14 bg-admin text-white flex items-center px-4 gap-4 shrink-0 border-b border-white/10 relative z-50">
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <span className="font-bold text-lg tracking-wide hidden md:block text-white">
          CV Mandiri Kerja Abadi
        </span>
      </div>

      {/* Center - Search */}
      <div className="flex-1 max-w-xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-white/10 border-0 rounded-md py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>

      {/* Right Side - User Profile */}
      <div className="flex items-center gap-4">
        <button className="p-1.5 rounded hover:bg-white/10 transition-colors">
          <LayoutGrid className="h-5 w-5 text-white/70" />
        </button>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 outline-none cursor-pointer p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <User className="h-4 w-4 text-admin font-bold" />
            </div>
            <div className="hidden md:block text-sm text-left">
              <p className="font-semibold leading-tight text-white">
                {adminName}
              </p>
              <p className="text-[10px] text-primary uppercase tracking-wider font-bold">
                {adminRole}
              </p>
            </div>
            <ChevronDown
              className={`h-3.5 w-3.5 text-white/50 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border rounded-xl shadow-lg py-2 animate-in fade-in zoom-in-95 duration-200">
              <div className="px-4 py-2 border-b">
                <p className="text-xs font-semibold text-slate-500">
                  Akun Saya
                </p>
              </div>
              <button className="w-full flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                <User className="mr-2 h-4 w-4" />
                <span>Profil</span>
              </button>
              <div className="h-px bg-slate-100 my-1" />
              <button
                onClick={handleLogout}
                className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
