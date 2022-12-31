import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from 'next/link'
import { ethers } from "ethers";
import { useState } from 'react';

const Home: NextPage = () => {

  const [walletAddress,setWalletAddress] = useState("");

  async function requestAccount() {
    //console.log("Inside Function requestAccount");

    if(window.ethereum) {
      //console.log("Detected Metamsk");
      try{
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
        setWalletAddress(accounts[0]);
      }
      catch(error) {
        console.log("Error connecting");
      }
    }
    else {
      alert("Please install metamask");
    }
  }

  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined')
    {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

    }
  }

  return (
    <>
    <div className="h-27 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">   
    <div className={styles.container}>
      <Head>
        <title>Decentralized FIR System</title>
        <meta name="description" content="Our main project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Decentralized FIR System
        </h1>
        <br/>
        <Link href="/fir">FIR REGISTERATION PORTAL</Link>
        <Link href="/evidence">Evidence Storage</Link>
        <Link href="/evidenceCards">Evidence Cards</Link>
        <div
          style={{
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
        <button onClick={requestAccount} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Connect
        </button>
        
        
        </div>
        <h3>Address : {walletAddress}</h3>
        <div className={styles.grid}>
            <h2>So guys this can be the main page from where we can direct to the other pages</h2>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Decentralized FIR system - Main project</p>
      </footer>
    </div>
    </div>
    </>
)}

export default Home;
