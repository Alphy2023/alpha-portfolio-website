"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { ResumeCard } from "./resume-card";
// import { ResumeTitle } from "./resume-title";
import { resumeData } from "@/constants";
import {ResumeSection} from "./resume-section"

// Define TypeScript types for resume data
// interface ResumeItem {
//   _id: string;
//   course: string;
//   location: string;
//   school: string;
//   description: string;
//   start_date: string;
//   end_date: string;
// }

// interface ResumeSectionProps {
//   title: string;
//   subTitle: string;
//   items: ResumeItem[];
// }

// Reusable section component
// const ResumeSection: React.FC<ResumeSectionProps> = ({ title, subTitle, items }) => {
//   return (
//     <div>
//       <ResumeTitle title={title} subTitle={subTitle} />
//       <div className="mt-6 lg:mt-8 w-full border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
//         {items.map(({ _id, course, location, school, description, start_date, end_date }) => (
//           <ResumeCard
//             key={_id}
//             title={course}
//             subTitle={school}
//             result={location}
//             start_date={start_date}
//             end_date={end_date}
//             desc={description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

export const EducationContent: React.FC = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.9 } }}
        className="flex flex-col md:flex-row gap-20 w-full"
      >
        <ResumeSection title="2017 - 2021"
         subTitle="Education Background"
         items={resumeData?.education?.background || []} />
        <ResumeSection title="2017 - Present"
         subTitle="Certifications" 
         items={resumeData?.education?.certifications || []}
          />
      </motion.div>
    </AnimatePresence>
  );
};
