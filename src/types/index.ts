
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
