import React from 'react';
import styled from 'styled-components';
import TaskItem from '../TaskItem/index';
import TaskMenu from '../TaskMenu/index';
import { connect } from "react-redux";


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



function TaskList(props) {
    return (
      <ContainerList>
          <TaskInput placeholder='O que tem que ser feito?'/><button onClick={(event) => props.addTask(event.target.value)}>Adicionar</button>
          {props.taskList.map( task => (
            <TaskItem name={task.taskName} status={task.checked} key={task.id}/>
          ))}
          <TaskMenu/>
      </ContainerList>
    );
}


const mapStateToProps = state => {
  return {
    taskList: state.task.taskList
  };
};


const mapDispatchToProps = dispatch => {
  return {
    addTask: task => dispatch(addTaskAction(task))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);