import React from 'react'
import './ImgPost.css'


function ImgPost (props) {
    return (
        <div className="img-post">
            <img alt='Foto postada' src={ props.img} />
        </div>
    )
}


export default ImgPost;