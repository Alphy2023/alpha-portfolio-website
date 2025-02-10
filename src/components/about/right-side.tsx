import React from "react";
import { BiChevronRight, BiSupport } from "react-icons/bi";
import { RiAwardFill, RiBriefcase2Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { aboutMeData } from "@/constants";
import { AboutCard } from "./about-card";

export const RightSide = () => {
  return (
    <div className="w-full flex-1 h-full flex flex-col 
      justify-between"
        >
        <p className="text-sm font-titleFont text-gray-400
            bg-gradient-to-r 
                from-[#1e2024]
            to-[#23272b] p-6 text-justify
                font-medium leading-6 italic mb-3"
        >
            {aboutMeData?.aboutExcerpt}
        </p>
      <div className="w-full h-[60%]  bg-gradient-to-r 
            from-[#1e2024]
        to-[#23272b] flex flex-col rounded-lg 
        shadow-shadowOne 
            p-4 lg:p-8  gap-3 lg:gap-8
        justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            lg:items-center gap-6
            py-6 border-b-2 border-b-gray-900"
        >
          <AboutCard
            icon={<RiAwardFill />}
            title="experience"
            subTitle="3+ Years working"
          />
          <AboutCard
            icon={<RiBriefcase2Fill />}
            title="Projects"
            subTitle="4+ Completed"
          />
          <AboutCard
            icon={<FaUsers />}
            title="Clients"
            subTitle="3+ satisfied clients"
          />
          <AboutCard
            icon={<BiSupport />}
            title="Support"
            subTitle="Online 24/7"
          />
        </div>
        <div
          className="flex flex-col md:flex-row gap-5
               justify-between bg-gradient-to-r 
                 from-[#1e2024] p-6 to-[#23272b]"
        >
          <div data-aos="fade-right">
            <ul className="flex flex-col gap-4">
              <li className="relative">
                <span
                  className="text-2xl text-designColor
                            absolute -ml-3"
                >
                  <BiChevronRight />
                </span>
                <span className="ml-3">
                  <strong className="text-base text-gray-400">
                    Freelance:{" "}
                  </strong>
                  <span className="text-sm text-green-400">Available</span>
                </span>
              </li>
              <li className="relative">
                <span
                  className="text-2xl text-designColor
                            absolute -ml-3"
                >
                  <BiChevronRight />
                </span>
                <span className="ml-3">
                  <strong className="text-base text-gray-400">
                    Hourly rate:{" "}
                  </strong>
                  <span className="text-sm text-gray-400">$25</span>
                </span>
              </li>
            </ul>
          </div>
          <div data-aos="fade-left">
            <ul className="flex flex-col gap-4">
              <li className="relative">
                <span
                  className="text-2xl text-designColor
                            absolute -ml-3"
                >
                  <BiChevronRight />
                </span>
                <span className="ml-3">
                  <strong className="text-base text-gray-400">City: </strong>
                  <span className="text-sm text-gray-400"> Nairobi, Kenya</span>
                </span>
              </li>

              <li className="relative">
                <span
                  className="text-2xl text-designColor
                            absolute -ml-3"
                >
                  <BiChevronRight />
                </span>
                <span className="ml-3">
                  <strong className="text-base text-gray-400">Support: </strong>
                  <span className="text-sm text-green-400">24/7</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
