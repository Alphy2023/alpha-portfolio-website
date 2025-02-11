import {HeroBanner} from "@/components/banner/hero-banner"
import {About} from "@/components/about"
import {Services} from "@/components/services"
import {Projects} from "@/components/projects"

export default function Home() {
  return (
    <div className="mt-[4rem]">
      <HeroBanner/>
      <About/>
      <Services/>
      <Projects/>
    </div>
  );
}
