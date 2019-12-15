import React from "react";
import styled from 'styled-components';



const PlayerAudio = styled.audio `
    height: 1.5em;
    color: green;
`

const Subtitle = styled.span `
    color: green;
    font-weight: bold;
    font-size: 11pt;
`

const ContainerMusicItem = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50vw;
    margin: 0 auto;
    border-bottom: 1px dashed green;
    padding: 0.8em;
`


function PlaylistMusic(props) {

    return (
        <ContainerMusicItem>
            <div>
                <Subtitle>Nome:</Subtitle> <span>{props.musics.name}</span> 
            </div>
            <div>
                <Subtitle>Artista:</Subtitle> <span>{props.musics.artist}</span>
            </div>
            <PlayerAudio controls>
                <source src={props.musics.url}/>
            </PlayerAudio>
        </ContainerMusicItem>
    );
}


export default PlaylistMusic;