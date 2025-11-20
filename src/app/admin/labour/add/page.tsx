"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Container from "@/components/Container";

export default function AddLabourPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    aadhar: "",
    salary: "",
    workType: "",
    joiningDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Labour Data:", form);

    // TODO: send data to backend
    // await axios.post("/api/labour", form)
  };

  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center bg-[#0b1012] text-white">
        <motion.div
          className="bg-[#111a1c] p-10 rounded-2xl shadow-2xl w-full max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold text-center mb-6 text-cyan-400">
            Add Labour
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* NAME */}
            <div className="flex flex-col">
              <label className="mb-1 text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter labour name"
                className="px-4 py-2 rounded-lg bg-[#1a2226] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
                required
              />
            </div>

            {/* PHONE */}
            <div className="flex flex-col">
              <label className="mb-1 text-gray-300">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter phone"
                className="px-4 py-2 rounded-lg bg-[#1a2226] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
                required
              />
            </div>

            {/* ADDRESS */}
            <div className="flex flex-col">
              <label className="mb-1 text-gray-300">Address</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter address"
                className="px-4 py-2 rounded-lg bg-[#1a2226] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
                rows={3}
                required
              />
            </div>

            {/* AADHAR */}
            <div className="flex flex-col">
              <label className="mb-1 text-gray-300">Aadhar Number</label>
              <input
                type="text"
                name="aadhar"
                value={form.aadhar}
                onChange={handleChange}
                placeholder="Enter Aadhar number"
                className="px-4 py-2 rounded-lg bg-[#1a2226] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
              />
            </div>

            {/* SALARY */}
            <div className="flex flex-col">
              <label className="mb-1 text-gray-300">Daily Salary</label>
              <input
                type="number"
                name="salary"
                value={form.salary}
                onChange={handleChange}
                placeholder="Enter salary"
                className="px-4 py-2 rounded-lg bg-[#1a2226] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
                required
              />
            </div>

            {/* WORK TYPE */}
            <div className="flex flex-col">
              <label className="mb-1 text-gray-300">Work Type</label>
              <select
                name="workType"
                value={form.workType}
                onChange={handleChange}
                className="px-4 py-2 rounded-lg bg-[#1a2226] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
                required
              >
                <option value="">Select</option>
                <option value="Electrician">Electrician</option>
                <option value="Carpenter">Carpenter</option>
                <option value="Plumber">Plumber</option>
                <option value="Painter">Painter</option>
                <option value="Helper">Helper</option>
              </select>
            </div>

            {/* JOINING DATE */}
            <div className="flex flex-col">
              <label className="mb-1 text-gray-300">Joining Date</label>
              <input
                type="date"
                name="joiningDate"
                value={form.joiningDate}
                onChange={handleChange}
                className="px-4 py-2 rounded-lg bg-[#1a2226] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
                required
              />
            </div>

            <Button type="submit" variant="primary">
              Add Labour
            </Button>
          </form>
        </motion.div>
      </div>
    </Container>
  );
}
