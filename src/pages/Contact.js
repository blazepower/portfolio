import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

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
            href={"http://www.linkedin.com/in/~rishik"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size={"4x"} color={"#0072b1"} />
            {/*<Circle />*/}
            <h2>Connect with me on LinkedIn!</h2>
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

  h2 {
    margin: 2rem;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

export default Contact;
