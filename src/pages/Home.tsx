// home.tsx
import { FC } from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectSection"; // ✅ Ensure this matches the actual file name
import ContactSection from "../components/ContactSection";

const Home: FC = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default Home;
