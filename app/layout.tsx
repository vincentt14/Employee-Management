import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MG | Employee Management App",
  description: "A Work From Home Employee Management App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <html lang="en">
          <body className={inter.className}>
            <Toaster position="top-center" />
            <Navbar />
            {children}
            <Footer />
          </body>
        </html>
      </body>
    </html>
  );
}
