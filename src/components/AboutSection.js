import React from "react";
import portrait from "../resources/IMG_20190608_164411.jpg";
import { Description, Hide, Image, Layout } from "../styles";
import { motion } from "framer-motion";
import { fade, portraitAnim, titleAnim } from "../animation";
import Wave from "./Wave";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <Layout>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Hello!</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              My name is{" "}
              <motion.span variants={fade} whileHover={{ scale: 1.2 }}>
                Rishik
              </motion.span>
              !
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Welcome to my page</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          I am currently looking for full time Software Engineering
          Opportunities beginning in the Spring of 2022!
        </motion.p>
        <Link to={"/contact"}>
          <motion.button
            variants={fade}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact Me!
          </motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img
          variants={portraitAnim}
          src={portrait}
          alt="Picture of Me!"
        />
      </Image>
      <Wave />
    </Layout>
  );
};

export default AboutSection;
