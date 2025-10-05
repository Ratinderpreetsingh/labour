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
    <>
      {/* 🔹 Navbar */}
      <nav className="bg-[#0b1012] shadow-md sticky top-0 z-50">
        <Container>
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-extrabold text-cyan-400 tracking-wide"
            >
              LabourHire
            </Link>

            {/* Desktop Menu */}
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

              {/* Login Button */}
              <Link
                href="/auth/login"
                className="px-4 py-2 rounded-full bg-cyan-500 text-white font-medium shadow-md hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300"
              >
                Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-cyan-400 transition-colors duration-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </Container>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-[#0b1012] border-t border-gray-800">
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
              <Link
                href="/auth/login"
                className="px-4 py-2 rounded-full bg-cyan-500 text-white font-medium shadow-md hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* 🔹 Beautiful Search Section */}
      <div className="bg-[#0d1417] border-t border-gray-800 py-5 sticky top-16 z-40 shadow-inner">
        <Container>
          <div className="flex justify-center w-full">
            <div className="flex items-center gap-2 bg-[#1a2226] px-4 py-2 rounded-xl w-full md:w-1/2 shadow-lg shadow-black/20">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="🔍 Search for labour, jobs, or skills..."
                className="flex-1 bg-transparent text-gray-200 placeholder-gray-400 px-2 py-1 focus:outline-none text-sm md:text-base"
              />
              <button
                onClick={handleSearch}
                className="px-4 py-1.5 rounded-lg bg-cyan-500 text-white font-medium hover:bg-cyan-600 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                Go
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
