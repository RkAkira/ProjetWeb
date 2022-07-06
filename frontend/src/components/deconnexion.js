import {useState, useEffect} from "react";
import Axios from 'axios';
import {Navigate} from 'react-router-dom'

function Deconnexion() {
    useEffect(() =>{
        localStorage.clear();
    })

    return(
        <Navigate to="/liste" replace={true} />
    )
    
}

export default Deconnexion;