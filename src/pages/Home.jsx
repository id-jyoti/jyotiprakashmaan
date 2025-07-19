import HeroSection from "../components/HeroSection"; // ✅ Updated import
import AutocompleteSearchBar from "../components/AutocompleteSearchBar";

function Home() {
  return (
    <main>
      <HeroSection />
      
      <section className="container mx-auto my-10 px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Destinations</h2>
        <AutocompleteSearchBar onSelect={(destination) => console.log("Selected:", destination)} />
        {/* Destination Grid (Next Step) */}
      </section>

      <section className="container mx-auto my-10 px-4">
        <h2 className="text-2xl font-bold mb-6">Travel by Interest</h2>
        {/* Travel Interest Cards (Upcoming Step) */}
      </section>
    </main>
  );
}

export default Home;
