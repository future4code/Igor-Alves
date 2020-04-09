import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  height: fit-content;
  width: auto;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: initial;
  justify-content: initial;
  background-color: #fafbfc;
`

const Thumbnail = styled.img`
  height: 65%;
  width: 100%;
`

const Title = styled.h3`
  margin-left: 1em;
  margin-bottom: 0.5em;
`

const Author = styled.p`
  font-size: 11px;
  margin-left: 2em;
  color: grey;
`

const PostTime = styled.p`
  font-size: 11px;
  color: grey;
  margin-left: 2em;
  margin-top: 0;
`

export function VideoCard(props) {
  return(
    <CardContainer>
      <Thumbnail src='https://i.ytimg.com/vi/LzE45Wfd5zo/maxresdefault.jpg'/>
      <Title>Dusk | Chillstep Mix</Title>
      <Author>ChilloutDeer</Author>
      <PostTime>há 2 anos</PostTime>
    </CardContainer>
  );
}