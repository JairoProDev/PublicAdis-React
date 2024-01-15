import './MainComponent.css';

import './styles/root.css';
import './styles/reset.css';
import './styles/body.css';
import './styles/header.css';
import './styles/navigation.css';
import './styles/form.css';
import './styles/responsive.css';
import './styles/editForm.css';
import './styles/navbar.css';
import './styles/mainContent.css';
// import './styles/adsList.css';
import './styles/adCard.css';
import './styles/sidebar.css';

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