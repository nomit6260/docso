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
            Home
        </Container>
    )
}

export default HomeComponent

const Container = styled.div`
    padding-top: 8rem;
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

