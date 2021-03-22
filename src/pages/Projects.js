import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  portraitAnim,
  flowEffect,
  frameContainer,
  lineAnim,
} from "../animation";

// Images
import bot from "../resources/botomatic.png";
import florist from "../resources/FloristFrenzy.png";
import functions from "../resources/Functions.png";
import intelliquote from "../resources/Intelliquote.png";
import murl from "../resources/murlLogo.png";
import player from "../resources/music_player.png";
import swag from "../resources/swagai.png";
import neveralone from "../resources/neveralone.png";
import tweets from "../resources/Tweet_data.png";

const Projects = () => {
  return (
    <ProjectsStyle
      variants={pageAnimation}
      initial={"hidden"}
      animate={"show"}
      exit={"exit"}
    >
      <motion.div variants={frameContainer}>
        <Frame1 variants={flowEffect} />
        <Frame2 variants={flowEffect} />
        <Frame3 variants={flowEffect} />
        <Frame4 variants={flowEffect} />
      </motion.div>

      <motion.h1 variants={fade} style={{ color: "white" }}>
        Projects
      </motion.h1>
      {/* #Todo: Extract into its own component */}
      <Project>
        <motion.h2 variants={fade}>React Music Player</motion.h2>
        <motion.div variants={lineAnim} className={"line"} />
        <Link to="/project/player">
          <Hide>
            <motion.img
              variants={portraitAnim}
              src={player}
              alt={"Music Player"}
            />
          </Hide>
        </Link>
      </Project>
      <Project>
        <h2>Intelliquote</h2>
        <motion.div className={"line"} />
        <Link to={"/project/intelliquote"}>
          <img src={intelliquote} alt={"Intelliquote"} />
        </Link>
      </Project>
      <Project>
        <h2>SwagAI</h2>
        <motion.div className={"line"} />
        <Link to={"/project/swag"}>
          <img src={swag} alt={"SwagAI"} />
        </Link>
      </Project>
      <Project>
        <h2>NeverAlone</h2>
        <motion.div className={"line"} />
        <Link to={"/project/neveralone"}>
          <img src={neveralone} alt={"NeverAlone"} />
        </Link>
      </Project>
      <Project>
        <h2>Bot-o-Matic</h2>
        <motion.div className={"line"} />
        <Link to={"/project/botmatic"}>
          <img src={bot} alt={"bot-o-matic"} />
        </Link>
      </Project>
      <Project>
        <h2>Florist Frenzy</h2>
        <motion.div className={"line"} />
        <Link to={"/project/florist"}>
          <img src={florist} alt={"Florist Frenzy"} />
        </Link>
      </Project>
      <Project>
        <h2>MURL</h2>
        <motion.div className={"line"} />
        <Link to={"/project/murl"}>
          <img src={murl} alt={"MURL"} />
        </Link>
      </Project>
    </ProjectsStyle>
  );
};

const ProjectsStyle = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0;
  }
`;

const Project = styled.div`
  padding-bottom: 10rem;

  h2 {
    color: white;
  }

  .line {
    height: 0.5rem;
    margin-bottom: 3rem;
    background: #23d997;
  }

  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default Projects;
