import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    <ProjectsStyle>
      <h1>Projects</h1>
      {/* #Todo: Extract into its own component */}
      <Project>
        <h2>React Music Player</h2>
        <div className={"line"} />
        <Link to="/project/player">
          <img src={player} alt={"Music Player"} />
        </Link>
      </Project>
      <Project>
        <h2>Intelliquote</h2>
        <div className={"line"} />
        <Link to={"/project/intelliquote"}>
          <img src={intelliquote} alt={"Intelliquote"} />
        </Link>
      </Project>
      <Project>
        <h2>SwagAI</h2>
        <div className={"line"} />
        <Link to={"/project/swag"}>
          <img src={swag} alt={"SwagAI"} />
        </Link>
      </Project>
      <Project>
        <h2>NeverAlone</h2>
        <div className={"line"} />
        <Link to={"/project/neveralone"}>
          <img src={neveralone} alt={"NeverAlone"} />
        </Link>
      </Project>
      <Project>
        <h2>Bot-o-Matic</h2>
        <div className={"line"} />
        <Link to={"/project/botmatic"}>
          <img src={bot} alt={"bot-o-matic"} />
        </Link>
      </Project>
      <Project>
        <h2>Florist Frenzy</h2>
        <div className={"line"} />
        <Link to={"/project/florist"}>
          <img src={florist} alt={"Florist Frenzy"} />
        </Link>
      </Project>
      <Project>
        <h2>MURL</h2>
        <div className={"line"} />
        <Link to={"/project/murl"}>
          <img src={murl} alt={"MURL"} />
        </Link>
      </Project>
    </ProjectsStyle>
  );
};

const ProjectsStyle = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0;
  }
`;

const Project = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    margin-bottom: 3rem;
    background: gray;
  }

  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
  }
`;

export default Projects;
