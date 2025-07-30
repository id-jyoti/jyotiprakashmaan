import { motion } from "framer-motion";

const categorizedSkills: {
  category: string;
  items: string[];
  icon: string;
}[] = [
  {
    category: "Languages & Fundamentals",
    icon: "💻",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    icon: "⚙️",
    items: ["React.js", "Tailwind CSS", "Node.js", "Vite"],
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    items: ["Git & GitHub", "Firebase", "REST APIs", "MySQL"],
  },
  {
    category: "Design & Testing",
    icon: "🎨",
    items: ["Figma", "Postman", "Canva"],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="skills">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Skills & Tech Stack
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categorizedSkills.map((section, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
              <span>{section.icon}</span> {section.category}
            </h3>
            <ul className="grid grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="bg-white dark:bg-gray-700 rounded-md px-3 py-2 shadow-sm text-center"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
