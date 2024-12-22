import { animate, motion } from "framer-motion";
import { DiMysql } from "react-icons/di";
import { FaCss3, FaCss3Alt, FaHtml5, FaJava, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
// import { motion } from "framer-motion";


const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
})


const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: 100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-4 flex flex-col text-center gap-3"
            >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <span className="text-center">React</span>
        </motion.div>
        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4 flex flex-col text-center gap-3"
            >
          <FaHtml5 className="text-7xl text-orange-500" />
          <span className="text-center">HTML</span>
        </motion.div>
        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4 flex flex-col text-center gap-3"
            >
            <FaCss3Alt className="text-7xl text-blue-600" />
            <span className="text-center">CSS</span>
        </motion.div>
        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(8.5)}
            className="p-4 flex flex-col text-center gap-3"
            >
            <SiJavascript className="text-7xl text-yellow-400" />
            <span className="text-center">JavaScript</span>
        </motion.div>
        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4 flex flex-col text-center gap-3"
            >
            <RiTailwindCssFill className="text-7xl text-cyan-500" />
            <span className="text-center">Tailwind CSS</span>
        </motion.div>
        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(6)}
            className="p-4 flex flex-col text-center gap-3"
            >
          <FaPython className="text-7xl text-green-500" />
          <span className="text-center">Python</span>
        </motion.div>
        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4 flex flex-col text-center gap-3"
            >
            <FaJava className="text-7xl text-red-700" />
            <span className="text-center">JAVA</span>
        </motion.div>
        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4 flex flex-col text-center gap-3"
            >
            <DiMysql className="text-7xl " />
            <span className="text-center">MySQL</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
