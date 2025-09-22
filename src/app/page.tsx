"use client";

import WorkerCard from "@/components/Card";
import Container from "@/components/Container";
import { useState } from "react";

interface Worker {
  id: number;
  name: string;
  skill: string;
  city: string;
  price: number;
}

export default function HomePage() {
  const [city, setCity] = useState("");
  const [skill, setSkill] = useState("");
  const [results, setResults] = useState<Worker[]>([]);

  // Dummy data
  const workers: Worker[] = [
    { id: 1, price: 500, name: "Rajesh Kumar", skill: "Plumber", city: "Delhi" },
    { id: 2, price: 700, name: "Suresh Patel", skill: "Electrician", city: "Mumbai" },
    { id: 3, price: 600, name: "Anil Sharma", skill: "Painter", city: "Delhi" },
    { id: 4, price: 800, name: "Ravi Singh", skill: "Carpenter", city: "Bangalore" },
    { id: 5, price: 550, name: "Amit Verma", skill: "Electrician", city: "Delhi" },
  ];

  // Unique dropdown options
  const cities = Array.from(new Set(workers.map((w) => w.city)));
  const skills = Array.from(new Set(workers.map((w) => w.skill)));

  const handleSearch = () => {
    const filtered = workers.filter(
      (worker) =>
        (city === "" || worker.city === city) &&
        (skill === "" || worker.skill === skill)
    );
    setResults(filtered);
  };

  const handleClear = () => {
    setCity("");
    setSkill("");
    setResults([]);
  };

  return (
    <Container>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-black via-gray-800 to-black text-white py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Trusted Labour Near You
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Search skilled workers by city and occupation.
          </p>

          {/* Search Filters */}
          <div className="flex flex-col md:flex-row justify-center gap-3 max-w-3xl mx-auto">
            {/* City Dropdown */}
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="px-4 py-3 rounded-full text-white focus:outline-none w-full md:w-1/3"
            >
              <option value="">All Cities</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {/* Skill Dropdown */}
            <select
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="px-4 py-3 rounded-full text-white focus:outline-none w-full md:w-1/3"
            >
              <option value="">All Occupations</option>
              {skills.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            {/* Buttons */}
            <button
              onClick={handleSearch}
              className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              Search
            </button>
            <button
              onClick={handleClear}
              className="px-6 py-3 rounded-full bg-cyan-500 text-white font-medium hover:bg-red-700 transition"
            >
              Clear
            </button>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 max-w-6xl mx-auto px-6">
          {results.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((worker) => (
                <WorkerCard
                  key={worker.id}
                  id={worker.id}
                  name={worker.name}
                  price={worker.price}
                  skill={worker.skill}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10">
              {city || skill
                ? "No workers found matching your search."
                : "Select a city and occupation to find workers."}
            </p>
          )}
        </section>
      </div>
    </Container>
  );
}
