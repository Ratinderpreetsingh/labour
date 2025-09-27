"use client";

import Container from "@/components/Container";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Wrench, Paintbrush, Plug, Hammer } from "lucide-react";
import Select from "@/components/Select";
import Button from "@/components/Button";

interface Worker {
  id: number;
  name: string;
  skill: string;
  city: string;
  price: number;
  image: string;
}

export default function HomePage() {
  const [city, setCity] = useState("");
  const [skill, setSkill] = useState("");
  const router = useRouter();

  // Dummy data
  const workers: Worker[] = [
    { id: 1, name: "Rajesh Kumar", skill: "Plumber", city: "Delhi", price: 500, image: "https://images.pexels.com/photos/6078121/pexels-photo-6078121.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 2, name: "Suresh Patel", skill: "Electrician", city: "Mumbai", price: 700, image: "https://images.pexels.com/photos/4492121/pexels-photo-4492121.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 3, name: "Anil Sharma", skill: "Painter", city: "Delhi", price: 600, image: "https://images.pexels.com/photos/4483611/pexels-photo-4483611.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 4, name: "Ravi Singh", skill: "Carpenter", city: "Bangalore", price: 800, image: "https://images.pexels.com/photos/4502719/pexels-photo-4502719.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 5, name: "Amit Verma", skill: "Electrician", city: "Delhi", price: 550, image: "https://images.pexels.com/photos/4492113/pexels-photo-4492113.jpeg?auto=compress&cs=tinysrgb&w=400" },
  ];

  const cities: any = Array.from(new Set(workers.map((w) => w.city)));
  const skills: any = Array.from(new Set(workers.map((w) => w.skill)));
  const cityOptions = cities.map((c: string) => ({ label: c, value: c }));
  const skillOptions = skills.map((s: string) => ({ label: s, value: s }));

  const handleSearch = () => {
    if (!skill || !city) return;
    router.push(`/${skill.toLowerCase()}-${city.toLowerCase()}`);
  };

  const handleClear = () => {
    setCity("");
    setSkill("");
  };

  // Gallery images (public/images/a.jpg ... m.jpg)
  const galleryImages = Array.from({ length: 13 }, (_, i) => `/images/${String.fromCharCode(97 + i)}.jpg`);

  return (
    <Container>
      <div className="min-h-screen bg-[#0b1012] text-white">
        {/* 🔹 Hero Section with Motion */}
        <section className="relative flex flex-col items-center justify-center text-center py-32 overflow-hidden">
          {/* Floating icons */}
          <motion.div
            className="absolute top-20 left-10 text-white/20"
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <Wrench size={50} />
          </motion.div>
          <motion.div
            className="absolute bottom-24 right-16 text-white/20"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
          >
            <Paintbrush size={50} />
          </motion.div>
          <motion.div
            className="absolute top-32 right-1/3 text-white/20"
            animate={{ x: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
          >
            <Plug size={50} />
          </motion.div>
          <motion.div
            className="absolute bottom-16 left-1/4 text-white/20"
            animate={{ x: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 7 }}
          >
            <Hammer size={50} />
          </motion.div>

          {/* Hero Content */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Find Trusted Labour Near You
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Search skilled workers by city and occupation.
          </motion.p>

          {/* Search Filters */}
          <motion.div
            className="flex flex-col md:flex-row justify-center gap-3 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Select
              options={cityOptions}
              value={city}
              onChange={setCity}
              placeholder="Select City"
              className="w-64"
            />
            <Select
              options={skillOptions}
              value={skill}
              onChange={setSkill}
              placeholder="Select Skill"
              className="w-64"
            />


            <Button onClick={handleSearch} variant="white">Search</Button>
            <Button onClick={handleClear} variant="primary">Clear</Button>



          </motion.div>
        </section>

        {/* 🔹 Worker Section */}
        <section className="py-16 max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Skilled Workers
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {workers?.map((worker) => (
              <motion.div
                key={worker.id}
                className="bg-[#111a1c] text-black rounded-xl shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src={worker.image}
                  alt={worker.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4 text-center">
                  <p className="font-semibold text-lg text-white">{worker.name}</p>
                  <p className="text-sm text-gray-100">{worker.skill}</p>
                  <p className="text-sm text-gray-100">{worker.city}</p>
                  <p className="text-md font-bold mt-2 text-cyan-400">₹{worker.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 🔹 Gallery Section */}
        <section className="py-16 ">
          <motion.h2
            className="text-3xl font-bold text-center mb-10 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Our Work Gallery
          </motion.h2>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-7xl mx-auto">
            {galleryImages.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Gallery ${index + 1}`}
                className="mb-4 rounded-xl shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
