import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: initial;
  justify-content: initial;
  background-color: #fafbfc;
`

const Thumbnail = styled.img`
  height: 60%;
  width: 100%;
`

const Title = styled.h3`
  margin: 0.5em 0 0.5em 1em;
`

const Author = styled.p`
  font-size: 14px;
  margin-left: 21px;
  margin-bottom: 5px;
  color: grey;
`

const PostDate = styled.p`
  font-size: 10px;
  color: grey;
  margin-left: 21px;
  margin-top: 0;
`

const Avatar = styled.img`
  max-width: 50px;
  max-height: 50px;
  border-radius: 50px;
  margin-left: 0.5em;
`

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`

export function VideoCard(props) {
  return(
    <CardContainer onClick={() => {console.log("Dispatch pagina de video")}}>
      <Thumbnail src={props.thumbnail}/>
      <InfoContainer>
        <Avatar src={props.avatar}/>
        <div>
          <Title>{props.title}</Title>
          <Author>{props.author}</Author>
          <PostDate>{props.postDate}</PostDate>
        </div>
      </InfoContainer>
    </CardContainer>
  );
}