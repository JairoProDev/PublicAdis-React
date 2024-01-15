import './MainComponent.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useCallback, useState } from 'react';
import logo from './images/logo.png';
import AdCard from './components/AdCard';
import Sidebar from './components/Sidebar';
function MainComponent() {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);


    const [anuncios, setAnuncios] = useState([]);

    const showAds = useCallback((anunciosData) => {
        setAnuncios(anunciosData);
    }, []);

    const getAds = useCallback(async () => {
        try {
            const respuesta = await fetch("/api/anuncios");
            const anuncios = await respuesta.json();
            anuncios.reverse();
            showAds(anuncios);
        } catch (error) {
            console.error("Error al obtener los anuncios", error);
        }
    }, [showAds]);

    useEffect(() => {
        getAds();
    }, [getAds]);

    const agregarAnuncioAlPrincipio = (anuncio) => {
        setAnuncios(prevAnuncios => [anuncio, ...prevAnuncios]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAd = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
        };

        try {
            const respuesta = await fetch("/api/anuncios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newAd),
            });

            if (respuesta.ok) { 
                const respuestaJson = await respuesta.json();
                const anuncio = respuestaJson.anuncio;
                agregarAnuncioAlPrincipio(anuncio);
                titleRef.current.value = '';
                descriptionRef.current.value = '';
            } else {
                console.error("Error al crear el anuncio");
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    }
    return (
        <div>
            <div className="container">
                <div className="main-content">
                    <Sidebar/>

                    <div className="anuncios-column">
                        <ul id="anuncios-list">
                            {anuncios.map(anuncio => <AdCard key={anuncio._id} anuncio={anuncio} />)}
                        </ul>
                    </div>

                    <div className="form-column" id="ad-form">
                    <form id="adForm" action="/api/anuncios" method="POST" onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Información del anuncio</legend>
                            <label htmlFor="title">Título:</label>
                            <input type="text" id="title" name="title" required ref={titleRef} />
                            <label htmlFor="description">Descripción:</label>
                            <textarea id="description" name="description" required ref={descriptionRef}></textarea>
                        </fieldset>
                <button type="submit">Publicar Anuncio</button>
            </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainComponent;