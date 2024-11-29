'use client'

import React, { useState } from 'react'
import CopytoClipboard from './OriginUI/CopytoClipbord';
import * as bip39 from 'bip39';
import { Keypair, PublicKey } from '@solana/web3.js';
import * as ed25519 from 'ed25519-hd-key';
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { IoCopyOutline } from "react-icons/io5";
import InputDemo from './PasswordInputTag';

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
        {/* <h1 className='text-5xl font-semibold'> </h1> */}
        {/* <CopytoClipboard memo={memo}/> */}

        {/* // Dependencies: pnpm install lucide-react */}

        <Accordion className='cursor-pointer border p-4 rounded-lg' type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className='text-5xl font-semibold '>Your Secret Wallet</AccordionTrigger>
            <AccordionContent
              onClick={() => {
                navigator.clipboard.writeText(memo); // Copies the memo to clipboard
                alert("Secret copied to clipboard!"); // Optional feedback
              }}        
            >
              <div className='grid grid-rows-4 grid-cols-4 '>
                {memo.split(' ').map((word, index) => (
                  <div className=' m-2 ' key={index}>
                    <p className='text-slate-50 font-bold text-base hover:bg-gray-500 hover:scale-105 transition-all duration-75 text-center p-3 rounded-md bg-gray-400'>{word}</p>
                  </div>
                ))}
              </div>
              <div>
                <p className='flex items-center gap-2 font-bold text-gray-600'>Click Anywhere To Copy <IoCopyOutline/></p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* <Accordion.Root defaultValue={['React']}>
          {['React', 'Solid', 'Vue'].map((item) => (
            <Accordion.Item key={item} value={item}>
              <Accordion.ItemTrigger>
                What is {item}?
                <Accordion.ItemIndicator>
                  <ChevronDownIcon />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                {item} is a JavaScript library for building user interfaces.
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root> */}


        <div className='flex flex-col items-center justify-center m-2'>

            <div className='flex items-center justify-center gap-2'>
              <Button className='hover:bg-slate-100 border font-bold' onClick={addWallet}>
                  Add Wallet
              </Button>


              <Button
                className=" border bg-red-500 text-white hover:bg-red-600 transition-all duration-75 font-bold" 
                onClick={clearWallet}
              >
                  Clear Wallet
              </Button>

            </div>

            <div className='m-4 space-y-4 flex flex-col w-full'>
              <p className='text-3xl font-semibold'>Wallet</p>
              {wallets.map((wallet, index) => (
                <div key={index} className="p-4 border flex flex-col rounded ">
                  <div>
                    <p className="font-medium text-2xl">Wallet {index + 1}</p>
                  </div>

                  <div className='bg-gray-100 p-2 py-4 flex flex-col items-start gap-4 justify-between'>
                    <div className='flex flex-col gap-1'>
                      <span className="font-bold">Public Key</span> 
                      <p 
                          className='text-sm hover:text-gray-700 transition-all duration-75 cursor-pointer'
                          onClick={() => {
                            navigator.clipboard.writeText(wallet.address); // Copies the memo to clipboard
                            alert("Secret copied to clipboard!"); // Optional feedback
                          }}
                        >
                        {wallet.address}
                      </p>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <span className="font-bold">Private Key</span> 
                      {/* <p
                        className='text-sm hover:text-gray-700 transition-all duration-75 cursor-pointer'
                        onClick={() => {
                          navigator.clipboard.writeText(wallet.privateKey); // Copies the memo to clipboard
                          alert("Secret copied to clipboard!"); // Optional feedback
                        }}
                      >{wallet.privateKey}</p> */}
                      <InputDemo privateKey={wallet.privateKey}/>
                    </div>
                  </div>
                </div>
              ))}

            </div>
            
        </div>
    </div>
  )
}

export default Wallets

// saddle rural coconut small tuna false apart airport puzzle all brain announce
