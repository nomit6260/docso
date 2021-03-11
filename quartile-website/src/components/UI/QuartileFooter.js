import React from "react";
import styled from "styled-components";
import {QuartileLogoPrimary} from "assets/icons"


const QuartileFooter = () => {
  return (
    <Container>
      <QuartileLogoPrimary className="QuartileLogo" />
    </Container>
  );
};
export default QuartileFooter;

const Container = styled.div`
.QuartileLogo {
    height: 38px;
    width: 129.5px;
    margin-bottom: 3rem;
  }
`;
