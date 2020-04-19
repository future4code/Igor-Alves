import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../../components/Header';
import { ContentDisplay } from '../../components/ContentDisplay';
import { SideMenu } from '../../components/SideMenu';
import { VideoGrid } from '../../components/VideoGrid';
import { VideoCard } from '../../components/VideoCard';
import { getAllVideos } from "../../actions/video";
import * as moment from 'moment'; 
import 'moment/locale/pt-br';


export function HomePage() {
  const visibleMenu = useSelector((state) => state.user.visibleMenu);
  const allVideos = useSelector((state) => state.video.allVideos)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVideos(1))
  }, [dispatch]);

  return(
    <>
      <Header menu/>
      <ContentDisplay>
        { visibleMenu ? <SideMenu/> : null }
        <VideoGrid>
          { allVideos ? allVideos.map((video) => (
            <VideoCard
              key={video.id}
              thumbnail={video.thumbnail}
              avatar={video.userPicture}
              title={video.title}
              author={video.userName}
              postDate={moment(video.creationTime).locale('pt-br').fromNow()}
            />
          )):
          <p> Não há nenhum video publicado </p> }
        </VideoGrid>
      </ContentDisplay>
    </>
  );
}