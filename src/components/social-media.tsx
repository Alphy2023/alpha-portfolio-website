"use client";

import React from "react";
import { SocialMediaLink } from "@/types";
import { Linkedin, Facebook, Github, Twitter } from "lucide-react";
import {TooltipWrapper} from "@/components/tooltip-wrapper"


const socialMediaLinks: SocialMediaLink[] = [
  {
    icon: <Twitter />,
    link: "/",
    title: "X",
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com/alphonce.sanny",
    icon: <Facebook />,
  },
  {
    link: "https://www.linkedin.com/in/alphonce-omondi-61316713b",
    title: "Linkedin",
    icon: <Linkedin />,
  },
  {
    title: "Github",
    icon: <Github />,
    link: "https://github.com/Alphy2023",
  },
];

export const SocialMedia = () => {
  return (
      <div className="flex flex-col gap-3">
        <h2 className="uppercase text-base font-titleFont mb-4">Follow me on</h2>
        <div className="flex gap-4">
          {socialMediaLinks?.map(({ icon, link, title }, idx) => (
            <TooltipWrapper
            title={title}
            key={idx}>
                 <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="bannerIcon text-2xl"
                >
                  {icon}
                </a>
            </TooltipWrapper>
          ))}
        </div>
            {/* <Tooltip key={idx}>
              <TooltipTrigger asChild>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="bannerIcon text-2xl"
                >
                  {icon}
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{title}</p>
              </TooltipContent>
            </Tooltip> */}
      </div>
  );
};
