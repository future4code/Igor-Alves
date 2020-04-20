import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../../components/Header';
import { ContentDisplay } from '../../components/ContentDisplay';
import { SideMenu } from '../../components/SideMenu';
import { MyVideosDisplay } from '../../components/MyVideosDisplay';
import { VideoItem } from '../../components/VideoItem';
import { getUserVideos, deleteUserVideo, updateVideoInfo } from '../../actions/video';
import * as moment from 'moment'; 
import 'moment/locale/pt-br';
import { ModalForm } from '../../components/ModalForm';


export function VideosPage() {
  const initialState = {
    title: '',
    description: '',
  }

  const dispatch = useDispatch()
  const [form, setForm] = useState(initialState)
  const [modal, setModal] = useState(false)
  const [videoId, setVideoId] = useState("")
  const visibleMenu = useSelector(state => state.user.visibleMenu)
  const userVideos = useSelector(state => state.video.userVideos)

  useEffect(() => {
    dispatch(getUserVideos())
  }, [dispatch]);

  const handleChange = (event) => {
    const auxForm = { ...form };
    auxForm[event.target.name] = event.target.value;
    setForm(auxForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateVideoInfo(videoId, form))
    setForm(initialState)
  };

  const onEdit = (videoId) => {
    setModal(true)
    setVideoId(videoId)
  }

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
              onEdit={() => onEdit(video.id)}
            />
          )): 
          <p>Você ainda não postou nenhum video</p> }
          { modal && <ModalForm
            title={form.title}
            description={form.description}
            onChange={handleChange}
            onSubmit={handleSubmit}
            close={() => setModal(false)}
          /> }
        </MyVideosDisplay>
      </ContentDisplay>
    </>
  );
}