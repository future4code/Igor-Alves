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
  margin-bottom: 70px;
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

const RegisterSlogan = styled.div`
  font-size: 12px;
  margin-top: 60px;
`

export function LoginForm(props) {
  return(
    <FormContainer onSubmit={props.onSubmit}>
      <FormHeader>Bem-vindo ao FutureTube</FormHeader>
      <Input
        type='text'
        name='email'
        placeholder='Email'
        onChange={props.onChange}
        value={props.email}
      />
      <Input
        type='password'
        name='password'
        placeholder='Senha'
        onChange={props.onChange}
        value={props.password}
      />
      <Button>Entrar</Button>
      <RegisterSlogan>
        <span>Ainda não é cadastrado? </span><span onClick={props.signupPage}>Click Aqui</span>
      </RegisterSlogan>
    </FormContainer>
  );
}