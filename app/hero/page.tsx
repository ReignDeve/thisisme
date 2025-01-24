"use client"
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Marius_CV.pdf"; // Pfad zur Datei (relativ oder absolut)
    link.download = "Marius_CV.pdf"; // Name der heruntergeladenen Datei
    link.click();
  };

  const handleCopyEmail = () => {
    const email = "mariusbungert@gmx.de"; // Ersetze dies durch deine E-Mail-Adresse
    navigator.clipboard.writeText(email).then(() => {
      alert("Email address copied to clipboard!"); // Optional: Hinweis, dass die E-Mail kopiert wurde
    });
  };
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center">
        <span className={title()}>Hi, I am&nbsp;</span>
        <span className={title({ color: "yellow" })}>Marius&nbsp;</span>
        <br />
        <span className={subtitle({ class: "mt-2" })}>
          I am a Media Informatic Student and
        </span>
        <div className={subtitle({ class: "mt-1" })}>
          a Hobby Software Developer from Germany
        </div>
      </div>

      <div className="flex gap-3">
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