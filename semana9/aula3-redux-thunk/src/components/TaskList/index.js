import React from 'react';
import styled from 'styled-components';
import TaskItem from '../TaskItem/index';
import TaskMenu from '../TaskMenu/index';
import { connect } from 'react-redux';
import { addTaskAction } from '../../actions/task'
import { getTasks } from '../../actions/task'



const ContainerList = styled.div `
  background-color: #ffffff;
  box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.3);
  width: 45vw;
  margin: 0 auto;
`

const TaskInput = styled.input `
  border: none;
  height: 3.5em;
  width: 80%;
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

const TaskAddButton = styled.button `
  padding: 10px 15px;
  background-color: #b83f45;
  color: white;
  border: none;
  box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.3);
  outline: none;
  margin-left: 2%;
  :hover{
    background-color: #8c8c8c;
    color: white;
  }
  :active {
    background-color: #b83f45;
    color: white;
  }
`



class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskValue: ""
    };
  }

  // componentDidMount() {
  //   this.props.getAllTasks()
  // }

  onChangeTask = event => {
    this.setState({ taskValue: event.target.value });
  };

  onCreateTask = () => {
    this.setState({taskValue: ""})
    this.props.addTask(this.state.taskValue)
  }

  render() {
    return (
      <ContainerList>
          <TaskInput onChange={this.onChangeTask} value={this.state.taskValue} placeholder='O que tem que ser feito?'/>
          <TaskAddButton onClick={this.onCreateTask}>Adicionar</TaskAddButton>
          {this.props.taskList.map( task => (
            <TaskItem name={task.task} checked={task.checked} key={task.id} id={task.id}/>
          ))}
          <TaskMenu/>
      </ContainerList>
    );
  }
}



const mapStateToProps = state => {
  return {
    taskList: state.task.taskList,
  };
};


const mapDispatchToProps = dispatch => {
  return {
    addTask: task => dispatch(addTaskAction(task)),
    // getAllTasks: () => dispatch(getTasks()),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(TaskList);