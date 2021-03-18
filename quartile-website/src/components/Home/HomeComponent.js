import React from 'react'
import styled from "styled-components"
import { GreenBtn, YellowBtn } from "styles/Buttons"
import Carousel from "components/Carousel/CarouselNauka"
import { MakeInIndiaLogo, DigitalIndiaLogo, AatmaNirbharBharatLogo } from "assets/icons"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Card, CardHeading } from "components/Cards/Card"
import { BsLock, BsCheckCircle, BsLayers, BsArrowsFullscreen } from 'react-icons/bs';

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

            <div className="solutions">
                <Heading>Explore Our Solutions</Heading>
                <Tabs className="tabs" selectedTabClassName="selected-tab">
                    <TabList className="tab-list">
                        <Tab>Industry</Tab>
                        <Tab>Technology Category</Tab>
                    </TabList>

                    <TabPanel className="center" >
                        <div className="grid selectDisable center">
                            <Card>
                                <CardHeading className="link">
                                    Media and Entertainment
                                </CardHeading>
                            </Card>
                            <Card>
                                <CardHeading>
                                    Healthcare and Life Science
                                </CardHeading>
                            </Card>
                            <Card>
                                <CardHeading>
                                    Advertisement and Marketing
                                </CardHeading>
                            </Card>

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid selectDisable center">
                            <Card>
                                <CardHeading className="link">
                                    Machine Learning
                                </CardHeading>
                            </Card>
                            <Card>
                                <CardHeading>
                                    Product Development
                                </CardHeading>
                            </Card>
                            <Card>
                                <CardHeading>
                                    Internet of Things
                                </CardHeading>
                            </Card>

                        </div>
                    </TabPanel>
                </Tabs>
            </div>

            <div className="feature">
                <Heading>Engineered for the Most Demanding Requirements</Heading>
                <div className="grid-feature selectDisable center">
                    <div>
                        <BsLock className="icon" />
                        <h1>
                            Secure
                        </h1>
                        <h2>
                            Comprehensive security capabilities to satisfy the most demanding requirements.
                        </h2>
                    </div>
                    <div>
                        <BsCheckCircle className="icon" />
                        <h1>
                            Compliant
                        </h1>
                        <h2>
                            Rich controls, auditing and broad security accreditations.
                        </h2>
                    </div>
                    <div>
                        <BsLayers className="icon" />
                        <h1>
                            Hybrid
                        </h1>
                        <h2>
                            Build hybrid architectures that extend your on-premises infrastructure to the Cloud.
                        </h2>
                    </div>
                    <div>
                        <BsArrowsFullscreen className="icon" />
                        <h1>
                            Scalable
                        </h1>
                        <h2>
                            Access as much or as little as you need, and scale up and down as required with only a few minutes notice.
                        </h2>
                    </div>

                </div>
            </div>

            <div className="blogs">
                <Heading>Blogs</Heading>
                <h3>
                    Understand the engineering under the hood.
                </h3>
            </div>

            <div className="initiatives selectDisable">
                <Heading>Initiatives</Heading>
                <h3>
                    We are commited towards Digital Economy and AatmaNirbhar Bharat
                </h3>
                <div className="initiatives-img ">
                    <DigitalIndiaLogo />
                    <MakeInIndiaLogo />
                    <AatmaNirbharBharatLogo />
                </div>
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
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .slide-1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;
    }
    .solutions,
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

        .initiatives-img{
            display: flex;
            img{
                height: 15%;
                width: 15%;
            }
            align-items: center;
            justify-content: space-evenly;
        }
    }

    .tabs{
        font-size: 16px;
        .selected-tab{
            border: none;
            color: ${props => props.theme.success};
        }

        .tab-list{
            display: flex;
            cursor: pointer;
            align-items: center;
            justify-content: center;
            li{
                margin: 10px;
            }
        }
    }

    .selectDisable {
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
    
    .selectEnable { 
        -webkit-user-select: text;
        -khtml-user-select: text;
        -moz-user-select: text;
        -o-user-select: text;
        user-select: text;
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
    .feature,
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

    .grid{
        display: inline-flex;
        flex-wrap: wrap;
        div {
            margin: 10px;
            min-height: 250px;
            min-width: 250px;
            &:hover{
                .link{color: ${props => props.theme.success};}
                transition: color 0.3s;
            }
        }
    }

    .feature{
        text-align: center;
        height: 100%;

        .grid-feature{
            @media (max-width: ${props => props.theme.breakPoint11}) {
                flex-direction: column;
            }
            div{
                margin: 3rem;
                margin-top: 5rem;

            }
        }
        h1{
            color: ${props => props.theme.white};
        }
    }

    .icon{
        font-size: 30px;
    }
`

const Heading = styled.p`
    font-size: 30px;
    color: ${props => props.theme.white};
`

