"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { motion } from "framer-motion";

const about = {
  title: "about me",
  description:
    "Architect with a strong focus on BIM and construction technologies. Proficient in AutoCAD and Revit, with experience in technical drawing production. Knowledgeable in ISO 19650, BIM Execution Plans, and Common Data Environments. Collaborative team player dedicated to delivering practical, innovative design solutions.",
  info: [
    {
      fieldName: "Name",
      feildValue: "Mahsa Jesri",
    },
    {
      fieldName: "Phone",
      feildValue: "(+44) 795 682 9429",
    },
    {
      fieldName: "Experience",
      feildValue: "3+ Years",
    },
    {
      fieldName: "teams",
      feildValue: "Mahsa J.",
    },
    {
      fieldName: "Nationality",
      feildValue: "Iranian",
    },
    {
      fieldName: "Email",
      feildValue: "mjesri1991@gmail.com",
    },
    {
      fieldName: "Freelancee",
      feildValue: "Available",
    },
    {
      fieldName: "Language",
      feildValue: "English- Upper Intermediate",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "A hard-working and detail-oriented Individual with an architectural background and recent graduation in BIM and construction technologies. Proficient in AutoCAD and Revit with experience in producing technical drawings. Familiar with ISO 19650, Bim execution plan and Common Data Environments through academic coursework and projects. Collaboration in multi-disciplinary teams to deliver innovative and practical design solutions.",
  items: [
    {
      compony: "University of Medical Science",
      position: "Architectural Technician",
      duration: "2020 - 2023",
    },
    {
      compony: "Avan Design Studio",
      position: "AutoCAD Technician",
      duration: "2018 - 2020",
    },
    {
      compony: "Avan Design Studio",
      position: "AutoCAD Technician",
      duration: "2018 - 2020",
    },
    {
      compony: "Avan Design Studio",
      position: "AutoCAD Technician",
      duration: "2018 - 2020",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "MSc in Construction Technologies and BIM from the University of Strathclyde with strong skills in Revit, Navisworks, and BIM workflows. Experienced in 3D modeling, clash detection, COBie data extraction, and producing coordinated architectural documentation. Knowledgeable in UK Building Regulations, RIBA stages, and construction methods, with a solid foundation in architectural engineering and design.",
  items: [
    {
      institution: "University of Strathclyde",
      position: "MSC Construction Technologies and BIM",
      duration: "2023 - 2024",
    },
    {
      institution: "Azad university iRAN",
      position: "BSC Architectural Engineering",
      duration: "2016 - 2020",
    },
    {
      institution: "ConStructEd Scotland",
      position: "Equate ConStructEd Certificate",
      duration: "2024",
    },
    {
      institution: "ConStructEd Scotland",
      position: "BIM and Digital Construction",
      duration: "2024",
    },
     {
      institution: "ConStructEd Scotland",
      position: "BIM and Digital Construction",
      duration: "2024",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I am proficient in a range of software and tools essential for architectural design and BIM workflows.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html5",
    },
    {
      icon: <FaCss3 />,
      name: "Css3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experince">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">


            <TabsContent value="experince" className="w-full">
              
              <div className="flex flex-col gap-[30px] text-center xl:text-left xl:text-justify">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className= "bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center min-w-[300px] gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-left">{item.compony}</p>
                          </div>
                        </li>

                      )
                    })}
                  </ul>

                </ScrollArea>
              </div>


            </TabsContent>



            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left xl:text-justify">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className= "bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-left">{item.institution}</p>
                          </div>
                        </li>

                      )
                    })}
                  </ul>

                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skils
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
