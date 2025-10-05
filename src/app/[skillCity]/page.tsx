import Container from "@/components/Container";
import WorkerCard from "@/components/Card";
import { notFound } from "next/navigation";
import {workers} from "../../data/workers"


export default function DynamicPage({params}: {params: { skillCity: string };}) {
  if (!params?.skillCity) return notFound();

  // Split painter-delhi → ["painter", "delhi"]
  const [skill, city] = params.skillCity.split("-");

  if (!skill || !city) return notFound();

  const filtered = workers.filter(
    (w) =>
      w.skill.toLowerCase() === skill.toLowerCase() &&
      w.city.toLowerCase() === city.toLowerCase()
  );

  return (
    <Container>
      <div className="py-10">
        <h1 className="text-3xl font-bold mb-6 capitalize">
          {skill}s in {city}
        </h1>
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((worker) => (
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
          <p className="text-gray-500">
            No {skill}s found in {city}.
          </p>
        )}
      </div>
    </Container>
  );
}
