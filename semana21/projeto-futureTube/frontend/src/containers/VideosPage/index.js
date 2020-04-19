import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../../components/Header';
import { ContentDisplay } from '../../components/ContentDisplay';
import { SideMenu } from '../../components/SideMenu';
import { MyVideosDisplay } from '../../components/MyVideosDisplay';
import { VideoItem } from '../../components/VideoItem';
import { getUserVideos, deleteUserVideo } from '../../actions/video';
import * as moment from 'moment'; 
import 'moment/locale/pt-br';


export function VideosPage() {
  const dispatch = useDispatch()
  const visibleMenu = useSelector(state => state.user.visibleMenu)
  const userVideos = useSelector(state => state.video.userVideos)

  useEffect(() => {
    dispatch(getUserVideos())
  }, [dispatch]);

  return(
    <>
      <Header menu/>
      <ContentDisplay>
        { visibleMenu ? <SideMenu/> : null }
        <MyVideosDisplay>
        {userVideos.length !== 0 ? userVideos.map((video) => (
          <VideoItem
            key={video.id}
            thumbnail={video.thumbnail}
            title={video.title}
            postDate={moment(video.creationTime).locale('pt-br').fromNow()}
            onDelete={() => dispatch(deleteUserVideo(video.id))}
          />
        )): 
          <p>Você ainda não postou nenhum video</p>}
        </MyVideosDisplay>
      </ContentDisplay>
    </>
  );
}