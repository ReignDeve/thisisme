import { title } from "@/components/primitives";
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function AboutPage() {
  return (
    <section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center">
          <span className={title()}>About&nbsp;</span>
          <span className={title({ color: "yellow" })}>Me&nbsp;</span>
        </div>
      </section>
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 py-8 md:py-10">
  {/* Linke Seite: Bild und Card */}
  <div className="flex flex-col items-center md:items-start gap-6 mr-20">
    <Image
      alt="Marius Bungert Image"
      className="justify-center mb-5"
      src="/pb.jpg"
      width={300}
      radius="full"
    />
    <Card className="bg-transparent border flex justify-center items-center min-w-[300px] min-h-[100px]">
          <CardBody className="flex flex-col items-center justify-center text-center">
            <h1 className="text-lg font-bold">Education</h1>
            <p>B.Sc. Bachelors Degree</p>
          </CardBody>
        </Card>
  </div>

  {/* Rechte Seite: Beschreibung */}
  <div className="flex flex-col items-start max-w-lg text-left text-2xl min-w-[600px]">
    <p>
    Hi, I’m a 22-year-old from Germany, currently studying Computer Science at the Technische Hochschule Nürnberg Georg Simon Ohm and working as a student employee at adesso SE.
    This combination gives me the chance to gain practical experience while deepening my knowledge of technology through my studies.
    </p>
    <p className="mt-4">
    When I’m not focused on tech, I enjoy spending time on creative projects. Music and musicals have been a part of my life for as long as I can remember.
    Performing on stage or working on music gives me a different kind of focus and balance that complements my interest in technology.
    </p>
  </div>
</section>
</section>
  );
}
