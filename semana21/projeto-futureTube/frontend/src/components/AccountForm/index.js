import React from 'react';
import styled from 'styled-components';
import AccountImg from '../../resources/user.svg'


const ContentContainer = styled.div`
  height: 88vh;
  width: 100%;
  margin: 1em;
  padding: 0px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const BackgroundImg = styled.img`
  width: 120px;
  height: 120px;
`

const TextContent = styled.div`
  text-align: center;
`

const FormContainer = styled.form`
  display: flex;
  width: 40%;
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


export function AccountForm(props) {
  return(
    <ContentContainer>
      <TextContent>
        <h2>Deseja alterar a sua senha</h2>
        <BackgroundImg src={AccountImg}></BackgroundImg>
      </TextContent>
      <FormContainer onSubmit={props.onSubmit}>
        <Input
          name='oldPassword'
          type="password"
          onChange={props.onChange}
          value={props.oldPassword}
          placeholder='Senha Antiga'
        />
        <Input 
          name='newPassword'
          type="password"
          onChange={props.onChange}
          value={props.newPassword}
          placeholder='Senha Nova'
        />
        <Input 
          name='confirmPassword'
          type="password"
          onChange={props.onChange}
          value={props.confirmPassword}
          placeholder='Confirmar Senha Nova'
        />
        <Button>Alterar</Button>
      </FormContainer>
    </ContentContainer>
  );
}