import { title } from "@/components/primitives";
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function Experience() {
  return (
    <section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center">
          <span className={title()}>My&nbsp;</span>
          <span className={title({ color: "yellow" })}>Experience&nbsp;</span>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 py-8 md:py-10">
        <Card className="bg-transparent border-1 border-white min-w-[400px] min-h-[300px]">
          <CardBody className="items-center">
            <h2 className="mb-5 text-2xl">Frontend Development</h2>
            <section className="text-lg flex flex-col gap-2">
              <p>TypeScript</p>
              <p>React</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Tailwind CSS</p>
              <p>Redux</p>
            </section>
          </CardBody>
        </Card>
        <Card className="bg-transparent border-1 border-white min-w-[400px] min-h-[300px]">
          <CardBody className="items-center">
            <h2 className="mb-5 text-2xl">Backend Development</h2>
            <section className="text-lg flex flex-col gap-2">
              <p>ASP.NET Core</p>
              <p>Node.js</p>
              <p>MySQL</p>
              <p>NestJS</p>
              <p>SQLite</p>
            </section>
          </CardBody>
        </Card>
        <Card className="bg-transparent border-1 border-white min-w-[400px] min-h-[300px]">
          <CardBody className="items-center">
            <h2 className="mb-5 text-2xl">Other Expericences</h2>
            <section className="text-lg flex flex-col gap-2">
            <p>Azure</p>
            <p>Blender</p>
              <p>Fusion 360</p>
              <p>Davinci Resolve</p>
              <p>Ableton</p>
            </section>
          </CardBody>
        </Card>
      </section>
    </section>
  );
}
