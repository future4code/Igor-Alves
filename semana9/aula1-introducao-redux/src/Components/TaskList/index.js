import React from 'react';
import styled from 'styled-components';
import TaskItem from '../TaskItem/index';
import TaskMenu from '../TaskMenu/index';
import { element } from 'prop-types';


const ContainerList = styled.div `
  background-color: #ffffff;
  box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.3);
  width: 45vw;
  margin: 0 auto;
`

const TaskInput = styled.input `
  border: none;
  height: 3.5em;
  width: 100%;
  outline: none;
  text-indent: 4em;
  font-size: 15pt;
  ::placeholder {
    color: #9c9c9c;
    text-indent: 4em;
    font-size: 15pt;
    font-style: italic;
  }
`

// Actions-Creators
const addTask = (event) => {
  return {
    type: "ADD_TASK",
    payload: {
      value: event.target.value 
    }
  }
}

const displayTasks = () => {
  return {
    type: "DISPLAY_TASKS",
    payload: {}
  }
}



function TaskList() {
    return (
      <ContainerList>
          <TaskInput placeholder='O que tem que ser feito?'/>
          <TaskItem/>
          <TaskMenu/>
      </ContainerList>
    );
}
  


export default TaskList;