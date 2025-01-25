"use client";
import React, { useState, useEffect } from "react";

interface PreloaderProps {
  text: string;
  onComplete: () => void;
}

export default function Preloader({ text, onComplete }: PreloaderProps) {
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
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
      <h1 className="text-3xl sm:text-5xl font-semibold">{displayText}</h1>
    </div>
  );
}
