import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Does it work?",
    answer:
      "Yes! The examples on this site are all real photos processed through our AI. But even AI isn't perfect and some pictures will look better than others. If there are any processed photos you're unhappy with, we have a no questions asked refund policy for all AI restoration and enhancement.",
    value: "item-1"
  },
  {
    question: "Can I trust you with my photos?",
    answer:
      "We take the security of you photos and your privacy very seriously. All photos are processed in a clean room and handled with sterile gloves and instruments",
    value: "item-2"
  },
  {
    question: "Can I trust you with my photos?",
    answer:
      "We take the security of you photos and your privacy very seriously. All photos are processed in a clean room and handled with sterile gloves and instruments",
    value: "item-3"
  },
  {
    question: "Can I trust AI with my photos?",
    answer:
      "Absolutely, all the AI models that we use to process your photos run in-house on our own secure servers. Your photos are never used to train other AI models, they are never processed in the cloud, and they never leave our physical hard drives until they've finished processing and are uploaded to a private photo album for you to view.",
    value: "item-4"
  },
  {
    question: "How does shipping work?",
    answer:
      "You'll be responsible for packing and shipping your photos to us. The return shipping cost will be added to your final cost of service.",
    value: "item-5"
  },
  {
    question: "How long does the process take?",
    answer:
      "Once we receive your photos and authorize payment, the process takes about 3-4 days depending on the number of photos and the level of service you choose. We'll keep you updated on the progress.",
    value: "item-6"
  },
  {
    question: "When do I get charged?",
    answer:
      "You'll be charged once we receive your photos and we've had a chance to review them. We'll send you a final invoice with the cost of service and return shipping.",
    value: "item-7"
  },
  {
    question: "How do I see the results?",
    answer:
      "We'll provide you with a link to both the raw and AI processed results in an online photo album.",
    value: "item-8"
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-20 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3> */}
    </section>
  );
};
