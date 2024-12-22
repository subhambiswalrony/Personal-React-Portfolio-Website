import aboutpic from "../assets/subhambiswalAbout.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 1, y: -100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl">
        About <span className="text-neutral-500"> Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 1, x: -100}}
            transition={{duration: 0.5}}
            className="flex flex-wrap items-center justify-center lg:flex-row-reverse">
            <img 
              src={aboutpic}
              className="border
                border-stone-900 rounded-3xl"
              alt="aboutPic" />
          </motion.div>
        </div>
        <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 1, x: 100}}
          transition={{duration: 0.5}}
          className="w-full lg:w-1/2 p-10">
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About