import React from 'react';

function AdCard({ anuncio }) {
    return (
        <li className="anuncio-card">
            <h3 className="title">{anuncio.title || anuncio.titulo || anuncio.adTitle}</h3>
            <p className="description">{anuncio.description || anuncio.descripcion || anuncio.adDescription}</p>
        </li>
    );
}

export default React.memo(AdCard);