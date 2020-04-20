import React from 'react';
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import logo from '../../resources/logo.png';
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import { setMenuVisible } from "../../actions/user";

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  height: 7vh;
  width: 100vw;
  background-color: #ffffff;
  box-shadow: 0px 6px 12px -5px rgba(0,0,0,0.2);
  display: flex;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: initial;
  z-index: 10;
`

const Logo = styled.img`
  width: auto;
  height: 41px;
  margin-left: 30px;
`

const Button = styled.button`
  margin-left: 30px;
  padding: 8px;
  transform: rotate(270deg);
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

export function Header(props) {
  const dispatch = useDispatch()

  const onClickMenuButton = () => {
    dispatch(setMenuVisible())
  }

  const onClickLogo = () => {
    dispatch(push(routes.home))
  }

  return(
    <HeaderContainer>
      {props.menu ? <Button onClick={onClickMenuButton}>|||</Button> : null}
      <Logo onClick={onClickLogo} src={logo} alt="Logo FutureTube"/>
    </HeaderContainer>
  );
}