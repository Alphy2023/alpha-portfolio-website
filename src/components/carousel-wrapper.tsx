
import Autoplay from "embla-carousel-autoplay"
import { useRef, ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
} from "@/components/ui/carousel"



interface CarouselWrapperProps {
    children: ReactNode;
    autoplayDelay?: number;
    className?: string;
  }

export const CarouselWrapper =({
    children,
    autoplayDelay = 4000,
    className = "w-full max-w-xs"}:CarouselWrapperProps)=> {
    const plugin = useRef<ReturnType<typeof Autoplay>>(
        Autoplay({ delay: autoplayDelay, stopOnInteraction: true })
        );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
          {children}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  )
}
