'use client'

import React, { useState } from 'react';
import { PageTitle } from '@/components/page-title';
import { cn } from '@/lib/utils';
import {EducationContent} from "./education"
import {SkillsContent} from "./skills"
import {ExperienceContent} from "./experience"
import {AchievementsContent} from "./achievements"

type ResumeMenu={
    label:string;
    key:string;
}

export const ResumePage = () => {
  const [visibleContent, setVisibleContent] = useState<string>('experience');

  const resumeMenus:ResumeMenu[] = [
    { key: 'experience', label: 'Experience' },
    { key: 'education', label: 'Education' },
    { key: 'skills', label: 'Professional Skills' },
    { key: 'achievement', label: 'Achievements' },
  ];

  return (
    <section
      id="resume"
      className="w-full h-auto py-20 border-b border-black overflow-hidden"
      data-aos="zoom-in"
    >
      <div className="flex justify-center items-center">
        <PageTitle title="Have a look at my journey." subTitle="My Resume" />
      </div>
      <ul className="w-full grid grid-cols-2 
      md:grid-cols-4 xl:grid-cols-4" data-aos="zoom-in">
        {resumeMenus?.map(({ key, label }) => (
          <li
            key={key}
            onClick={() => setVisibleContent(key)}
            className={cn(
              'text-sm md:text-lg resumeLi border-transparent',
              visibleContent === key && 'border-designColor text-designColor rounded-lg'
            )}
          >
            {label}
          </li>
        ))}
      </ul>
      {visibleContent==='experience' && (
        <ExperienceContent/>
      )}
      {visibleContent==='education' && (
        <EducationContent/>
      )}
      {visibleContent==='skills' && (
        <SkillsContent/>
      )}
      {visibleContent==='achievement' && (
        <AchievementsContent/>
      )}
    </section>
  );
};
