import styled from "styled-components";
import { Layout } from "../../styles";
import { motion } from "framer-motion";

export const Experience = styled(Layout)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .exp-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
`;

export const Drop = styled(motion.div)`
  .card-title {
    padding: 0.2rem 0;
    cursor: pointer;
    user-select: none;
  }

  .drop-content {
    padding: 0.2rem 0;
    background: rgba(27, 27, 27, 0.86);

    p {
      padding: 0.5rem 0;
      margin: 0;
      white-space: pre-wrap;
      line-height: 2.7rem;
    }
  }
`;
