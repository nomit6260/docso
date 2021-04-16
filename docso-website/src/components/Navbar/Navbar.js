import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { QuartileLogoWhite } from "assets/icons"
import NavbarLinks from "./NavbarLinks";
import { withRouter } from "react-router-dom"

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      console.log("true")
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  let navbarClasses = [];
  if (scrolled) {
    console.log(navbarClasses)
    navbarClasses.push('scrolled');
  }
  return (
    <Container>
      <Nav className={navbarClasses.join(" ")}>
        {/* <div onClick={this.toggle}>
            <SVGicon className="navicon" name="nav" />
          </div> */}
          <Link to="/"><QuartileLogoWhite className="QuartileLogo"/></Link>
        
        {/* <h2>Quartile</h2> */}
        <NavbarLinks />
      </Nav>
      {/* <NavMenu className={this.state.toggle ? "visibleMenu" : "hiddenMenu"}>
          <Search />
          <NavbarLinks />
        </NavMenu> */}
    </Container>
  )
}


export default withRouter(Navbar);

const Container = styled.div`
  background: ${props => props.theme.primary};
  // box-shadow: ${props => props.theme.shadow1};
  position: fixed;
  width: 100%;
  z-index: 1;

  .search {
    position: relative;
    input {
      border: none;
      border-radius: 4px;
      color: ${props => props.theme.gray6};
    }
    input::placeholder {
      color: inherit;
    }
    svg {
      position: absolute;
      fill: ${props => props.theme.gray6};
    }
  }
  .hiddenMenu {
    display: none;
  }
  .visibleMenu {
    display: block;
    text-align: center;
  }
`;

const NavMenu = styled.div`
  padding: 0 2rem;
  @media (min-width: ${props => props.theme.breakPoint9}) {
    display: none !important;
  }
  .search {
    padding-bottom: 1rem;
    input {
      font-size: 1.3rem;
      width: 100%;
      padding: 1rem 0 1rem 30px;
    }
    svg {
      top: 11px;
      left: 1%;
      width: 17px;
      height: 17px;
    }
  }
  .links {
    flex-direction: column;
    text-align: start;
    margin-left: 0;
    > li {
      border-top: 1px solid ${props => props.theme.gray3};
      width: 100%;
      padding: 1.2rem 0;
      > a {
        display: flex;
      }
    }
  }
`;

const Nav = styled.nav`
  color: ${props => props.theme.gray5};
  box-shadow: ${props => props.theme.shadow3};
  font-size: 1.3rem;
  height: 7rem;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  padding: 0 30px;
  padding-left: 50px;
  padding-right: 50px;
  justify-content: space-between;
  .scrolled{
    position: fixed;
    top: 0;
    left: 0;
    background-color: lightblue;
  }
  @media (max-width: ${props => props.theme.breakPoint9}) {
    height: 4.2rem;
    justify-content: space-between;
  }
  @media (max-width: ${props => props.theme.breakPoint15}) {
    padding: 0 9px;
  }
  .navicon {
    display: none;
    fill: ${props => props.theme.gray6};
    width: 17px;
    height: 100%;
    @media (max-width: ${props => props.theme.breakPoint9}) {
      display: block;
    }
  }
  .QuartileLogo {
    filter: brightness(0) invert(1);
    height: 38px;
    width: 100px;
    // transform: rotate(-1.5deg);
  }
  .links {
    @media (max-width: ${props => props.theme.breakPoint9}) {
      display: none;
    }
  }
`;
