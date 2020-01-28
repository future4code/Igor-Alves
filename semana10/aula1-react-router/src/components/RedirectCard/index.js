import React from 'react';
import styled from "styled-components";


const ContainerCard = styled.div`
    position: absolute;
    background-color: white;
    width: 22vw;
    height: 37vh;
    top: 35vh;
    right: 20vw;
    :nth-of-type(2) {
        top: 35vh;
        left: 20vw;
    }
    box-shadow: 0 0px 50px rgba(0, 0, 0, 0.5);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    color: #993900;
    :hover {
        box-shadow: 0 0 50px #ff5f00;
        color: #ff5f00;
    }
    :active {
        box-shadow: 0 0px 50px rgba(0, 0, 0, 0.5);
        color: #993900;
    }
`  

const BackgroundImg = styled.img`
    opacity: 0.3;
    width: 90%;
    height: 98%;
`

const Title = styled.h3`
    position: absolute;
    bottom: 22%;
    font-size: 40pt;
    z-index: 9;
`

function RedirectCard(props) {
    return (
        <ContainerCard onClick={props.onClick}>
            <Title>{props.title}</Title>
            <BackgroundImg src={props.img}/>
        </ContainerCard>
    );
}


export default RedirectCard;