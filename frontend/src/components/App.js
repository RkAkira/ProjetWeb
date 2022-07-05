import React, { Fragment } from "react";
import './App.css';
import Banner from './banner';
import Tableau from './tableau';
import Ajout from './addProduct';
import Modal from './modal';
import Vente from './listeUtilisateur';
import Dashboard from './dashboard';
import AjoutPersonne from './addPersonne';
import Visite from './visite';
import User from './voirUser';


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
              <Route path="/listeuser" element={<Ventes />} />
              <Route path="/voir/:id" element={<Voir />} />
              <Route path="/voirUser/:id" element={<VoirUser />} />
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
      <Modal id={params.id} />
    </div>
  );
};

const VoirUser = () => {
  let params = useParams();
  return (
    <div>
      <Banner name="vente"></Banner>
      <Vente></Vente>
      <User id={params.id}/>
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
