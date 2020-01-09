import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeAllTask } from '../../actions/task'
import { markAllTasks } from '../../actions/task'



const ContainerMenu = styled.div `
    height: 3.5em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid rgba(0,0,0,0.3);
`

const ContainerFilters = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
` 

const ItemMenu = styled.span `
    padding: 0 5px;
    :hover {
        border: 1px solid #b83f45
    }
`



class TaskMenu extends React.Component {
   
    onRemoveAllTask = () => {
        this.props.removeAllTask()
    }

    onMarkAllTasks = () => {
        this.props.markAllTasks()
    }

    render() {
        return (
            <ContainerMenu>
                <span onClick={this.onMarkAllTasks}>Marcar todas como completas</span>
                <ContainerFilters>
                    <ItemMenu>Todas</ItemMenu>
                    <ItemMenu>Pendentes</ItemMenu>
                    <ItemMenu>completas</ItemMenu>
                </ContainerFilters>
                <span onClick={this.onRemoveAllTask}>Remover completas</span>
            </ContainerMenu>
        );
    }
}
  


const mapDispatchToProps = (dispatch) => ({
    removeAllTask: () => dispatch(removeAllTask()),
    markAllTasks: () => dispatch(markAllTasks()),
});


  
export default connect(null, mapDispatchToProps)(TaskMenu);