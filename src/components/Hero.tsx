import { Button } from "./ui/button";
// import { HeroCards } from "./HeroCards";
import image from "../assets/hero.png";
import { ContactDialog } from "./ContactDialog";
import { Dialog, DialogTrigger } from "./ui/dialog";

export const Hero = () => {
  return (
    <section className="container flex flex-col lg:flex-row lg:grid-cols-2 place-items-center py-50 md:py-10 lg:py-0 gap-10">
      <div className="text-center lg:text-start space-y-6 lg:order-first order-last">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Relive
            </span>
            {" your "}
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Photo Memories
            </span>
            {" with "}
            <span className="inline bg-gradient-to-r from-[#61fb7d] via-[#1ff142] to-[#03d71c] text-transparent bg-clip-text">
              AI
            </span>
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Let us scan all your old photos and bring them back to life with the
          magic of AI
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full md:w-1/3 px-8 py-7 text-lg">
                Get Started
              </Button>
            </DialogTrigger>
            <ContactDialog />
          </Dialog>
        </div>
      </div>

      <div className="lg:order-last order-first">
        <div className="relative z-10">
          <img
            src={image}
            alt="About feature"
            className="w-[500px] lg:w-[600px] mx-auto lg:mr-80"
          />
        </div>

        {/* Shadow effect */}
        <div className="shadow"></div>
      </div>
    </section>
  );
};
