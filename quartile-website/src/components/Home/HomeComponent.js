import React from 'react'
import styled from "styled-components"
import { GreenBtn, YellowBtn } from "styles/Buttons"
import Carousel from "components/Carousel/CarouselNauka"

function HomeComponent() {
    return (
        <Container>
            <div className="landing">
                <Heading>Start Building with Quartile Today</Heading>
                <h3>
                    Whether you're looking for compute power, database storage, content delivery, or other functionality, Quartile has the services to help you build sophisticated applications with increased flexibility, scalability and reliability
                </h3>
                <GreenBtn className="btn-1">Get started for free</GreenBtn>
            </div>
            <Carousel 
                elements={
                    [
                        <h1 style={{ textAlign: "center", marginTop: "10%", fontSize: "30px" }}>Hello</h1>, 
                        <h1 style={{ textAlign: "center", marginTop: "10%", fontSize: "30px" }}>World</h1>
                    ]} 
            />
            <div className="landing">
                <Heading>Ready to Get Started</Heading>
                <h3>
                    Whether you're looking for compute power, database storage, content delivery, or other functionality, Quartile has the services to help you build sophisticated applications with increased flexibility, scalability and reliability
                </h3>
                <YellowBtn className="btn-1">Request Demo</YellowBtn>
            </div>
        </Container>
    )
}

export default HomeComponent

const Container = styled.div`
    padding-top: 5rem;
    .landing{
        height: 300px;
        background: ${props => props.theme.primary};
        padding: 30px;
        // justify-content: center;
        align-items: center;
        display: flex;
        text-align: center;
        flex-direction: column;
        h3{
            max-width: 590px;
            font-size: 15px;
            margin: 2rem;
        }
    }

    .carousel{
        // background: ${props => props.theme.blue9};
        height: 400px;
    }

    .btn-1{
        margin-top: 2rem;
    }
`

const Heading = styled.p`
    font-size: 30px;
    color: ${props => props.theme.white};
`


