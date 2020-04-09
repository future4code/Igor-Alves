import React from 'react';
import styled from 'styled-components';
import { MenuItem } from '../MenuItem';
import Home from '../../resources/home.svg';
import Video from '../../resources/video.svg';
import Upload from '../../resources/upload.svg';
import User from '../../resources/user.svg';
import Logout from '../../resources/logout.svg';


const MenuContainer = styled.div`
  height: 100%;
  width: 15vw;
  background-color: #ffffff;
  box-shadow: 0px 6px 12px -5px rgba(0,0,0,0.2);
  display: flex;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: end;
  justify-content: initial;
  flex-direction: column;
  z-index: 9;
`


export function SideMenu(props) {
  return(
    <MenuContainer>
      <MenuItem icon={Home} text="Inicio"/>
      <MenuItem icon={Video} text="Meus Videos"/>
      <MenuItem icon={Upload} text="Upload de videos"/>
      <MenuItem icon={User} text="Alterar senha"/>
      <MenuItem icon={Logout} text="Logout"/>
    </MenuContainer>
  );
}