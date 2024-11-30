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

import toast, { Toaster } from 'react-hot-toast';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';




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

            toast(  
              "Wallet Created",
              {
                position: 'bottom-right',
                duration: 1500
              }
            )
        } catch (error) {
            console.error('Error generating wallet:', error);
        }
    }

    const clearWallet = () => {
        // setWallets.splice(0);
        setWallets([]);
        toast(  
          "Wallets Deleted",
          {
            position: 'bottom-right',
            duration: 1500
          }
        )
    }

  return (
    <div className='w-full'>

        <Accordion className='cursor-pointer border p-4 rounded-2xl' type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className='text-5xl font-semibold '>Your Secret Wallet</AccordionTrigger>
            <AccordionContent
              onClick={() => {
                navigator.clipboard.writeText(memo); // Copies the memo to clipboard
                toast(  
                  "Secret Key Copied",
                  {
                    position: 'bottom-right',
                    duration: 1500, 
                    icon: <IoCopyOutline/>
                  }
                )
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

        <div className='flex flex-col items-center justify-center m-2'>

            <div className='flex items-center justify-center gap-2'>
              <Button className='hover:bg-slate-100 border font-bold' 
                onClick={addWallet}
                
              >
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
              <p className='text-3xl font-semibold lexend_zetta'>Wallet</p>
                {wallets.map((wallet, index) => (
                  <div key={index} className="pt-4 my-2  border flex flex-col rounded-2xl ">
                    <div>
                      <p className="font-medium text-2xl p-2">Wallet {index + 1}</p>
                    </div>

                    <div className='bg-gray-100 p-2 py-4 flex flex-col rounded-2xl items-start gap-4 justify-between'>
                      <div className='flex flex-col gap-1'>
                        <span className="font-bold">Public Key</span> 
                        <p 
                            className='text-sm hover:text-gray-700 transition-all duration-75 cursor-pointer'
                            onClick={() => {
                              navigator.clipboard.writeText(wallet.address);
                              toast(  
                                "Public Key Copied",
                                {
                                  position: 'bottom-right',
                                  duration: 1500, 
                                  icon: <IoCopyOutline/>
                                }
                              )
                            }}
                          >
                          {wallet.address}
                        </p>
                      </div>
                      <div className='flex flex-col gap-1 w-full'>
                        <span className="font-bold">Private Key</span> 
                        <InputDemo privateKey={wallet.privateKey}/>
                      </div>
                    </div>
                  </div>
                ))}
                {/* <Separator/> */}
            </div>
            
        </div>

        <Toaster />
    </div>
  )
}

export default Wallets;