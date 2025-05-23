import { motion } from "framer-motion"


const stairsAnimation = {
    init: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },

};

const  reverseIndx = (index) => {

    const totalSteps = 6;
    return totalSteps - index - 1;

}
const Stairs = () => {
  return (
  
  <>

  {[...Array(6)].map((_, index) => (
    <motion.div
      key={index}
      variants={stairsAnimation}
      initial="init"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        delay: reverseIndx(index) * 0.1,
      }}
      className="h-full w-full bg-white relative"
    />
  ))}
  </>
);
}

export default Stairs