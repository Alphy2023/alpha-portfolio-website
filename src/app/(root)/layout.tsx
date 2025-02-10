import {ReactNode} from "react"
import {MainNavbar} from "@/components/navbar/main-navbar"
import {MainFooter} from "@/components/footer/main-footer"
import {TooltipProvider } from "@/components/ui/tooltip";


interface MainLayoutProps{
    children:ReactNode
}

const MainLayout = ({children}:MainLayoutProps) => {
    return (
        <TooltipProvider>

            <div className="w-full h-screen bg-bodyColor
            text-lightText px-2 ">
                <MainNavbar/>
                <div className="max-w-screen-xl mx-auto">
                    {children}
                </div>
                <MainFooter/>
            </div>
        </TooltipProvider>
    )
}

export default MainLayout