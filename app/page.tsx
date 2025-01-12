import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import About from "@/app/about/page";
import Hero from "./hero/page";

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
  </div>
  );
}
