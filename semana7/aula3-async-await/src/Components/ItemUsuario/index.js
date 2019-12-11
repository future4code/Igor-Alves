import React from "react";
import axios from "axios";
import styled from 'styled-components';



const ItemLista = styled.li `
    border-bottom: 1px solid black;
    padding: 0.5em 0em;
    list-style: none;
    display: flex;
    justify-content: space-between;
`

const BotaoRemove = styled.span `
    color: red;
`



const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"
const token = "igor"


function Usuario(props) {

  const aoClicarEmDeletar = async () => {
    const url = `${baseUrl}/users/deleteUser?id=${props.usuario.id}`;

    const cabecalho = {
        headers: {
            'api-token': token
        }
    };

    const confirmacao = window.confirm("Tem certeza de que deseja deletar?");

    if (confirmacao){
        try {
            await axios.delete(url, cabecalho);
            props.aoDeletar();
        } catch (error) {
            alert("Ocorreu algum erro ao tentar deletar o usuário.")
        }
    }
  };



  return (
    <ItemLista>
      {props.usuario.name} <BotaoRemove onClick={aoClicarEmDeletar}>X</BotaoRemove>
    </ItemLista>
  );
};

export default Usuario;