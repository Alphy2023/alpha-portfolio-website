import React from 'react'
import {LeftBanner} from "@/components/banner/left-banner"
import {RightBanner} from "@/components/banner/right-banner"


export const HeroBanner = () => {
  return (
    <section id="home"
        className="w-full pt-10 pb-20 flex flex-col-reverse
        gap-10 lg:gap-0 overflow-hidden
        lg:flex-row items-center border-b-[1px] 
        border-b-black font-titleFont">
       <LeftBanner/>
       <RightBanner/>
    </section>
  )
}
