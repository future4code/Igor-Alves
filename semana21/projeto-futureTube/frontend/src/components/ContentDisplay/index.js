import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  height: 93vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: initial;
`

export function ContentDisplay(props) {
  return(
    <ContentContainer>
      {props.children}
    </ContentContainer>
  );
}