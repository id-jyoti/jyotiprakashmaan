import { motion } from "framer-motion";

const skills: string[] = [
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Next.js",
  "JavaScript (ES6+)",
  "Node.js",
  "Git & GitHub",
  "Figma",
  "REST APIs",
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="skills">
      <motion.h2
        className="text-3xl font-semibold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center"
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
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span className="text-base font-medium text-gray-800 dark:text-gray-200">
              {skill}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
