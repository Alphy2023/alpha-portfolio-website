import React from 'react'

interface AboutCardProps {
    title?:string;
    subTitle?:string;
    icon:JSX.Element;
}

export const AboutCard = ({title,icon,subTitle}:AboutCardProps) => {
  return (
    <div
        className="w-full p-4 xl:px-8 xl:py-5 rounded-lg shadow-shadowOne flex 
        flex-col gap-2 justify-center items-center
        bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b
        hover:from-gray-900 hover:gray-900 transition-colors duration-500"
        data-aos="fade-up">
        <span className="text-2xl text-designColor">{icon}</span>
        <h3 className="capitalize text-primaryColor tracking-[2px]">{title}</h3>
        <span className="capitalize text-gray-400 text-sm">{subTitle}</span>
    </div>
  )
}
