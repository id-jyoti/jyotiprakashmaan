import devyani from "../assets/DIL.jpg";
import desire from "../assets/DISPL.jpeg";
import inditex from "../assets/Inditex.jpg";
import rtu from "../assets/RTU.jpg";
import smcet from "../assets/SMCET.png";
import ehotspot from "../assets/EH.jpeg";
import police from "../assets/RP.webp";

const logos = [
  { src: devyani, alt: "Devyani International Ltd" },
  { src: desire, alt: "Desire Info Soft Pvt Ltd" },
  { src: inditex, alt: "Inditex" },
  { src: rtu, alt: "RTU Colleges" },
  { src: smcet, alt: "SMCET Jaipur" },
  { src: ehotspot, alt: "Engineering Hotspot" },
  { src: police, alt: "Rajasthan Police" },
];

export default function WorkExperienceSection() {
  const scrollingLogos = [...logos, ...logos]; // Duplicate for continuous scroll

  return (
    <section id="work" className="py-20 px-4 bg-white dark:bg-gray-900 overflow-hidden">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900 dark:text-white">
        Where I’ve Worked
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee gap-10 w-[200%]">
          {scrollingLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-40 flex items-center justify-center rounded-full bg-white shadow-md"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain rounded-full transition hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
