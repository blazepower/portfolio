import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/skills/SkillsSection";
import ExperienceSection from "../components/experience/ExperienceSection";
import { useDispatch } from "react-redux";
import {
  loadEducation,
  loadExperiences,
  loadSkills,
} from "../actions/infoActions";

const About = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadExperiences());
    dispatch(loadSkills());
    dispatch(loadEducation());
  }, [dispatch]);
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
