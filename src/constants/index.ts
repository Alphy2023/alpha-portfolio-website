import {MainNavLink, AboutMe} from "@/types"


// =========== main menu links =================
export const mainNavLinks:MainNavLink[] = [
    {
        title:"Home",
        link:"home"
    },
    {
        title:"About Me",
        link:"about-me"
    },
    {
        title:"Services",
        link:"services"
    },
    {
        title:"Projects",
        link:"projects"
    },
    {
        title:"Resume",
        link:"resume"
    },
     {
        title:"Testimonial",
        link:"testimonial"
    },
    {
        title:"Contact",
        link:"contact"
    },
]

// =========== main menu links =================
export const resumeSummary:string = `I am a passionate and detail-oriented 
Full-Stack Developer with
 expertise in JavaScript, React, Node.js, and WebRTC.
  I thrive in designing and implementing scalable, secure, and
efficient software solutions. My experience includes
 building real-time applications, integrating distributed
  WebSockets for 30K+ concurrent connections, and
   implementing end-to-end encryption (E2EE) for secure
communication. I specialize in RESTful API development,
 DevOps automation, and database optimization. 
 I enjoy solving complex problems, collaborating 
 with cross functional teams, and constantly
  improving my technical skills.`

// ================ about me ==========
export const aboutMeData: AboutMe = {
    name:"Alphonce Otieno",
    qualities: [{
        title:"Fullstack developer",
        },
        {
            title:"UI/UX designer",
        },
        {
            title:"Freelancer",
        },
        
    ],
    resumeSummary,
}
// ================ about me ends ==========