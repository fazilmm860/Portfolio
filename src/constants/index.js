import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  nexa,
  everyday,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
  
  

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Resume",
    icon: web,
    link:"https://drive.google.com/drive/u/2/folders/1s4_gsiehPM3j3bY9of6BUYpYCl2Vseow"
  },

  {
    title: "Github",
    icon: mobile,
    link:"https://github.com/fazilmm860"
  },
  {
    title: "Linkedin",
    icon: web,
    link:"https://www.linkedin.com/in/mohamed-fazil-m-0b5a53243/"

  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  ,
  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "RelationShip Manager",
    company_name: "Maruti Suzuki Nexa",
    icon: nexa,
    iconBg: "#383E56",
    date: "August 2021 - July 2022",
    points: [
      "Act as the primary point of contact for Nexa customers, providing personalized assistance, addressing inquiries, and ensuring a positive ownership experience. Also, guide potential customers through the vehicle selection process, offering information and test drives to facilitate sales.",
      "Handle customer concerns, facilitate timely resolution of issues related to vehicle maintenance, service, or sales, and ensure customer satisfaction through effective communication and support.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Eeco Technologies",
    icon: everyday,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - present",
    points: [
      "Develop and implement responsive and visually engaging user interfaces using HTML, CSS, and JavaScript, collaborating closely with design and backend teams.",
      "Ensure cross-browser compatibility, optimize website performance, and troubleshoot frontend issues to deliver seamless user experiences",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];



const projects = [
  {
    name: "Hotel Billing",
    description:
      " Streamlined interface for easy navigation through item list, cart, and bill pages.  review orders, and print bills seamlessly.Elevate your hotel's billing process today.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node js",
        color: "pink-text-gradient",
      },
      {
        name: "express js",
        color: "red-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/fazilmm860/capstone-billing-Application-",
  },
  {
    name: "Natours Travel",
    description:
      "Natours-Travel: Seamlessly book your dream tours within our application, making your travel aspirations a reality.without any tension.",
    tags: [
      {
        name: "html & Css",
        color: "blue-text-gradient",
      },
      {
        name: "Node js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "red-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/fazilmm860/Natours",
  },
  {
    name: "Social media application",
    description:
      "Experience a communication with our groundbreaking social media application, designed to bring people closer in connected world.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node js",
        color: "green-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/fazilmm860/social-media-",
  },
];

export { services, technologies, experiences, testimonials, projects };
