import { useEffect, useState } from "react";
import Axios from 'axios';

function AddBien() {

    const [personneListe, setPersonneListe] = useState([]);

    useEffect(() =>{
        Axios.get('http://localhost:3001/api/personne/', {
        }).then((response) => {
            setPersonneListe(response.data);
        });
    },[]
    )

    const [proprio, setProprio] = useState("");
    const [adresse, setAdresse] = useState("");
    const [type, setType] = useState("");
    const [nbChambre, setNbChambre] = useState(0);
    const [etat, setEtat] = useState("");
    const [date, setDate] = useState(new Date());
    const [prix, setPrix] = useState(0);
    const [nbGarage, setNbGarage] = useState(0);
    const [superficie, setSuperficie] = useState(0);

    const addBien = () => {
        Axios.post('http://localhost:3001/api/bien_immobilier/', {
            proprio: proprio.split('.')[0],
            adresse: adresse,
            type: type,
            nbChambre: nbChambre,
            etat: etat,
            date: date,
            prix: prix,
            nbGarage: nbGarage,
            superficie: superficie
        }).then(() => {
            console.log("success create bien");
        });
    };

    return (
        <div class="flex justify-center items-center my-10">
            <div class="flex flex-col max-w-lg px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                    Ajouter un nouveau bien immobillier
                </div>
                <div class="p-6">
                    <form action="#">
                        <div class="flex flex-col mb-2">
                            <div class=" relative " >
                                <select class="rounded-lg border-transparent flex-2 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                name="proprio" onChange={(event) => {setProprio(event.target.value);}}>
                                    <option disabled selected>Propriétaire</option>
                                    {personneListe.map((val, key) => {
                                        return <option key={val.id_personne}>{val.id_personne + ". " + val.nom + " " + val.prenom}</option>
                                    })}
                                </select>

                            </div>
                        </div>
                        <div class="flex flex-col mb-2">
                            <div class=" relative ">
                                <input type="text" id="create-account-pseudo" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                name="Adresse" placeholder="Adresse"  onChange={(event) => {setAdresse(event.target.value);}}/>
                            </div>
                        </div>

                        <div class="flex gap-2 mb-2">


                            <select class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                            placeholder="Type" onChange={(event) => {setType(event.target.value);}}>
                                <option disabled selected>Type</option>
                                <option key="maison">maison</option>
                                <option key="appartement">appartement</option>
                            </select>
                            <div class=" relative ">
                                <input type="number" min="0" id="create-account-last-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                name="nb_chambre" placeholder="Nombre de piece" onChange={(event) => {setNbChambre(event.target.value);}}/>
                            </div>

                        </div>
                        <div class="flex gap-2 mb-2">
                            <select class="rounded-lg border-transparent flex-2 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                            placeholder="Etat" onChange={(event) => {setEtat(event.target.value);}}>
                                <option disabled selected>État</option>
                                <option key="neuf">neuf</option>
                                <option key="bon_etat">bon état</option>
                                <option key="tres_bon_etat">très bon état</option>
                                <option key="mauvais_etat">mauvais état</option>
                            </select>


                        </div>
                        <div class="flex gap-2 mb-2">
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input type="date" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-10" 
                                placeholder="Disponibilité" onChange={(event) => {setDate(event.target.value);}}/>
                            </div>

                            <div class=" relative ">

                                <div>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <input type="number" min="0" name="price" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-10  pb-3" 
                                        placeholder="Prix" onChange={(event) => {setPrix(event.target.value);}}/>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="flex gap-2 mb-2">
                            <div class=" relative ">
                                <input type="number" id="create-account-last-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                name="nb_garage" placeholder="Nombre de garage" onChange={(event) => {setNbGarage(event.target.value);}}/>
                            </div>
                            <div class=" relative ">
                                <input type="numeric" id="create-account-last-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                name="superficie" placeholder="Superficie" onChange={(event) => {setSuperficie(event.target.value);}}/>
                            </div>


                        </div>
                        <div class="flex w-full my-4">
                            <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={addBien}>
                                Ajouter
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    );


}

export default AddBien;