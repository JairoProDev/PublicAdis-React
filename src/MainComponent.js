import './MainComponent.css';
import React, { useEffect, useCallback, useState } from 'react';
import AdCard from './components/AdCard';
import Sidebar from './components/Sidebar';
import AdForm from './components/AdForm';
function MainComponent() {

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
                    <AdForm agregarAnuncioAlPrincipio={agregarAnuncioAlPrincipio} />
                </div>
            </div>
        </div>
    );
}

export default MainComponent;