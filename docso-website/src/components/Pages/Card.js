// import React from 'react'
import styled from "styled-components"

export const Card = styled.div`
width:50%;
margin-top:4rem;
border: solid;
border-width: 2px;
box-shadow: ${props => props.theme.cardShadow};
`

export const CardHeading = styled.div`
text-align: left;
font-size: 18px;
color: ${props => props.theme.primary};
`