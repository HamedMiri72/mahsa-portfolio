"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { use, useState } from "react";
import "swiper/css";

import { BsArrowUpRight} from "react-icons/bs";


import Link from "next/link";
import Image from "next/image";

const projects = [
  
  {
    id: "1",
    num: "01",
    category: "Medical Center",
    title: "Outpatient Healthcare Facility",
    description:
      "3D architectural design of a modern medical centre with U-shaped layout.",
    stack: [{ name: "Autodesk Revit" }],
    image: "/assets/work/kermanshahMedical/3DModel2.jpg",
  },
  {
    id: "2",
    num: "02",
    category: "Residential Extension",
    title: "Single-Storey Home Extension",
    description:
      "BIM-based modelling and documentation of a residential building extension.",
    stack: [
      { name: "Autodesk Revit" },
      { name: "Navisworks" },
      { name: "COBie / Uniclass 2015" },
    ],
    image: "/assets/work/glasgowBuilding/3DModel.jpg",
  },
  {
    id: "3",
    num: "03",
    category: "Hospital",
    title: "Four-Storey Hospital Building",
    description:
      "Design and visualisation of a hospital with helipad and curtain wall façade.",
    stack: [{ name: "AutoCAD" }, { name: "Autodesk Revit" }],
    image: "/assets/work/GhaemHostpital/3DModel1.jpg",
  },
  {
    id: "4",
    num: "04",
    category: "Residential Building",
    title: "Irregular Site Housing Project",
    description:
      "Residential building with angular geometry and natural materials.",
    stack: [{ name: "AutoCAD" }, { name: "Autodesk Revit" }],
    image: "/assets/work/hosseiniProject/3DModel1.png",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    //current slide index
    const currentIndex = swiper.activeIndex;
    //update project slide
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.4 } , duration: 0.4, ease: "easeIn" }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* otline num */}
              <div className="text-8xl leading-none font-extrbold text-transparent text-outline">
                {project.num}
              </div>

              {/*project vategory */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>

              <div className="mt-2 bg-white/5 rounded-full p-2 max-w-12 hover:bg-accent/20">
                <Link href={`/work/${project.id}`}>
                  <BsArrowUpRight className="text-white text-3xl" />
                  <div></div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] w-full relative bg-pink-50/20 group flex justify-center items-center rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title || `Project ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
