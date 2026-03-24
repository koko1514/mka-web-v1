import { NextResponse } from "next/server";
import { connectOdoo } from "@/lib/odoo";

export async function GET() {
  try {
    // Kita hanya mencoba login/konek saja dulu
    await connectOdoo();

    return NextResponse.json({
      status: "Sukses!",
      pesan:
        "Next.js berhasil terhubung ke database mkappsi di Odoo Localhost.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "Error",
        pesan: "Gagal terhubung ke Odoo.",
        detail: error.message || error,
      },
      { status: 500 },
    );
  }
}
