import React from 'react';
import styled from 'styled-components'



const ContainerForm = styled.div `
`

const Formulario = styled.form `
    border: 1px solid black;
    padding: 3em 5em;
    width: fit-content;
    text-align: center;
    margin: 5em auto;
`

const StyledLabel = styled.label `
    margin: 0.5em 0;
`

const StyledInput = styled.input `
    margin: 0.5em 0.5em;
`

const BotaoSalvar = styled.button `
    background-color: black;
    color: white;
    border: none;
    padding: 0.5em 1em;
    margin-top: 0.5em;
`




function Cadastro(props) {
    const userName = (event) => {
        const nome = event.target.value
        props.pegarNomeUsuario(nome)
    }

    const emailUser = (event) => {
        const email = event.target.value
        props.pegarEmailUsuario(email)
    }

  return (
    <ContainerForm>
        <Formulario action='#'>
            <StyledLabel>Nome:</StyledLabel><StyledInput type="text" onChange={userName}/><br/>
            <StyledLabel>E-mail:</StyledLabel><StyledInput type="text" onChange={emailUser}/><br/>
            <BotaoSalvar onClick={props.criarUsuario}>Salvar</BotaoSalvar>
        </Formulario>
    </ContainerForm>
  );
}



export default Cadastro;
