import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";

const About = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial={"hidden"}
      animate={"show"}
      exit={"exit"}
    >
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
    </motion.div>
  );
};

export default About;
