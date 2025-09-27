// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import { useRouter } from "next/navigation";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Find Labour", href: "/find-labour" },
  { name: "Jobs", href: "/jobs" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/search/${encodeURIComponent(query.trim().toLowerCase())}`);
    setQuery("");
  };

  return (
    <nav className="bg-[#0b1012] shadow-lg sticky top-0 z-50">
      <Container>
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-extrabold text-cyan-400">
            LabourHire
          </Link>

          {/* Desktop Menu + Search */}
          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-cyan-400 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}

            {/* 🔹 Search Bar (always visible) */}
            <div className="flex items-center gap-2 bg-[#1a2226] px-3 py-1 rounded-lg">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="bg-transparent text-white px-2 py-1 focus:outline-none"
              />
              <button
                onClick={handleSearch}
                className="px-3 py-1 rounded-md bg-cyan-500 text-white text-sm hover:bg-cyan-600 transition"
              >
                Go
              </button>
            </div>

            {/* Login Button */}
            <Link
              href="/auth/login"
              className="px-4 py-2 rounded-full bg-cyan-500 text-white font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Login
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-cyan-400 transition-colors duration-300"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu with Search */}
      {isOpen && (
        <div className="md:hidden bg-[#0b1012] shadow-lg">
          <div className="flex flex-col space-y-3 px-6 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-cyan-400"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* 🔹 Mobile Search Bar */}
            <div className="flex items-center gap-2 bg-[#1a2226] px-3 py-2 rounded-lg">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 bg-transparent text-white px-2 py-1 focus:outline-none"
              />
              <button
                onClick={handleSearch}
                className="px-3 py-1 rounded-md bg-cyan-500 text-white text-sm hover:bg-cyan-600 transition"
              >
                Go
              </button>
            </div>

            <Link
              href="/auth/login"
              className="px-4 py-2 rounded-full bg-cyan-500 text-white font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
