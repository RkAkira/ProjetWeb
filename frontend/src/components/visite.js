import { useEffect, useState } from "react";
import Axios from 'axios';

function AddPersonne() {

    const [personneListe, setPersonneListe] = useState([]);

    useEffect(() =>{
        Axios.get('http://localhost:3001/api/personne/', {
        }).then((response) => {
            setPersonneListe(response.data);
        });
    },[]
    )

    const [bienListe, setBienListe] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/bien_immobilier/', {
        }).then((response) => {
            setBienListe(response.data);
        });
    }, []
    )

    const [proprio, setProprio] = useState("");
    const [bien, setBien] = useState("");
    const [date, setDate] = useState(new Date());

    const addVisite = () => {
        Axios.post('http://localhost:3001/api/visite/', {
            proprio: proprio.split('.')[0],
            bien : bien.split('.')[0],
            date: date
        }).then(() => {
            console.log("success create visite");
        });
    };

    return (



        <div class="flex justify-center items-center my-10">
            <div class="flex flex-col max-w-lg px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                    Créer une visite
                </div>
                <div class="p-6">
                    <form action="#">
                        <div class="flex flex-col mb-2">
                        <select class="rounded-lg border-transparent flex-2 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                name="proprio" onChange={(event) => {setProprio(event.target.value);}}>
                                    <option disabled selected>Client</option>
                                    {personneListe.map((val, key) => {
                                        return <option key={val.id_personne}>{val.id_personne + ". " + val.nom + " " + val.prenom}</option>
                                    })}
                                </select>
                        </div>
                        <div class="flex flex-col mb-2">
                        <select class="rounded-lg border-transparent flex-2 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                name="proprio" onChange={(event) => {setBien(event.target.value);}}>
                                    <option disabled selected>Bien immobilier</option>
                                    {bienListe.map((val, key) => {
                                        return <option key={val.id_bien}>{val.id_bien + ". " + val.adresse + " (" + val.type_bien + ")"}</option>
                                    })}
                                </select>
                        </div>
                        <div class="flex flex-col mb-2">
                            <div class="relative">
                                <input type="date" id="create-account-first-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="Nom du propriétaire" placeholder="Nom du visiteur"  onChange={(event) => {setDate(event.target.value);}}/>
                            </div>
                        </div>


                        <div class="flex w-full my-4">
                            <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                            onClick={addVisite}>
                                Ajouter
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    );


}

export default AddPersonne;