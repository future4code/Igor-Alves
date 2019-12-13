import React from 'react';
import styled from 'styled-components';
import CreatePlaylist from './Components/CreatePlaylist'
import AllPlaylist from './Components/AllPlaylist'




const ContainerSpotif4 = styled.div `
  text-align: center;
`

const ChangePageButton = styled.button `
  position: fixed;
  bottom: 5em;
  left: 5em;
`


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentPage: "signup",
    }
  }
  
  handleChangePage = () => {
    if (this.state.currentPage === "signup") {
      this.setState({ currentPage: "list" });
    } else {
      this.setState({ currentPage: "signup" });
    }
  };

  render() {
    const buttonText =
      this.state.currentPage === "signup" 
      ? "Ir para Lista de playlists"
      : "Voltar para Cadastro de Playlists";

    return (
      <ContainerSpotif4>
        <h1>Spotif4</h1>
        <hr/>
        {this.state.currentPage === "signup" ? <CreatePlaylist/> : <AllPlaylist/>}
        <ChangePageButton onClick={this.handleChangePage}>{buttonText}</ChangePageButton>
      </ContainerSpotif4>
    );
  }
}




export default App;
