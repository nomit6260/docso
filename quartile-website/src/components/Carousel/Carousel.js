import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import styled from "styled-components"
import 'pure-react-carousel/dist/react-carousel.es.css';
import { NextIcon, BackIcon } from "assets/icons"

const Carousel = ({ totalSlides, slideWidth, slideHeight, elements }) => {
    return (
        <Container>
            <CarouselProvider
                naturalSlideWidth={slideWidth}
                naturalSlideHeight={slideHeight}
                totalSlides={totalSlides}
                infinite
            >
                <Slider className="carousel">
                    {
                        elements.map((ele, index) => (
                            <Slide index={index}>{ele}</Slide>
                        ))
                    }

                </Slider>
                <ButtonBack className="btn-back common"><BackIcon /></ButtonBack>
                <ButtonNext className="btn-next common"><NextIcon /></ButtonNext>
                <DotGroup className="dot-grp" dotNumbers />
            </CarouselProvider>
        </Container>
    )
}

export default Carousel

const Container = styled.div`
    position: relative;
    svg{
        height: 50px;
        font-size: 15px;
        fill: ${props => props.theme.gray7};
        &:hover {
            fill: ${props => props.theme.gray6};
            transition: fill 0.2s;
        }
    }
    .dot-grp{
        position: absolute;
        font-size: 15px;
        height: 50px;
        width: 50px;
        bottom: 0;
        color: black;
        left: 50%;
    }
    .common{
        background: transparent;
        position: absolute;
        font-size: 15px;
        height: 50px;
        width: 50px;
    }
    .btn-back{
        top: 45%;
        margin-left: 1rem;
    }
    .btn-next{
        top: 45%;
        right: 0;
        margin-right: 1rem;
    }
`