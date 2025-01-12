import { title } from "@/components/primitives";
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center">
  <Image
    alt="Marius Bungert Image"
    className="m-5"
    src="/pb.jpg"
    width={300}
    radius="full"
  />
  <Card className="bg-transparent border-1 flex justify-center items-center">
    <CardBody className="text-center">
      <p>Education</p>
      <p>B.Sc. Bachelors Degree</p>
    </CardBody>
  </Card>
</div>

  );
}
