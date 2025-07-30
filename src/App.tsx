// src/App.tsx
import { useEffect } from "react";
import { Helmet } from "react-helmet";
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
import ThankYou from "./pages/ThankYou";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen font-sans">
      <Helmet>
        <title>Jyoti Prakash Maan | Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio website of Jyoti Prakash Maan — a frontend developer passionate about building smooth, high-performance, accessible web apps."
        />
        <meta
          name="keywords"
          content="Jyoti Prakash Maan, frontend developer, React, TypeScript, Tailwind CSS, web developer, portfolio"
        />
        <meta name="author" content="Jyoti Prakash Maan" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph for social preview */}
        <meta property="og:title" content="Jyoti Prakash Maan | Frontend Developer" />
        <meta
          property="og:description"
          content="Explore the portfolio of Jyoti Prakash Maan — building fast, accessible, and beautiful web applications."
        />
        <meta property="og:image" content="https://yourdomain.com/preview.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jyoti Prakash Maan | Frontend Developer" />
        <meta
          name="twitter:description"
          content="Building elegant and performant web apps with React, Tailwind, TypeScript."
        />
        <meta name="twitter:image" content="https://yourdomain.com/preview.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Helmet>

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
        <ThankYou />
      </main>
      <Footer />
    </div>
  );
}

export default App;
