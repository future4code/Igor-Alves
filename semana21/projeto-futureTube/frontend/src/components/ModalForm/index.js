import React from 'react';
import styled from 'styled-components';

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30vw;
  height: 40vh;
  display: flex;
  align-items: initial;
  justify-content: initial;
`

const Modal = styled.div`
  display: block;
  position: fixed;
  z-index: 1; 
  padding-top: 25vh;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; 
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4); 
`

const FormContainer = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-around; 
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
  width: 30%;
  height: 3em;
  border-radius: 4px;
  border: 1px solid rgba(230,230,230, 1);
  background-color: #f02700;
  color: #000000;
  outline: none;
`

const CloseButton = styled.button` 
  height: 25px;
  width: 25px;
  border: none;
  background-color: white;
  border-radius: 30px;
  :hover{
    background-color: #f1f1f1;
  }
  outline: none;
`

export function ModalForm(props) {
  return(
    <Modal>
      <ModalContent>
        <FormContainer>
          <Input 
            name='title'
            type="text"
            onChange={props.onChange}
            value={props.title}
            placeholder='Titulo'
          />
          <Input 
            name='description'
            type="text"
            onChange={props.onChange}
            value={props.description}
            placeholder='Descrição'
          />
          <Button onClick={props.onSubmit}>Atualizar</Button>
        </FormContainer>
        <CloseButton onClick={props.close}>X</CloseButton>
      </ModalContent>
  </Modal>
  );
}