import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Sparkles, FileImage } from "./Icons";
import beforeImage1 from "../assets/compare1-before.jpg";
import afterImage1 from "../assets/compare1-after.jpg";
import beforeImage2 from "../assets/compare2-before.jpg";
import afterImage2 from "../assets/compare2-after.jpg";
import beforeImage3 from "../assets/compare3-before.jpg";
import afterImage3 from "../assets/compare3-after.jpg";

interface ExamplesProps {
  id: number;
  beforeImage: string;
  afterImage: string;
}

const examples: ExamplesProps[] = [
  {
    id: 0,
    beforeImage: beforeImage1,
    afterImage: afterImage1
  },
  {
    id: 1,
    beforeImage: beforeImage2,
    afterImage: afterImage2
  },
  {
    id: 2,
    beforeImage: beforeImage3,
    afterImage: afterImage3
  }
];

export const Examples = () => {
  const [checkedArray, setCheckedArray] = useState(
    Array(examples.length).fill(false)
  );

  const setCheckedAtIndex = (index: number, checked: boolean) => {
    setCheckedArray((currentArray) =>
      currentArray.map((item, i) => (i === index ? checked : item))
    );
  };

  return (
    <section id="features" className="container py-15 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        How{" "}
        <span className="inline bg-gradient-to-r from-[#61fb7d] via-[#1ff142] to-[#03d71c] text-transparent bg-clip-text">
          AI Restoration
        </span>{" "}
        looks
      </h2>

      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Tap the toggle below each image to see the magic!
      </p>

      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        className="mx-8 md:mx-10 lg:mx-20"
      >
        <CarouselPrevious />
        <CarouselContent>
          {examples.map(({ id, beforeImage, afterImage }: ExamplesProps) => (
            <CarouselItem
              key={id}
              className="basis-full md:basis-1/3 lg:basis-1/2"
            >
              <div className="p-2">
                <Card>
                  <CardContent className="w-full flex aspect-square items-center justify-center flex-wrap p-6">
                    <img
                      src={beforeImage}
                      alt="Before photo"
                      className={`max-h-40 md:max-h-60 lg:max-h-80 ${
                        checkedArray[id] ? "hidden" : "block"
                      }`}
                    />
                    <img
                      src={afterImage}
                      alt="After photo"
                      className={`max-h-40 md:max-h-60 lg:max-h-80 ${
                        checkedArray[id] ? "block" : "hidden"
                      }`}
                    />

                    <div className="w-full flex items-center justify-center space-x-2">
                      <Label htmlFor="compare">
                        <FileImage />
                      </Label>
                      <Switch
                        id="compare"
                        onCheckedChange={(checked: boolean) => {
                          setCheckedAtIndex(id, checked);
                        }}
                      />
                      <Label htmlFor="compare">
                        <Sparkles />
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext />
      </Carousel>
    </section>
  );
};
