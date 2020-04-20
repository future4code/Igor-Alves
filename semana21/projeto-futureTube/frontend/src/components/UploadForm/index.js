import React from 'react';
import styled from 'styled-components';
import UploadImg from '../../resources/upload-background.png'


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
  width: 150px;
  height: 150px;
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


export function UploadForm(props) {
  return(
    <ContentContainer>
      <TextContent>
        <h2>Qual Video deseja fazer upload</h2>
        <BackgroundImg src={UploadImg}></BackgroundImg>
      </TextContent>
      <FormContainer onSubmit={props.onSubmit}>
        <Input
          name='url'
          type="text"
          onChange={props.onChange}
          value={props.video}
          placeholder='Video'
        />
        <Input 
          name='thumbnail'
          type="text"
          onChange={props.onChange}
          value={props.thumbnail}
          placeholder='Thumbnail'
        />
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
        <Button>Enviar</Button>
      </FormContainer>
    </ContentContainer>
  );
}