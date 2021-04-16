import React from 'react'
import styled from "styled-components";

function Input(props) {
    return (
        <InputContainer {...props?.style}>
            <div>
                <input
                  {...props}
                />
              </div>
        </InputContainer>
    )
}

export default Input

const InputContainer = styled.div`
    input {
        background: ${props => props.theme.gray9};
        padding: 1rem;
        border-color: ${props => props.theme.primary};
    }
`