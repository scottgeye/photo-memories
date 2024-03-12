import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { ContactDialog } from "./ContactDialog";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

enum PopularPlanType {
  NO = 0,
  YES = 1
}

interface PricingProps {
  title: string;
  name: string;
  popular: PopularPlanType;
  price: string;
  discountPrice?: string;
  description: string;
  disclaimer?: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Basic",
    name: "basic",
    popular: 0,
    price: "0.50",
    description: "Minium 100 photos.",
    disclaimer: "Pickup & Shipping not included",
    buttonText: "Get Started",
    benefitList: ["Digitize Photos", "Digital Photo Library", "Online Support"]
  },
  {
    title: "AI Restoration",
    name: "restored",
    popular: 1,
    price: "0.75",
    discountPrice: "0.50",
    description: "Minium 100 photos",
    disclaimer: "Pickup & Shipping not included",
    buttonText: "Get Started",
    benefitList: [
      "Everything in Basic",
      "AI Quality Improvement",
      "AI Face Enhance",
      "AI Color Correction",
      "AI Noise Reduction"
    ]
  },
  {
    title: "AI Enhanced",
    name: "enhanced",
    popular: 0,
    price: "1.00",
    discountPrice: "0.75",
    description: "Minium 100 photos",
    disclaimer: "Shipping not included",
    buttonText: "Get Started",
    benefitList: [
      "Everything in AI Restoration",
      "AI Colorize",
      "AI Fix Scratches/Creases/Spots",
      "Free Concierge Pickup*"
    ]
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-20 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Choose Your
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Package{" "}
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Pick the best plan that suits your needs. You can always upgrade later.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              {pricing.discountPrice ? (
                <div>
                  <span className="text-2xl line-through">
                    ${pricing.price}
                  </span>{" "}
                  <span className="text-3xl font-bold">
                    ${pricing.discountPrice}
                  </span>
                  <span className="text-muted-foreground"> / photo</span>
                </div>
              ) : (
                <div>
                  <span className="text-3xl font-bold">${pricing.price}</span>
                </div>
              )}

              <CardDescription>{pricing.description}</CardDescription>
              {pricing.disclaimer ? (
                <CardDescription className="text-sm mt-2">
                  {pricing.disclaimer}
                </CardDescription>
              ) : (
                <div className="pt-[22px]" />
              )}
            </CardHeader>

            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">{pricing.buttonText}</Button>
                </DialogTrigger>
                <ContactDialog defaultPackage={pricing.name} />
              </Dialog>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
