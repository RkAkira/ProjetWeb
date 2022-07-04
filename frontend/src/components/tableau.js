import { isValidElement, useEffect, useState } from "react";
import Axios from 'axios';

function Tableau() {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/produit/', {
        }).then((response) => {
            setProductList(response.data);
        });
    }, []
    )

    return (

        <div class="bg-white">
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Liste des produits</h2>

                <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    {productList.map((val, key) => {

                        return (
                            < div class="group relative" >
                                <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Image du produit" class="w-full h-full object-center object-cover lg:w-full lg:h-full"></img>
                                </div>
                                <div class="mt-4 flex justify-between">
                                    <div>
                                        <h3 class="text-sm text-gray-700">
                                            <a href={'/voir/'}>
                                                <span aria-hidden="true" class="absolute inset-0"></span>
                                            </a>
                                        </h3>
                                        <p class="mt-1 text-sm text-gray-500">{val.nom}</p>
                                    </div>
                                    <p class="text-sm font-medium text-gray-900">{val.prix}</p>
                                </div>
                            </div>
                        );
                    })}


                </div>
            </div>
        </div >
        /*
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
                                    <a href={'/voir/' + val.id_bien + '/' + val.id_proprietaire + '/' +  nom + '/' + prenom} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Voir</a>
                                </td>
                            </tr>
                        );

                    })}

                </tbody>
            </table>
        </div>
        */
    );


}

export default Tableau;