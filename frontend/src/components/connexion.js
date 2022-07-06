import { useEffect, useState } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom"


function Connect() {
    let navigate = useNavigate();
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    const connexion = () => {
        {
            Axios.get('http://localhost:3001/api/user/mail', {
                params: {
                    mail: mail,
                    password: password
                }
            }).then((response) => {
                console.log(response.data);
                if (response.data.message) {
                    setLoginStatus(response.data.message);
                    console.log("message : " + response.data.message);
                }
                else {
                    let x = response.data[0];
                    localStorage.setItem('user', JSON.stringify(x));
                    localStorage.setItem("cart", JSON.stringify({"liste" : []}));
                    console.log(localStorage);
                    navigate("/liste");
                }
            });
        }

    };


    return (

        <div class="flex justify-center items-center my-10">
            <div class="flex flex-col max-w-lg px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                    Connexion
                </div>
                <div class="p-6">
                    <form action="#">
                        <div class="flex flex-col mb-2">
                            <div class=" relative ">
                                <input type="text" id="create-account-pseudo" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    name="mail" placeholder="Adresse mail" onChange={(event) => { setMail(event.target.value); }} />
                            </div>
                        </div>
                        <div class="flex flex-col mb-2">
                            <div class=" relative ">
                                <input type="password" id="create-account-pseudo" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    name="password" placeholder="Mot de passe" onChange={(event) => { setPassword(event.target.value); }} />
                            </div>
                        </div>
                        <h1>{loginStatus}</h1>
                        <div class="flex w-full my-4">
                            <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                onClick={connexion}>
                                Connexion
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    );

}

export default Connect;