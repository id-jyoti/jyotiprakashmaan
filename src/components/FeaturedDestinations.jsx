import featuredData from "../data/featuredDestinations.json";
import DestinationCard from "./DestinationCard";

function FeaturedDestinations() {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredData.map((dest) => (
            <DestinationCard
              key={dest.id}
              id={dest.id}
              name={dest.name}
              thumbnail={dest.thumbnail}
              description={dest.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDestinations;
