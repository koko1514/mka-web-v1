"use client";

import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import { usePathname } from "next/navigation";

const disableNavFoot = [
  "/login",
  "/register",
  "/dashboard",
];

const latoFont = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
}); 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/LogoMKA.svg" />
      </head>
      <body
        className={`${latoFont.variable} antialiased`}
        suppressHydrationWarning
      >
        {!disableNavFoot.includes(pathname) && <Navbar />}
        {children}
        {!disableNavFoot.includes(pathname) && <Footer />}
      </body>
    </html>
  );
}
