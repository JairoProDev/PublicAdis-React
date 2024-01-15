import { useState, useEffect, useCallback, useMemo } from 'react';

function useAds() {
    const [anuncios, setAnuncios] = useState([]);
    const [error, setError] = useState(null);

    const reversedAnuncios = useMemo(() => [...anuncios].reverse(), [anuncios]);

    const showAds = useCallback((anunciosData) => {
        setAnuncios(anunciosData);
    }, []);

    const getAds = useCallback(async () => {
        setError(null);
        try {
            const respuesta = await fetch("/api/anuncios");
            const anuncios = await respuesta.json();
            showAds(anuncios);
        } catch (error) {
            setError("Error al obtener los anuncios");
        }
    }, [showAds]);

    useEffect(() => {
        getAds();
    }, [getAds]);

    const agregarAnuncioAlPrincipio = (anuncio) => {
        setAnuncios(prevAnuncios => [anuncio, ...prevAnuncios]);
    }

    return { anuncios: reversedAnuncios, agregarAnuncioAlPrincipio, error };
}

export default useAds;