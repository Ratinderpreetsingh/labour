"use client";

import Container from "@/components/Container";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

  // Dummy data with public images
  const workers: Worker[] = [
    { id: 1, name: "Rajesh Kumar", skill: "Plumber", city: "Delhi", price: 500, image: "https://images.pexels.com/photos/6078121/pexels-photo-6078121.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 2, name: "Suresh Patel", skill: "Electrician", city: "Mumbai", price: 700, image: "https://images.pexels.com/photos/4492121/pexels-photo-4492121.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 3, name: "Anil Sharma", skill: "Painter", city: "Delhi", price: 600, image: "https://images.pexels.com/photos/4483611/pexels-photo-4483611.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 4, name: "Ravi Singh", skill: "Carpenter", city: "Bangalore", price: 800, image: "https://images.pexels.com/photos/4502719/pexels-photo-4502719.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 5, name: "Amit Verma", skill: "Electrician", city: "Delhi", price: 550, image: "https://images.pexels.com/photos/4492113/pexels-photo-4492113.jpeg?auto=compress&cs=tinysrgb&w=400" },
  ];

  const cities = Array.from(new Set(workers.map((w) => w.city)));
  const skills = Array.from(new Set(workers.map((w) => w.skill)));

  const handleSearch = () => {
    if (!skill || !city) return;
    router.push(`/${skill.toLowerCase()}-${city.toLowerCase()}`);
  };

  const handleClear = () => {
    setCity("");
    setSkill("");
  };

  return (
    <Container>
      <div className="relative min-h-screen flex flex-col">
        {/* 🔹 Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/A.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        {/* Hero Section */}
        <section className="relative z-10 text-white py-28 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Find Trusted Labour Near You
          </h1>
          <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
            Search skilled workers by city and occupation.
          </p>

          {/* Search Filters */}
          <div className="flex flex-col md:flex-row justify-center gap-3 max-w-3xl mx-auto">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="px-5 py-3 rounded-full text-black focus:outline-none w-full md:w-1/3 shadow-lg"
            >
              <option value="">All Cities</option>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <select
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="px-5 py-3 rounded-full text-black focus:outline-none w-full md:w-1/3 shadow-lg"
            >
              <option value="">All Occupations</option>
              {skills.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <button
              onClick={handleSearch}
              className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition shadow-lg"
            >
              Search
            </button>
            <button
              onClick={handleClear}
              className="px-6 py-3 rounded-full bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition shadow-lg"
            >
              Clear
            </button>
          </div>
        </section>

     
      </div>
         {/* 🔹 Worker Images Preview Section */}
        <section className="relative z-10 py-10 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow-md">
            Skilled Workers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {workers?.map((worker) => (
              <div
                key={worker.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                <img
                  src={worker.image}
                  alt={worker.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4 text-center">
                  <p className="font-semibold text-lg">{worker.name}</p>
                  <p className="text-sm text-gray-600">{worker.skill}</p>
                  <p className="text-sm text-gray-600">{worker.city}</p>
                  <p className="text-md font-bold mt-2 text-cyan-600">₹{worker.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
    </Container>
  );
}
