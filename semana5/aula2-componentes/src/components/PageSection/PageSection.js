import React from 'react'
import './PageSection.css'


function PageSection(props) {
    return (
        <section className="page-section">
            <h1>{ props.titulo }</h1>
            { props.children }
        </section>
    );
}


export default PageSection;