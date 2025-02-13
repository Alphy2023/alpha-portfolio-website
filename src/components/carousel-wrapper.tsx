
import Autoplay from "embla-carousel-autoplay"
import { useRef, ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
} from "@/components/ui/carousel"



interface CarouselWrapperProps {
    children: ReactNode;
    autoplayDelay?: number;
    className?: string;
  }

export const CarouselWrapper =({
    children,
    autoplayDelay = 2000,
    className = "w-full max-w-xs"}:CarouselWrapperProps)=> {
    const plugin = useRef<ReturnType<typeof Autoplay>>(
        Autoplay({ delay: autoplayDelay, stopOnInteraction: false })
        );

  return (
    <Carousel
      plugins={[plugin.current]}
      className={className}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
          {children}
      </CarouselContent>
    </Carousel>
  )
}
