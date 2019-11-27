import React from 'react'
import './SmallCard.css'


function SmallCard(props) {
    return (
        <div className="small-card">
            <img alt='Icone' src={props.img} />
            <label>{ props.label }</label>
            <p>{ props.texto }</p>
        </div>
    );
}


export default SmallCard;