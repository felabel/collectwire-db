// src/components/layout/DashboardLayout.tsx
"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen  w-full max-w-[2500px] mx-auto">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex flex-1 flex-col max-h-screen overflow-y-auto pb-8">
        <Navbar onMenuClick={toggleSidebar} />
        <main className="flex-1  px-4 lg:px-8 bg-white">{children}</main>
      </div>
    </div>
  );
}
