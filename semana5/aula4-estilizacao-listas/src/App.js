import React from 'react';
import './App.css';
import PostCard from './components/PostCard/PostCard';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userName: "",
        profilePicture: "",
        postPicture: "",
        postFeed: [],
    };
}


controlNameInput = e => {
    this.setState({
        userName: e.target.value,
    })
}


controlUserImgInput = e => {
    this.setState({
        profilePicture: e.target.value,
    })
}


controlPictureInput = e => {
    this.setState({
        postPicture: e.target.value,
    })
}


sendPost = () => {
    const post = {
      name: this.state.userName, 
      userImg: this.state.profilePicture, 
      pictureOfPost: this.state.postPicture,
    };

    const postFeedCopy = [...this.state.postFeed, post]
    console.log(postFeedCopy)
    this.setState({postFeed: postFeedCopy})
    console.log(this.state.postFeed)
}


render() {
    return (
        <div className="main-container">
            <form action="#">
                <label>Nome:</label>
                <input type="text" value={this.state.userName} onChange={this.controlNameInput}></input>
                <label>Foto Perfil:</label>
                <input type="text" value={this.state.profilePicture} onChange={this.controlUserImgInput}></input>
                <label>Url Imagem a ser postada:</label>
                <input type="text" value={this.state.postPicture} onChange={this.controlPictureInput}></input>
                <button onClick={this.sendPost}>Publicar</button>
            </form>
            {this.state.postFeed.map(post => {
                return <PostCard user={ post.name } profilePicture={ post.userImg } postPicture={ post.pictureOfPost } />;
            })}
        </div>
    )
}
}


export default App;
