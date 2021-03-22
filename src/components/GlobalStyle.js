import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    @media (max-width: 1300px) {
      font-size: 60%;
    }
  }

  body {
    background: #1b1b1b;
    font-family: 'Oxygen', sans-serif;
    overflow-x: hidden;
  }

  button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;

    &:hover {
      background-color: #23d997;
      color: white;
    }
  }

  h2 {
    font-weight: lighter;
    font-size: 4rem;
  }
  
  h3 {
    font-size: 2rem;
  }

  h4 {
    font-weight: bold;
    color: white;
    font-size: 1.7rem
  }
  
  h5 {
    font-size: 1.5rem
  }

  span {
    font-weight: bold;
    color: #23d997;
  }

  h3, h5 {
    color: white;
  }

  a {
    font-size: 1.1rem;
  }

  p {
    padding: 3rem 0;
    color: #ccc;
    font-size: 1.4rem;
  }

  p {
    padding: 3rem 0;
    color: #ccc;
    font-size: 1.4rem;
  }
`;

export default GlobalStyle;
