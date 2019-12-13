import React from "react";
// import axios from "axios";
// import styled from 'styled-components';





function PlaylistMusics(props) {

    return (
        <div>
            <span>Nome: {props.musics.name}</span>
            <span>Artista: {props.musics.artist}</span>
            <audio controls>
                <source src={props.musics.url}/>
            </audio>
        </div>
    );
}


export default PlaylistMusics;