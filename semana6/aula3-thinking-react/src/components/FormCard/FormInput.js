import React from 'react';
import styled from 'styled-components'



const InputContainer = styled.div `
    margin-bottom: 1em;
`

const TaskInput = styled.input `
    margin-right: 1em;
`

const FormButton = styled.button `
`



class FormInput extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        inputTask: "",
    }
  }


  controlInputTask = e => {
    this.setState({
        inputTask: e.target.value,
    })
  }

  sendInputsValue = () => {
    this.props.addNewTask(this.state.inputTask);

    this.setState({inputTask: "",})
  }


  render(){
    return (
        <InputContainer>
            <TaskInput value={this.state.inputTask} onChange={this.controlInputTask}/>
            <FormButton onClick={this.sendInputsValue}> Adicionar </FormButton>
        </InputContainer>
      ); 
  }
}



export default FormInput;