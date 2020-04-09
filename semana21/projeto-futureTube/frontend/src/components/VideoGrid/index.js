import React from 'react';
import styled from 'styled-components';


const GridContainer = styled.div`
  height: 100%;
  width: 85vw;
  margin: 0;
  padding: 1em 1em 0 1em;
  display: grid;
  gap: 1em ;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: fit-content(40%);
  background-color: #fafbfc;
`

export function VideoGrid(props) {
  return(
    <GridContainer>
      {props.children}
    </GridContainer>
  );
}