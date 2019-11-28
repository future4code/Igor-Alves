import React from 'react'
import './ButtonPost.css'


class ButtonPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            UrlImg: "https://cdn.icon-icons.com/icons2/935/PNG/512/like-heart-outline-symbol_icon-icons.com_73226.png",
            Likes: 0,
            showInput: false,
            Comments: 0,
        };
    }


    likeIt = () => {
        if (this.state.UrlImg === "https://cdn.icon-icons.com/icons2/935/PNG/512/like-heart-outline-symbol_icon-icons.com_73226.png") {
            console.log('If')
            this.setState({
                UrlImg:"https://cdn.icon-icons.com/icons2/510/PNG/512/heart_icon-icons.com_50374.png",
                Likes: 1,
            });
        } else {
            console.log('Else')
            this.setState({
                UrlImg: "https://cdn.icon-icons.com/icons2/935/PNG/512/like-heart-outline-symbol_icon-icons.com_73226.png",
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


    render() {
        return(
            <div className="button-post">
                <img onClick={this.likeIt} alt='Foto postada' src={ this.state.UrlImg } />
                <p>{this.state.Likes}</p>
                <img onClick={this.addComment} alt='Foto postada' src={ this.props.righticon } />
                <p>{this.state.Comments}</p>
                {this.inputComment()}
            </div>
        );
    }
}



export default ButtonPost;