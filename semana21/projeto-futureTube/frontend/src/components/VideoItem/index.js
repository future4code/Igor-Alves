import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '../../resources/delete.svg'


const ItemContainer = styled.div`
  height: 130px;
  width: 98%;
  margin-bottom: 1em;
  padding: 0;
  background-color: #ffffff;
  display: flex;
`

const VideoCover = styled.img`
  height: 100%;
  width: 30%;
`

const TextContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-around;
  margin-left: 2em;
`

const DeleteButton = styled.img`
  width: 25px;
  height: 25px;
  align-self: center;
  justify-self: flex-end;
  margin-right: 2em;
`

const ButtonContent = styled.div`
  width: 50%;
  display: flex;
  align-self: center;
  justify-content: flex-end;
`

export function VideoItem(props) {
  return(
    <ItemContainer>
      <VideoCover src='https://i.ytimg.com/vi/LzE45Wfd5zo/maxresdefault.jpg'/>
      <TextContent>
        <h3>Dusk | Chillstep Mix</h3>
        <p>há 2 anos</p>
      </TextContent>
      <ButtonContent>
        <DeleteButton src={DeleteIcon}/>
      </ButtonContent>
    </ItemContainer>
  );
}