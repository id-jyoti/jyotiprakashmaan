// src/components/MyContributions.tsx
import React from "react";
import { motion } from "framer-motion";

const MyContributions: React.FC = () => {
  const playlists = [
    {
      id: "PLfNot5_yarU3GYfUxTbjnOzlAOGvzWlsQ",
      title: "Complete GATE Syllabus Tutorials",
      description:
        "Comprehensive video tutorials covering all major chapters for GATE preparation.",
    },
    {
      id: "PLfNot5_yarU2NnRooHt-YK81CBYxwBfmc",
      title: "GATE Previous Year Question Solutions (Last 10 Years)",
      description:
        "Step-by-step video explanations of GATE exam questions from the last 10 years.",
    },
  ];

  return (
    <section
      id="contributions"
      className="py-16 px-6 bg-white dark:bg-gray-900 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          My Contributions
        </h2>
        <p className="text-lg mb-12 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Learn directly from my curated GATE tutorials and past question
          solution videos. These are tailored to help you succeed.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
        {playlists.map((playlist, idx) => (
          <motion.div
            key={playlist.id}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 shadow-md hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {playlist.title}
            </h3>
            <p className="text-sm mb-4 text-gray-600 dark:text-gray-400 max-w-sm mx-auto">
              {playlist.description}
            </p>
            <div className="w-full max-w-sm mx-auto">
              <iframe
                className="w-full h-48 md:h-52 rounded-xl border-2 border-red-600 shadow-lg"
                src={`https://www.youtube.com/embed/videoseries?list=${playlist.id}`}
                title={playlist.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <a
          href="https://www.youtube.com/engineeringhotspot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition"
        >
          📺 Subscribe on YouTube
        </a>
      </motion.div>
    </section>
  );
};

export default MyContributions;
