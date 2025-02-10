"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Link } from "react-scroll";
import { X as XIcon, Menu } from "lucide-react";
import { PhotoImg } from "@/assets";
import { mainNavLinks, aboutMeData } from "@/constants";
import { SocialMedia } from "@/components/social-media";

export const MainNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  // Framer Motion Variants
  const menuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <div
      className="w-full h-20 mx-auto fixed top-0 flex justify-between
      items-center font-titleFont border-b-[1px] border-b-gray-600 
      z-50 bg-bodyColor"
    >
      {/* Logo */}
      <div>
        <Image src={PhotoImg} alt="logo" className="w-8 h-8 rounded-full" />
      </div>

      {/* Navbar Links */}
      <div className="pr-6">
        <ul className="hidden lg:inline-flex items-center gap-6 lg:gap-10">
          {mainNavLinks?.map(({ title, link }, idx) => (
            <li
              key={idx}
              className="relative text-base group font-normal text-gray-400 
              tracking-wide cursor-pointer hover:text-designColor duration-300"
            >
              <Link activeClass="active" to={link} spy
               smooth offset={-70} duration={500}>
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <span
          className="text-xl lg:hidden bg-transparent w-10 h-10 inline-flex mr-4
          items-center justify-center rounded-full text-primaryColor cursor-pointer
          hover:text-designColor"
          onClick={() => setShowMenu(!showMenu)}
        >
          <Menu />
        </span>

        {/* Overlay & Animated Mobile Menu */}
        <AnimatePresence>
          {showMenu && (
            <>
              {/* Black Overlay */}
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-[80]"
                onClick={() => setShowMenu(false)}
              ></div>

              {/* Mobile Menu */}
              <motion.div
                ref={menuRef}
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-[80%] h-screen fixed top-0 left-0 bg-gray-900 
                p-4 z-[90] overflow-y-scroll no-scrollbar"
              >
                <div className="flex flex-col gap-8 py-4 relative">
                  <div className="flex flex-col gap-3">
                    <Image src={PhotoImg} className="w-10 h-10 rounded-full object-cover" alt="logo" />
                    <p className="text-sm text-gray-400 mt-2">{aboutMeData?.resumeSummary}</p>
                  </div>

                  <ul className="flex flex-col gap-4">
                    {mainNavLinks?.map(({ title, link }, idx) => (
                      <li
                        key={idx}
                        className="text-base group font-normal text-gray-400 
                        tracking-wide cursor-pointer hover:text-designColor 
                        duration-300"
                      >
                        <Link
                          activeClass="active"
                          to={link}
                          spy
                          smooth
                          offset={-70}
                          duration={500}
                          onClick={() => setShowMenu(false)}
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <SocialMedia />

                  {/* Close Button */}
                  <span
                    onClick={() => setShowMenu(false)}
                    className="absolute top-5 right-2 text-gray-400
                    hover:text-errorColor duration-300 text-3xl cursor-pointer"
                  >
                    <XIcon />
                  </span>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
