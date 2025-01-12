import { title } from "@/components/primitives";
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function AboutPage() {
  return (
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
  <div className="flex flex-col items-start max-w-lg text-left text-2xl">
    <p>
      I’m a 22-year-old from Germany, currently working as a student employee
      at adesso SE while pursuing a Computer Science degree at the Technische Hochschule Nürnberg Georg Simon Ohm.
    </p>
    <p className="mt-4">
      My passion for technology goes hand in hand with my love for the
      performing arts: in my free time, I make music and appear in musicals.
    </p>
  </div>
</section>
  );
}
