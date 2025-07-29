import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggle = () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    setIsDark(isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md text-xl"
      aria-label="Toggle dark mode"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
};

export default DarkModeToggle;
