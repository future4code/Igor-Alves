import React from 'react';
import styled from 'styled-components';
import CreatePlaylist from './Components/CreatePlaylist'
import AllPlaylists from './Components/AllPlaylists'
import PageHeader from './Components/PageHeader'



const ContainerSpotif4 = styled.div `
  text-align: center;
  margin: 0;
  padding: 0;
  background-color: #FAFBFC;
  height: 100vh;
`

const ChangePageButton = styled.button `
  position: fixed;
  bottom: 5em;
  left: 5em;
  background-color: green;
  color: white;
  border: none;
  box-shadow: 0em 0em 0.4em  rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  outline: none;
  padding: 0.6em;
  font-family: Verdana;
  font-weight: bold;
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
      : "Voltar para Criar Nova Playlist";

    return (
      <ContainerSpotif4>
        <PageHeader/>
        {this.state.currentPage === "signup" ? <CreatePlaylist/> : <AllPlaylists/>}
        <ChangePageButton onClick={this.handleChangePage}>{buttonText}</ChangePageButton>
      </ContainerSpotif4>
    );
  }
}




export default App;
