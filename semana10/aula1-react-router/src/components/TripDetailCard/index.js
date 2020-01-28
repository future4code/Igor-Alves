import React from 'react';
import styled from "styled-components";


const ContainerTripDetailCard = styled.div`
    background-color: white;
    width: 60%;
    height: auto;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    color: #993900;
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
`  


function TripDetailCard(props) {
    return (
        <ContainerTripDetailCard>
            {props.children}
        </ContainerTripDetailCard>
    );
}


export default TripDetailCard;