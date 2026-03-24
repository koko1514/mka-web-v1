"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/Elements/Input";
import { Label } from "@/components/Elements/Label";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/Elements/Button";
import AuthSidePanel from "@/components/Fragments/AuthSidePanel";

const Login = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!email.trim()) newErrors.email = "Email wajib diisi";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Format email tidak valid";
    if (!password.trim()) newErrors.password = "Password wajib diisi";
    else if (password.length < 6)
      newErrors.password = "Password minimal 6 karakter";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      // Bypassing API for now as requested
      // const response = await fetch("http://localhost:5000/api/login", { ... });

      const dummyData = {
        success: true,
        adminName: "Admin",
        role: "Administrator",
      };

      if (dummyData.success) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("adminName", dummyData.adminName);
        localStorage.setItem("adminRole", dummyData.role);
        toast({ title: "Login Berhasil (Bypass mode)!" });
        router.push("/admin/dashboard");
      } else {
        toast({
          title: "Gagal",
          description: "Login failed",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Error",
        description: "Backend tidak aktif",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      <AuthSidePanel />

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo */}
          <div className="flex items-center gap-3 lg:hidden">
            <Image
              src="/assets/LogoMKA.png"
              alt="Logo CV Mandiri Kerja Abadi"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-semibold text-foreground">
              CV Mandiri Kerja Abadi
            </span>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Masuk ke akun Anda
            </h1>
            <p className="mt-2 text-muted-foreground">
              Masukkan email dan password untuk melanjutkan.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700 font-semibold">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="nama@perusahaan.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`bg-slate-50 border-gray-300 focus-visible:ring-primary ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-slate-700 font-semibold"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`bg-white border-gray-300 focus-visible:ring-primary ${errors.password ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-primary hover:bg-secondary text-white font-medium"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Memproses...
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>

          <p className="text-center text-sm text-slate-500">
            Belum punya akun?{" "}
            <Link
              href="/register"
              className="font-medium text-primary hover:underline"
            >
              Daftar di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
