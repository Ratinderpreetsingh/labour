import Container from "@/components/Container";
import WorkerCard from "@/components/Card";

interface Labour {
  id: number;
  name: string;
  skill: string;
  city: string;
  price: number;
  phone?: string;
  status?: string;
}

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/labour/get-all`);

  if (!res.ok) {
    throw new Error("Failed to fetch labours");
  }

  const json = await res.json();
  const labours: Labour[] = json || [];

  const cities = Array.from(new Set(labours?.map((l) => l.city)));
  const skills = Array.from(new Set(labours?.map((l) => l.skill)));

  return (
    <Container>
      <div className="min-h-screen">
        <section className="text-white py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Labour Near You</h1>
          <p className="text-lg md:text-xl mb-6">
            Browse skilled workers across cities and occupations.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-3 max-w-3xl mx-auto">
            <select
              id="city"
              className="px-4 py-3 rounded-full text-white w-full md:w-1/3 border"
            >
              <option value="">All Cities</option>
              {cities?.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select
              id="skill"
              className="px-4 py-3 rounded-full text-white w-full md:w-1/3 border"
            >
              <option value="">All Occupations</option>
              {skills?.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
              Search
            </button>
            <button className="px-6 py-3 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition">
              Clear
            </button>
          </div>
        </section>

        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {labours?.map((labour) => (
              <WorkerCard
                key={labour.id}
                id={labour.id}
                name={labour.name}
                price={labour.price}
                skill={labour.skill}
                phone={labour.phone}
              />
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
