import React from 'react';
import styled from 'styled-components';


const FormContainer = styled.form`
  height: 82vh;
  width: 100%;
  margin: 0;
  padding: 30px;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FormHeader = styled.h2`

`

const Input = styled.input`
  width: 80%; 
  display: 'inline';
  height: 3em;
  border-radius: 4px;
  border: 1px solid rgba(230,230,230, 1);
  text-indent: 0.5em;
  text-align: center;
  ::placeholder{
    text-align: center;
  }
  margin-bottom: 10%;
`

const Button = styled.button`
  width: 50%;
  height: 3em;
  border-radius: 4px;
  border: 1px solid rgba(230,230,230, 1);
  background-color: #f02700;
  color: #000000;
  outline: none;
`


export function UploadForm(props) {
  return(
    <FormContainer onSubmit={props.onSubmit}>
      <FormHeader>Qual Video deseja fazer upload</FormHeader>
    </FormContainer>
  );
}