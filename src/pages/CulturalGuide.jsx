function CulturalGuide() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Cultural Guide</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Etiquette</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Remove shoes before entering homes or temples</li>
          <li>Bow instead of shaking hands</li>
          <li>Don't speak loudly in public transport</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Transportation</h2>
        <p className="text-gray-700">
          Use IC cards (Suica, Pasmo) for trains and buses. Trains are punctual and clean.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Seasonal Events</h2>
        <p className="text-gray-700">
          Japan offers year-round festivals like cherry blossoms (sakura) in spring, Gion Matsuri in summer, and snow festivals in Hokkaido.
        </p>
      </section>
    </main>
  );
}

export default CulturalGuide;
