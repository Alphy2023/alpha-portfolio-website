import React from 'react'

interface PageTitleProps{
    title?:string;
    subTitle:string;
}

export const PageTitle = ({title,subTitle}:PageTitleProps) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3
        className="text-sm uppercase font-light 
      text-designColor tracking-wide"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        {title}
      </h3>
      <h2
        className="capitalize text-2xl lg:text-3xl 
      text-gray-300 font-bold"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        {subTitle}
      </h2>
    </div>
  )
}
