import React from 'react';
import styled from 'styled-components';
import logo from '../../resources/logo.png'

const HeaderContainer = styled.div`
  height: 10vh;
  width: 100vw;
  background-color: #ffffff;
  box-shadow: 0px 10px 12px -5px rgba(0,0,0,0.15);
  display: flex;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: initial;
`

const Logo = styled.img`
  width: 200px;
  height: 60%;
  margin-left: 30px;
`

const Button = styled.button`
  margin-left: 30px;
  padding: 8px;
  transform: rotate(270deg);
  font-size: 16px;
  background-color: #f2f3f7;
  border: none;
  outline: none;
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.1);
  border-radius: 5px;
`

export function Header(props) {
  return(
    <HeaderContainer>
      {props.menu && <Button onClick={props.onClickMenu}>|||</Button>}
      <Logo src={logo} alt="Logo FutureTube"></Logo>
    </HeaderContainer>
  );
}