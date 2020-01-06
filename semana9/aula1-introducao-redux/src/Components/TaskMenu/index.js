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

// Actions-Creators
const displayTasks = () => {
    return {
        type: "DISPLAY_TASKS",
        payload: {}
    }
}
  
const filterCheckedTasks = () => {
    return {
        type: "FILTER_CHECKED_TASKS",
        payload: {}
    }
}
  
const filterUncheckedTasks = () => {
    return {
        type: "FILTER_UNCHECKED_TASKS",
        payload: {}
    }
}
  
const MarkTasks = () => {
    return {
        type: "MARK_TASKS",
        payload: {
            checked: true
        }
    }
}
  
const removeAllTasks = () => {
    return {
        type: "REMOVE_ALL_TASKS",
        payload: {
            TaskList: []
        }
    }
}



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