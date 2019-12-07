import React from 'react';
import styled from 'styled-components'
import Task from './Task'



const TaskContainer = styled.div `
    border: 1px solid black;
    width: 400px;
    margin: 1em auto;
    padding: 1em 0;
`

function TaskArea(props) {
  return (
    <TaskContainer>
        {props.taskList.map(item => {
            return (
                <Task 
                verifyTask={props.verifyTask} 
                complete={item.complete} 
                name={item.name}
                id={item.id}
                />
            )
        })}
    </TaskContainer>
  );
}



export default TaskArea;