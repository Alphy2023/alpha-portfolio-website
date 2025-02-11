"use client";

import Slider from "react-slick";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useState } from "react";
import "slick-carousel/slick/slick.css";

interface SliderWrapperProps {
  children: React.ReactNode;
}

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className="w-14 h-10 bg-[#0c1821] hover:bg-black duration-300
        rounded-md text-2xl text-gray-400 flex justify-center items-center
        absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
};

const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className="w-14 h-10 bg-[#0c1821] hover:bg-black duration-300
        rounded-md text-2xl text-gray-400 flex justify-center items-center
        absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
};

export const SliderWrapper = ({ children }: SliderWrapperProps) => {
  const [dotActive, setDotActive] = useState<number>(0);

  const settings = {
    beforeChange: (prev: number, next: number) => {
      setDotActive(next);
    },
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ borderRadius: "10px", padding: "10px" }}>
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          background: i === dotActive ? "#7380ec" : "gray",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
    ),
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Fixed typo
    slidesToScroll: 1, // Fixed typo
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
