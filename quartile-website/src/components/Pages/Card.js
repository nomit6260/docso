// import React from 'react'
import styled from "styled-components"

export const Card = styled.div`
    width:100%;
    padding:15px;
    border: 1px solid;
    box-shadow: ${props => props.theme.cardShadow};
`

export const CardHeading = styled.div`
    text-align: left;
    font-size: 18px;
    color: ${props => props.theme.primary};
`