import { useEffect, useState } from "react";
import Axios from 'axios';

function Vente() {

    const [utilisateurList, getUtilisateur] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/user/', {
        }).then((response) => {
            getUtilisateur(response.data);
        });
    }, []
    )

    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-10 mx-5">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nom
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Prenom
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Adresse e-mail
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Adresse postale
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">voir</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {utilisateurList.map((val, key) => {

                        return (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {val.nom}
                                </th>
                                <td class="px-6 py-4">
                                    {val.prenom}
                                </td>
                                <td class="px-6 py-4">
                                    {val.mail}

                                </td>
                                <td class="px-6 py-4">
                                    {val.adresse}
                                </td>
                                <td class="px-6 py-4 text-right">
                                    {<a href={'/voirUser/' + val.ID} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Voir</a>}
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