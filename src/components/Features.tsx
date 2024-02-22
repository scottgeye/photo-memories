// import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import image1 from "../assets/digitize.png";
import image2 from "../assets/ai-restore.png";
import image3 from "../assets/ai-enhance.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Digitize",
    description:
      "We take your piles of old photos and scrapbooks and turn them into digital memories.",
    image: image1
  },
  {
    title: "AI Restore",
    description:
      "We use the latest in AI technology to restore your old photos to their former glory.",
    image: image2
  },
  {
    title: "AI Enhance",
    description:
      "We can use AI to enhance faces and colorize old photos to make them look like they were taken yesterday.",
    image: image3
  }
];

export const Features = () => {
  return (
    <section id="features" className="container py-12 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        Let{" "}
        <span className="inline bg-gradient-to-r from-[#61fb7d] via-[#1ff142] to-[#03d71c] text-transparent bg-clip-text">
          AI
        </span>{" "}
        work its{" "}
        <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
          Magic!
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img src={image} alt="About feature" className="" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
