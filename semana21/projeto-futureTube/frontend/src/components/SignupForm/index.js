import React from 'react';
import styled from 'styled-components';


const FormContainer = styled.form`
  height: 70vh;
  width: 25vw;
  min-width: 400px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  margin: 5vh auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FormHeader = styled.h2`
  margin-top: 0;
  margin-bottom: 60px;
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
  margin-bottom: 7%;
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

export function SignupForm(props) {
  return(
    <FormContainer onSubmit={props.onSubmit}>
      <FormHeader>Cadastre-se</FormHeader>
      <Input
        type='text'
        name='name'
        placeholder='Nome'
        onChange={props.onChange}
        value={props.name}
        required
      />
      <Input
        type='email'
        name='email'
        placeholder='Email'
        onChange={props.onChange}
        value={props.email}
        required
      />
      <Input
        type='password'
        name='password'
        placeholder='Senha'
        onChange={props.onChange}
        value={props.password}
        required
      />
      <Input
        type='text'
        name='birthDate'
        placeholder='Data de Nascimento'
        onChange={props.onChange}
        value={props.birthDate}
        required
      />
      <Input
        type='text'
        name='picture'
        placeholder='Foto de perfil'
        onChange={props.onChange}
        value={props.picture}
        required
      />
      <Button>Enviar</Button>
    </FormContainer>
  );
}