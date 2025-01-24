"use client"
import { useState, useEffect } from "react";
import About from "@/app/about/page";
import Hero from "./hero/page";
import Experience from "./experience/page";
import CustomAlert from "@/app/alert/alert";

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setShowAlert(true);
    const timer = setTimeout(() => setShowAlert(false), 5000);
    return () => clearTimeout(timer);
  }, []);

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
    </div>
  );
}