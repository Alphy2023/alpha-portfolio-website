"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ResumeTitle } from "./resume-title";
import {Skill} from "@/types"
import {resumeData} from "@/constants"


const SkillBar= ({ name, proficiency}:Skill) => {
  return (
    <div className="overflow-x-hidden" >
      <p className="text-sm uppercase font-medium">{name}</p>
      <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{width:proficiency}}
          className={
            `h-full  bg-gradient-to-r from-blue-600
             via-purple-500 to-red-500 rounded-md relative`
          }
        >
          <span className="absolute -top-7 right-0">{proficiency}</span>
        </motion.span>
      </span>
    </div>
  );
};

const SkillsSection: React.FC<{ title: string; skills: Skill[] }> = ({ title, skills }) => {
  return (
    <div className="w-full lg:w-1/2">
      <ResumeTitle title="Features" subTitle={title} />
      <div className="mt-8 w-full flex flex-col gap-4">
        {skills?.map((skill, index) => (
          <SkillBar key={index} name={skill?.name} proficiency={skill?.proficiency} />
        ))}
      </div>
    </div>
  );
};


export const SkillsContent = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.9 } }}
        className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 lgl:gap-20 w-full"
      >
        <SkillsSection title="Design Skills" skills={resumeData?.skills?.designSkills} />
        <SkillsSection title="Development Skills" skills={resumeData?.skills?.developmentSkills} />
        <SkillsSection title="Managerial Skills" skills={resumeData?.skills?.managerialSkills} />
      </motion.div>
    </AnimatePresence>
  );
};
