import React, { useState }  from 'react';
import { useDispatch } from "react-redux";
import { Header } from '../../components/Header';
import { ContentDisplay } from '../../components/ContentDisplay';
import { SideMenu } from '../../components/SideMenu';
import { VideoGrid } from '../../components/VideoGrid';
import { VideoCard } from '../../components/VideoCard';


export function HomePage() {
  return(
    <>
      <Header menu/>
      <ContentDisplay>
        <SideMenu/>
        <VideoGrid>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
        </VideoGrid>
      </ContentDisplay>
    </>
  );
}