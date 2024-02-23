import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Package, ScanText, BrainCog, Globe } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Package />,
    title: "1. Physical Transfer",
    description:
      "You can choose to send us your photos or use our concierge service to pick them up directly from your home."
  },
  {
    icon: <ScanText />,
    title: "2. Digital Scan",
    description:
      "We use high resolution scanners to digitize your photos in a clean environment."
  },
  {
    icon: <BrainCog />,
    title: "3. AI Processing",
    description:
      "One the photos are digitized, the machine go to work to restore and enhance your photos."
  },
  {
    icon: <Globe />,
    title: "4. Online Delivery",
    description:
      "Once the photos are processed, we deliver them to you instantly online."
  }
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-20">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        The entire process is simple and getting started is easy.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
