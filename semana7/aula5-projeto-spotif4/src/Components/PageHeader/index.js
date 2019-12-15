import React from "react";
import styled from 'styled-components';


const Header = styled.div `
    background-color: black;
    color: green;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 75%;
`

const Logo = styled.h1 `
    margin: 0;
    padding: 0;
    font-family: Verdana;
`


function PageHeader() {
    return (
        <Header>
            <Logo>Spotif4</Logo>
        </Header>
    );
}


export default PageHeader;