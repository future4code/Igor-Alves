import React from 'react';
import styled from 'styled-components';
import axios from 'axios';



const NewPlaylistForm = styled.form `
    border: 1px solid green;
    width: fit-content;
    padding: 3em 4em;
    margin: 0 auto;
    text-align: center;
` 

const CreateButton = styled.button `
    color: white;
    background-color: black;
    border: none;
    padding: 0.5em 1em;
    margin: 2em auto;
    :hover{
        background-color: green;
    }
    :active{
        background-color: black;
    }
` 

const StyledLabel = styled.label `
    margin-top: 2em;
`

const StyledInput = styled.input `
    margin-top: 2em;
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
            <div>
                <NewPlaylistForm action='#'>
                    <StyledLabel>Nome da playlist: </StyledLabel><StyledInput onChange={this.handleNameChange} value={this.state.newPlaylistName}/><br/>
                    <CreateButton onClick={this.handleCreatePlaylist}>Criar</CreateButton>
                </NewPlaylistForm>
            </div>
        );
    }
}



export default CreatePlaylist;