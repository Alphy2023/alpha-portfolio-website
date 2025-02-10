import {ReactNode} from "react"
import {MainNavbar} from "@/components/navbar/main-navbar"
import {MainFooter} from "@/components/footer/main-footer"
import {TooltipProvider } from "@/components/ui/tooltip";


interface MainLayoutProps{
    children:ReactNode
}

const MainLayout = ({children}:MainLayoutProps) => {
    return (
        
        <div className="w-full h-screen bg-bodyColor
        text-lightText px-2 ">
                <TooltipProvider>
                    <MainNavbar/>
                    <div className="max-w-screen-xl mx-auto">
                        {children}
                    </div>
                    <MainFooter/>
                </TooltipProvider>
            </div>
    )
}

export default MainLayout