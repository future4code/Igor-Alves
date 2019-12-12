import React from 'react';
import styled from 'styled-components';
import CadastroUsuario from './Components/CadastroUsuario/index';
import ListaUsuarios from './Components/ListaUsuarios/index';



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


  render() {
    return (
      <div className="App">
        <BotaoDaPagina onClick={this.mudarPágina}>{this.state.nomebotao}</BotaoDaPagina>
        {this.state.primeiraPagina ? (<CadastroUsuario/>) : (<ListaUsuarios/>)}
      </div>
    );
  }
}



export default App;
