import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  height: 90vh;
  width: 100%;
  margin: 0.5em;
  padding: 0px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: initial;
  justify-content: initial;
  overflow: auto;
`

const VideoPlayer = styled.video`
  width: 100%;
  min-height: 75vh;
  margin: 0 auto;
  background: #000000;
`

const VideoInfo = styled.div`
  width: 65vw;
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  align-items: initial;
  justify-content: initial;
`

const Title = styled.h3`
  margin: 0.5em 0;
`

const Author = styled.p`
  font-size: 16px;
  margin-left: 21px;
  margin-bottom: 5px;
  font-weight: bold;
`

const PostDate = styled.p`
  font-size: 13px;
  color: grey;
  margin-top: 0;
`

const Description = styled.p`
  font-size: 14px;
  margin: 1em 0 2em 80px;
`

const Avatar = styled.img`
  max-width: 50px;
  max-height: 50px;
  border-radius: 50px;
  margin-left: 0.5em;
  margin-top: 1em;
`

const UserInfo = styled.div`
  display: flex;
  align-items: initial;
  justify-content: initial;
`

export function VideoDetails(props) {
  return(
    <ContentContainer>
      <VideoPlayer controls>
        <source src={props.video}/>
      </VideoPlayer>
      <VideoInfo>
        <div>
          <Title>{props.title}</Title>
          <PostDate>{props.postDate}</PostDate>
          <hr/>
        </div>
        <UserInfo>
          <Avatar src={props.avatar}/>
          <Author>{props.author}</Author>
        </UserInfo>
        <div>
          <Description>{props.description}</Description>
          <hr/>
        </div>
      </VideoInfo>
    </ContentContainer>
  );
}