import React from 'react';
import './adCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const CallButton = ({ phone }) => (
    <a href={`tel:${phone}`} className="anuncio-button anuncio-button-details">
        <FontAwesomeIcon icon={faPhone} />
    </a>
);

const WhatsappButton = ({ phone }) => {
    const whatsappMessage = "Hola, vi su anuncio en PublicAdis.com y me interesa, podría proporcionarme más información por favor?";
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <a href={whatsappLink} className="anuncio-button anuncio-button-contact">
            <FontAwesomeIcon icon={faWhatsapp} />
        </a>
    );
};

function AdCard({ anuncio }) {
    const { title, description, amount, location, phone } = anuncio;

    return (
        <div className="anuncio-card">
            <div className="anuncio-content">
                <h3 className="anuncio-titulo">{title}</h3>
                <p className="anuncio-descripcion">{description}</p>
                <div className="anuncio-details">
                    <p className="anuncio-price">{amount}</p>
                    <p className="anuncio-location">{location}</p>
                </div>
                <div className="anuncio-buttons">
                    <CallButton phone={phone} />
                    <WhatsappButton phone={phone} />
                </div>
            </div>
        </div>
    );
}

export default React.memo(AdCard);