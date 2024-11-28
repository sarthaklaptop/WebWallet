'use client'

import React, { useState } from 'react'
import CopytoClipboard from './OriginUI/CopytoClipbord';
import * as bip39 from 'bip39';
import { Keypair, PublicKey } from '@solana/web3.js';
import * as ed25519 from 'ed25519-hd-key';


interface WalletsProps {
    memo: string; // Ensure memo is of type string
  }

const Wallets: React.FC<WalletsProps> = ({memo}) => {

    const [wallets, setWallets] = useState<{ address: string; privateKey: string }[]>([]);

    const derivedKeyPairFromMnemonics = (mnemonics: string, index: number = 0): Keypair => {
        const seed = bip39.mnemonicToSeedSync(mnemonics);
        const derivationPath = `m/44'/501'/${index}'/0'`;
        const derivedSeed = ed25519.derivePath(derivationPath, seed.toString('hex')).key;
        return Keypair.fromSeed(derivedSeed);
    }

    const addWallet = () => {
        try {
            const index = wallets.length;
            const keypair = derivedKeyPairFromMnemonics(memo, index);

            setWallets((prevWallets) => [
                ...prevWallets,
                {
                    address: new PublicKey(keypair.publicKey).toBase58(),
                    privateKey: Buffer.from(keypair.secretKey).toString('hex'),
                },
            ]);
        } catch (error) {
            console.error('Error generating wallet:', error);
        }
    }

    const clearWallet = () => {
        // setWallets.splice(0);
        setWallets([]);
    }

  return (
    <div className='w-full'>
        <h1 className='text-5xl font-semibold'>Your Secret Wallet </h1>
        <CopytoClipboard memo={memo}/>


        <div>

            <button onClick={addWallet}>
                Add Wallet
            </button>

            <button onClick={clearWallet}>
                Clear Wallet
            </button>

            <div className='m-4 space-y-4'>

                {/* {wallets.map((wallet, index) => (
                    <div>

                    </div>
                ))} */}

        {wallets.map((wallet, index) => (
          <div key={index} className="p-4 border rounded bg-gray-100">
            <p className="font-semibold">Wallet {index + 1}:</p>
            <p>
              <span className="font-bold">Address:</span> {wallet.address}
            </p>
            <p>
              <span className="font-bold">Private Key:</span> {wallet.privateKey}
            </p>
          </div>
        ))}

            </div>
            
        </div>
    </div>
  )
}

export default Wallets

// saddle rural coconut small tuna false apart airport puzzle all brain announce
