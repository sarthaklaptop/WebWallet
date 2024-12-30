'use client'

import { SecretRecoveryPhrase } from "@/components/SecretRecoveryPhrase";
import { AnotherComponent } from "@/components/AnotherComponent";
import { useState } from "react";
import { Button } from "./ui/button";

// const handleAction = (component: string) => {
//     setShowComponent(component);
//     setShowButtons(false);
//   };
  
export function MainComponent() {

    const [showComponent, setShowComponent] = useState<string | null>(null);
    const [showButtons, setShowButtons] = useState(true)

    const handleAction = (component: string) => {
        setShowComponent(component);
        setShowButtons(false);
      };

    return (
        <div className="w-full">
            {/* flex w-full  items-center justify-center gap-4 */}

            {showButtons && ( 

                <div className="flex mx-auto flex-col items-center justify-center gap-8">
                    <div>
                        <div className="text-4xl font-bold">
                            Wallet supports multiple blockchains
                        </div>
                        <div className="text-2xl text-gray-500">
                            Choose a blockchain to get started.
                        </div>
                    </div>

                    <div className="flex gap-2">
                        {/* Button to trigger components */}
                        <button
                            onClick={() => handleAction("SecretRecoveryPhrase")}
                            className="px-4 py-2 text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200"
                        >
                        Solana
                        </button>

                        <Button disabled className="border bg-gray-200 cursor-pointer">
                            Ethereum
                        </Button>
                    </div>
                </div>
                
            )}

            {/* Dynamically render components based on state */}
            {showComponent === "SecretRecoveryPhrase" && <SecretRecoveryPhrase />}
            {showComponent === "AnotherComponent" && <AnotherComponent />}
        </div>
    )
}