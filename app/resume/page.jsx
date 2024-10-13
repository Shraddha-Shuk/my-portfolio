"use client"
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

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
      fieldValue: "shraddhashuk2003@gmail.com"
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
      name: "Rhino Donor's ",
      duration : "Ongoing",
      technologies: "Nextjs, MongoDB, Nodejs, LLM, TailwindCss",
      description: "Facilitated efficient distribution of blood by implementing data storage for donor information."
      
    },
    {
      name: "Cash Flow Tracker ",
      duration : "June 2024",
      technologies: "Next.js, TailwindCss, Drizzle ORM, React, Clerk, Shadcn-ui",
      description: "Created a website to track and manage expenses effectively."
    },
    {
      name: "Sample Next.js Landing Page ",
      duration : "May 2024",
      technologies: "Next.js, TailwindCSS, Aceternity Ui",
      description: "Developed a landing page using Next.js."
    },
    {
      name: "Digital Marketing ",
      duration : "November 2023",
      technologies: "HTML, CSS, JavaScript",
      description: "Designed and developed a digital marketing website with background animations to advance learning objectives."
    },
  ]
};

//education
const education = {
  icon: "assets/resume/cap.svg",
  title: "My Education",
  items: [
    {
      institution: "GLBITM",
      degree: " B.Tech in Information Technology",
      percent: "Percentage - 80",
      year: "November 2021 - June 2025"
    },
    {
      institution: "Kendriya Vidyalaya NO.1, Tezpur",
      degree: "  Intermediate",
      percent: "Percentage - 94.8",
      year: " April 2020 - July 2021"
    },
    {
      institution: " Gyan Bharti Public School",
      degree: " High School",
      percent: "Percentage - 89",
      year: " April 2018 - April 2019"
    }
  ]

};

//Skills
const skills ={
  title: "My Skills",
  items: [
    {
      icon: <FaHtml5/>,
      name: "html 5",
    },
    {
      icon: <FaCss3/>,
      name: "CSS 3",
    },
    {
      icon: <FaJs/>,
      name: "JavaScript",
    },
    {
      icon: <FaReact/>,
      name: "React Js",
    },
    {
      icon: <FaNodeJs/>,
      name: "NodeJS",
    },
    {
      icon: <RiNextjsFill/>,
      name: "NextJs",
    },
    {
      icon: <SiTailwindcss/>,
      name: "TailwindCSS",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <FaPython/>,
      name: "Python",
    }
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

import { ScrollArea } from '@radix-ui/react-scroll-area';
import { motion } from 'framer-motion';


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className='container mx-auto'>
        <Tabs 
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="project" className="hover:bg-accent hover:text-primary hover:transition-all duration-500">Projects</TabsTrigger>
            <TabsTrigger value="education" className="hover:bg-accent hover:text-primary hover:transition-all duration-500">Education</TabsTrigger>
            <TabsTrigger value="skills" className="hover:bg-accent hover:text-primary hover:transition-all duration-500">Skills</TabsTrigger>
            <TabsTrigger value="about" className="hover:bg-accent hover:text-primary hover:transition-all duration-500">About Me</TabsTrigger>
          </TabsList>

          {/*content*/}
          <div className='min-h-[70vh] w-full'>
            <TabsContent value="project" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold m-5">{project.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {project.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[220px] xl:h-[290px] xl:w-[350px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className="text-accent">{item.name}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[40px] text-center lg:text-left'>{item.duration}</h3>
                          <div className=' flex items-center gap-3'>
                            <span></span>
                            <p className='text-white/60'>{item.technologies}</p>  
                          </div>
                          <p>{item.description}</p>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold m-5">{education.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[220px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className="text-accent">{item.institution}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[40px] text-center lg:text-left'>{item.degree}</h3>
                          <div className=' flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.percent}</p>  
                          </div>
                          <p>{item.year}</p>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
                    <div className="flex flex-col gap-[30px]">
                      <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                        <h3 className='text-4xl font-bold'>{skills.title}</h3>
                      </div>
                      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                        {skills.items.map((item, index)=> {
                          return (
                            <li key={index}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                    <div className='text-6xl group-hover:text-accent transition-all duration-300'>{item.icon}</div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className='capitalize'>{item.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                  
                          </li>
                          )
                        })}
                      </ul>

                    </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item,index)=> {
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
              
            </TabsContent>

          </div>
        </Tabs>

      </div>

    </motion.div>
  )
}

export default Resume