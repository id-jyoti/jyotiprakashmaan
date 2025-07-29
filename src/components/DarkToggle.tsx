// components/DarkToggle.tsx
export default function DarkToggle() {
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button onClick={toggleDark} className="ml-4">
      🌓 Toggle Theme
    </button>
  );
}
