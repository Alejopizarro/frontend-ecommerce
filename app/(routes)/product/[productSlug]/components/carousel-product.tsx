/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

interface CarouselProductProps {
  images: {
    data: {
      id: number;
      attributes: {
        url: string;
      };
    }[];
  };
}

const CarouselProduct = (props: CarouselProductProps) => {
  const { images } = props;
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="sm:px-16 space-y-8">
      <Carousel>
        <CarouselContent>
          <CarouselItem key={images.data[selectedImage].id}>
            <img
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images.data[selectedImage].attributes.url}`}
              alt="Product Image"
              className="rounded-lg"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {images.data.map((image, index) => (
            <CarouselItem key={image.id} className="pl-2 basis-1/5">
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`}
                alt="Product Thumbnail"
                className={`rounded-lg cursor-pointer ${
                  selectedImage === index ? "border-2 border-black" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
