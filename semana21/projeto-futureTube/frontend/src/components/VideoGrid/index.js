import React from 'react';
import styled from 'styled-components';


const GridContainer = styled.div`
  height: 88vh;
  width: 100%;
  margin: 0;
  padding: 1em 1em 0 1em;
  display: grid;
  gap: 1em ;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  background-color: #fafbfc;
  overflow:auto;
`

export function VideoGrid(props) {
  return(
    <GridContainer>
      {props.children}
    </GridContainer>
  );
}