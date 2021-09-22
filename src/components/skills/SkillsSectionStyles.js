import styled from "styled-components";
import { Layout } from "../../styles";

export const Skills = styled(Layout)`
  h2 {
    padding-bottom: 5rem;
  }

  h3 {
    width: 70%;
    padding: 2rem 0 2rem 1rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;

  &:hover {
  }

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

export const CardStyle = styled.div`
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
