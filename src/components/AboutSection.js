import React from "react";
import portrait from "../resources/IMG_20190608_164411.jpg";
import { Description, Hide, Image, Layout } from "../styles";
import { motion } from "framer-motion";
import { fade, portraitAnim, titleAnim } from "../animation";
import Wave from "./Wave";

const l1 = "Software Engineer", l2 = "Cloud Native Developer", l3 = "Problem Solver";

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
                        <motion.h5 variants={titleAnim}>Software Engineer | Cloud Native Developer | Problem Solver</motion.h5>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    I am currently looking for full time Software Engineering
                    opportunities beginning in the Spring of 2022!
                </motion.p>
                <div>
                    <a href={"https://1drv.ms/b/s!ArFFHwbpf6JdpANEfNip_i19qYHH?e=ALHQqE"} target={"_blank"}>
                        <motion.button
                            variants={fade}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            My Resume!
                        </motion.button>
                    </a>
                </div>
            </Description>
            <Image>
                <motion.img
                    variants={portraitAnim}
                    src={portrait}
                    alt="Picture of Me!"
                />
            </Image>
            <Wave/>
        </Layout>
    );
};

export default AboutSection;
