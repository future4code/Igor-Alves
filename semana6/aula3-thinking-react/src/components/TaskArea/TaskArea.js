import React from 'react';
import styled from 'styled-components'
import Task from './Task'



const TaskContainer = styled.div `
    border: 1px solid black;
    width: 400px;
    margin: 1em auto;
    padding: 1em 0;
`

const TaskItem = styled.li `
    margin: 1em 0;
    width: 50px;
`

function TaskArea(props) {
  return (
    <TaskContainer>
        {props.taskList.map(item => {
            return (
                <Task name={item.name}/>
            )
        })}
    </TaskContainer>
  );
}



export default TaskArea;