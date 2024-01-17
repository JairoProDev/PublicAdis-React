// Header.js

import React, { useEffect, useState } from 'react';
import './header.css';
import logo from '../../images/logo.ico';
function Header() {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
            setLastScrollTop(st <= 0 ? 0 : st);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <header className={`header ${isHidden ? 'header-hidden' : ''}`}>
            <div className="header-left">
                <img src={logo} alt="Logo" className="logo" />
                <div className="header-title">PublicAdis: AnuncIA</div>
                <div className="search-container">
                    <input type="text" placeholder="Buscar en PublicAdis" className="search-input" />
                </div>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="/Empleos">Empleos</a></li>
                    <li className="nav-item"><a href="/Inmuebles">Inmuebles</a></li>
                    <li className="nav-item"><a href="/Autos">Autos</a></li>
                    <li className="nav-item"><a href="/Servicios">Servicios</a></li>
                </ul>
            </nav>
            <div className="header-right">
                <a href="/perfil">Mi Perfil</a>
                <a href="/configuracion">Configuración</a>
                <a href="/anunciar">AnuncIAr</a>
            </div>
        </header>
        
    );
}

export default Header;