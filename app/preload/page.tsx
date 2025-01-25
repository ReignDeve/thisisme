"use client"
import React, { useState, useEffect } from "react";

interface PreloaderProps {
  text: string; // Der Text, der Buchstabe für Buchstabe angezeigt wird
  onComplete: () => void; // Callback, wenn die Animation abgeschlossen ist
}

const Preloader: React.FC<PreloaderProps> = ({ text, onComplete }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < 36) {
        setDisplayText((prev) => prev + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1000); // Optionaler Delay nach der Animation
      }
    }, 150);

    return () => clearInterval(interval);
  }, [text, onComplete]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black text-white z-50">
      <h1 className="text-3xl sm:text-5xl font-semibold">{displayText}</h1>
    </div>
  );
};

export default Preloader;
