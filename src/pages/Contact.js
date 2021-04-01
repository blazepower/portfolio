import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <ContactStyle
      exit={"exit"}
      variants={pageAnimation}
      initial={"hidden"}
      animate={"show"}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Contact Me!</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social
            variants={titleAnim}
            href={"mailto:hombalrishik@gmail.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size={"4x"} color={"#BB001B"} />
            <h2>hombalrishik@gmail.com</h2>
          </Social>
        </Hide>
      </div>
      <div>
        <Hide>
          <Social
            variants={titleAnim}
            href={"http://www.linkedin.com/in/~rishik"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size={"4x"} color={"#0072b1"} />
            <h2>Connect with me on LinkedIn!</h2>
          </Social>
        </Hide>
      </div>
      <div>
        <Hide>
          <Social
            variants={titleAnim}
            href={"https://github.com/blazepower"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size={"4x"} color={"white"} />
            <h2>Check out my Github!</h2>
          </Social>
        </Hide>
      </div>
      <div>
        <Hide>
          <Social
            variants={titleAnim}
            href={"https://www.instagram.com/rishik_hombal/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size={"4x"} color={"#833AB4"} />
            <h2>Follow me on Instagram!</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;

  @media (max-width: 1300px) {
    margin-top: 1rem;
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: white;

  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
const Social = styled(motion.a)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  background-color: #2b2b2b;
  padding: 1rem;
  border-radius: 25px;
  margin-bottom: 1.5rem;

  h2 {
    margin: 2rem;
    text-align: center;
  }
`;

export default Contact;
