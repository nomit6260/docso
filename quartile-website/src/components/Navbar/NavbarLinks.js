import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {GreenBtn} from "styles/Buttons"

const NavbarLinks = () => {
  return (
    <Links className="links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/whyus">Why Us</Link>
      </li>
      <li>
        <Link to="/pricing">Pricing</Link>
      </li>
      <li>
        <Link to="/demo">Demo</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/contact">
            <GreenBtn>Create an Account</GreenBtn>
        </Link>
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
  li {
    padding-right: 2rem;
    color: white;
    &:hover {
      color: ${props => props.theme.success};
      transition: color 0.2s;
    }
  }
`;
