"use client"
import { motion, AnimatePresence } from "framer-motion";

import {PageTitle} from "@/components/page-title"
import {RightSide} from "./right-side"
import {LeftSide} from "./left-side"


export const About = () => {
  return (
    <>
        <AnimatePresence>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.9 } }}
                id="about-me"
                
                data-aos="zoom-in"
                >
                        <div
                            className="w-full py-20 border-b-[1px] 
                        border-b-black">

                            <div className="flex justify-center items-center">
                                <PageTitle title="Why Choose Me?" subTitle="About Me " />
                            </div>
                            <div className="maxp-w-6xl mx-auto">
                                <div className="w-full">
                                    <div className="w-full h-auto flex flex-col lg:flex-row
                                        justify-between">
                                        <LeftSide />
                                        <RightSide />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
            </motion.section>
            </AnimatePresence>
    </>
  )
}
