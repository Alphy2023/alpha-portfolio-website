"use client"

import React from 'react'
import { motion,AnimatePresence } from "framer-motion";
import {ResumeSection} from "./resume-section"
import {resumeData} from "@/constants"


export const ExperienceContent = () => {
  return (
    <AnimatePresence>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.9 } }}
            className="flex flex-col md:flex-row gap-20 w-full"
            >
            <ResumeSection  title="2021 - Present"
                subTitle="Company Experience"
            items={resumeData?.experience?.jobs}
            />
            <ResumeSection title="2021 - Present" 
            subTitle="Trainer Experience"
            items={resumeData?.experience?.trainer}
            />

        </motion.div>
    </AnimatePresence>
  )
}
