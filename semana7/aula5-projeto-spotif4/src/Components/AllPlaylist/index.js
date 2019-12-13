import React from 'react';
// import styled from 'styled-components';
import axios from 'axios';
import PlaylistItem from '../PlaylistItem'
import PlaylistMusics from '../PlaylistMusics/index'


const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api"
const token = "igor"


class AllPlaylist extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            allPlaylist: [],
            allMusicsOfPlaylist: [],
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


    getMusicsOfPlaylist = async (PlaylistId) => {
        const endPoint = `/playlists/getPlaylistMusics/${PlaylistId}`

        const header = {
            headers: {
                "auth": token,
            }
        }

        const response = await axios.get(`${baseURL}${endPoint}`, header);
        this.setState({ allMusicsOfPlaylist: response.data.result.musics})
    }


    render() {
        console.log(this.state.allMusicsOfPlaylist)
        return (
            <div>
                <h2>Minhas Playlists</h2>
                {this.state.allPlaylist.map( playlist => (
                    <PlaylistItem onShowPlaylist={this.getMusicsOfPlaylist} playlist={playlist} onDeletePlaylist={this.getAllPlaylists}/>
                ))}
                <hr/>
                {<h2>Musicas da Playlist</h2>}
                {this.state.allMusicsOfPlaylist.map( music => (
                    <PlaylistMusics musics={music}/>
                ))}
            </div>
        );
    }
}



export default AllPlaylist;