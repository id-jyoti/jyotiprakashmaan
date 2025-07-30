import { motion } from "framer-motion";

const interests = [
  { label: "🎨 Painting", color: "from-pink-400 to-red-500" },
  { label: "📚 Reading Books", color: "from-blue-400 to-indigo-500" },
  { label: "👩‍🍳 Cooking", color: "from-yellow-400 to-orange-500" },
  { label: "🧶 Crocheting", color: "from-purple-400 to-pink-500" },
  { label: "🎨 Making Stickers", color: "from-green-400 to-teal-500" },
  { label: "👗 Designing My Dresses", color: "from-rose-400 to-pink-500" },
 
];

export default function ArtistInsideMeSection() {
  return (
    <section id="artist" className="py-20 px-4 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl font-semibold text-center mb-10 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🎭 Artist Inside Me
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {interests.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`rounded-xl p-4 text-center text-white font-semibold shadow-lg bg-gradient-to-r ${item.color}`}
          >
            {item.label}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
