import './MainComponent.css';
import React from 'react';
import AdList from './components/AdList';
import Sidebar from './components/Sidebar';
import AdForm from './components/AdForm';
import useAds from './hooks/useAds';

function MainComponent() {
    const { anuncios, agregarAnuncioAlPrincipio, error } = useAds();

    return (
        <div>
            <div className="container">
                <div className="main-content">
                    <Sidebar/>
                    <AdList anuncios={anuncios} />
                    <AdForm agregarAnuncioAlPrincipio={agregarAnuncioAlPrincipio} />
                    {error && <div className="error">{error}</div>}
                </div>
            </div>
        </div>
    );
}
export default MainComponent;