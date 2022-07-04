import { useEffect, useState } from "react";
import Axios from 'axios';

function Vente() {

    const [bienListe, setBienListe] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/bien_immobilier/vente', {
        }).then((response) => {
            setBienListe(response.data);
        });
    }, []
    )

    const [personneListe, setPersonneListe] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/personne/', {
        }).then((response) => {
            setPersonneListe(response.data);
        });
    }, []
    )

    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-10 mx-5">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nom du propriétaire
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Adresse
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Type de bien
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {bienListe.map((val, key) => {
                        let nom = "", prenom = "";
                        personneListe.map((personne, key) => {
                            if (personne.id_personne === val.id_proprietaire) {
                                nom = personne.nom;
                                prenom = personne.prenom;
                            }
                            return nom, prenom;
                        })

                        return (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {nom + " " + prenom}
                                </th>
                                <td class="px-6 py-4">
                                    {val.adresse}
                                </td>
                                <td class="px-6 py-4">
                                    {val.type_bien}
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <a href={'/voirVentes/' + val.id_bien + '/' + val.id_proprietaire + '/' +  nom + '/' + prenom} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Voir</a>
                                </td>
                            </tr>
                        );

                    })}

                </tbody>
            </table>
        </div>
    );


}

export default Vente;