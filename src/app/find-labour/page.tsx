"use client";

import { useState } from "react";
import Container from "@/components/Container";
import WorkerCard from "@/components/Card";
import { workers } from "@/data/workers";
interface Worker {
  id: number;
  name: string;
  skill: string;
  city: string;
  price: number;
  phone:string;
}

export default  function FindLabourPage() {
  const [city, setCity] = useState("");
  const [skill, setSkill] = useState("");
  const [results, setResults] = useState<Worker[]>([]);

  // 🔹 Larger Dummy Dataset


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
                  phone={worker.phone}
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
