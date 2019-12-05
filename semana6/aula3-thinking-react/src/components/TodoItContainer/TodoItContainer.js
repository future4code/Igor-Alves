import React from 'react';
import styled from 'styled-components'
import FormCard from '../FormCard/FormCard'
import TaskArea from '../TaskArea/TaskArea'



const TodoContainer = styled.div `
    text-align: center;
`


class TodoItContainer extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            TaskList: []
        }
    }


    addNewTask = (Task) => {
        if(Task !== "") {
            const newTask = {
                id: Date.now(),
                name: Task,
                complete: false,
            }
            const copyTaskList = [...this.state.TaskList, newTask]
            this.setState(
                {TaskList: copyTaskList,}
            );  
        }
    }


    // verifyTask = (postId) => {
    //     const copyTaskList = this.state.TaskList.map(task => {
    //         if (task.id === postId) {
    //           const copyTask = { ...task };
    //           copyTask.complete = !copyTask.complete;
    //           return copyTask;
    //         }
    //         return task;
    //       });
    // }


    render() {
        console.log(this.state.TaskList)
        return (
            <TodoContainer>
                <FormCard addNewTask={this.addNewTask}/>
                <TaskArea taskList={this.state.TaskList} verifyTask={this.verifyTask}/>
            </TodoContainer>
        ); 
    }
}

export default TodoItContainer;