import { title } from "@/components/primitives";
import { Image } from "@nextui-org/image";
import { Card, CardBody } from "@nextui-org/card";

export default function AboutPage() {
  return (
    <section>
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center">
          <span className={title()}>About&nbsp;</span>
          <span className={title({ color: "yellow" })}>Me&nbsp;</span>
        </div>
      </section>

      {/* Content Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 py-8 md:py-10">
        {/* Left Side: Image and Card */}
        <div className="flex flex-col items-center md:items-start gap-6 md:mr-10">
          <Image
            alt="Marius Bungert Image"
            className="justify-center mb-5"
            src="/pb.jpg"
            width={250}
            radius="full"
          />
          <Card className="bg-transparent border flex justify-center items-center min-w-[200px] min-h-[80px] md:min-w-[300px] md:min-h-[100px]">
            <CardBody className="flex flex-col items-center justify-center text-center">
              <h1 className="text-sm md:text-lg font-bold">Education</h1>
              <p className="text-xs md:text-base">B.Sc. Bachelors Degree</p>
            </CardBody>
          </Card>
        </div>

        {/* Right Side: Description */}
        <div className="flex flex-col items-start max-w-lg text-left text-sm md:text-lg md:max-w-xl">
          <p>
            Hi, I’m a 22-year-old from Germany, currently studying Computer Science at the Technische Hochschule Nürnberg Georg Simon Ohm and working as a student employee at adesso SE. This combination gives me the chance to gain practical experience while deepening my knowledge of technology through my studies.
          </p>
          <p className="mt-4">
            When I’m not focused on tech, I enjoy spending time on creative projects. Music and musicals have been a part of my life for as long as I can remember. Performing on stage or working on music gives me a different kind of focus and balance that complements my interest in technology.
          </p>
        </div>
      </section>
    </section>
  );
}
