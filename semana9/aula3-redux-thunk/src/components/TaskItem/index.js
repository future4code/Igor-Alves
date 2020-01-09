import React from 'react';
import styled from 'styled-components';
import CircleImg from '../../resources/circle-icon.png';
import MarkImg from '../../resources/checked-icon.png'
import { connect } from 'react-redux';
import { markTask } from '../../actions/task'
import { removeTask } from '../../actions/task'


const ContainerItem = styled.div `
    border-top: 1px solid rgba(0,0,0,0.3);
    height: 3.5em;
    display: flex;
    align-items: center;
`

const StatusImg = styled.img `
    width: 30px;
    height: 30px;
    margin: 0 1em;
`

const RemoveButton = styled.span `
    position: absolute;
    left: 70%;
    color: red;
`



class TaskItem extends React.Component {

    onMarkTask = () => {
        this.props.markTask(this.props.id)
    }

    onRemoveTask = () => {
        this.props.removeTask(this.props.id)
    }


    render() {
        return (
            <ContainerItem>
                <StatusImg onClick={this.onMarkTask} src={this.props.checked ? MarkImg : CircleImg}/><span>{this.props.name}</span><RemoveButton onClick={this.onRemoveTask}>X</RemoveButton>
            </ContainerItem>
        ); 
    }
}
  


const mapDispatchToProps = (dispatch) => ({
    markTask: (taskId) => dispatch(markTask(taskId)),
    removeTask: (taskId) => dispatch(removeTask(taskId))
});

  


export default connect(null, mapDispatchToProps)(TaskItem);