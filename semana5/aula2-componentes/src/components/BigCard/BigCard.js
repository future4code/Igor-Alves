import React from 'react'
import './BigCard.css'


function BigCard(props) {
    return (
        <div className="big-card">
            <img alt='Icone' src={ props.foto }/>
            <h3>{ props.nome }</h3>
            <p> { props.descricao }</p>
        </div>
    );
}


export default BigCard;