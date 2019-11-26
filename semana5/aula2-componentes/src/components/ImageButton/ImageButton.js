import React from 'react'
import './ImageButton.css'



function ImageButton(props) {
    return(
        <div className="image-button">
            <img alt='Icone' src={ props.img }/>
            <p>{ props.nome }</p>
        </div>
    );
}



export default ImageButton;