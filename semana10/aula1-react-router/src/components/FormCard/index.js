import React from 'react';
import styled from "styled-components";


const ContainerFormCard = styled.div`
    position: absolute;
    background-color: white;
    width: 25vw;
    height: 60vh;
    box-shadow: 0 0px 50px rgba(0, 0, 0, 0.5);
    padding: 44px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: initial;
    border-radius: 15px;
    color: #993900;
    top: 25%;
    left: 38%;   
`  


function FormCard(props) {
    return (
        <ContainerFormCard>
            {props.children}
        </ContainerFormCard>
    );
}


export default FormCard;