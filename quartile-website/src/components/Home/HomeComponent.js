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
                        <div className="slide-1">
                            <h1 style={{ textAlign: "center", marginTop: "2rem", fontSize: "35px" }}>Introducing Quartile Cloud Platform</h1>
                            <h2 style={{ textAlign: "center", marginTop: "5px", fontSize: "20px" }}>Experience the industry leading cloud service</h2>
                            <YellowBtn style={{ textAlign: "center", marginTop: "5rem" }} className="btn-1">Explore Now</YellowBtn>
                        </div>,

                    ]}
            />

            <div className="blogs">
                <Heading>Blogs</Heading>
                <h3>
                    Understand the engineering under the hood.
                </h3>
            </div>

            <div className="initiatives">
                <Heading>Initiatives</Heading>
                <h3>
                    We are commited towards Digital Economy and AatmaNirbhar Bharat
                </h3>
            </div>

            <div className="final-message">
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
    .slide-1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;
    }
    .initiatives{
        // height: 300px;
        padding: 30px;
        // justify-content: center;
        align-items: center;
        display: flex;
        text-align: center;
        flex-direction: column;
        p{
            color: ${props => props.theme.primary};
            font-size: 35px;
        }
        h3{
            max-width: 750px;
            font-size: 20px;
            margin: 2rem;
        }
    }
    .blogs{
        display: flex;
        flex-direction: column;
        
        height: 500px;
        background: ${props => props.theme.gray9};
        p{
            color: ${props => props.theme.primary};
            font-size: 35px;
            margin: 4rem;
            margin-bottom: 0;
        }
        h3{
            max-width: 750px;
            font-size: 20px;
            margin-left: 4rem;
        }
    }
    }
    .final-message,
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
        background: ${props => props.theme.blue9};
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


