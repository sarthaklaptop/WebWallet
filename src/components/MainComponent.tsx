'use client'

import { SecretRecoveryPhrase } from "@/components/SecretRecoveryPhrase";
import { AnotherComponent } from "@/components/AnotherComponent";
import { useState } from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import RippleButton from "@/components/ui/ripple-button";

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
        <div className="flex w-full items-center justify-center gap-4">

            {showButtons && ( 

                <div className="flex flex-col items-center justify-center gap-8">
                    <div>
                        <div className="text-4xl font-bold">
                            Wallet supports multiple blockchains
                        </div>
                        <div className="text-2xl text-gray-500">
                            Choose a blockchain to get started.
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        {/* Button to trigger components */}
                        <RainbowButton onClick={() => handleAction("SecretRecoveryPhrase")} >
                            Solana
                        </RainbowButton>
                        <RippleButton rippleColor="#ADD8E6" onClick={() => handleAction("AnotherComponent")} >
                            Show Another Component
                        </RippleButton>
                    </div>
                </div>
                
            )}

            {/* Dynamically render components based on state */}
            {showComponent === "SecretRecoveryPhrase" && <SecretRecoveryPhrase />}
            {showComponent === "AnotherComponent" && <AnotherComponent />}
        </div>
    )
}