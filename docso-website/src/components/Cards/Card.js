// import React from 'react'
import styled from "styled-components"

export const Card = styled.div`
    border-top: solid;
    border-width: 5px;
    border-color: ${props => props.theme.primary};
    box-shadow: ${props => props.theme.cardShadow};
`

export const CardHeading = styled.div`
    text-align: center;
    font-size: 18px;
    color: ${props => props.theme.primary};
`