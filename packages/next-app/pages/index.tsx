import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Heading, Button, StatGroup, Stat, StatLabel, StatNumber, StatHelpText, StatArrow} from '@chakra-ui/react'
import { ethers } from "ethers";
import { useEffect, useState } from 'react';
// import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { NextResponse } from "next/server";
import { getCookie, setCookie, removeCookie } from 'typescript-cookie'

// npm i --save-dev @types/js-cookie

const Home: NextPage = () => {

  
  const router = useRouter();
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
        setWalletAddress(accounts[0])



        // 0x1d1eFC63bf932c1daF23c01FD1e18dD1bBe1E78a
        if(accounts[0] == '0x6855cc76b0f1f87a92f204346647adb557b28860'.toLowerCase() || accounts[0] == '0x52bB3A42564c0Df72ECB111D24BE82C614497A22'.toLowerCase() || accounts[0] == '0x1d1efc63bf932c1daf23c01fd1e18dd1bbe1e78a'.toLowerCase())
        {
          console.log("congrats");
          var inTenMinutes = new Date(new Date().getTime() + 10 * 60 * 1000);

          setCookie("loggedin", "true",{ expires: inTenMinutes });
          // console.log(req.cookies.get("loggedin"));
          // router.push("/fir");
          console.log(getCookie("loggedin"))
          
        }
        else{
          console.log("sorry.. wrong address");
          
          removeCookie('loggedin')
        }
      }
      catch(error) {
        console.log("Error connecting");
      }
    }
    else {
      alert("Please install metamask");
    }

    // 0x52bB3A42564c0Df72ECB111D24BE82C614497A22
  }

  // async function connectWallet() {
  //   if(typeof window.ethereum !== 'undefined')
  //   {
  //     await requestAccount();
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     await provider.send("eth_requestAccounts", []);

  //   }
  // }

  return (
    <>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-10">
        <span className="font-bold text-xl tracking-tight">DeFIR</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="/fir" className="block mt-4 lg:inline-block lg:mt-0 text-teal-50 hover:text-white mr-10">
            FIR Registeration Portal
          </a>
          <a href="/evidence" className="block mt-4 lg:inline-block lg:mt-0 text-teal-50 hover:text-white mr-10">
            Evidence Storage
          </a>
          <a href="/firCards" className="block mt-4 lg:inline-block lg:mt-0 text-teal-50 hover:text-white  mr-10">
            FIR
          </a>
          <a href="/evidenceCards" className="block mt-4 lg:inline-block lg:mt-0 text-teal-50 hover:text-white  mr-10">
            Evidences
          </a>
        </div>
        <Button onClick={requestAccount} size='lg' colorScheme='blue' mt='6px'>
          Connect
        </Button>
      </div>
    </nav>

    <div className="h-27 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">   
    
    <center>
    <StatGroup>
      <Stat>
        <StatLabel>FIRs REGISTERED</StatLabel>
        <StatNumber>345,670</StatNumber>
        <StatHelpText>
          <StatArrow type='increase' />
          23.36%
        </StatHelpText>
      </Stat>

      <Stat>
        <StatLabel>Evidences Stored</StatLabel>
        <StatNumber>45</StatNumber>
        <StatHelpText>
          <StatArrow type='decrease' />
          9.05%
        </StatHelpText>
      </Stat>
    </StatGroup>
    </center>

    
      <main className={styles.main}>

      <Heading size='lg' fontSize='50px'>
        Decentralized FIR 
      </Heading>
        <br/>
        
        {/* <Link href="/fir">FIR REGISTERATION PORTAL</Link> */}
        {/* <Link href="/evidence">Evidence Storage</Link> */}
        {/* <Link href="/evidenceCards">Evidence Cards</Link> */}
        
        <Heading noOfLines={1}>
          Address : {walletAddress}
        </Heading>
      </main>

      <footer className={styles.footer}>
        <p>Decentralized FIR system - Main project</p>
      </footer>
    </div>
    
    </>
)}

export default Home;
