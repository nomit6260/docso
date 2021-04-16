// import React from 'react'
import styled from "styled-components"

export const Card = styled.div`
width:50%;
margin-top:4rem;
border-top: solid;
border-width: 5px;
border-color:#1eab94;
box-shadow: ${props => props.theme.cardShadow};
`

export const CardHeading = styled.div`
text-align: center;
font-size: 18px;
color: ${props => props.theme.primary};
`