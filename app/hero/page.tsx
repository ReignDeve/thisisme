"use client";

import { useEffect } from "react";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import { Link } from "@nextui-org/link";

const Hero = () => {
  const text = "Hi, I am Marius";
  const subText =
    "I am a Media Informatic Student and Software Developer from Germany";

  // Funktion zum Wrappen der Buchstaben in <span>
  const spanizeText = (text: string) =>
    text
      .split("")
      .map((char, index) => (
        <span
          key={index}
          className="inline-block opacity-0 animate-letter-glow"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ));

  useEffect(() => {
    // Optional: Initialisierung für weitere Effekte
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Marius_CV.pdf"; // Pfad zur Datei
    link.download = "Marius_CV.pdf"; // Name der Datei
    link.click();
  };


  return (
    <section className="relative flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-screen bg-black text-white">
      {/* Hauptinhalt */}
      <div className="relative z-10 text-center">
        <h1 className={`${title()} text-4xl font-bold`}>
          {spanizeText(text)}
        </h1>
        <p className={`${subtitle({ class: "mt-2" })} text-lg leading-relaxed`}>
          {spanizeText(subText)}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 relative z-10">
        {/* Download CV Button */}
        <button
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          onClick={handleDownload}
        >
          Download CV
        </button>

        {/* Contact Me Button */}
        <Link href="/contact">
        <button
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Contact Me
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;