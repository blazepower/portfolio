import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const NavElement = ({ Text, Target }) => {
  const { pathname } = useLocation();
  return (
    <li>
      <Link to={Target}>{Text}</Link>
      <Line
        transition={{ duration: 0.75 }}
        initial={{ width: "0" }}
        animate={{ width: pathname === Target ? "50%" : "0%" }}
      />
    </li>
  );
};

const Nav = () => {
  return (
    <NavStyle>
      <h1>
        <Link id={"logo"} to="/">
          Rishik
        </Link>
      </h1>
      <ul>
        <NavElement Target={"/"} Text={"About Me"} />
        <NavElement Target={"/projects"} Text={"My Projects"} />
        <NavElement Target={"/contact"} Text={"Contact Me"} />
      </ul>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 100;

  #logo {
    font-size: 1.7rem;
    font-family: "Berkshire Swash", cursive;
    font-weight: lighter;
  }

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;

    #logo {
      display: inline-block;
      margin: 2rem;
    }

    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;

      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0;
  }
`;

export default Nav;
