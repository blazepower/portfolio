import React from "react";
import styled from "styled-components";
import portrait from "../resources/IMG_20190608_164411.jpg";
import { Description, Hide, Image, Layout } from "../styles";

const AboutSection = () => {
  return (
    <Layout>
      <Description>
        <div className="title">
          <Hide>
            <h1>Hello!</h1>
          </Hide>
          <Hide>
            <h2>
              My name is <span>Rishik</span>!
            </h2>
          </Hide>
          <Hide>
            <h2>Welcome to my page</h2>
          </Hide>
        </div>
        <p>
          I am currently looking for full time Software Engineering
          Opportunities beginning in the Spring of 2022!
        </p>
        <button>Contact Me!</button>
      </Description>
      <ProfilePic>
        <img src={portrait} alt="Picture of Me!" />
      </ProfilePic>
    </Layout>
  );
};

// Styled Components

const ProfilePic = styled(Image)`
  flex: 1;
  width: 20vw;
  height: 40vh;
  transform: translateY(-15vh);
  overflow: visible;

  img {
    width: 100%;
  }
`;

export default AboutSection;
