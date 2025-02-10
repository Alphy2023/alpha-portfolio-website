"use client";

import React, {useState} from "react";
import { HiArrowRight } from "react-icons/hi";
import { shortenText } from "@/lib/utils";
import { Service } from "@/types";
import { FaFigma } from "react-icons/fa6";
import { GrCloudSoftware } from "react-icons/gr";
import { IoAnalyticsOutline } from "react-icons/io5";
import {ModalWrapper} from "@/components/modal-wrapper"
import {ServiceDetails} from "./service-details"


interface ServiceCardProps {
  service: Service | null;
  key: string | number;
}

export const ServiceCard = ({ service, key }:ServiceCardProps) => {
  const [openModal,setOpenModal] = useState(false)
    // Determine which icon to render based on service title.
  const iconElement = React.useMemo(() => {
    if (!service) return null;
    const titleLower = service?.title?.toLowerCase();
    if (titleLower?.includes("ui/ux design")) {
      return <FaFigma  />;
    }
    if (titleLower?.includes("software")) {
      return <GrCloudSoftware />;
    }
    if (titleLower?.includes("analysis")) {
      return <IoAnalyticsOutline />;
    }
    // Fallback: if service.icon is already a JSX element, return it.
    return service?.icon as React.ReactElement || null;
  }, [service]);

 

  return (
    <div
        key={key}
        className="w-full px-12 h-80 py-8 rounded-lg 
        shadow-shadowOne flex items-center
            bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black
            hover:to-[#1e2024] transition-colors duration-100"
        data-aos="fade-up"
        data-aos-delay="100"
        >
      <div className="h-72 overflow-hidden">
        <div
          className="flex flex-col gap-8 h-full translate-y-12 group-hover:translate-y-0 transition-transform duration-500"
        >
          <div>
            <div className="text-4xl text-primaryColor">
              {iconElement}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl xl:text-xl font-titleFont text-gray-300">
              {service?.title}
            </h2>
            <p className="base">{shortenText(service?.serviceDesc ?? "")}</p>
            <span
              className="cursor-pointer -mt-2 float-right ml-auto flex flex-row gap-3 items-center
                         animate-pulse hover:text-designColor"
              onClick={() => setOpenModal(true)}
            >
              Read more
              <HiArrowRight className="text-xl" />
            </span>
          </div>
        </div>
      </div>

      {/* modal */}
      {openModal && (

        <ModalWrapper open={openModal}
        title={service?.title}
        width={"w-[500px]"}
        onClose={()=>setOpenModal(false)}>
            <ServiceDetails service={service}/>
        </ModalWrapper>
      )}
    </div>
  );
};
