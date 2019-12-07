import React from 'react';
import styled from 'styled-components'
import FormTitle from '../FormCard/FormTitle'
import FormInput from '../FormCard/FormInput'
import FormComboBox from '../FormCard/FormComboBox'



const FormCardContainer = styled.div `
    border: 1px solid black;
    width: 400px;
    height: 200px;
    margin: 1em auto;
`


function FormCard(props) {
  return (
    <FormCardContainer>
        <FormTitle/>
        <FormInput addNewTask={props.addNewTask}/>
        <FormComboBox/>
    </FormCardContainer>
  );
}



export default FormCard;