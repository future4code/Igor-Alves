import React from 'react';
import './App.css';
import PostFeed from './components/PostFeed/PostFeed';
import UserPost from './components/UserPost/UserPost';
import ImgPost from './components/ImgPost/ImgPost';
import ButtonPost from './components/ButtonPost/ButtonPost'




function App() {
  return (
    <div className='main-container'>
      <PostFeed>
        <UserPost picture='https://images.zoom.us/p/T9kuYEh7Q3qvmR-3BcIOYQ/ee31b147-f8d9-496a-9215-516ed57a2fcb-937?type=large' user='IgorAlveSantos'/>
        <ImgPost img='https://picsum.photos/id/0/5616/3744'/>
        <ButtonPost lefticon='https://cdn.icon-icons.com/icons2/935/PNG/512/like-heart-outline-symbol_icon-icons.com_73226.png' righticon='https://cdn.icon-icons.com/icons2/935/PNG/512/chat-comment-oval-speech-bubble-with-text-lines_icon-icons.com_73302.png'/>
      </PostFeed>
      <PostFeed>
        <UserPost picture='https://images.zoom.us/p/T9kuYEh7Q3qvmR-3BcIOYQ/ee31b147-f8d9-496a-9215-516ed57a2fcb-937?type=large' user='IgorAlveSantos'/>
        <ImgPost img='https://picsum.photos/id/237/3500/2095'/>
        <ButtonPost lefticon='https://cdn.icon-icons.com/icons2/935/PNG/512/like-heart-outline-symbol_icon-icons.com_73226.png' righticon='https://cdn.icon-icons.com/icons2/935/PNG/512/chat-comment-oval-speech-bubble-with-text-lines_icon-icons.com_73302.png'/>
      </PostFeed>
      <PostFeed>
        <UserPost picture='https://images.zoom.us/p/T9kuYEh7Q3qvmR-3BcIOYQ/ee31b147-f8d9-496a-9215-516ed57a2fcb-937?type=large' user='IgorAlveSantos'/>
        <ImgPost img='https://picsum.photos/id/1060/5598/3732'/>
        <ButtonPost lefticon='https://cdn.icon-icons.com/icons2/935/PNG/512/like-heart-outline-symbol_icon-icons.com_73226.png' righticon='https://cdn.icon-icons.com/icons2/935/PNG/512/chat-comment-oval-speech-bubble-with-text-lines_icon-icons.com_73302.png'/>
      </PostFeed>
    </div>
  );
}




export default App;
