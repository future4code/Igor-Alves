import React from 'react';
import styled from 'styled-components'
import FormCadastro from './Components/FormCadastro/index'
import ListaUsuarios from './Components/ListaUsuarios/index'
import axios from 'axios'



const BotaoDaPagina = styled.button `
  margin: 0.5em;
`


const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"
const token = "igor"


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      primeiraPagina: true,
      nomebotao: "Ir para página de lista",
      cadastrados: [],
      nomeUsuario: "",
      emailUsuario: "",
    }
  }

  mudarPágina = () => {
    if(this.state.primeiraPagina) {
      this.setState({
        primeiraPagina: false,
        nomebotao: "Ir para página de registro",
      })
    } else {
      this.setState({
        primeiraPagina: true,
        nomebotao: "Ir para página de lista",
      })
    }
  }

  pegarNomeUsuario = (nome) => {
    this.setState({nomeUsuario: nome,})
  }

  pegarEmailUsuario = (email) => {
    this.setState({emailUsuario: email,})
  }

  criarUsuario = () => {
    const data = {
      name: this.state.nomeUsuario,
      email: this.state.emailUsuario,
    }

    const request = axios.post(`${baseUrl}/users/createUser`, data, {
      headers: {
        'content-type': 'application/json',
        'api-token': token,
      }
    })

    request.then((response) => {
      alert("Usuário criado com sucesso!")
      this.mostrarTodosUsuarios()
      this.setState({
        nomeUsuario: "",
        emailUsuario: "",
      })
    }).catch((error) => {
      alert("Ocorreu algum erro durante o processo.")
    })
  }

  mostrarTodosUsuarios = () => {
    const request = axios.get(`${baseUrl}/users/getAllUsers`, {
      headers: {
        'api-token': token,
      }
    })

    request.then((response) => {
      this.setState({cadastrados: response.data.result})
    }).catch((error) => {
      alert("Ocorreu algum erro ao mostrar os usuários.")
    })
  }

  deletarUsuario = (idUser) => {
    const request = axios.delete(`${baseUrl}/users/deleteUser?id=${idUser}`, {
      headers: {
        'api-token': token,
      }
    })

    request.then((response) => {
      this.mostrarTodosUsuarios()
    }).catch((error) => {
      alert("Ocorreu algum erro ao deletar o usuário.")
    })
  }

  render() {
    return (
      <div className="App">
        <BotaoDaPagina onClick={this.mudarPágina}>{this.state.nomebotao}</BotaoDaPagina>
        {this.state.primeiraPagina ? (<FormCadastro pegarNomeUsuario={this.pegarNomeUsuario} pegarEmailUsuario={this.pegarEmailUsuario} criarUsuario={this.criarUsuario}/>) : (<ListaUsuarios listaUsuarios={this.state.cadastrados} deletarUsuario={this.deletarUsuario}/>)}
      </div>
    );
  }
}



export default App;
