import {HeroBanner} from "@/components/banner/hero-banner"
import {About} from "@/components/about"
import {Services} from "@/components/services"
import {Projects} from "@/components/projects"
import {ResumePage} from "@/components/resume"

export default function Home() {
  return (
    <div className="mt-[4rem]">
      <HeroBanner/>
      <About/>
      <Services/>
      <Projects/>
      <ResumePage/>
    </div>
  );
}
