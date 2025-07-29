import { motion } from "framer-motion";

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

const experiences: Experience[] = [
  {
    company: "Freelance",
    role: "Frontend Developer",
    period: "Jan 2023 – Present",
    description:
      "Built responsive websites and apps using React, Tailwind CSS, and TypeScript. Focused on pixel-perfect UI, performance, and accessibility.",
  },
  {
    company: "XYZ Technologies",
    role: "Frontend Intern",
    period: "Jun 2022 – Dec 2022",
    description:
      "Worked with the frontend team to build internal dashboards. Integrated APIs and optimized component reusability.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="experience">
      <motion.h2
        className="text-3xl font-semibold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold">{exp.role}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {exp.company} &middot; <span>{exp.period}</span>
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
