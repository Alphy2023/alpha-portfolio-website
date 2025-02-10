import React from 'react'
import {PhotoImg} from "@/assets"
import Image from "next/image"

export const RightBanner = () => {
  return (
    <div
    className="w-full md:w-2/5 flex justify-center 
     
    items-center relative group"
    data-aos="fade-left"
  >
    <Image
      src={PhotoImg}
      className="w-[300px] h-[300px] lgl:w-[420px] lgl:h-[420px] z-10
       rounded-full object-cover
       group-hover:scale-110 duration-500"
      alt=""
      data-aos="zoom-in"
    />
    <div
      className="absolute bottom-0 w-[320px] h-[320px] lgl:w-[420px] 
      lgl:h-[420px] bg-gradient-to-r rounded-full 
      border-[1px] border-black-300
      from-[rgb(30,32,36)] to-[#202327] 
      shadow-shadowOne flex justify-center items-center"
    ></div>
  </div>
  )
}
