import styled from "styled-components";

export const DefaultBtn = styled.button`
  font-weight: 600;
  border: none;
  border-radius: 4px;
  font-size: 1.4rem;
  cursor: pointer;
  outline: none;
  text-transform: capitalize;
`;

export const GreenBtn = styled(DefaultBtn)`
  background: ${props => props.theme.success};
  padding: 1.3rem 3.2rem;
  color: white;
  &:hover {
    box-shadow: ${props =>
    `inset 0px 0px 20px 0px ${props.theme.successDarker}`};
  }
`;
export const WarningBtn = styled(DefaultBtn)`
  background: ${props => props.theme.warning};
  padding: 1.3rem 3.2rem;
  color: white;
  &:hover {
    box-shadow: ${props =>
    `inset 0px 0px 20px 0px ${props.theme.warningDarker}`};
  }
`;

export const YellowBtn = styled(DefaultBtn)`
  background: ${props => props.theme.yellow1};
  padding: 1rem;
  color: white;
  &:hover {
    box-shadow: ${props =>
    `inset 0px 0px 20px 0px ${props.theme.yellow2}`};
  }
`;


export const BlueBtn = styled(DefaultBtn)`
  background: ${props => props.theme.primary};
  padding: 1.3rem 3.2rem;
  color: white;
  &:hover {
    box-shadow: ${props =>
    `inset 0px 0px 20px 0px ${props.theme.highlight5Darker}`};
  }
`;

export const BlackBtn = styled(DefaultBtn)`
  background: black;
  padding: 1.3rem 3.2rem;
  color: white;
  transition: 0.3s;
  &:hover {
    background: white;
    color: black;
    border-color: black;
    border-style: solid;
    border-width: 2px;
  }
`;


// export const RedBtn = styled(DefaultBtn)`
//   background: ${props => props.theme.highlight5};
//   padding: 0.8rem 2.4rem;
//   color: white;
// `;


export const GrayBtn = styled(DefaultBtn)`
  padding: 0.7rem 1.4rem;
  background: ${props => props.theme.white};

  color: ${props => props => props.theme.gray4};

  border: ${props => `1px solid ${props.theme.gray6}`};
  &:hover {
    border: ${props => `1px solid ${props.theme.gray10}`};
    color: ${props => props.theme.gray11};
  }
`;

export const DarkBtn = styled(DefaultBtn)`
  padding: 0.7rem 1.4rem;
  background: ${props => props.theme.gray14};

  color: ${props => props => props.theme.white};

  &:hover {
    background: ${props => props.theme.gray15};
    color: ${props => props.theme.white};
  }
`;

export const PinkBtn = styled(DefaultBtn)`
  background: ${props => props.theme.highlight2};
  padding: 1.3rem 3.2rem;
  color: white;
  &:hover {
    box-shadow: ${props =>
    `inset 0px 0px 20px 0px ${props.theme.highlight2Darker}`};
  }
`;
