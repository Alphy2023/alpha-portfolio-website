import React from 'react'
import {PageTitle} from "@/components/page-title"
import {servicesData} from "@/constants"
import {ServiceCard} from "./service-card"

export const Services = () => {
  return (
    <section
      id="services"
      className="w-full h-auto py-20 border-b-[1px] 
      border-b-black"
    >
        <div className="flex justify-center items-center">
            <PageTitle title="what i offer" subTitle="Services" />
        </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
       gap-8 md:gap-20"
      >
        {servicesData?.map((item,index) => (
          <ServiceCard service={item} key={index}/>
        ))}
      
      </div>
    </section>
  )
}
