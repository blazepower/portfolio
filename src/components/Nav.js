import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavElement = ({ Text, Target }) => {
  return (
    <li>
      <Link to={Target}>{Text}</Link>
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
    padding-right: 5rem;
    position: relative;
  }
`;

export default Nav;
