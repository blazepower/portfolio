import React, { useState } from "react";
import styled from "styled-components";
import { Layout } from "../styles";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useScroll } from "../hooks/useScroll";
import { scrollReveal } from "../animation";

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
        <ExperienceCard
          cardHeader={"Case Western Reserve University"}
          cardDate={"2018 - 2021"}
          cardContent={
            "Graduating in Fall 2021 with a BS in Computer Science on the Software Engineering Track"
          }
        />
        <ExperienceCard
          cardHeader={"Hoover High School"}
          cardDate={"2014 - 2018"}
          cardContent={
            "Graduated in Spring 2018 as a Valedictorian and National Merit Scholar with an IB diploma"
          }
        />
        <motion.h3 layout>
          <span>Work History</span>
        </motion.h3>
        <br />
        <ExperienceCard
          cardHeader={"Microsoft Azure"}
          cardDate={"Summer 2021"}
          cardContent={
            "Worked to enable companies to embrace the hybrid cloud model as a member of the Azure Arc Enabled Kubernetes Team \n" +
            "Planned, designed, implemented, deployed, and tested a notification model to apply FluxV2 Configurations to Arc Enabled Kubernetes clusters reducing wasted compute by over 350% and increasing application speed by 90% using C# & Golang"
          }
        />
        <ExperienceCard
          cardHeader={"Altec Inc."}
          cardDate={"2020 - Present"}
          cardContent={
            "PIT Bandicoots: \n" +
            'Developed and deployed the final phase of the "Configurable Checksheets" application leading to over $2.1 million added benefit to the business \n' +
            "\t-Configurable Checksheets allowed factory associates easy access to the instructions and customer requests for the development of custom utility trucks \n" +
            "Developed and deployed the initial deliverable for the Audit Application leading to over $800 thousand added benefit for the business \n" +
            "\t-The Audit application allowed auditors to determine whether trucks had been built safely while following all standard and requested protocols and instructions"
          }
        />
        <ExperienceCard
          cardHeader={"Altec Inc."}
          cardDate={"Summer 2020"}
          cardContent={
            "IS Intern Team: \n" +
            "Created and deployed an application allowing all company associates to view basic information about any build job \n" +
            "Designed and implemented an interface for a new company-wide system for the storage and management of high quality photographs"
          }
        />
        <ExperienceCard
          cardHeader={"Breakthrough Electrolytes for Energy Storage"}
          cardDate={"2020 - 2021"}
          cardContent={
            "Maintained and update the webpage for the BEES EFRC \n" +
            "\t-Increased traffic from 100 views to over 2000 views per month \n" +
            "Scripted a means of data archival, display, and delivery to the Department of Energy"
          }
        />
      </AnimateSharedLayout>
    </Experience>
  );
};

const Experience = styled(Layout)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .exp-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
`;

const Drop = styled(motion.div)`
  .card-title {
    padding: 0.2rem 0;
    cursor: pointer;
    user-select: none;
  }

  .drop-content {
    padding: 0.2rem 0;
    background: rgba(27, 27, 27, 0.86);

    p {
      padding: 0.5rem 0;
      margin: 0;
      white-space: pre-wrap;
      line-height: 2.7rem;
    }
  }
`;

export default ExperienceSection;
