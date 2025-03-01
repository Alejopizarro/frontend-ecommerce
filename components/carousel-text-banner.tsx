"use client";

import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

export const dataCarouselTop = [
  {
    id: 1,
    title: "Envio en 24, 48 hs",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, nobis quam illo repudiandae vero fuga? In vero voluptate explicabo impedit architecto, aut voluptatem veniam nisi sapiente nostrum animi corporis. Deleniti?",
    link: "*",
  },
  {
    id: 2,
    title: "Envio en 38, 48 hs",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, nobis quam illo repudiandae vero fuga? In vero voluptate explicabo impedit architecto, aut voluptatem veniam nisi sapiente nostrum animi corporis. Deleniti?",
    link: "*",
  },
  {
    id: 3,
    title: "Envio en 24, 48 hs",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, nobis quam illo repudiandae vero fuga? In vero voluptate explicabo impedit architecto, aut voluptatem veniam nisi sapiente nostrum animi corporis. Deleniti?",
    link: "*",
  },
  {
    id: 4,
    title: "Envio en 24, 48 hs",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, nobis quam illo repudiandae vero fuga? In vero voluptate explicabo impedit architecto, aut voluptatem veniam nisi sapiente nostrum animi corporis. Deleniti?",
    link: "*",
  },
];

const CarouselTextBanner = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-200 dark:bg-primary">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {dataCarouselTop.map(({ id, title, link, description }) => (
            <CarouselItem
              key={id}
              onClick={() => router.push(link)}
              className="cursor-pointer"
            >
              <div>
                <Card className="shadow-none border-none bg-transparent">
                  <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                    <p className="sm:text-lg text-wrap dark:text-secondary">
                      {title}
                    </p>
                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselTextBanner;
