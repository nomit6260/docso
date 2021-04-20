import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <FooterContainer className="container">
            
            <CopyRight>
                <div className="legal">
                       <li>
                       <Link to="/termandcondition">Term and Condition</Link>
                       </li>
                       <li>
                       <Link to="/privacypolicy">Privacy Policy</Link>
                       </li>               
                </div>

                <h3 className="copyright"> &copy; {new Date().getFullYear()} Quartile Technologies. All rights reserved.</h3>
            </CopyRight>
        </FooterContainer>
    );
};
export default Footer;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
`

const FooterContainer = styled.div`
  background: ${props => props.theme.white};
  .pads{
    padding: 4rem;
    padding-bottom: 0rem;
  }
  h3:hover {
    color: ${props => props.theme.success};
    transition: color 0.2s;
}
  font-size: 1.3rem;
  border-top: 1px solid ${props => props.theme.gray8};
  > p {
    padding-top: 2rem;
  }
  /* HERE */
  @media (max-width: ${props => props.theme.breakPoint12}) {
    font-size: 1.2rem;
  };
  > div {
    margin: 0 auto;
    width: 200rem;
    @media (max-width: ${props => props.theme.breakPoint2}) {
      width: 175rem;
    };
    @media (max-width: ${props => props.theme.breakPoint3}) {
      width: 150rem;
    };
    @media (max-width: ${props => props.theme.breakPoint4}) {
      width: 125rem;
    };
    @media (max-width: ${props => props.theme.breakPoint5}) {
      width: 100rem;
    };
    @media (max-width: ${props => props.theme.breakPoint8}) {
      width: 75rem;
    };
    @media (max-width: ${props => props.theme.breakPoint12}) {
      width: 63rem;
    };
    @media (max-width: ${props => props.theme.breakPoint13}) {
      padding: 2rem;
      width: auto;
    };
  }
`;

const CopyRight = styled.div`
    background: ${props => props.theme.primary};
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .ml{
        margin-left: 3rem;
    }
    .legal{
        display: flex;
    }
    .copyright{
        margin-right: 20rem;
    }
    cursor: pointer;
    
`;