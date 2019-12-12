import React from 'react';
import styled from 'styled-components'
import axios from 'axios'


const ContainerForm = styled.div `
`

const Formulario = styled.form `
    border: 1px solid black;
    padding: 3em 5em;
    width: fit-content;
    text-align: center;
    margin: 5em auto;
`

const Rotulo = styled.label `
    margin: 0.5em 0;
`

const CampoDeEntrada = styled.input `
    margin: 0.5em 0.5em;
`

const BotaoSalvar = styled.button `
    background-color: black;
    color: white;
    border: none;
    padding: 0.5em 1em;
    margin-top: 0.5em;
`

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"
const token = "igor"


class Cadastro extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            nomeUsuario: "",
            emailUsuario: "",
        }
    }


    aoDigitarNome = (event) => {
        this.setState({ nomeUsuario: event.target.value});
    }

    aoDigitarEmail = (event) => {
        this.setState({ emailUsuario: event.target.value});
    }


    criarNovoUsuario = async () => {
        const novoUsuario = {
          name: this.state.nomeUsuario,
          email: this.state.emailUsuario,
        };
        
        const cabecalho = {
            headers: {
                'api-token': token
            }
        };

        try {
            await axios.post(`${baseUrl}/users/createUser`, novoUsuario, cabecalho);
            this.setState({ nomeUsuario: "", emailUsuario: "",})
            alert("Usuário criado com sucesso!")
        } catch (error) {
            alert("Ocorreu algum erro durante o processo de criação de um novo usuário.")
        }   
     
    }


    render(){
        return (
            <ContainerForm>
                <Formulario action='#'>
                    <Rotulo>Nome:</Rotulo><CampoDeEntrada type="text" onChange={this.aoDigitarNome} value={this.state.nomeUsuario}/><br/>
                    <Rotulo>E-mail:</Rotulo><CampoDeEntrada type="text" onChange={this.aoDigitarEmail} value={this.state.emailUsuario}/><br/>
                    <BotaoSalvar onClick={this.criarNovoUsuario}>Salvar</BotaoSalvar>
                </Formulario>
            </ContainerForm>
        ); 
    }
}



export default Cadastro;