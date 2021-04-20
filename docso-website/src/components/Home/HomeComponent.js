import React from 'react'
import styled from "styled-components"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { GreenBtn, YellowBtn } from "styles/Buttons"
import Carousel from "components/Carousel/CarouselNauka"
import { MakeInIndiaLogo, DigitalIndiaLogo, AatmaNirbharBharatLogo } from "assets/icons"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Card, CardHeading } from "components/Cards/Card"
import { BsLock, BsCheckCircle, BsLayers, BsArrowsFullscreen } from 'react-icons/bs';
import Img1 from "components/ScreenShot/home.png"
import Img2 from "components/ScreenShot/drawer.png"
import Img3 from "components/ScreenShot/book.png"
import Img4 from "components/ScreenShot/login.png"



function HomeComponent() {
    return (
        <Container>
            <div>
             <AliceCarousel autoPlay autoPlayInterval="1000">
                 <img src={Img1} className="sliderimg"/>
                 <img src={Img2} className="sliderimg"/>
                 <img src={Img3} className="sliderimg"/>
                 <img src={Img4} className="sliderimg"/>
      
      
            </AliceCarousel>
            </div>
     
        </Container>
    )
}

export default HomeComponent

const Container = styled.div`
    padding-top: 8rem;
    .sliderimg{
        width: 400px;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;      
        object-fit: cover
      }
`

