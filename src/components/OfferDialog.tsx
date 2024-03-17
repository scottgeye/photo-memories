import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

export function OfferDialog() {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="text-center text-xl mt-6">
            Claim Your Offer Now!
          </DialogTitle>
          <DialogDescription className="text-center">
            Limited Time Only
          </DialogDescription>

          <div className="flex justify-center py-8">
            <span className="text-8xl font-bold">30%</span>{" "}
            <span className="text-4xl">Off *</span>
          </div>

          <Button
            onClick={() => setOpen(false)}
            className="w-full my-10 p-8 text-lg font-bold"
          >
            Claim Offer
          </Button>
          <DialogDescription className="text-center my-8">
            *Offer good on AI Restoration Package
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
