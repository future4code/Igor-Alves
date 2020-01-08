import React from 'react';
import styled from 'styled-components';

const ContainerMenu = styled.div `
    height: 3.5em;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const ContainerFilters = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
` 

const ItemMenu = styled.span `
    padding: 0 5px;
    :hover {
        border: 1px solid #b83f45
    }
`



function TaskMenu() {
    return (
        <ContainerMenu>
            <span>Marcar todas como completas</span>
            <ContainerFilters>
                <ItemMenu>Todas</ItemMenu>
                <ItemMenu>Pendentes</ItemMenu>
                <ItemMenu>completas</ItemMenu>
            </ContainerFilters>
            <span>Remover completas</span>
        </ContainerMenu>
    );
}
  
  
  
export default TaskMenu;