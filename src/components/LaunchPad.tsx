"use client"

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const LaunchPad = () => {
    const router = useRouter();

    const navigateToLaunchPad = () => {
        router.push("/launchpad")
    }

  return (
    <div className="m-10">
      <Button  
        className="px-4 py-2 text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200"
        onClick={navigateToLaunchPad}
      >
        Try LaunchPad
      </Button>
    </div>
  );
};

export default LaunchPad;
