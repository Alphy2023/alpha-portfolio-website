
import {projectsData} from "@/constants"
import {ProjectItem} from "./project-item"
import {SliderWrapper} from "@/components/slider-wrapper"


export const ProjectSlider = () => {
    return (
        <div>
            <SliderWrapper>
                {projectsData?.map((item,idx)=>(
                    <div key={idx}>
                    <ProjectItem item={item}/>
                    </div>
                ))}
            </SliderWrapper>
        </div>
    )
}