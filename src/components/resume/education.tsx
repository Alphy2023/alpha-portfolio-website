"use client"

import React from 'react'
import { motion,AnimatePresence } from "framer-motion";
import {ResumeCard} from "./resume-card"
import {ResumeTitle} from "./resume-title"
import {resumeData} from "@/constants"


export const EducationContent = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.9 } }}
        className="flex flex-col md:flex-row gap-20 w-full"
        >
        {/* education */}
        <div>
          <ResumeTitle title="2017 - 2021" subTitle="Education Background" />
          <div
            className="mt-6 lg:mt-8 w-full  border-l-[6px] border-black
              border-opacity-30 flex flex-col gap-10"
              >
            {resumeData?.education?.background?.map(
              ({
                _id,
                course,
                location,
                school,
                description,
                end_date,
                start_date,
              }) => (
                <ResumeCard
                  key={_id}
                  title={course}
                  subTitle={school}
                  result={location}
                  start_date={start_date}
                  end_date={end_date}
                  desc={description}
                />
              )
            )}
          </div>
        </div>
        {/* education ends*/}

        {/* experience */}
        <div>
          <ResumeTitle title="2017 - Present" subTitle="Certifications" />
          <div className="mt-6 lg:mt-8 w-full  border-l-[6px] border-black
              border-opacity-30 flex flex-col gap-10"
            >
            {resumeData?.education?.certifications?.map(
              ({
                _id,
                course,
                location,
                school,
                description,
                end_date,
                start_date,
              }) => (
                <ResumeCard
                  key={_id}
                  title={course}
                  subTitle={school}
                  result={location}
                  start_date={start_date}
                  end_date={end_date}
                  desc={description}
                />
              )
            )}
          </div>
        </div>
        {/* experience ends */}
      </motion.div>
    </AnimatePresence>
  )
}
