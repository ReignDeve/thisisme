import About from "@/app/about/page";
import Hero from "./hero/page";
import Experience from "./experience/page";

export default function Home() {
  return (
    <div className="flex flex-col">
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
      <Experience/>
    </section>
  </div>
  );
}
