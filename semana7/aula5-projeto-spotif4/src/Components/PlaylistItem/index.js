import React from "react";
import axios from "axios";
import styled from 'styled-components';



const ContainerItem = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30vw;
    margin: 0 auto;
    border-bottom: 1px dashed green;
`

const ContainerButton = styled.div `
    display: flex;
    justify-content: space-between;
`

const DeleteButton = styled.span `
    color: red;
    margin-left: 1em;
`

const SeeMoreButton = styled.span `
    color: green;
`

const PlaylistName = styled.p `
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
            <PlaylistName>{props.playlist.name}</PlaylistName>
            <ContainerButton>
                <SeeMoreButton onClick={() => {
                    props.onShowPlaylist(props.playlist.id, props.playlist.name)}}>Ver Mais</SeeMoreButton> 
                <DeleteButton onClick={handleOnClickDelete}>Remover</DeleteButton>
            </ContainerButton>
        </ContainerItem>
    );
};

export default PlaylistItem;