import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faAngular,
  faJava,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { Description, Layout } from "../styles";
import styled from "styled-components";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { useScroll } from "../hooks/useScroll";
import { scrollReveal } from "../animation";

function Card({ Icon, Title, Content }) {
  return (
    <CardStyle>
      <div className="icon">
        <FontAwesomeIcon icon={Icon} size={"3x"} color={"#23d997"} />
        <h3>{Title}</h3>
      </div>
      <p>{Content}</p>
    </CardStyle>
  );
}

const SkillsSection = () => {
  const [element, inView] = useScroll();
  return (
    <Skills
      variants={scrollReveal}
      animate={inView ? "show" : "hidden"}
      initial={"hidden"}
      ref={element}
    >
      <Description>
        <h2>
          Top <span>Skills</span>
        </h2>
        <Cards>
          <Card
            Icon={faAngular}
            Title={"Angular"}
            Content={"One year of experience with Angular"}
          />
          <Card
            Icon={faJava}
            Title={"Java"}
            Content={"Four years of experience in Java and Spring Boot"}
          />
          <Card
            Icon={faAndroid}
            Title={"Android"}
            Content={
              "One year of experience with Android dev using Java and Kotlin"
            }
          />
          <Card
            Icon={faTerminal}
            Title={"C#"}
            Content={"Two years of experience using C# and .Net"}
          />
          <Card
            Icon={faReact}
            Title={"React"}
            Content={"Two years of experience using ReactJS"}
          />
          <Card
            Icon={faPython}
            Title={"Python"}
            Content={"Three years of experience with Python"}
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

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const CardStyle = styled.div`
  flex-basis: 20rem;
  margin-right: 1rem;

  .icon {
    display: flex;
    align-items: center;
  }

  h3 {
    font-size: 1.5rem;
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }

  p {
    font-size: 1.3rem;
  }
`;

export default SkillsSection;
