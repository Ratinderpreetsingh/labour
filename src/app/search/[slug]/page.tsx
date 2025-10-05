import WorkerCard from "@/components/Card";
import Container from "@/components/Container";
import Image from "next/image";
import { workers } from "@/data/workers";
// app/search/[slug]/page.tsx
interface SearchPageProps {
  params: { slug: string };
}



export default function SearchPage({ params }: SearchPageProps) {
  const { slug } = params;

  // match search text against worker skill or city
  const query = decodeURIComponent(slug).toLowerCase();
  const results = workers.filter(
    (w) =>
      w.skill.toLowerCase().includes(query) ||
      w.city.toLowerCase().includes(query) ||
      w.name.toLowerCase().includes(query)
  );

  return (
    <Container>
    <div className="min-h-screen  text-white  py-10">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">
        Results for: {decodeURIComponent(slug)}
      </h1>

      {results.length === 0 ? (
        <p className="text-gray-400">No workers found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
      )}
    </div>
    </Container>
  );
}
