import React from 'react'
import './PostCard.css'



class PostCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            UrlImg: "https://cdn.icon-icons.com/icons2/910/PNG/512/heart_icon-icons.com_71176.png",
            Likes: 0,
            showInput: false,
            Comments: 0,
            userName: props.user,
            postPicture: props.postPicture,
            profilePicture: props.profilePicture,
        }; 
    }

    likeIt = () => {
        if (this.state.UrlImg === "https://cdn.icon-icons.com/icons2/910/PNG/512/heart_icon-icons.com_71176.png") {
            this.setState({
                UrlImg:"https://cdn.icon-icons.com/icons2/909/PNG/512/heart_icon-icons.com_70945.png",
                Likes: 1,
            });
        } else {
            this.setState({
                UrlImg: "https://cdn.icon-icons.com/icons2/910/PNG/512/heart_icon-icons.com_71176.png",
                Likes: 0,
            });
        }
    };

    addComment = () => {
        if (this.state.showInput) {
            this.setState({
                showInput: false,
            });
        } else {
            this.setState({
                showInput:true,
            });
        }
    };

    inputComment = () => {
        if (this.state.showInput){
            return (
                <div className='comment'>
                    <input type='text'></input>
                    <button onClick={this.commentCount}>Comentar</button>
                </div>
            )
        }
    };

    commentCount = () => {
        let count = 0
        count = this.state.Comments + 1
        this.setState({
            Comments: count,
            showInput: false,
        })
    }

    render(props) {
        return(
            <div className="post-card">
                <div className="user-post">
                    <img alt='Foto usuário' src={ this.state.profilePicture } />
                    <p>{ this.state.userName }</p>
                </div>
                <div className="img-post">
                    <img alt='Foto postada' src={ this.state.postPicture } />
                </div>
                <div className="button-post">
                    <img onClick={this.likeIt} alt='Foto postada' src={ this.state.UrlImg } />
                    <p>{this.state.Likes}</p>
                    <img onClick={this.addComment} alt='Foto postada' src="https://cdn.icon-icons.com/icons2/935/PNG/512/chat-comment-oval-speech-bubble-with-text-lines_icon-icons.com_73302.png" />
                    <p>{this.state.Comments}</p>
                    {this.inputComment()}
                </div>
            </div>
        );
    }
}

export default PostCard;