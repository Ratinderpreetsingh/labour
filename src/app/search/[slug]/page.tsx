import Container from "@/components/Container";
import Image from "next/image";

// app/search/[slug]/page.tsx
interface SearchPageProps {
  params: { slug: string };
}

interface Worker {
  id: number;
  name: string;
  skill: string;
  city: string;
  price: number;
  image: string;
}

const workers: Worker[] = [
  { id: 1, name: "Rajesh Kumar", skill: "Plumber", city: "Delhi", price: 500, image: "/images/a.jpg" },
  { id: 2, name: "Suresh Patel", skill: "Electrician", city: "Mumbai", price: 700, image: "/images/b.jpg" },
  { id: 3, name: "Anil Sharma", skill: "Painter", city: "Delhi", price: 600, image: "/images/c.jpg" },
  { id: 4, name: "Ravi Singh", skill: "Carpenter", city: "Bangalore", price: 800, image: "/images/d.jpg" },
  { id: 5, name: "Amit Verma", skill: "Electrician", city: "Delhi", price: 550, image: "/images/e.jpg" },
];

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
            <div
              key={worker.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <Image
                src={worker.image}
                alt={worker.name}
                  width={400} // set desired width
  height={160} // set desired height
                className="h-40 w-full object-cover"
              />
              <div className="p-4 text-center text-black">
                <p className="font-semibold text-lg">{worker.name}</p>
                <p className="text-sm text-gray-600">{worker.skill}</p>
                <p className="text-sm text-gray-600">{worker.city}</p>
                <p className="text-md font-bold mt-2 text-cyan-600">₹{worker.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </Container>
  );
}
