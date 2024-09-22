"use client";

import {
  FaHtml5, 
  FaCss3, 
  FaReact, 
  FaNodeJs, 
} from 'react-icons/fa'

import {
  SiTailwindcss, SiNextjs 
} from 'react-icons/si'

const about = {
  title: 'About me',
  description: " Final-year B.Tech IT student with expertise in MERN stack development. Experienced in building and managing projects, with a strong foundation in web development and machine learning. Actively expanding skills in large language models (LLM).",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Shraddha Shukla"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 7732930137"
    },
    {
      fieldName: "Experience",
      fieldValue: "Fresher"
    },
    {
      fieldName: "Email",
      fieldValue: "shraddhashuk28@gmail.com"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "English, Hindi"
    }
  ]
};

//about project
const project ={
  title: "My Projects",
  items : [
    {
      project: "Rhino Donor's ",
      duration : "Ongoing",
      technologies: "| Nextjs, MongoDB, Nodejs, LLM, TailwindCss",
      description: "•	Engineered a MERN Stack website integrating an AI chatbot, enhancing customer interaction and reducing response time by 50%, leading to a 25% increase in user engagement and retention rates. Facilitated efficient distribution of blood by implementing data storage for donor information"
    },
    {
      project: "Cash Flow Tracker ",
      duration : "June 2024",
      technologies: "Next.js, TailwindCss, Drizzle ORM, React, Clerk, Shadcn-ui",
      description: "Created a website to track and manage expenses effectively"
    },
    {
      project: "Sample Next.js Landing Page ",
      duration : "May 2024",
      technologies: "Next.js, TailwindCSS, Aceternity Ui",
      description: "Developed a landing page using Next.js."
    },
    {
      project: "Digital Marketing ",
      duration : "November 2023",
      technologies: "HTML, CSS, JavaScript",
      description: "Designed and developed a digital marketing website with background animations to advance learning objectives."
    },
  ]
}

const Resume = () => {
  return (
    <div>RESUME</div>
  )
}

export default Resume