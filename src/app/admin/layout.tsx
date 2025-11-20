"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", href: "/admin" },
    { name: "Add Labour", href: "/admin/labour/add" },
    { name: "Find Labour", href: "/find-labour" },
    { name: "Search", href: "/search" },
  ];

  return (
    <div className="flex min-h-screen bg-[#0b1012] text-white">

      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 bg-[#111a1c] border-r border-gray-800 p-5 flex flex-col">
        <h1 className="text-2xl font-bold text-cyan-400 mb-8">LabourChownk</h1>

        <nav className="flex flex-col gap-3">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-lg transition ${
                pathname === item.href
                  ? "bg-cyan-500 text-black font-semibold"
                  : "hover:bg-[#1a2226]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-auto">
          <button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition">
            Logout
          </button>
        </div>
      </aside>

      {/* ================= MAIN AREA ================= */}
      <div className="flex-1 flex flex-col">

        {/* ========== HEADER ========== */}
        <header className="h-16 bg-[#111a1c] border-b border-gray-800 flex items-center justify-between px-6">
          <h2 className="text-xl font-semibold">Admin Panel</h2>

          <div className="flex items-center gap-4">
            <span className="text-gray-300">Welcome, Admin</span>
            <div className="w-10 h-10 rounded-full bg-cyan-400"></div>
          </div>
        </header>

        {/* ========== CONTENT AREA ========== */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
