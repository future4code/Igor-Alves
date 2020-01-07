import React from 'react';
import styled from 'styled-components';
import CircleImg from '../../Resources/circle-icon.png';


const ContainerItem = styled.div `
    border-top: 1px solid rgba(0,0,0,0.3);
    border-bottom: 1px solid rgba(0,0,0,0.3);
    height: 3.5em;
    display: flex;
    align-items: center;
`

const StatusImg = styled.img `
    width: 30px;
    height: 30px;
    margin: 0 1em;
`

const RemoveButton = styled.span `
    position: absolute;
    left: 70%;
`


function TaskItem(props) {
    return (
        <ContainerItem>
            <StatusImg src={CircleImg}></StatusImg><span>{props.name}</span><RemoveButton>X</RemoveButton>
        </ContainerItem>
    );
}
  
  
  
export default TaskItem;