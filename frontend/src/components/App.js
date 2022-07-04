import React, { Fragment } from "react";
import './App.css';
import Banner from './banner';
import Tableau from './tableau';
import Ajout from './add';
import Modal from './modal';
import Vente from './vente';
import Dashboard from './dashboard';
import AjoutPersonne from './addPersonne';
import Visite from './visite';

import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/liste" element={<Liste />} />
              <Route path="/add" element={<Add />} />
              <Route path="/vente" element={<Ventes />} />
              <Route path="/voir/:id/:idprop/:nom/:prenom" element={<Voir />} />
              <Route path="/voirVentes/:id/:idprop/:nom/:prenom" element={<VoirVente />} />
              <Route path="/addPersonne" element={<PersonneAdd />} />
              <Route path="/visite" element={<CreerVisite />} />

            </Routes>
          </div>
        </Router>

      </div>
    </>




  );

}

const Home = () => {
  return (
    <div>
      <Banner name="home"></Banner>
      <Dashboard/>
    </div>
  );
};

const Liste = () => {
  return (
    <div>
      <Banner name="liste"></Banner>
      <Tableau></Tableau>
    </div>
  );

};

const Add = () => {
  return (
    <div>
      <Banner name="rien"></Banner>
      <Ajout></Ajout>
    </div>
  );
};

const Voir = () => {
  let params = useParams();
  return (
    <div>
      <Banner name="liste"></Banner>
      <Tableau></Tableau>
      <Modal id={params.id} idprop={params.idprop} nom={params.nom} prenom={params.prenom}/>
    </div>
  );
};

const VoirVente = () => {
  let params = useParams();
  return (
    <div>
      <Banner name="vente"></Banner>
      <Vente></Vente>
      <Modal id={params.id} idprop={params.idprop} nom={params.nom} prenom={params.prenom}/>
    </div>
  );
};

const Ventes= () => {
  return (
    <div>
      <Banner name="vente"></Banner>
      <Vente/>
    </div>
  );
};

const PersonneAdd = () => {
  return (
    <div>
      <Banner name="addpersonne"></Banner>
      <AjoutPersonne/>
    </div>
  );
};

const CreerVisite = () => {
  return (
    <div>
      <Banner name="visite"></Banner>
      <Visite/>
    </div>
  );
};

export default App;
