import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Line, NavStyle } from "./NavStyles";

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

export default Nav;
