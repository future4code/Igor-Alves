import React from 'react';
import styled from 'styled-components';
import VideoImg from '../../resources/video.svg'


const ContentContainer = styled.div`
  height: 88vh;
  width: 100%;
  margin: 1em;
  padding: 0px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: initial;
`

const BackgroundImg = styled.img`
  width: 90px;
  height: 90px;
`

const TextContent = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const VideoContainer = styled.div`
  width: 70%;
  height: 70%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  background-color: #ffffff;
`

export function MyVideosDisplay(props) {
  return(
    <ContentContainer>
      <TextContent>
        <BackgroundImg src={VideoImg}/>
        <h1>Seus Videos Enviados</h1>
      </TextContent>
      <VideoContainer>
        {props.children}
      </VideoContainer>
    </ContentContainer>
  );
}