import React, { useRef } from 'react';

function AdForm({ agregarAnuncioAlPrincipio }) {
    const titleRef = useRef();
    const descriptionRef = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const respuesta = await fetch('/api/anuncios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: titleRef.current.value,
                    description: descriptionRef.current.value
                })
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
        <div className="form-column" id="ad-form">
            <form id="adForm" action="/api/anuncios" method="POST" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Información del anuncio</legend>
                    <label htmlFor="title">Título:</label>
                    <input type="text" id="title" name="title" required ref={titleRef} />
                    <label htmlFor="description">Descripción:</label>
                    <textarea id="description" name="description" required ref={descriptionRef}></textarea>
                </fieldset>
                <button type="submit">Publicar anuncio</button>
            </form>
        </div>
    );
}

export default AdForm;