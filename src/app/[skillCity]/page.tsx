import Container from "@/components/Container";
import WorkerCard from "@/components/Card";
import { notFound } from "next/navigation";

interface Worker {
  id: number;
  name: string;
  skill: string;
  city: string;
  price: number;
}

const workers: Worker[] = [
  { id: 1, price: 500, name: "Rajesh Kumar", skill: "Plumber", city: "Delhi" },
  { id: 2, price: 700, name: "Suresh Patel", skill: "Electrician", city: "Mumbai" },
  { id: 3, price: 600, name: "Anil Sharma", skill: "Painter", city: "Delhi" },
  { id: 4, price: 800, name: "Ravi Singh", skill: "Carpenter", city: "Bangalore" },
  { id: 5, price: 550, name: "Amit Verma", skill: "Electrician", city: "Delhi" },
];

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
