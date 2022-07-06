/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Axios from 'axios';
import { XIcon } from '@heroicons/react/outline'

const product = {
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg'
}

export default function UserVoir(props) {

    const [user, setUser] = useState("");

    useEffect(() => {
        Axios.get('http://localhost:3001/api/user/id', {
            params: {
                id: props.id
            }
        }).then((response) => {
            setUser(response.data);
        });
    }, []
    )


    var b = new Map();
    for (var key in user[0]) {
        b.set(key, user[0][key]);
    }

    console.log(b);

    const [nom, setNom] = useState(b.get('nom'));
    const [prenom, setPrenom] = useState(b.get('prenom'));
    const [adresse, setAdresse] = useState(b.get('adresse'));
    const [password, setPassword] = useState(b.get('password'));
    const [mail, setMail] = useState(b.get('mail'));
    const [admin, setAdmin] = useState(b.get('admin'));

    const UpdateProduct = () => {
        const user = {
            id: props.id,
            nom: "",
            prenom: "",
            adresse: "",
            password: "",
            mail: "",
            admin: ""
        }

        if (nom == null) { user.nom = b.get('nom'); } else { user.nom = nom; }
        if (prenom == null) { user.prenom = b.get('prenom'); } else { user.prix = prenom; }
        if (adresse == null) { user.adresse = b.get('adresse'); } else { user.adresse = adresse; }
        if (password == null) { user.password = b.get('password'); } else { user.password = password; }
        if (mail == null) { user.mail = b.get('mail'); } else { user.mail = mail; }
        if (admin == null) { user.admin = b.get('admin'); } else { user.admin = admin; }

        Axios.put('http://localhost:3001/api/user/id', user).then(() => {
            console.log("User modifié")
        });
    };

    // const changeDispo = () => {
    //   console.log("ok");
    //   Axios.put('http://localhost:3001/api/bien_immobilier/id', {
    //     id: bi,
    //     dispo: Dispo
    //   }).then(() => {
    //     console.log("success vente réalisée");

    //   });
    // };


    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)
    let button;

    const [openModalV, setOpenModalV] = useState(false);

    //check isVendu affichage du boutton vendre
    // if (b.get('disponibilite')) {
    //   button = <button
    //     type="button"
    //     className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
    //     onClick={() => setOpenModalV(true)}
    //     ref={cancelButtonRef}
    //   >
    //     Vendre
    //   </button>
    // }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
                </Transition.Child>

                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                            enterTo="opacity-100 translate-y-0 md:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 md:scale-100"
                            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                        >
                            <Dialog.Panel className="flex text-base text-left transform transition w-full md:max-w-2xl md:px-4 md:my-8 lg:max-w-4xl">
                                <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                    <button
                                        type="button"
                                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                    <form>
                                        <div class="flex justify-center items-center my-10">
                                            
                                            <div class="flex flex-col max-w-lg px-4 py-8 bg-white rounded-lg dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                                                <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                                                    <h2 className="text-2xl font-extrabold text-gray-900">Informations de l'utilisateur</h2>
                                                </div>
                                                <form>
                                                    <div class="p-6">
                                                        <div class="flex flex-col mb-2">
                                                            <div class=" relative ">
                                                            <h3 className="text-lg text-gray-900 sm:pr-12">Adresse e-mail :</h3>
                                                                <input type="text" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                                    name="Mail" defaultValue={b.get('mail')} placeholder="Adresse e-mail" onChange={(event) => { setMail(event.target.value); }} />
                                                            </div>
                                                        </div>
                                                        <div class="flex flex-col mb-2">
                                                            <div class=" relative ">
                                                            <h3 className="text-lg text-gray-900 sm:pr-12">Mot de passe :</h3>
                                                                <input type="text" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                                    name="Mot de passe" defaultValue={b.get('password')} placeholder="Mot de passe" onChange={(event) => { setPassword(event.target.value); }} />
                                                            </div>
                                                        </div>
                                                        <div class="flex gap-2 mb-2">
                                                            <div class=" relative">
                                                            <h3 className="text-lg text-gray-900 sm:pr-12">Nom :</h3>
                                                                <input type="text" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                                    name="Nom" defaultValue={b.get("nom")} placeholder="Nom" onChange={(event) => { setNom(event.target.value); }} />
                                                            </div>
                                                            <div class=" relative">
                                                            <h3 className="text-lg text-gray-900 sm:pr-12">Prenom :</h3>
                                                                <input type="text" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                                    name="Prenom" defaultValue={b.get('prenom')} placeholder="Prenom" onChange={(event) => { setPrenom(event.target.value); }} />
                                                            </div>
                                                        </div>
                                                        <div class="flex flex-col mb-2">
                                                            <div class=" relative ">
                                                            <h3 className="text-lg text-gray-900 sm:pr-12">Adresse postale :</h3>
                                                                <input type="text" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                                    name="Adresse" defaultValue={b.get('adresse')} placeholder="Adresse postale" onChange={(event) => { setAdresse(event.target.value); }} />
                                                            </div>
                                                        </div>
                                                        <div class="flex flex-col mb-2">
                                                            {b.get('admin') ?
                                                                <select class="rounded-lg border-transparent flex-2 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                                    name="proprio" onChange={(event) => { setAdmin(event.target.value); }}>
                                                                    <option value="1" selected>Administrateur</option> <option value="0" >Client</option>
                                                                </select>
                                                                : <select class="rounded-lg border-transparent flex-2 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                                    name="proprio" onChange={(event) => { setAdmin(event.target.value); }}>
                                                                    <option value="1">Administrateur</option> <option value="0" selected>Client</option>
                                                                </select>
                                                            }
                                                        </div>
                                                        <div class="flex w-full my-4">
                                                            <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                                                onClick={UpdateProduct}>
                                                                Modifier
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )

}
