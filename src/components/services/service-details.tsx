import {Service} from "@/types"
import { LuBadgeCheck } from "react-icons/lu";


interface ServiceDetailsProps{
    service?:Service | null
}

export const ServiceDetails = ({service}:ServiceDetailsProps) => {
    return (
        <div className={`
        p-5 lg:p-2 `}>
            <div
            className=" bg-bodyColor"
            data-aos="zoom-in-out"
            >
          
          <p className="text-justify text-[14px] mb-[2rem]
           text-gray-300">
            {service?.serviceDesc}
          </p>
          <div className="services__modal-list w-full
          grid flexp flex-colp max-h-[400px] gap-[0.75rem] overflow-y-scroll h-full
          list-none p-2">
           
             
            {service?.services?.map((item, idx) => (
              <li className="services__modal-item flex text-justify 
              " key={idx}>
                <LuBadgeCheck className="text-[3rem]  text-primaryColor"
              />
                <p className="text-[14px] text-gray-400">{item?.name}</p>
              </li>
            ))}
           
          </div>
        </div>
      </div>
    )
}