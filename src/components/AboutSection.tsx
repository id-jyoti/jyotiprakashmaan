import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 px-4 max-w-3xl mx-auto" id="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4"
      >
        <p>
          I'm a passionate frontend developer focused on building sleek, fast, and responsive web apps using technologies like React, TypeScript, Tailwind CSS, and Framer Motion.
        </p>
        <p>
          Over the past few years, I’ve developed dynamic interfaces for startups and personal projects. I enjoy turning design ideas into code and love solving UI/UX challenges.
        </p>
        <p>
          Outside of coding, I’m interested in UI design, open-source contribution, and continuously learning new tools in the frontend ecosystem.
        </p>
      </motion.div>
    </section>
  );
}
