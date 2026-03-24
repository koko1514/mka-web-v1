"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Elements/Button";
import { Input } from "@/components/Elements/Input";
import { Label } from "@/components/Elements/Label";
import { Loader2, ChevronDown } from "lucide-react";
import AuthSidePanel from "@/components/Fragments/AuthSidePanel";
import { useToast } from "@/hooks/use-toast";

// Kode akses statis
const STATIC_ADMIN_CODE = "ERP-SUPER-2026";

interface FormData {
  adminName: string;
  email: string;
  role: string; // Sudah ada
  adminAccessCode: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  adminName?: string;
  email?: string;
  role?: string;
  adminAccessCode?: string;
  password?: string;
  confirmPassword?: string;
}

const Register = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    adminName: "",
    email: "",
    role: "Staff Admin", // Default Role
    adminAccessCode: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isRoleOpen, setIsRoleOpen] = useState(false);

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const validate = () => {
    const e: FormErrors = {};
    if (!form.adminName.trim()) e.adminName = "Nama lengkap admin wajib diisi";
    if (!form.email.trim()) e.email = "Email kantor wajib diisi";
    if (!form.role.trim()) e.role = "Jabatan wajib dipilih";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Format email tidak valid";

    // VALIDASI KODE AKSES STATIS
    if (!form.adminAccessCode.trim()) {
      e.adminAccessCode = "Access code diperlukan";
    } else if (form.adminAccessCode !== STATIC_ADMIN_CODE) {
      e.adminAccessCode = "Access code salah! Hubungi Super Admin.";
    }

    if (!form.password) e.password = "Password wajib diisi";
    else if (form.password.length < 6)
      e.password = "Password minimal 6 karakter";
    if (form.password !== form.confirmPassword)
      e.confirmPassword = "Password tidak cocok";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      // --- KONEKSI KE DATABASE VIA BACKEND ---
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          adminName: form.adminName,
          email: form.email,
          role: form.role, // <-- Mengirim Role ke Backend
          password: form.password,
          adminAccessCode: form.adminAccessCode,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Registrasi Berhasil!",
          description: "Akun Anda telah dibuat. Silakan login.",
          className: "bg-emerald-50 border-emerald-200 text-emerald-800",
        });
        router.push("/login");
      } else {
        toast({
          title: "Registrasi Gagal",
          description: data.message || "Terjadi kesalahan pada sistem.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Register Error:", error);
      toast({
        title: "Error Koneksi",
        description: "Tidak dapat terhubung ke server backend.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      <AuthSidePanel />

      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="flex items-center gap-3 lg:hidden">
            <Image
              src="/assets/LogoMKA.png"
              alt="Logo ERP Admin Portal"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-semibold text-foreground">
              ERP Admin Portal
            </span>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Registrasi Admin Baru
            </h1>
            <p className="mt-2 text-muted-foreground">
              Halaman khusus untuk pendaftaran otoritas Admin ERP.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nama Lengkap */}
            <div className="space-y-2">
              <Label htmlFor="adminName">Nama Lengkap Admin</Label>
              <Input
                id="adminName"
                placeholder="Masukkan nama lengkap Anda"
                value={form.adminName}
                onChange={(e) => update("adminName", e.target.value)}
                className={
                  errors.adminName
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }
              />
              {errors.adminName && (
                <p className="text-xs text-red-500 font-medium">
                  {errors.adminName}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Admin</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="admin@perusahaan.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={
                  errors.email
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }
              />
              {errors.email && (
                <p className="text-xs text-red-500 font-medium">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Input Role (Dropdown) - DITAMBAHKAN DI SINI */}
            <div className="space-y-2">
              <Label htmlFor="role">Jabatan / Role</Label>
              <div className="relative">
                <select
                  id="role"
                  className={`appearance-none flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${
                    errors.role
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }`}
                  value={form.role}
                  onChange={(e) => {
                    update("role", e.target.value);
                    setIsRoleOpen(false);
                  }}
                  onClick={() => setIsRoleOpen(!isRoleOpen)}
                  onBlur={() => setIsRoleOpen(false)}
                >
                  <option value="Super Admin">Super Admin</option>
                  <option value="Sales Representative">
                    Sales Representative
                  </option>
                  <option value="Inventory Manager">Inventory Manager</option>
                  <option value="Production Head">Production Head</option>
                  <option value="Staff Admin">Staff Admin</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ChevronDown
                    className={`h-4 w-4 opacity-50 transition-transform duration-200 ${
                      isRoleOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              {errors.role && (
                <p className="text-xs text-red-500 font-medium">
                  {errors.role}
                </p>
              )}
            </div>

            {/* Admin Access Code */}
            <div className="space-y-2">
              <Label htmlFor="adminAccessCode">Admin Access Code</Label>
              <Input
                id="adminAccessCode"
                placeholder="Masukkan kode otoritas"
                value={form.adminAccessCode}
                onChange={(e) => update("adminAccessCode", e.target.value)}
                className={
                  errors.adminAccessCode
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }
              />
              {errors.adminAccessCode && (
                <p className="text-xs text-red-500 font-medium">
                  {errors.adminAccessCode}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => update("password", e.target.value)}
                className={
                  errors.password
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }
              />
              {errors.password && (
                <p className="text-xs text-red-500 font-medium">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                value={form.confirmPassword}
                onChange={(e) => update("confirmPassword", e.target.value)}
                className={
                  errors.confirmPassword
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }
              />
              {errors.confirmPassword && (
                <p className="text-xs text-red-500 font-medium">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full h-11 mt-4 text-primary-foreground"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Memproses...
                </>
              ) : (
                "Daftar Sebagai Admin"
              )}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Sudah memiliki akun admin?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary hover:underline"
            >
              Login Admin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
