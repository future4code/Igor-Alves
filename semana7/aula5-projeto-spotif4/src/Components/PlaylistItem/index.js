import React from "react";
import axios from "axios";
import styled from 'styled-components';



const ContainerItem = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30vw;
    margin: 0 auto;
`

const DeleteButton = styled.span `
    color: red;
`



const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api"
const token = "igor"


function PlaylistItem(props) {
  
    const handleOnClickDelete = async () => {
        const endPoint = "/playlists/deletePlaylist?playlistId="

        const url = `${baseURL}${endPoint}${props.playlist.id}`;

        const header = {
            headers: {
                "auth": token,
            }
        }
    
        try {
            await axios.delete(url, header);
            props.onDeletePlaylist();
        } catch (error) {
            console.log(error.message);
        }
    };


    return (
        <ContainerItem>
            <p>{props.playlist.name}</p>
            <span onClick={() => {
                props.onShowPlaylist(props.playlist.id)}}>Ver Mais</span> 
            <DeleteButton onClick={handleOnClickDelete}>Remover</DeleteButton>
        </ContainerItem>
    );
};

export default PlaylistItem;