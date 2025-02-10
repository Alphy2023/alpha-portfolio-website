"use client"

import React from 'react'
import Image from "next/image"
import { Link } from "react-scroll";
import {SocialMedia} from "@/components/social-media"
import {AboutImg} from "@/assets"

export const LeftSide= () => {
  return (
    <div
      className="w-full lg:w-[30%] h-full bg-gradient-to-r
        from-[#1e2024] to-[#23272b] shadow-shadowOne rounded-lg 
        md:p-8 p-3
        flex flex-col md:flex-row lg:flex-col gap-6 justify-center
        md:justify-start lg:justify-center"
      >
      <Image
        src={AboutImg}
        alt=""
        data-aos="zoom-in"
        className="h-72 md:h-56 lg:h-72 rounded-lg object-cover"
      />
      <div className="w-full flex flex-col md:justify-end ">
        <div className="flex flex-row  w-full gap-3 md:gap-4 py-4 ">
          {/* <span
            className="contactButton text-sm cursor-pointer bg-transparent
        border-[1px] border-designColor text-designColor"
          >
            <a download="Resume.pdf" href="/CV.pdf">
              Get Resume
            </a>
          </span> */}
          <span className="contactButton text-sm cursor-pointer
           bg-transparent
        border-[1px] border-designColor text-designColor">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Hire Me
            </Link>
          </span>
        </div>
        {/* <h3 className="text-2xl font-bold">Jone Peter Doe</h3> */}
        <div className="mt-3">
            <SocialMedia/>
        </div>
      </div>
    </div>
  )
}
