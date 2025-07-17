import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";

import "./globals.css";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const leagueSpartan = League_Spartan({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Collectwire Dashboard",
  description: "Dashboard for managing your Collectwire account",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
