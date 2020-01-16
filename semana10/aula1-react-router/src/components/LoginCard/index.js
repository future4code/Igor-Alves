import React from 'react';
import styled from "styled-components";


const ContainerLoginCard = styled.div`
    position: absolute;
    background-color: white;
    width: 22vw;
    height: 37vh;
    box-shadow: 0 0px 50px rgba(0, 0, 0, 0.5);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    color: #993900;
    top: 35%;
    left: 38.5%;    
`  


function LoginCard(props) {
    return (
        <ContainerLoginCard>
            {props.children}
        </ContainerLoginCard>
    );
}


export default LoginCard;