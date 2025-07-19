import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/assets/tokyo.jpeg',
    title: 'Discover Vibrant Tokyo',
    subtitle: 'Skyscrapers, sushi, and shrines',
  },
  {
    image: '/assets/kyoto.jpeg',
    title: 'Explore Cultural Kyoto',
    subtitle: 'Temples, gardens, and geisha',
  },
  {
    image: '/assets/hokkaido.jpeg',
    title: 'Escape to Hokkaido',
    subtitle: 'Snow, serenity, and seafood',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Rotate every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] overflow-hidden rounded-b-3xl shadow-md">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
            <p className="text-lg md:text-2xl mt-2">{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
