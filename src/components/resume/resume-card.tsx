'use client'

import React from 'react';
import {Duty} from "@/types"


interface ResumeCardProps {
 key?:string | number;
  title?: string;
  desc?: string;
  subTitle?: string;
  result?: string;
  duties?: Duty[];
  start_date?: string;
  end_date?: string;
  bottomHead?: string;
}

export const ResumeCard = ({
 key,
  title,
  desc,
  subTitle,
  result,
  duties,
  start_date,
  end_date,
  bottomHead,
}:ResumeCardProps) => {
  return (
    <div className="w-full h-1/2 group flex"
    key={key}>
      <div className="w-8 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div
        className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 md:px-10 flex flex-col justify-center gap-6 md:gap-10 shadow-shadowOne"
        data-aos="zoom-in"
      >
        <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-0 xl:items-center">
          <div>
            <h3 className="text-md xl:text-xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle} {start_date && end_date && `(${start_date} - ${end_date})`}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm lg:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {desc}
        </p>
        {duties && (
          <div className="px-4 py-2 bg-black bg-opacity-25 rounded-lg shadow-shadowOne flex flex-col gap-4 text-sm font-medium">
            <span className="flex justify-start text-designColor text-sm tracking-[4px] uppercase">
              {bottomHead}
            </span>
            <ul className="flex flex-col gap-2">
              {duties?.map(({ title }, i) => (
                <div key={i} className="flex flex-col">
                  <li className="relative ml-10 text-sm text-gray-400">{title}</li>
                  <span className="absolute w-2 h-2 rounded-full bg-gray-500 bg-opacity-60 flex justify-center items-center mt-2 ml-5"></span>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

