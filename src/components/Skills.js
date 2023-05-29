import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3
        xs:bg-transparent xs:text-dark xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg md:bg-circularLightMd sm:bg-circularLightSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-23vw" y="1vw" />
        <Skill name="HTML" x="-25vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="12vw" />
        <Skill name="ReactJS" x="0vw" y="13vw" />
        <Skill name="NextJS" x="20vw" y="-18vw" />
        <Skill name="NodeJS" x="25vw" y="-10vw" />
        <Skill name="Express" x="15vw" y="1vw" />
        <Skill name="Figma" x="0vw" y="-21vw" />
        <Skill name="TailwindCSS" x="-17vw" y="15vw" />
        <Skill name="Material UI" x="-18vw" y="-19vw" />
        <Skill name="MongoDB" x="0vw" y="-13vw" />
        <Skill name="SQL" x="-36vw" y="8vw" />
      </div>
    </>
  );
};

export default Skills;
