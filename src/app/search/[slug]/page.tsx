// app/search/[slug]/page.tsx
import WorkerCard from "@/components/Card";
import Container from "@/components/Container";

interface Labour {
  id: number;
  name: string;
  skill: string;
  city: string;
  price: number;
  phone?: string;
  status?: string;
}

interface SearchPageProps {
  params: { slug: string };
}

export default async function SearchPage({ params }: SearchPageProps) {
  const { slug } = params;
  const query = decodeURIComponent(slug).toLowerCase();

  // Fetch labours from API
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/labour/get-all`);
  if (!res.ok) {
    throw new Error("Failed to fetch labours");
  }
  const json = await res.json();
  const labours: Labour[] = json || [];

  // Filter based on search query
  const results = labours?.filter(
    (l) =>
      l?.skill.toLowerCase().includes(query) ||
      l?.city.toLowerCase().includes(query) ||
      l?.name.toLowerCase().includes(query)
  );

  return (
    <Container>
      <div className="min-h-screen text-white py-10">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">
          Results for: {decodeURIComponent(slug)}
        </h1>

        {results?.length === 0 ? (
          <p className="text-gray-400">No workers found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {results?.map((worker) => (
              <WorkerCard
                key={worker?.id}
                id={worker?.id}
                name={worker?.name}
                price={worker?.price}
                skill={worker?.skill}
                phone={worker?.phone}
              />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
