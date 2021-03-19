import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faAngular,
  faJava,
  faPython,
  faReact,
  faUnity,
} from "@fortawesome/free-brands-svg-icons";
import { Description, Layout } from "../styles";
import styled from "styled-components";

function Card({ Icon, Word }) {
  return (
    <CardStyle>
      <div className="icon">
        <FontAwesomeIcon icon={Icon} size={"3x"} color={"#23d997"} />
        <h3>{Word}</h3>
      </div>
    </CardStyle>
  );
}

const SkillsSection = () => {
  return (
    <Skills>
      <Description>
        <h2>
          Top <span>Skills</span>
        </h2>
        <Cards>
          <Card Icon={faAngular} Word={"One year of experience with Angular"} />
          <Card
            Icon={faJava}
            Word={"Four years of experience in Java and Spring Boot"}
          />
          <Card
            Icon={faAndroid}
            Word={
              "One year of experience with Android development using Java and Kotlin"
            }
          />
          <Card
            Icon={faUnity}
            Word={"One year of experience using C#, .Net, and Unity"}
          />
          <Card Icon={faReact} Word={"Two years of experience using ReactJS"} />
          <Card
            Icon={faPython}
            Word={"Three years of experience with Python"}
          />
        </Cards>
      </Description>
      {/*<div className="image">/!*<img src="" alt=""/>*!/</div>*/}
    </Skills>
  );
};

const Skills = styled(Layout)`
  h2 {
    padding-bottom: 5rem;
  }

  h3 {
    width: 70%;
    padding: 2rem 0 2rem 1rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardStyle = styled.div`
  flex-basis: 20rem;

  .icon {
    display: flex;
    align-items: center;
  }
  
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;

export default SkillsSection;
