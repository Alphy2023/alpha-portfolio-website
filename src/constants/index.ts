import {MainNavLink, AboutMe,Service,Project} from "@/types"
import { alphaflixImgOne,
    alphaflixImgTwo,
    alphaflixImgThree,
    alphaflixImgFour} from "@/assets"

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
export const resumeSummary:string = 
`I am a passionate and detail-oriented 
Full-Stack Developer with expertise in JavaScript, React,
 Node.js, and WebRTC.
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

 
 export const aboutExcerpt:string =
 `Innovative and deadline-driven Software developer 
    with 3+ years of experience designing and 
    developing user-centered websites and 
    mobile applications from initial 
    concept to final, polished deliverables.
`
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
    resumeSummary:aboutExcerpt,
    aboutExcerpt:resumeSummary,
}
// ================ about me ends ==========

export const servicesData: Service[] = [
    {
        title: "UI/UX Design",
        icon: "bx bx-briefcase",
        description: `As a skilled developer and designer, I can help position your company for success with a range of services including:`,
        serviceDesc: `I can take your company to the next level and ensure a professional, engaging, and effective online presence with my skills and expertise.`,
        services: [
            {
                name: `User Interface Development: With expertise in a range of frontend technologies, I can help develop a user interface that is intuitive, responsive, and visually appealing.`,
            },
            {
                name: `Web Page Development: I specialize in developing high-quality, custom web pages that meet the unique needs of your business and provide an engaging user experience.`,
            },
            {
                name: `UX Element Interactions: I understand the importance of creating meaningful interactions between users and your brand, and I can help design and implement UX elements that enhance the overall user experience.`,
            },
            {
                name: `Brand Positioning: I can work with you to identify your unique value proposition and help position your brand in a way that resonates with your target audience.`,
            },
            {
                name: `Product Design and Mockups: From concept to creation, I can help design and create mockups of products for your company, ensuring that they are both functional and aesthetically pleasing.`,
            },
        ],
    },
    {
        title: "Software developement",
        icon: "bx bxl-microsoft",
        description: `As a skilled web developer, I excel in a range of capabilities that can enhance your online presence. Here are some key areas:`,
        serviceDesc: `I can enhance your online presence by developing engaging, user-friendly, and effective websites or web applications with my web development skills and expertise.`,
        services: [
        {
            name: `Frontend Development: I specialize in developing custom user interfaces using a range of frontend technologies, including React, Laravel,WordPress, and Vue.`,
        },
        {
            name: `Backend Development: With expertise in Node.js, MongoDB, PostgresQL, Oracle, and MySQL, I can create a scalable and efficient backend system tailored to your unique needs.`,
        },
        {
            name: `Full-Stack Development: As a full-stack developer, I have a comprehensive understanding of both frontend and backend technologies, allowing me to develop high-quality, end-to-end web applications.`,
        },
        {
            name: `E-commerce Development: With experience developing e-commerce websites using platforms such as WooCommerce, I can help you create a secure and user-friendly online store that maximizes sales and revenue.`,
        },
        {
            name: `Web Application Development: From simple web apps to complex enterprise-level applications, I have the skills and expertise to create powerful and scalable web applications that meet your unique business needs.`,
        },
        ],
    },

    {
        title: "Data analysis",
        icon: "bx bxs-analyse",
        description: `As an experienced data analyst, I excel in a range of capabilities that can unlock the full potential of your data. Here are some key areas:`,
        serviceDesc: `With my data analysis expertise and capabilities, I can help you optimize your business processes, improve decision-making, and drive growth and success by gaining valuable insights from your data`,
        services: [
        {
            name: `Data Cleaning and Preparation: I can help you clean and prepare your data for analysis, ensuring that it is accurate, complete, and consistent.`,
        },
        {
            name: `Data Visualization: With expertise in a range of data visualization tools, including Tableau and Power BI, I can help you create powerful and engaging visualizations that help you gain insights from your data.`,
        },
        {
            name: `Statistical Analysis: Whether you need to perform descriptive statistics, hypothesis testing, or regression analysis, I have the skills and expertise to help you analyze your data and draw meaningful conclusions.`,
        },
        {
            name: `Data Reporting: I can help you create custom reports and dashboards that provide you with a clear and concise view of your data, allowing you to track progress and make informed decisions.`,
        },
        ],
    },
]
// ============== projects =============
export const projectsData:Project[] = [
    {
      title: "Wendo Store - E-commerce Website",
        //   github_link: "https://github.com/Alphy2023/ecommerce-website",
      site_link: "https://wendostore.vercel.app",
      company: "Wendo Store",
      start_date: "03 Feb, 2022",
      end_date: "24 Dec, 2022",
      project_medium: "personal",
      project_images: [
        {
          url: "",
        },
      ],
      excerpt: `Experience the ultimate online shopping destination with Wendo Store, an e-commerce website that offers a vast selection of products, convenient sales, and easy order placement. The secure online marketplace allows customers and sellers to interact and exchange goods and services with ease. It prioritizes modern web development and cutting-edge features, such as modern payment mechanisms, to provide a seamless shopping experience. Developed with React, Tailwind CSS, Redux, Node.js, Express, and MongoDB, the site guarantees optimal performance and reliability. Hosted on the trusted Vercel app platform, it ensures quality products and exceptional service with every order.`,
    },
    {
      title: "AlphyFlix - Movies and Series Website",
        //   github_link: "https://github.com/Alphy2023/alphaflix",
      site_link: "https://alphyflix.vercel.app/",
      company: "Personal",
      start_date: "10 Jan, 2023",
      end_date: "14 July, 2023",
      project_medium: "personal",
      project_images: [
        {
          url: alphaflixImgOne,
        },
        {
          url: alphaflixImgTwo,
        },
        {
          url: alphaflixImgThree,
        },
        {
          url: alphaflixImgFour,
        },
      ],
      excerpt: `Welcome to AlphyFlix, the ultimate destination for online movies and series! 
      The platform offers a sophisticated user experience and cutting-edge technologies to enhance your viewing pleasure. 
      The website is designed using modern technologies, including React, Material UI, 
      and Redux for frontend development, and Nodejs, Express, TMDB, REST API, and 
      MongoDB for backend and database management.
       Hosted on the reliable Vercel app platform, AlphyFlix ensures minimal buffering and downtime. Enjoy the show!`,
    }
]