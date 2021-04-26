import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarLinks = () => {
  return (
    <Links className="links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/features">Features</Link>
      </li>
      <li>
        <Link to="/advantage">Advantage</Link>
      </li>
      <li>
        <Link to="/contactus">Contact Us</Link>
      </li>
    </Links>
  );
};

export default NavbarLinks;

const Links = styled.ul`
  display: flex;
  margin-left: 3rem;
  font-size: 1.45rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    margin-left:0rem;
    align-items: left;
    justify-content: left;
    font-size:3rem;
  }

  li {
    padding-right: 2rem;
    color: white;
    &:hover {
      color: ${props => props.theme.success};
      transition: color 0.2s;
    }
  }
`;
