import React from 'react';
import styled from 'styled-components';


const ItemContainer = styled.div`
  height: 3em;
  width: 100%;
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: initial;
  z-index: 9;
  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  :active {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 30px;
`


export function MenuItem(props) {
  return(
    <ItemContainer onClick={props.changePage}>
      <Icon src={props.icon} alt='Icone do menu'/><span>{props.text}</span>
    </ItemContainer>
  );
}