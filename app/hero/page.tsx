"use client";

import { useEffect } from "react";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";

const Hero = () => {
  const text = "Hi, I am Marius";
  const subText =
    "I am a Media Informatic Student and a Hobby Software Developer from Germany";

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

  const handleCopyEmail = () => {
    const email = "mariusbungert@gmx.de"; // Deine E-Mail-Adresse
    navigator.clipboard.writeText(email).then(() => {
      alert("Email address copied to clipboard!");
    });
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
        <button
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          onClick={handleCopyEmail}
        >
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Hero;