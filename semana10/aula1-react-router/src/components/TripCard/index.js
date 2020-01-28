import React from 'react';
import styled from "styled-components";


const ContainerTripCard = styled.div`
    background-color: white;
    width: 90%;
    height: 90%;
    gap: 10px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    color: #993900;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`  


function TripCard(props) {
    return (
        <ContainerTripCard>
            {props.children}
        </ContainerTripCard>
    );
}


export default ContainerTripCard;