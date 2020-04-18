import React from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { MenuItem } from '../MenuItem';
import Home from '../../resources/home.svg';
import Video from '../../resources/video.svg';
import Upload from '../../resources/upload.svg';
import User from '../../resources/user.svg';
import Logout from '../../resources/logout.svg';
import { routes } from '../../containers/Router';
import { push } from "connected-react-router";
import { userLogout } from '../../actions/user'


const MenuContainer = styled.aside`
  height: 100%;
  width: 300px;
  background-color: #ffffff;
  box-shadow: 0px 6px 12px -5px rgba(0,0,0,0.2);
  display: flex;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: initial;
  justify-content: initial;
  flex-direction: column;
  z-index: 9;
`


export function SideMenu() {
  const dispatch = useDispatch()

  return(
    <MenuContainer>
      <MenuItem 
        icon={Home} 
        text="Inicio" 
        changePage={() =>dispatch(push(routes.home))}
      />
      <MenuItem 
        icon={Video} 
        text="Meus Videos" 
        changePage={() =>dispatch(push(routes.videos))}
      />
      <MenuItem 
        icon={Upload} 
        text="Upload de videos" 
        changePage={() =>dispatch(push(routes.upload))}
      />
      <MenuItem 
        icon={User} 
        text="Alterar senha" 
        changePage={() => dispatch(push(routes.account))}
      />
      <MenuItem 
        icon={Logout} 
        text="Logout" 
        changePage={() => dispatch(userLogout())}
      />
    </MenuContainer>
  );
}