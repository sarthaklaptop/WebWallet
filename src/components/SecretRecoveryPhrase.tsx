'use client'

import { generateMnemonic as bip39GenerateMnemonic, mnemonicToSeedSync } from "bip39";
import { useState } from "react";
import Wallets from "./Wallets";

export function SecretRecoveryPhrase() {

  const [mnemonics, setMnemonics] = useState("");
  const [showWallets, setShowWallets] = useState(false);
  const [showCurrentComponent, setShowCurrentComponent] = useState(true);


  async function generateMnemonic() {
    const mnemonics = bip39GenerateMnemonic();

    // console.log(mnemonics);

    console.log("Generated Mnemonics => ", mnemonics);
    setMnemonics(mnemonics);
    setShowCurrentComponent(false);
    setShowWallets(true);
    const seed = mnemonicToSeedSync(mnemonics);

    console.log("Seed phrase:-> ", seed);

  }



    return (
      <div className="w-full">
        {
          showCurrentComponent && 

          <div className=" flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="text-5xl font-mono font-bold"> <span className="pacifico">Secret</span> Recovery Phrase</h2>
              <p className="text-xl text-gray-400 underline tracking-widest font-sans lobster">Save these words in a safe place.</p>
            </div>
            {/* <button className="border-2 w-fit mx-auto p-2 rounded-lg bg-blue-300 font-medium border-gray-400 hover:bg-blue-400 transition-all duration-100"
            onClick={() => generateMnemonic()}
            >
              
            </button> */}

            <div className="w-full mx-auto flex items-center justify-center">
              <button 
                className="rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mx-auto joti_one" 
                type="button"
                onClick={() => generateMnemonic()}
              >
                Generate Wallet
              </button>
            </div>
          </div>
        }

        {showWallets && <Wallets memo={mnemonics}/>}
        {/* <CopytoClipboard/> */}
      </div>
    );
  }
  