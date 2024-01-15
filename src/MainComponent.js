import './MainComponent.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useCallback, useState } from 'react';
import logo from './images/logo.png';

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



    function AdCard({ anuncio }) {
        return (
            <li className="anuncio-card">
                <h3 className="title">{anuncio.title || anuncio.titulo || anuncio.adTitle}</h3>
                <p className="description">{anuncio.description || anuncio.descripcion || anuncio.adDescription}</p>
            </li>
        );
    }

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
                    <aside className="sidebar">
                        <div className="logo">
                        <img src={logo} alt="logo" />
                            <h2>PublicAdis: Anunc<span className="blue-text-ia">IA</span></h2>
                        </div>
                    <ul className="category-list">
                    
                    <h4>Servicios</h4>
                    <ul className="enlaces">
                        <li>
                            <span className="material-symbols-outlined">engineering</span>
                            <Link to="#">Profesionales</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">school</span>
                            <Link to="#">Clases y Cursos</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">event</span>
                            <Link to="#">Eventos</Link>
                        </li>
                    </ul>

                    <h4>Empleos</h4>
                    <ul className="enlaces">
                        <li>
                            <span className="material-symbols-outlined">restaurant</span>
                            <Link to="#">Cocina</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">directions_bus</span>
                            <Link to="#">Conducción</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">school</span>
                            <Link to="#">Docencia</Link>
                        </li>
                    </ul>

                    <h4>Vehículos</h4>
                    <ul className="enlaces">
                        <li>
                            <span className="material-symbols-outlined">directions_car</span>
                            <Link to="#">Autos</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">directions_bike</span>
                            <Link to="#">Motos</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">local_shipping</span>
                            <Link to="#">Camiones</Link>
                        </li>
                    </ul>

                    <h4>Inmuebles</h4>
                    <ul className="enlaces">
                        <li>
                            <span className="material-symbols-outlined">apartment</span>
                            <Link to="#">Apartamentos</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">house</span>
                            <Link to="#">Casas</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">landscape</span>
                            <Link to="#">Terrenos</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">store</span>
                            <Link to="#">Locales</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">work</span>
                            <Link to="#">Oficinas</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">storefront</span>
                            <Link to="#">Bodegas</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">store_mall_directory</span>
                            <Link to="#">Almacenes</Link>
                        </li>
                    </ul>

                    <h4>Productos</h4>
                    <ul className="enlaces">
                        <li>
                            <span className="material-symbols-outlined">home</span>
                            <Link to="#">Bienes Raíces</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">directions_car</span>
                            <Link to="#">Vehículos</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">kitchen</span>
                            <Link to="#">Electrodomésticos</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">devices</span>
                            <Link to="#">Tecnología</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">shopping_basket</span>
                            <Link to="#">Moda y Accesorios</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">house</span>
                            <Link to="#">Hogar y Jardín</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">spa</span>
                            <Link to="#">Salud y Belleza</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">theaters</span>
                            <Link to="#">Entretenimiento</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">pets</span>
                            <Link to="#">Mascotas</Link>
                        </li>
                    </ul>

                    <h4>Varios</h4>
                    <ul className="enlaces">
                        <li>
                            <span className="material-symbols-outlined">bar_chart</span>
                            <Link to="#">Educación</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">shopping_basket</span>
                            <Link to="#">Ropa</Link>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">settings</span>
                            <Link to="#">Servicios</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className="publish-button">
                            <span className="material-symbols-outlined">add_circle_outline</span>
                            <button id="toggle-form-button">                                        
                                <Link to="#">Publicar Anuncio</Link>
                            </button>
                        </li>
                        </ul>
                    </ul>
                    </aside>

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