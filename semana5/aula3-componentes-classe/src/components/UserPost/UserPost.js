import React from 'react'
import './UserPost.css'


function UserPost (props) {
    return (
        <div className="user-post">
            <img alt='Foto usuário' src={ props.picture} />
            <p>{ props.user }</p>
        </div>
    )
}


export default UserPost;