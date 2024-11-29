// Dependencies: pnpm install lucide-react

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function InputDemo({privateKey}:any) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
    navigator.clipboard.writeText(privateKey); // Copies the memo to clipboard
    alert("Secret copied to clipboard!");
  } 

  return (
    <div className="space-y-2">
      {/* <Label htmlFor="input-23">Show/hide password input</Label> */}
      <div 
        className="relative"
      >
        <Input
          id="input-23"
          className="pe-9"
        //   placeholder={privateKey}
        value={privateKey}
          type={isVisible ? "text" : "password"}
          disabled
          
        />
        <button
          className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          onClick={toggleVisibility}
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
          aria-controls="password"
        //   onClick={() => {
        //      // Optional feedback
        //     }}
        >
          {isVisible ? (
            <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
          ) : (
            <Eye size={16} strokeWidth={2} aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
