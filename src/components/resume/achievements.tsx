"use client"

import React from 'react'
import { motion,AnimatePresence } from "framer-motion";
import {resumeData} from "@/constants"
import {ResumeSection} from "./resume-section"


export const AchievementsContent = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.9 } }}
        className="flex flex-col md:flex-row gap-20 w-full"
        >
        <ResumeSection title="2017 - Present"
         subTitle="Company Achievement"
         items={resumeData?.achievement?.company}
         id="company-achieve"
         bottomHead="Achievements"
        />
        <ResumeSection title="2017 - Present"
         subTitle="Trainer Achievement"
         bottomHead="Achievements"
         id="trainer-achieve"

         items={resumeData?.achievement?.trainer}
        />
       
      </motion.div>
    </AnimatePresence>
  )
}
