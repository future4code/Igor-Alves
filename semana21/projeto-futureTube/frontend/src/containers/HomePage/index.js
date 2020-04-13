import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../../components/Header';
import { ContentDisplay } from '../../components/ContentDisplay';
import { SideMenu } from '../../components/SideMenu';
import { VideoGrid } from '../../components/VideoGrid';
import { VideoCard } from '../../components/VideoCard';
import { setMenuVisible } from "../../actions/user";


export function HomePage() {
  const visibleMenu = useSelector(state => state.user.visibleMenu)
  const dispatch = useDispatch()

  const onClickMenuButton = () => {
    dispatch(setMenuVisible())
  }

  return(
    <>
      <Header menu/>
      <ContentDisplay>
        { visibleMenu ? <SideMenu/> : null }
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