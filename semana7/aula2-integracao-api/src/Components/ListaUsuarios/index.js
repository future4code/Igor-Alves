import React from 'react';
import styled from 'styled-components'



const ContainerLista = styled.div `
    width: fit-content;
    margin: 0 auto;
`

const ItemLista = styled.li `
    border-bottom: 1px solid black;
    padding: 0.5em 0em;
    list-style: none;
    width: auto;
    margin: 0 auto;
`

const BotaoRemove = styled.span `
    color: red;
    position: relative;
    left: 80%;
`

const Titulo = styled.h2 `
`

function Usuarios(props) {
    const enviaId = (iD) => {
        const idUser = String(iD)
        props.deletarUsuario(idUser)
    }
  return (
    <ContainerLista>
        <Titulo>Usuários Cadastrados:</Titulo>
        {props.listaUsuarios.map(item => {
            return <ItemLista>{item.name}<BotaoRemove onclick={enviaId}> X</BotaoRemove></ItemLista>
        })}
    </ContainerLista>
  );
}



export default Usuarios;
