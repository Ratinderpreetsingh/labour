"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { useCreateLabourMutation, useGetLaboursQuery } from "@/redux/services/labourAPI";
import { Labour } from "@/lib/types/labour.type";

export default function AddLabourPage() {
  const [form, setForm] = useState<Labour>({
    name: "",
    phone: "",
    address: "",
    aadhar: "",
    salary: 0,
    joiningDate: "",
    skill: "",
    city: "",
    price: 0,
    status: "active",
  });

  const [createLabour, { isLoading, isError, isSuccess }] = useCreateLabourMutation();
  const { data: labours, isLoading: laboursLoading } = useGetLaboursQuery();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createLabour(form).unwrap();
      alert("Labour added successfully!");
      setForm({
        name: "",
        phone: "",
        address: "",
        aadhar: "",
        salary: 0,
        joiningDate: "",
        skill: "",
        city: "",
        price: 0,
        status: "active",
      });
    } catch (error) {
      console.error("Failed to add labour:", error);
      alert("Failed to add labour");
    }
  };

  return (
    <Container>
      <div className="min-h-screen flex flex-col items-center justify-start bg-[#0b1012] text-white py-10">
        <motion.div
          className="bg-[#111a1c] p-10 rounded-2xl shadow-2xl w-full max-w-xl mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold text-center mb-6 text-cyan-400">
            Add Labour
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* NAME */}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="px-4 py-2 rounded-lg bg-[#1a2226] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
              required
            />

            {/* PHONE */}
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="px-4 py-2 rounded-lg bg-[#1a2226] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
              required
            />

            {/* ADDRESS */}
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Address"
              className="px-4 py-2 rounded-lg bg-[#1a2226] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
              rows={3}
              required
            />

            {/* AADHAR */}
            <input
              type="text"
              name="aadhar"
              value={form.aadhar}
              onChange={handleChange}
              placeholder="Aadhar Number"
              className="px-4 py-2 rounded-lg bg-[#1a2226] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
            />

            {/* SALARY */}
            <input
              type="number"
              name="salary"
              value={form.salary}
              onChange={handleChange}
              placeholder="Daily Salary"
              className="px-4 py-2 rounded-lg bg-[#1a2226] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
              required
            />

            {/* SKILL / WORK TYPE */}
            <input
              type="text"
              name="skill"
              value={form.skill}
              onChange={handleChange}
              placeholder="Skill / Work Type"
              className="px-4 py-2 rounded-lg bg-[#1a2226] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
              required
            />

            {/* CITY */}
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
              className="px-4 py-2 rounded-lg bg-[#1a2226] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
              required
            />

            {/* PRICE */}
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
              className="px-4 py-2 rounded-lg bg-[#1a2226] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
            />

            {/* JOINING DATE */}
            <input
              type="date"
              name="joiningDate"
              value={form.joiningDate}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg bg-[#1a2226] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
              required
            />

            {/* STATUS */}
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg bg-[#1a2226] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            <Button type="submit" variant="primary" disabled={isLoading}>
              {isLoading ? "Adding..." : "Add Labour"}
            </Button>
          </form>

          {isError && <p className="mt-2 text-red-500">Failed to add labour</p>}
          {isSuccess && <p className="mt-2 text-green-500">Labour added successfully!</p>}
        </motion.div>

        {/* Labours List */}
        <div className="w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Labours List</h2>
          {laboursLoading ? (
            <p>Loading labours...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {labours?.map((labour:Labour) => (
                <div
                  key={labour?.id}
                  className="p-4 rounded-lg bg-[#111a1c] shadow-md flex flex-col gap-1"
                >
                  <p><strong>Name:</strong> {labour?.name}</p>
                  <p><strong>Phone:</strong> {labour?.phone}</p>
                  <p><strong>Skill:</strong> {labour?.skill}</p>
                  <p><strong>City:</strong> {labour?.city}</p>
                  <p><strong>Status:</strong> {labour?.status}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
