"use client";

import { useState } from "react";
import Container from "@/components/Container";
import WorkerCard from "@/components/Card";

interface Worker {
  id: number;
  name: string;
  skill: string;
  city: string;
  price: number;
}

export default function FindLabourPage() {
  const [city, setCity] = useState("");
  const [skill, setSkill] = useState("");
  const [results, setResults] = useState<Worker[]>([]);

  // 🔹 Larger Dummy Dataset
  const workers: Worker[] = [
    { id: 1, name: "Rajesh Kumar", skill: "Plumber", city: "Delhi", price: 500 },
    { id: 2, name: "Suresh Patel", skill: "Electrician", city: "Mumbai", price: 700 },
    { id: 3, name: "Anil Sharma", skill: "Painter", city: "Delhi", price: 600 },
    { id: 4, name: "Ravi Singh", skill: "Carpenter", city: "Bangalore", price: 800 },
    { id: 5, name: "Amit Verma", skill: "Electrician", city: "Delhi", price: 550 },
    { id: 6, name: "Deepak Yadav", skill: "Plumber", city: "Chennai", price: 520 },
    { id: 7, name: "Karan Mehta", skill: "Painter", city: "Delhi", price: 630 },
    { id: 8, name: "Sunil Joshi", skill: "Carpenter", city: "Kolkata", price: 750 },
    { id: 9, name: "Mohit Rathi", skill: "Electrician", city: "Mumbai", price: 700 },
    { id: 10, name: "Rohit Sinha", skill: "Plumber", city: "Pune", price: 580 },
    { id: 11, name: "Ajay Gupta", skill: "Carpenter", city: "Delhi", price: 820 },
    { id: 12, name: "Vikas Chauhan", skill: "Painter", city: "Bangalore", price: 640 },
    { id: 13, name: "Arjun Nair", skill: "Electrician", city: "Chennai", price: 710 },
    { id: 14, name: "Pankaj Dubey", skill: "Plumber", city: "Mumbai", price: 540 },
    { id: 15, name: "Lokesh Rai", skill: "Painter", city: "Kolkata", price: 660 },
    { id: 16, name: "Harish Kumar", skill: "Carpenter", city: "Delhi", price: 830 },
    { id: 17, name: "Suraj Mishra", skill: "Plumber", city: "Bangalore", price: 570 },
    { id: 18, name: "Manoj Singh", skill: "Electrician", city: "Pune", price: 690 },
    { id: 19, name: "Ramesh Chauhan", skill: "Painter", city: "Chennai", price: 620 },
    { id: 20, name: "Dinesh Patel", skill: "Carpenter", city: "Mumbai", price: 810 },
  ];

  // 🔹 Dropdown Options
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
      <div className="min-h-screen ">
        {/* Hero */}
        <section className=" text-white py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Labour Near You
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Browse hundreds of skilled workers across cities and occupations.
          </p>

          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-center gap-3 max-w-3xl mx-auto">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="px-4 py-3 rounded-full text-white w-full md:w-1/3 border"
            >
              <option value="">All Cities</option>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <select
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="px-4 py-3 rounded-full text-white w-full md:w-1/3 border"
            >
              <option value="">All Occupations</option>
              {skills.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <button
              onClick={handleSearch}
              className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              Search
            </button>
            <button
              onClick={handleClear}
              className="px-6 py-3 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition"
            >
              Clear
            </button>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          {results.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {workers.map((worker) => (
                <WorkerCard
                  key={worker.id}
                  id={worker.id}
                  name={worker.name}
                  price={worker.price}
                  skill={worker.skill}
                />
              ))}
            </div>
          )}
        </section>

        
      </div>
    </Container>
  );
}
