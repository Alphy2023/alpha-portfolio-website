"use client"


import {useState,useEffect,useCallback} from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {getGreeting} from "@/lib/utils"
import {aboutMeData} from "@/constants"
import {SocialMedia} from "@/components/social-media"
import {BestSkill} from "@/types"
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact,FaNodeJs } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssFill,RiVuejsLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import {TooltipWrapper} from "@/components/tooltip-wrapper"

export const LeftBanner = () => {
  const [words, setWords] = useState<string[]>([]);

  const bestSkills:BestSkill[] = [
    {
      title:"Next.js",
      icon:<TbBrandNextjs/>
    },
    {
      title:"React",
      icon:<FaReact/>
    },
    {
      title:"NodeJs",
      icon:<FaNodeJs/>
    },
    {
      title:"Typescript",
      icon:<TbBrandTypescript/>
    },
    {
      title:"TaiwindCss",
      icon:<RiTailwindCssFill/>
    },
    {
      title:"Laravel",
      icon:<FaLaravel/>
    },
    {
      title:"VueJs",
      icon:<RiVuejsLine/>
    },
  ]
  
  const handleWordsUpdate = useCallback(
    () => {
      const items: string[] = [];
      aboutMeData?.qualities?.forEach(item=>{
        items.push(item?.title)
      })
      setWords(items)
    },
    []
  )

  useEffect(()=>{
    handleWordsUpdate()
  },[handleWordsUpdate])

  const [text] = useTypewriter({
    words:words,
    loop:true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  })
  
  return (
    <div className="w-full pr-5 pl-5 lg:pl-0 lg:pr-0 lg:flex-1 flex flex-col gap-20" 
      // data-aos="fade-right"
      >
      <div className="flex flex-col gap-3 mdl:gap-5" 
      // data-aos="slide-right"
      >
        <h4 className="text-md mdl:text-lg font-normal uppercase">
          welcome to my world
        </h4>
        <h3 className="text-md md:text-2xl font-bold text-white">{getGreeting()}</h3>
        <h1 className="text-xl md:text-3xl font-bold text-white">
          I&apos;m
          <span className="text-designColor capitalize">
            {" "}
            {aboutMeData?.name}
          </span>
        </h1>
        <h2 className="text-md md:text-3xl font-bold text-white">
          a <span className="text-primaryColor">{text}</span>
          <Cursor cursorBlinking={false} cursorStyle="" cursorColor="#149ddd" />
        </h2>
        <p
          className="text-sm md:text-base font-bodyFont text-justify
         leading-6 tracking-wide"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          {aboutMeData?.resumeSummary}
        </p>
      </div>

      {/* icons */}
      <div
        className="flex flex-col xl:flex-row gap-6
        md:gap-10 justify-between"
        >
        {/* left */}
        <div>
          <SocialMedia/>
        </div>
        {/* right */}
        <div className="flex flex-col gap-3">
          <h2
            className="text-base uppercase font-titleFont mb-4"
            data-aos="zoom-in"
          >
            Best Skill on
          </h2>
          <div className="flex gap-4 flex-wrap" data-aos="fade-up">
            {bestSkills?.map(({title,icon},idx)=>(
              <TooltipWrapper 
              title={title}
              key={idx}>
                <span className="bannerIcon text-2xl cursor-default"
                key={idx}>
                  {icon}
                </span>
              </TooltipWrapper>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
