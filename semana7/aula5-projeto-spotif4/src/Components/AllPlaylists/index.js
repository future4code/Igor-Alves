import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PlaylistItem from '../PlaylistItem'
import PlaylistMusic from '../PlaylistMusic/index'



const MainContainer = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: Verdana;
`

const ContainerPlaylists = styled.div `
    box-shadow: 0em 0em 0.2em  rgba(0, 0, 0, 0.5);
    padding: 2em;
    margin-top: 2em;
    border-radius: 15px;
`

const ContainerMusics = styled.div `
    box-shadow: 0em 0em 0.2em  rgba(0, 0, 0, 0.5);
    padding: 2em;
    margin-top: 2em;
    border-radius: 15px;
`

const Title = styled.h2 `
    margin: 0em;
    margin-bottom: 1.5em;
    font-family: Verdana;
`

const NewMusicForm = styled.form `
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledInput = styled.input `
    border-radius: 15px;
    border: none;
    box-shadow: 0em 0em 0.2em  rgba(0, 0, 0, 0.5);
    text-indent: 1em;
    font-family: Verdana;
    outline: none;
    height: 1.3em;
`

const AddButton = styled.button `
    color: white;
    background-color: green;
    border: none;
    border-radius: 15px;
    padding: 0.3em 0.9em;
    :hover{
        background-color: rgba(0, 0, 0, 0.6);
    }
    :active{
        background-color: green;
    }
    font-family: Verdana;
    outline: none;
` 

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api"
const token = "igor"


class AllPlaylist extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            allPlaylist: [],
            allMusicsOfPlaylist: [],
            musicsOfPlaylist: false,
            playlistName: "",
        }
    }

    componentDidMount() {
        this.getAllPlaylists();
    }

    getAllPlaylists = async () => {
        const endPoint = "/playlists/getAllPlaylists"

        const header = {
            headers: {
                "auth": token,
            }
        }


        const response = await axios.get(`${baseURL}${endPoint}`, header);
        this.setState({ allPlaylist: response.data.result.list})
    }


    getMusicsOfPlaylist = async (playlistId, playlistName ) => {
        const endPoint = `/playlists/getPlaylistMusics/${playlistId}`

        const header = {
            headers: {
                "auth": token,
            }
        }

        const response = await axios.get(`${baseURL}${endPoint}`, header);
        this.setState({ 
            allMusicsOfPlaylist: response.data.result.musics,
            playlistOnFocus: playlistName,
            musicsOfPlaylist: true,
        })
    }


    render() {
        return (
            <MainContainer>
                <ContainerPlaylists>
                    <Title>Minhas Playlists</Title>
                    <hr/>
                    {this.state.allPlaylist.map( playlist => (
                    <PlaylistItem onShowPlaylist={this.getMusicsOfPlaylist} playlist={playlist} onDeletePlaylist={this.getAllPlaylists}/>
                ))}
                </ContainerPlaylists>
                {this.state.musicsOfPlaylist && (
                <ContainerMusics>
                    <Title>{this.state.playlistOnFocus}</Title>
                    <NewMusicForm>
                        <div>
                            <label>Nome:</label><StyledInput/>
                        </div>
                        <div>
                            <label>Artista:</label><StyledInput/>
                        </div>
                        <div>
                            <label>Url:</label><StyledInput/>
                        </div>
                        <AddButton>Adicionar</AddButton>
                    </NewMusicForm>
                    <hr/>
                    {this.state.allMusicsOfPlaylist.map( music => (
                    <PlaylistMusic musics={music}/>
                ))}
                </ContainerMusics>)}
            </MainContainer>
        );
    }
}



export default AllPlaylist;