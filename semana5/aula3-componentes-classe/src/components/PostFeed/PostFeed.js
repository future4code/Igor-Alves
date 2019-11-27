import React from 'react'
import './PostFeed.css'


function PostFeed (props) {
    return (
        <div className="post-feed">
            { props.children }   
        </div>
    )
}


export default PostFeed;