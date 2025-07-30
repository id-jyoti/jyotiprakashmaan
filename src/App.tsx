// src/App.tsx
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ThingsICareAboutSection from "./components/ThingsICareAboutSection";
import SkillsSection from "./components/SkillsSection";
import PublicationsSection from "./components/PublicationsSection";
import WorkExperienceSection from "./components/WorkExperienceSection";
import ArtistInsideMeSection from "./components/ArtistInsideMeSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";



function App() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ThingsICareAboutSection />
        <SkillsSection />
        <WorkExperienceSection />
        <PublicationsSection />
        <ArtistInsideMeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
