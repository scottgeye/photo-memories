import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import image from "../assets/smiling-girl.jpg";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Let's talk",
    description:
      "We reach out to you to learn more about your photos and what your expectations are.",
    icon: <ChartIcon />
  },
  {
    title: "Schedule Pickup",
    description:
      "We schedule a pickup time that works for you and pick up your photos from your home.",
    icon: <WalletIcon />
  },
  {
    title: "Handle with Care",
    description:
      "We handle your photos with care and make sure they are safe during the entire process.",
    icon: <MagnifierIcon />
  }
];

export const Services = () => {
  return (
    <section className="container py-12">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Concierge{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Your photos are important to us and want to make sure we return them
            in the same condition we received them.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={image}
          className="w-[250px] md:w-[350px] lg:w-[450px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
