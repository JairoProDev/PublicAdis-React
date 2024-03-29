import "./styles/root.css";
import "./styles/reset.css";
import "./styles/body.css";

import "./MainComponent.css";

import "./styles/navigation.css";
import "./styles/responsive.css";
import "./styles/navbar.css";
import "./styles/mainContent.css";
import "./styles/PublishButton.css";

import React, { Fragment } from "react";
import AdList from "./components/AdList/AdList";
import Sidebar from "./components/Sidebar/Sidebar";
import AdForm from "./components/AdForm/AdForm";
// import NavBar from './components/NavBar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages/Home';
import Header from "./components/Header/Header";
import useAds from "./hooks/useAds";

function MainComponent() {
  const { anuncios, agregarAnuncioAlPrincipio, error } = useAds();

  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="main-content">
          <Sidebar />
          <AdList anuncios={anuncios} />
          <AdForm agregarAnuncioAlPrincipio={agregarAnuncioAlPrincipio} />
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </Fragment>
  );
}
export default MainComponent;
