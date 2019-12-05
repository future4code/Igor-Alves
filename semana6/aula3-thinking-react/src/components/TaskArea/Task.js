import React from 'react';
import styled from 'styled-components'



const TaskItem = styled.li `
    margin: 1em 0;
`

const MarkedTask = styled.li `
    margin: 1em 0;
    text-decoration: line-through;
`

// const onClickTask = (props.verifyTask) => {
//   props.verifyTask(TaskItem.id)
// }

function Task(props) {
  // if(props.id) {
  //   return (
  //     <MarkedTask id={props.id} onclick={onClickTask()}>{ props.name }</MarkedTask>
  //   );
  // } else {
    return (
      <TaskItem>{ props.name }</TaskItem>
    );
  // }
}



export default Task;