import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../../components/Header';
import { ContentDisplay } from '../../components/ContentDisplay';
import { SideMenu } from '../../components/SideMenu';
import { VideoDetails } from '../../components/VideoDetails';
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import * as moment from 'moment'; 
import 'moment/locale/pt-br';


export function VideoDetailsPage() {
  const dispatch = useDispatch();
  const visibleMenu = useSelector((state) => state.user.visibleMenu);
  const videoData = useSelector((state) => state.video.videoDetails);

  return(
    <>
      <Header menu/>
      <ContentDisplay>
        { visibleMenu ? <SideMenu/> : null }
        {videoData ? <VideoDetails
          video={videoData.url}
          title={videoData.title}
          postDate={moment(videoData.creationTime).format('ll')}
          avatar={videoData.userPicture}
          author={videoData.userName}
          description={videoData.description}
        />: dispatch(push(routes.home))}
      </ContentDisplay>
    </>
  );
}