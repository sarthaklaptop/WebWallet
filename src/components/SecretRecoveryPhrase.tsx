'use client'

import { generateMnemonic as bip39GenerateMnemonic, mnemonicToSeedSync } from "bip39";
import CopytoClipboard from "./OriginUI/CopytoClipbord";
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
      <div className="flex flex-col ">
        {
          showCurrentComponent && 

          <div>
            <div className="">
              <h2 className="text-4xl">Secret Recovery Phrase</h2>
              <p className="text-2xl text-gray-500">Save these words in a safe place.</p>
            </div>
            <button className="border-2 w-fit mx-auto p-2 rounded-lg bg-blue-300 font-medium border-gray-400 hover:bg-blue-400 transition-all duration-100"
            onClick={() => generateMnemonic()}
            >
              Generate Wallet
            </button>
          </div>
        }

        {showWallets && <Wallets memo={mnemonics}/>}
        {/* <CopytoClipboard/> */}
      </div>
    );
  }
  