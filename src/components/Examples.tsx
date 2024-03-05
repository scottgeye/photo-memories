// import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
// import { Switch } from "@/components/ui/switch";
// import { Label } from "@/components/ui/label";
// import { Sparkles, FileImage } from "./Icons";
import beforeImage1 from "../assets/compare1-before.jpg";
import afterImage1 from "../assets/compare1-after.jpg";
import beforeImage2 from "../assets/compare2-before.jpg";
import afterImage2 from "../assets/compare2-after.jpg";
import beforeImage3 from "../assets/compare3-before.jpg";
import afterImage3 from "../assets/compare3-after.jpg";
import { ImgComparisonSlider } from "@img-comparison-slider/react";

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
  // const [checkedArray, setCheckedArray] = useState(
  //   Array(examples.length).fill(false)
  // );

  // const setCheckedAtIndex = (index: number, checked: boolean) => {
  //   setCheckedArray((currentArray) =>
  //     currentArray.map((item, i) => (i === index ? checked : item))
  //   );
  // };

  // const imageSizes = "";

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
        Move the slider in each image to see the magic!
      </p>

      {/* <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Tap the toggle below each image to see the magic!
      </p> */}

      <Carousel
        opts={{
          align: "start",
          loop: true,
          watchDrag: false
        }}
        className="mx-2 md:mx-10 lg:mx-20"
      >
        <CarouselPrevious variant="link" className="ml-4" />
        <CarouselContent>
          {examples.map(({ id, beforeImage, afterImage }: ExamplesProps) => (
            <CarouselItem key={id} className="basis-full md:basis-1/2">
              <Card>
                <CardContent className="w-full flex items-center justify-center flex-wrap py-5 px-3 bg-muted/50">
                  <ImgComparisonSlider style={{ outline: "none" }}>
                    <img
                      slot="first"
                      src={beforeImage}
                      alt="Before photo"
                      // className={`${imageSizes} ${
                      //   checkedArray[id] ? "hidden" : "block"
                      // }`}
                    />
                    <img
                      slot="second"
                      src={afterImage}
                      alt="After photo"
                      // className={`${imageSizes} ${
                      //   checkedArray[id] ? "block" : "hidden"
                      // }`}
                    />
                  </ImgComparisonSlider>

                  {/* <div className="w-full flex items-center justify-center space-x-2">
                    <Label htmlFor="compare">
                      <FileImage />
                    </Label>
                    <Switch
                      id="compare"
                      className="data-[state=unchecked]:bg-primary/40"
                      onCheckedChange={(checked: boolean) => {
                        setCheckedAtIndex(id, checked);
                      }}
                    />
                    <Label htmlFor="compare">
                      <Sparkles />
                    </Label>
                  </div> */}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext variant="link" className="mr-4" />
      </Carousel>
    </section>
  );
};
