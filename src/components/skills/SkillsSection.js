import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Description } from "../../styles";
import { useScroll } from "../../hooks/useScroll";
import { scrollReveal } from "../../animation";
import { useSelector } from "react-redux";
import { Cards, CardStyle, Skills } from "./SkillsSectionStyles";

function Card({ Icon, Title, Content }) {
  return (
    <CardStyle>
      <div className="icon">
        <FontAwesomeIcon
          icon={[Icon[0], Icon[1]]}
          size={"3x"}
          color={"#23d997"}
        />
        <h3>{Title}</h3>
      </div>
      <p>{Content}</p>
    </CardStyle>
  );
}

const SkillsSection = () => {
  const [element, inView] = useScroll();
  const { skills } = useSelector((state) => state.info);
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
          {skills.map((skill) => (
            <Card
              key={skill.title}
              Icon={skill.icon}
              Title={skill.title}
              Content={skill.content}
            />
          ))}
        </Cards>
      </Description>
    </Skills>
  );
};

export default SkillsSection;
