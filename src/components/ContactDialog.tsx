import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { CheckCircle } from "./Icons";
import { sendEmail } from "@/lib/email";
import { track } from "@vercel/analytics";

interface ContactDialogProps {
  defaultPackage?: string;
}

export function ContactDialog({ defaultPackage }: ContactDialogProps) {
  const [isSubmitted, setSubmitted] = useState<boolean>(false);

  const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(10).max(15),
    package: z.string(),
    photoCount: z.string()
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      package: defaultPackage,
      photoCount: "250_500"
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setSubmitted(true);
    sendEmail(JSON.stringify(values, null, 2));
    track("Contact", values);
    window.fbq("track", "Contact");
  };

  return (
    <DialogContent
      className="sm:max-w-[425px]"
      onOpenAutoFocus={(e) => e.preventDefault()}
    >
      {!isSubmitted ? (
        <>
          <DialogHeader>
            <DialogTitle>Let's Get Started</DialogTitle>
            <DialogDescription>
              Tells us about you and your Photos.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid gap-4 py-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name:</FormLabel>
                      <FormControl>
                        <Input placeholder="John Smith" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email:</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="johnsmith@gmail.com"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone:</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="(123) 456-7890"
                          type="tel"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="package"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Package</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a package" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="basic">
                            Digitize - $0.50 / Photo
                          </SelectItem>
                          <SelectItem value="restored">
                            Digitize & Restore{" "}
                            <span className="line-through">$0.75</span> $0.50 /
                            Photo
                          </SelectItem>
                          <SelectItem value="enhanced">
                            Digitize, Restore & Enhance{" "}
                            <span className="line-through">$1.00</span> $0.75 /
                            Photo
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="photoCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Photo Count</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="100_250">100-250</SelectItem>
                          <SelectItem value="250_500">250-500</SelectItem>
                          <SelectItem value="500_1000">500-1,000</SelectItem>
                          <SelectItem value="1000+">1,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </form>
          </Form>
        </>
      ) : (
        <>
          <DialogHeader>
            <DialogTitle className="text-center">You're All Set</DialogTitle>
            <DialogDescription className="text-center">
              We'll be in touch shortly
            </DialogDescription>
          </DialogHeader>

          <CheckCircle
            className="text-center mx-auto mt-20 mb-20 scale-[5] min-h-100"
            style={{
              filter:
                "invert(48%) sepia(79%) saturate(2476%) hue-rotate(60deg) brightness(118%) contrast(119%)"
            }}
          />
        </>
      )}
    </DialogContent>
  );
}
