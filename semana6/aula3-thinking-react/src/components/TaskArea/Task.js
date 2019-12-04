import React from 'react';
import styled from 'styled-components'



const TaskItem = styled.li `
    margin: 1em 0;
`


function Task(props) {
  return (
    <TaskItem>{ props.name }</TaskItem>
  );
}



export default Task;