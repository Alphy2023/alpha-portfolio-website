import { StaticImageData } from "next/image";

export type MainNavLink = {
    title:string;
    link:string;
}

export type SocialMediaLink = {
    title: string;
    link: string;
    icon?: JSX.Element; 
    
};
export type BestSkill = {
    title: string;
    icon?: JSX.Element; 
};


export type User = {
    userId?: string;
    name?: string;
    email?: string;
    phone?: string;
};
export type Quality = {
    title:string;
}

export type AboutMe = {
    name?: string;
    qualities?: Quality[];
    resumeSummary?:string;
    aboutExcerpt?:string;
};
export type ServiceItem = {
    name?:string;
}
export type Service = {
    title:string;
    icon?:string | JSX.Element;
    description:string;
    serviceDesc:string;
    services:ServiceItem[]
}
// =============== project types =============
export type ProjectImage = {
    url: string | StaticImageData;
}
export type Project = {
    title?:string;
    site_link?:string;
    company?:string;
    start_date?:string;
    end_date?:string;
    project_medium?:string;
    project_images?:ProjectImage[];
    excerpt:string;

}
//  ============= resume types ============
export type EducationBackground = {
    _id?: number | string;
    course?: string;
    grade?: string;
    school?: string;
    location?: string;
    start_date?: string;
    end_date?: string;
    description?: string;
}
  

  
export type Duty = {
    title?: string;
}
  
export type JobExperience = {
    _id?: number | string;
    role?: string;
    title?: string;
    company?: string;
    start_date?: string;
    end_date?: string;
    description?: string;
    duties?: Duty[];
    location?: string;
}
  
export type Experience = {
    jobs?: JobExperience[];
    trainer?: JobExperience[];
}

export type Achievement = {
    _id?: number | string;
    title?: string;
    company?: string;
    start_date?: string;
    end_date?: string;
    description?: string;
    achievements?: Duty[];
    location?: string;
}
export type Skill = {
    name: string;
    proficiency: string;
  };
export type Resume = {
    experience: {
        jobs: JobExperience[];
        trainer: JobExperience[];
    };
    education: {
        background: EducationBackground[];
        certifications: EducationBackground[];
    };
    achievement: {
        company: Achievement[];
        trainer: JobExperience[];
    };
    skills: {
        designSkills:Skill[],
        developmentSkills:Skill[],
        managerialSkills:Skill[]
    }
}