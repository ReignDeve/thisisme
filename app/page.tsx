import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import AboutLayout from "./about/layout";

export default function Home() {
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
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Download CV
        </Link>
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Contact Me
        </Link>
      </div>
      <AboutLayout children={undefined}></AboutLayout>
    </section>
  );
}
