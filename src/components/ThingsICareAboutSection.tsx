// src/components/ThingsICareAboutSection.tsx
import { motion } from "framer-motion";

export default function ThingsICareAboutSection() {
  return (
    <section id="care" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Things I Care About
      </motion.h2>
      <motion.ul
        className="space-y-4 text-lg text-gray-700 dark:text-gray-300 list-disc list-inside"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {[
          "Pixel-perfect, accessible interfaces",
          "Building scalable and maintainable UIs",
          "Fast-loading, performant web apps",
          "Design that blends usability with beauty",
          "Writing clean, readable code",
          "Continuous learning and feedback loops",
        ].map((item, i) => (
          <motion.li key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
