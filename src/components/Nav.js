import React from "react";
import styled from "styled-components";

const NavElement = ({ Text }) => {
  return (
    <li>
      <a href={"#"}>{Text}</a>
    </li>
  );
};

const Nav = () => {
  return (
    <NavStyle>
      <h1>
        <a id={"logo"} href="#">
          Rishik
        </a>
      </h1>
      <ul>
        <NavElement Text={"About Me"} />
        <NavElement Text={"My Projects"} />
        <NavElement Text={"Contact Me"} />
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
