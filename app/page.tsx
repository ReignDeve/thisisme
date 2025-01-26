"use client";
import { useState, useEffect } from "react";
import About from "@/app/about/page";
import Hero from "./hero/page";
import Experience from "./experience/page";
import CustomAlert from "@/app/alert/alert";
import Preloader from "@/app/preload/preload"
import ContactForm from "./contact/page";

export default function Home() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem("hasSeenAnimation");
    if (hasSeenAnimation) {
      setIsAnimationComplete(true); // Überspringe die Animation, wenn sie bereits gezeigt wurde
    }
  }, []);

  const handleAnimationComplete = () => {
    sessionStorage.setItem("hasSeenAnimation", "true");
    setIsAnimationComplete(true);
  };

  if (!isAnimationComplete) {
    return <Preloader text=" TTomorrow is a hope, never a promise " onComplete={handleAnimationComplete} />;
  }

  return (
    <div className="flex flex-col">
      {/* Alert */}
      {showAlert && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50">
          <CustomAlert
            title="Hey There!"
            description="This site is still under construction"
            color="warning"
          />
        </div>
      )}

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <Hero />
      </section>

      {/* About Section */}
      <section className="h-screen flex items-center justify-center">
        <About />
      </section>

      {/* Experience Section */}
      <section className="h-screen flex items-center justify-center">
        <Experience />
      </section>

      {/*Contact form */}
      <section className="h-screen flex items-center justify-center">
        <ContactForm />
      </section>
    </div>
  );
}
