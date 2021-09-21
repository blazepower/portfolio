import React, { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useScroll } from "../../hooks/useScroll";
import { scrollReveal } from "../../animation";
import { useSelector } from "react-redux";
import { Drop, Experience } from "./ExperienceSectionStyles";

const ExperienceCard = ({ cardHeader, cardDate, cardContent }) => {
  const [expToggle, setExpToggle] = useState(false);
  const [expHover, setExpHover] = useState(false);
  return (
    <Drop layout whileHover={{ scale: 1.05 }}>
      <div onClick={() => setExpToggle(!expToggle)} className={"card-title"}>
        <motion.h4 layout>{cardHeader}</motion.h4>
        <motion.h5 layout>{cardDate}</motion.h5>
      </div>
      {expToggle && (
        <motion.div className="drop-content">
          <motion.p>{cardContent}</motion.p>
        </motion.div>
      )}
      <div className="exp-line" />
    </Drop>
  );
};

const ExperienceSection = () => {
  const [element, inView] = useScroll();
  const { experience, education } = useSelector((state) => state.info);
  return (
    <Experience
      ref={element}
      variants={scrollReveal}
      animate={inView ? "show" : "hidden"}
      initial={"hidden"}
    >
      <h2>My Experience</h2>
      <motion.h3 layout>
        <span>Education</span>
      </motion.h3>
      <br />

      <AnimateSharedLayout>
        {education.map((edu) => (
          <ExperienceCard
            cardHeader={edu.header}
            cardDate={edu.date}
            cardContent={edu.content}
          />
        ))}
        <motion.h3 layout>
          <span>Work History</span>
        </motion.h3>
        <br />
        {experience.map((exp) => (
          <ExperienceCard
            cardHeader={exp.header}
            cardDate={exp.date}
            cardContent={exp.content}
          />
        ))}
      </AnimateSharedLayout>
    </Experience>
  );
};

export default ExperienceSection;
