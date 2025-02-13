
interface ResumeTitleProps {
    title?:string;
    subTitle?:string;
}

export const ResumeTitle = ({title,subTitle}:ResumeTitleProps) => {
    return (
      <div className="p-6 lg:py-10 font-titleFont flex flex-col gap-3 mt-3">
        <p
          className="text-sm text-designColor tracking-[4px] uppercase"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          {title}
        </p>
        <h2
          className="text-2xl md:text-3xl font-bold"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          {subTitle}
        </h2>
      </div>
    );
  }
  
  