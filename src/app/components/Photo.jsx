"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full -full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2, ease: "easeIn" }}
        className="w-full h-full relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.6, ease: "easeInOut" }}
          className="relative w-[240px] h-[290px] xl:w-[415px] xl:h-[500px] mix-blend-lighten overflow-hidden rounded-[60%]"
        >
          <Image
            src="/assets/photo-mahsa.jpg"
            priority
            quality={100}
            alt="photo_mahsa"
            fill
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* circle */}
      {/* <motion.svg
        className="w-[242px] xl:w-[41px] h-[300x] xl:h-[506px]"
        fill="transparent"
        viewBox={"0 0 506 506"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx={"253"}
          cy={"253"}
          r={"253"}
          stroke={"#00ff99"}
          strokeWidth={"4"}
          strokeLinecap={"round"}
          initial={{ strokeDasharray:"24 10 0 0"}}
          animate={{ strokeDasharray: ["15 120 25 50", "16 25 92 72", "4 250 22 22"], rotate:[120, 360]}}
          transition={{duration:20, repeat: Infinity, ease: "reverse"}}
        />
      </motion.svg> */}
    </div>
  );
};

export default Photo;
