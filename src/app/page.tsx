import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import LaunchPad from "@/components/LaunchPad";
import { MainComponent } from "@/components/MainComponent";
import { Separator } from "@/components/ui/separator";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between w-full h-lvh">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex flex-col items-center justify-center w-full p-4 m-4">
        <MainComponent />
        <LaunchPad/>
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <hr className="w-full h-[0.75px] mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        <Footer />
      </div>
    </div>
  );
}
