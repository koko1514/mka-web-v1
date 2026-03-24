import { Admin } from "./Admin";

// Fungsi login mock
export function login(username: string, password: string) {
  if (username === Admin.username && password === Admin.password) {
    return {
      success: true,
      message: "Login berhasil",
      user: Admin,
    };
  }
  return {
    success: false,
    message: "Username atau password salah",
  };
}
