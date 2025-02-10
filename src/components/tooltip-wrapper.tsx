import {ReactNode} from 'react'
import { Tooltip, TooltipContent, TooltipTrigger }
 from "@/components/ui/tooltip";

interface TooltipProps {
  children:ReactNode;
  title?:string;
  key?:string | number;
}

export const TooltipWrapper = ({children,title,key}:TooltipProps) => {
  return (
    <Tooltip key={key}>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent>
        <p>{title}</p>
      </TooltipContent>
  </Tooltip>
  )
}
