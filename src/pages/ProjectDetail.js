import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { TempState } from "../TempState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const Detail = ({ Title, Description }) => {
  return (
    <DescripStyle>
      <h3>{Title}:</h3>
      <div className="line" />
      <p>{Description}</p>
    </DescripStyle>
  );
};

const ProjectDetail = () => {
  const url = useHistory().location.pathname;
  const [projects, setProjects] = useState(TempState);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currProject = projects.filter((state) => state.url === url);
    setProject(currProject[0]);
  }, [projects, url]);

  return (
    <Details
      variants={pageAnimation}
      exit={"exit"}
      initial={"hidden"}
      animate={"show"}
    >
      <Headline>
        <h2>{project?.title}</h2>
        <img src={project?.img} alt={project?.title} />
      </Headline>
      <Descrip>
        {project?.details.map((detail) => (
          <Detail
            Title={detail.title}
            Description={detail.description}
            key={detail.title}
          />
        ))}
      </Descrip>
    </Details>
  );
};

const Details = styled(motion.div)`
  color: white;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    padding-top: 1rem;
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }

  @media (max-width: 1300px) {
    h2 {
      position: relative;
      text-align: center;
    }
  }
`;

const Descrip = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: stretch;
  justify-content: space-around;

  @media (max-width: 1300px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 1rem;
    align-items: center;
    min-height: 40vh;
  }
`;

const DescripStyle = styled.div`
  padding: 5rem;

  h3 {
    font-size: 2rem;
  }

  .line {
    width: 80%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }

  @media (max-width: 1300px) {
    padding: 2rem;
  }
`;

export default ProjectDetail;
