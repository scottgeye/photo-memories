import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-12">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Get Started
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Today!{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Fill out our 1-minute questionnaire and we will reach out to get the
            process started immediately.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="text-2xl w-full py-10 px-16">Get Started</Button>
        </div>
      </div>
    </section>
  );
};
