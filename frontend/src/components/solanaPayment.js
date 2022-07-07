import {Connection, PublicKey, LAMPORTS_PER_SOL, SystemProgram, Transaction}from "@solana/web3.js";
import { Buffer } from 'buffer';
import {toast } from 'react-toastify';

window.Buffer = Buffer;
const network = "https://api.devnet.solana.com";
const connection = new Connection(network, "confirmed");
const MERCHANT_KEY = new PublicKey("DYFsKBpkL2RRUPfKow6yzyA3smSHN37UKXSqEbXqLd2y");
var paymentSuccess = false;

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const getProvider = () => {
  if ("solana" in window) {
    const provider = window.solana;
    if (provider.isPhantom) {
      return provider;
    }
  }
  window.open("https://phantom.app/", "_blank");
};

async function connecting () {
  try {
    const resp = await window.solana.connect();
    console.log(resp.publicKey.toString());
  } catch (err) {
      console.log(err);
      // { code: 4001, message: 'User rejected the request.' }
  } 
}

const createTransaction = async (amountOfSol, provider) => {
  try {
    const lamportsToPay = (amountOfSol * LAMPORTS_PER_SOL);
    const customerKey = new PublicKey(provider.publicKey.toString());
    console.log(lamportsToPay);
    console.log("Solana public key", window.solana.publicKey);
    console.log(window.solana.publicKey);
    console.log("Merchant public key", MERCHANT_KEY);
    const instruction = SystemProgram.transfer({
      fromPubkey : customerKey,
      toPubkey : MERCHANT_KEY,
      lamports : lamportsToPay,
    });
    console.log("Instruction created was, ", instruction);
    const transaction = new Transaction();
    transaction.add(instruction);
    transaction.feePayer = await provider.publicKey;
    let blockhashObj = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhashObj.blockhash;
    if(transaction){
      console.log("TXN created was successful", transaction);
    }
    return transaction;
  }
  catch (err){
    console.log("Failed to create Transaction" , err);
  }
}

const signAndSendTransaction = async (transaction) =>{
    try {
      const signature = await window.solana.signAndSendTransaction(transaction);
      console.log(signature);
      await sleep(5000);
      const transactionConfirmed = await connection.getTransaction(signature.signature);
      console.log(transactionConfirmed);
      return transactionConfirmed != null;
    }
    catch (err){
      console.log("Failed to sign and send transaction", err);
    }
}

export const solanaPayment = async (amountInEuros) => {
    try {
      console.log("Amount in euros", amountInEuros);
      const provider = getProvider();
      console.log(provider);
      await connecting();
      const amountOfSol = amountInEuros / 40;
      //40 is the average value of Sol in Euros 
      const transaction = await createTransaction(amountOfSol, getProvider());
      paymentSuccess = await signAndSendTransaction(transaction);
      if(paymentSuccess){
        console.log("Payment was successful");
        return toast.success('Paiement réussi !', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          });
      }
      else {
        console.log("Payment was not successful");
        return toast.error('Erreur lors de la transaction !', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          });
      }
    }
    catch (err){
      console.log("Failed to generate solanaPayment" , err);
    }
};

export default solanaPayment;
