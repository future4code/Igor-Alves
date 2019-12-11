import React from 'react';
import styled from 'styled-components'



const ContainerUsuario = styled.div `
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


function Usuario(props) {
    const enviaId = (iD) => {
        const idUser = String(iD)
        props.deletarUsuario(idUser)
    }
  return (
    <ContainerUsuario>
        {props.listaUsuarios.map(item => {
            return <ItemLista>{item.name}<BotaoRemove onclick={enviaId}> X</BotaoRemove></ItemLista>
        })}
    </ContainerUsuario>
  );
}



export default Usuario;