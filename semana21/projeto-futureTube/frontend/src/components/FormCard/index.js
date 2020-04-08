import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  height: 70vh;
  width: 25vw;
  min-width: 400px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  margin: 5vh auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export function FormCard(props) {
  return(
    <CardContainer>
      {props.children}
    </CardContainer>
  );
}