
import { ResumeCard } from "./resume-card";
import { ResumeTitle } from "./resume-title";
import {Duty} from "@/types"


interface ResumeItem {
    _id?: string | number;
    course?: string;
    location?: string;
    school?: string;
    company?: string;
    description?: string;
    start_date?: string;
    end_date?: string;
    duties?:Duty[];
    achievements?:Duty[];
}

interface ResumeSectionProps {
    title?: string;
    subTitle?: string;
    items?: ResumeItem[];
    bottomHead?:string;
    id?:string;
}

export const ResumeSection = ({ title, subTitle, items,id,bottomHead }:ResumeSectionProps) => {
    return (
      <div id={id}>
        <ResumeTitle title={title} subTitle={subTitle} />
        <div className="mt-6 lg:mt-8 w-full border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
          {items?.map(({ _id, course, location, school,
          company, description,duties,achievements, start_date, end_date }) => (
            <ResumeCard
              key={_id}
              bottomHead={bottomHead}
              title={course}
              subTitle={school || company}
              result={location}
              start_date={start_date}
              end_date={end_date}
              desc={description}
              duties={duties || achievements}
            />
          ))}
        </div>
      </div>
    );
  };