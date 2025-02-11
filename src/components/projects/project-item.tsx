
import Image from "next/image"
import React from 'react'
import {Project} from "@/types"
import { FaGlobe } from "react-icons/fa";
import {CarouselWrapper} from "@/components/carousel-wrapper"

import {
    CarouselItem,
  } from "@/components/ui/carousel"
interface ProjectItemProps {
    item?:Project | null;
}

export const ProjectItem = ({item}:ProjectItemProps) => {
  return (
    <div className="w-full">
        <div className="w-full h-auto flex flex-col md:flex-row
        justify-between"
        >
        <div
            className="w-full lg:w-[35%] h-full bg-gradient-to-r
            from-[#1e2024] to-[#23272b] shadow-shadowOne rounded-lg 
            p-8
            flex flex-col md:flex-row lg:flex-col gap-8 justify-center
            md:justify-start lg:justify-center"
            data-aos="zoom-in"
        >
             {/* <Image
                    src={item?.project_images 
                        && item?.project_images[0]?.url || ""}
                    alt=""
                    className="h-72 md:h-32 lg:h-72 rounded-lg object-cover"
                    /> */}
            <CarouselWrapper>
            {item?.project_images?.map((item,idx)=>(
                
                <CarouselItem key={idx}>
                    <Image
                    src={item?.url}
                    alt=""
                    className="h-72 md:h-32 lg:h-72 rounded-lg object-cover"
                    />
                </CarouselItem>
            ))}
              
            </CarouselWrapper>
            {/* <ImageSlide data={item?.project_images} /> */}
            <div className="w-full flex flex-col justify-end">
            <p
                className="text-xs uppercase text-designColor
                tracking-wide mb-2"
            >
                {item?.title}
            </p>
            <h3
                className="text-base tracking-wide
                text-gray-500"
            >
                {item?.company}
            </h3>
            {/* <p
            className="text-base tracking-wide
        text-gray-500"
            >
            Operation Officer
            </p> */}
            <div className="flex gap-4 mt-2">
                {/* <a
                className="text-lg w-8 h-8 rounded-full bg-black inline-flex
                justify-center items-center text-gray-400 hover:text-designColor
                duration-cursor-pointer"
                href={item?.github_link}
                rel="noreferrer"

                target="_blank"
                style={{ cursor: "pointer" }}
                >
                <BsGithub />
                </a> */}
                <a
                className="text-lg w-8 h-8 rounded-full bg-black inline-flex
                justify-center items-center text-gray-400 hover:text-designColor
                duration-cursor-pointer"
                href={item?.site_link}
                target="_blank"
                style={{ cursor: "pointer" }}
                >
                <FaGlobe />
                </a>
            </div>
            </div>
        </div>
        <div
            className="w-full lg:w-[60%] h-full flex flex-col 
            justify-between"
            data-aos="fade-up"
        >
            <div
            className="w-full h-[70%] py-10 bg-gradient-to-r 
            from-[#1e2024]
            to-[#23272b] flex flex-col rounded-lg shadow-shadowOne 
            p-4 lg:p-8  gap-4 lg:gap-8
            justify-center"
            >
            <div
                className="flex flex-col lg:flex-row justify-between lg:items-center
                py-6 border-b-2 border-b-gray-900"
            >
                <div>
                <h3
                    className="text-xl lg:text-2xl capitalize 
                font-medium tracking-wide"
                >
                    {item?.title}
                </h3>
                <p className="text-base text-gray-400 mt-3">
                    {item?.start_date} - {item?.end_date}
                </p>
                </div>
            </div>
            <p
                className="text-sm font-titleFont text-gray-400
            font-medium tracking-wide leading-6 italic"
            >
                {item?.excerpt}
            </p>
            </div>
        </div>
        </div>
    </div>
  )
}
