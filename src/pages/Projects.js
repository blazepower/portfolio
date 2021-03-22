import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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
import { useScroll } from "../hooks/useScroll";
import ScrollRestore from "../components/ScrollRestore";

const Projects = () => {
  const [element1, inView1] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  const [element5, controls5] = useScroll();
  const [element6, controls6] = useScroll();
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
      {/* #Todo: Add more animations */}
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
          <Hide>
            <motion.img src={intelliquote} alt={"Intelliquote"} />
          </Hide>
        </Link>
      </Project>
      <Hide>
        <Project>
          <h2>SwagAI</h2>
          <motion.div className={"line"} />
          <Link to={"/project/swag"}>
            <Hide>
              <motion.img src={swag} alt={"SwagAI"} />
            </Hide>
          </Link>
        </Project>
      </Hide>
      <Hide>
        <Project>
          <h2>NeverAlone</h2>
          <motion.div className={"line"} />
          <Link to={"/project/neveralone"}>
            <Hide>
              <motion.img src={neveralone} alt={"NeverAlone"} />
            </Hide>
          </Link>
        </Project>
      </Hide>
      <Hide>
        <Project>
          <h2>Bot-o-Matic</h2>
          <motion.div className={"line"} />
          <Link to={"/project/botmatic"}>
            <Hide>
              <motion.img src={bot} alt={"bot-o-matic"} />
            </Hide>
          </Link>
        </Project>
      </Hide>
      <Hide>
        <Project>
          <h2>Florist Frenzy</h2>
          <motion.div className={"line"} />
          <Link to={"/project/florist"}>
            <Hide>
              <motion.img src={florist} alt={"Florist Frenzy"} />
            </Hide>
          </Link>
        </Project>
      </Hide>
      <Hide>
        <Project>
          <h2>MURL</h2>
          <motion.div className={"line"} />
          <Link to={"/project/murl"}>
            <Hide>
              <motion.img src={murl} alt={"MURL"} />
            </Hide>
          </Link>
        </Project>
      </Hide>
    </ProjectsStyle>
  );
};

const ProjectsStyle = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  @media (max-width: 1300px) {
    padding: 2rem;
  }

  h2 {
    padding: 1rem 0;
  }
`;

const Project = styled(motion.div)`
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
