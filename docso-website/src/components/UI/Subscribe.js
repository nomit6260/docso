import React from "react";
import styled from "styled-components";
import Input from "components/UI/Input"
import {YellowBtn} from "styles/Buttons"

const Subscribe = () => {
    return (
        <Container>
            <div>
                <h2>Get the latest Quartile news and updates.</h2>
                <SubContainer>
                    <Input className="sub-input" placeholder="Enter email address"/>
                    <YellowBtn className="sub-btn">Subscribe</YellowBtn>
                </SubContainer>
            </div>
        </Container>
    );
};
export default Subscribe;

const Container = styled.div`
    height: 17.5rem;
    width: 29%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h2{
        color: ${props => props.theme.primary};
        margin-bottom: 1rem;
        cursor: default;
    }
    li:hover {
        color: ${props => props.theme.success};
        transition: color 0.2s;
    }
    @media (max-width: ${props => props.theme.breakPoint7}) {
        height: auto;
        width: auto;
    }
    @media (max-width: ${props => props.theme.breakPoint8}) {
        height: 17.5rem;
    }
    > ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 60%;
        align-content: space-between;
    }
`;

const SubContainer = styled.div`
    display: flex;
    .sub-input{
        border-right: none;
    }
    .sub-btn{
        height: 39px;
        border-radius: 0;
        border-color: ${props => props.theme.primary};
        border-width: 2px;
        border-style: solid;
        border-left: none;
    }
    align-items: center;
`