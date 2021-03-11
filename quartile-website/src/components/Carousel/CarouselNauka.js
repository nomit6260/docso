import React from 'react';
import CNauka from 'nuka-carousel';
import { NextIcon, BackIcon } from "assets/icons"
import styled from "styled-components"


const Carousel = ({elements}) => {
    return(
        <Container className="carousel">
        <CNauka
            renderCenterLeftControls={({ previousSlide }) => (
                <button className="btn-back common" onClick={previousSlide}><BackIcon /></button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <button className="btn-next common" onClick={nextSlide}><NextIcon /></button>
            )}
            defaultControlsConfig={{
                pagingDotsStyle: {
                  margin: 5,
                },
              }}
        >
            {
                elements.map((ele, i) => ele)
            }
      </CNauka>
      </Container>
    )
}

export default Carousel

const Container = styled.div`
    position: relative;
    .dot-grp{
        position: absolute;
        font-size: 15px;
        height: 50px;
        width: 50px;
        bottom: 0;
        color: black;
        left: 50%;
    }
    svg{
        height: 50px;
        fill: ${props => props.theme.gray7};
    }
    .common{
        background: transparent;
        svg{
            height: 50px;
            font-size: 15px;
            fill: ${props => props.theme.gray7};
            &:hover {
                fill: ${props => props.theme.gray6};
                transition: fill 0.2s;
            }
        }
    }
    .btn-back{
        margin-left: 1rem;
    }
    .btn-next{
        margin-right: 1rem;
    }
`