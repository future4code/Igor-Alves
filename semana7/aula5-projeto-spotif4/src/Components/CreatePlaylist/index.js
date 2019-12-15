import React from 'react';
import styled from 'styled-components';
import axios from 'axios';



const NewPlaylistForm = styled.form `
    background-color: white;
    width: fit-content;
    padding: 1em 4em 1.5em 4em;
    margin: 10vh auto;
    text-align: center;
    box-shadow: 0em 0em 0.2em  rgba(0, 0, 0, 0.5);
` 

const CreateButton = styled.button `
    color: white;
    background-color: green;
    border: none;
    border-radius: 15px;
    padding: 0.6em 1.2em;
    margin: 2em auto;
    :hover{
        background-color: rgba(0, 0, 0, 0.6);
    }
    :active{
        background-color: green;
    }
    font-family: Verdana;
    outline: none;
` 

const StyledLabel = styled.label `
    margin-top: 2em;
    font-family: Verdana;
`

const StyledInput = styled.input `
    margin-top: 2em;
    border-radius: 15px;
    border: none;
    box-shadow: 0em 0em 0.2em  rgba(0, 0, 0, 0.5);
    text-indent: 1em;
    font-family: Verdana;
    outline: none;
    height: 1.3em;
`

const Title = styled.h3 `
    color: black;
    font-family: Verdana;
`



const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api"
const token = "igor"


class CreatePlaylist extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            newPlaylistName: "",
        }
    }


    handleNameChange = event => {
        this.setState({ newPlaylistName: event.target.value });
    };


    handleCreatePlaylist = async () => {
        const playlistName = this.state.newPlaylistName
        const endPoint = "/playlists/createPlaylist"

        const playlistToBeCreated = {
            name: playlistName,
        }

        const header = {
            headers: {
                "auth": token,
            }
        }

        try {
            await axios.post(`${baseURL}${endPoint}`,playlistToBeCreated, header)
            this.setState({ newPlaylistName: "", }) 
        } catch(error) {
            if(error.message === "Request failed with status code 400"){
                alert(`
                Você não pode criar duas playlists com o mesmo nome. 
                Digite um nome que ainda não foi usado.`)
                this.setState({ newPlaylistName: "", })
            } else{
                alert(`
                Ocorreu um erro ao tentar criar a playlist.`)
            }
        }

    }


    render() {
        console.log(this.state.newPlaylistName)
        return (
            <NewPlaylistForm action='#'>
                <Title>Nova playlist</Title>
                <StyledLabel>Nome da playlist: </StyledLabel><StyledInput onChange={this.handleNameChange} value={this.state.newPlaylistName}/><br/>
                <CreateButton onClick={this.handleCreatePlaylist}>Criar</CreateButton>
            </NewPlaylistForm>
        );
    }
}



export default CreatePlaylist;