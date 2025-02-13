"use client"

import React from 'react'
import { motion } from "framer-motion";
import {ResumeCard} from "./resume-card"
import {ResumeTitle} from "./resume-title"
import {resumeData} from "@/constants"

export const ExperienceContent = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.9 } }}
    className="flex flex-col md:flex-row gap-20 w-full"
    >
    {/* education */}
    <div>
      <ResumeTitle title="2021 - Present" subTitle="Company Experience" />
      <div
        className="mt-6 lg:mt-8 w-full  border-l-[6px] border-black
    border-opacity-30 flex flex-col gap-10"
      >
        {resumeData?.experience?.jobs?.map(
          ({
            _id,
            start_date,
            end_date,
            company,
            duties,
            role,
            description,
            location,
          }) => (
            <ResumeCard
             key={_id}
              duties={duties}
              title={role}
              start_date={start_date}
              end_date={end_date}
              subTitle={company}
              result={location}
              desc={description}
              bottomHead="duties & responsibilities"
            />
          )
        )}
      </div>
    </div>
    {/* education ends*/}

    {/* experience */}
    <div>
      <ResumeTitle title="2021 - Present" subTitle="Trainer Experience" />
      <div
        className="mt-6 lg:mt-8 w-full  border-l-[6px] border-black
        border-opacity-30 flex flex-col gap-10"
      >
        {resumeData?.experience?.trainer?.map(
          ({
            _id,
            start_date,
            end_date,
            company,
            duties,
            role,
            description,
            location,
          }) => (
            <ResumeCard
            key={_id}
              duties={duties}
              start_date={start_date}
              end_date={end_date}
              title={role}
              subTitle={company}
              result={location}
              desc={description}
              bottomHead="duties & responsibilities"
            />
          )
        )}
      </div>
    </div>
    {/* experience ends */}
  </motion.div>
  )
}
