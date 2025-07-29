"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";

const HeroCarousel = ({
  seconds,
  cardId,
  images,
}: {
  seconds: number;
  cardId: number;
  images: string[];
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const autoPlayInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!api) return;

    autoPlayInterval.current = setInterval(() => {
      api.scrollNext();
    }, seconds);

    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, [api]);

  return (
    <div className="w-full overflow-x-hidden">
      <Carousel opts={{ align: "start", loop: true }} setApi={setApi}>
        <CarouselContent>
          {images.map((imgSrc, index) => (
            <CarouselItem key={index}>
              <img
                src={imgSrc}
                alt={`Carousel ${index}`}
                className={`w-full object-cover rounded-lg ${
                  cardId === 1 ? "h-80 " : "h-48"
                }`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
