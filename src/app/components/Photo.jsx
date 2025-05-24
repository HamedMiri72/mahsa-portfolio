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
    </div>
  );
};

export default Photo;
