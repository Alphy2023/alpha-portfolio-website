"use client";
import {motion,AnimatePresence} from "framer-motion"
import {PageTitle} from "@/components/page-title"
import {ProjectSlider} from "./project-slider"

export const Projects = () => {
  return (
    <AnimatePresence>
        <motion.section
        id="projects"
        className="w-full h-auto py-20 border-b-[1px] 
        border-b-black"
        data-aos="zoom-in"
        >
        <div className="flex justify-center items-center">
            <PageTitle title="My Recent Projects." subTitle="Projects" />
        </div>
        <div className="max-w-6xl mx-auto">
        
            <ProjectSlider  />
        </div>
        </motion.section>
    </AnimatePresence>
  );
};
