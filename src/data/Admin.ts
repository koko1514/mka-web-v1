// Definisikan tipe data untuk admin
export interface AdminUser {
  id: number;
  username: string;
  email: string;
  password: string; // Hanya untuk mock, di backend nyata jangan simpan plain text
  role: "admin" | "superadmin";
  name: string;
  lastLogin?: string;
}

// Data dummy untuk uji coba login
export const Admin: AdminUser = {
  id: 1,
  username: "admin",
  email: "admin@gmail.com",
  password: "admin", // dummy password
  role: "admin",
  name: "Admin Utama",
  lastLogin: "2025-08-12T08:00:00Z",
};
