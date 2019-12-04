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


    render() {
        return (
            <TodoContainer>
                <FormCard addNewTask={this.addNewTask}/>
                <TaskArea taskList={this.state.TaskList}/>
            </TodoContainer>
        ); 
    }
}

export default TodoItContainer;