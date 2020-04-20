import React from 'react';
import styled from 'styled-components';

const ContainerButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: end;
`

const Button = styled.button`
  margin-left: 30px;
  padding: 8px;
  font-size: 19px;
  background-color: #ffffff;
  border: none;
  outline: none;
  border-radius: 5px;
  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  :visited {
    background-color: #ffffff;
  }
  :active {
    background-color: #ffffff;
  }
`

export function PageButton(props) {
  return(
    <ContainerButton>
      <Button onClick={props.previous}>Anterior</Button>
      <h3>{props.page}</h3>
      <Button onClick={props.next}>Próximo</Button>
    </ContainerButton>
  );
}