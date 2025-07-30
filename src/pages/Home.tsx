import { FC, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";

const HeroSection = lazy(() => import("../components/HeroSection"));
const AboutSection = lazy(() => import("../components/AboutSection"));
const ContactSection = lazy(() => import("../components/ContactSection"));

const Home: FC = () => {
  return (
    <main>
      <Helmet>
        <title>Jyoti Prakash Maan – Frontend Developer Portfolio</title>
        <meta name="description" content="Portfolio of Jyoti Prakash Maan, a frontend developer specializing in React, Tailwind, and UI design." />
        <meta name="keywords" content="Frontend Developer, React, Tailwind CSS, Portfolio, Jyoti Prakash Maan" />
      </Helmet>

      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </Suspense>
    </main>
  );
};

export default Home;
