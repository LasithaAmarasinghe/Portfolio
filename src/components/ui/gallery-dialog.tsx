import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type Props = {
  title: string;
  images: string[];
  trigger: React.ReactNode;
};

const GalleryDialog: React.FC<Props> = ({ title, images, trigger }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{title} - Gallery</DialogTitle>
        </DialogHeader>
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((img, imgIndex) => (
              <CarouselItem key={imgIndex}>
                <div className="p-1">
                  <img
                    src={img}
                    alt={`${title} ${imgIndex + 1}`}
                    className="w-full h-auto rounded-lg object-contain max-h-[70vh]"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {images.length > 1 && (
            <>
              <CarouselPrevious className="left-2 h-12 w-12 bg-primary/90 hover:bg-primary border-2 border-primary-foreground/20 shadow-lg" />
              <CarouselNext className="right-2 h-12 w-12 bg-primary/90 hover:bg-primary border-2 border-primary-foreground/20 shadow-lg" />
            </>
          )}
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryDialog;
