import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../../components/Header';
import { ContentDisplay } from '../../components/ContentDisplay';
import { SideMenu } from '../../components/SideMenu';
import { VideoGrid } from '../../components/VideoGrid';
import { VideoCard } from '../../components/VideoCard';
import { PageButton } from '../../components/PageButton'
import { getAllVideos, getVideoDetails } from "../../actions/video";
import * as moment from 'moment'; 
import 'moment/locale/pt-br';


export function HomePage() {
  const dispatch = useDispatch();
  const visibleMenu = useSelector((state) => state.user.visibleMenu);
  const allVideos = useSelector((state) => state.video.allVideos)
  const [page, setPage] = useState(1)
  
  useEffect(() => {
    dispatch(getAllVideos(page))
  }, [dispatch, page]);

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
              onClick={() => dispatch(getVideoDetails(video.id))}
            />
          )):
          <p> Não há nenhum video publicado </p> }
          { allVideos.lenght === 12 ? 
            <PageButton
              page={page}
              previous={() => setPage(page - 1)}
              next={() => setPage(page + 1)}
            /> : 
            null }
        </VideoGrid>
      </ContentDisplay>
    </>
  );
}