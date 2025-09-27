"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Container from "@/components/Container";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add authentication logic here
    console.log("Logging in with", email, password);
    router.push("/"); // redirect to homepage on login
  };

  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center bg-[#0b1012] text-white">
        <motion.div
          className="bg-[#111a1c] p-10 rounded-2xl shadow-2xl w-full max-w-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold text-center mb-6 text-cyan-400">
            Login
          </h1>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="mb-1 text-gray-300">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-[#1a2226] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-300">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="px-4 py-2 rounded-lg bg-[#1a2226] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
                required
              />
            </div>

            <Button type="submit" variant="primary">
              Login
            </Button>
          </form>

          <p className="text-center text-gray-400 mt-4">
            Don’t have an account?{" "}
            <a href="/auth/register" className="text-cyan-400 hover:underline">
              Sign up
            </a>
          </p>
        </motion.div>
      </div>
    </Container>
  );
}
