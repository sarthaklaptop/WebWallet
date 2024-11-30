import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainComponent } from "@/components/MainComponent";
import { Separator } from "@/components/ui/separator";



export default function Home() {

  return (
    <div className="flex flex-col items-center justify-between w-full h-lvh">

      <Header/>

      

      <div className="flex  items-center justify-center w-full p-4 m-4">
        <MainComponent/>
      </div>

      {/* <Separator className="text-black"/> */}


      {/* <hr /> */}

      <div className="w-full flex flex-col items-center justify-center">
        {/* <div className="w-full h-1 bg-black border border-t-0  "></div> */}
        {/* <hr className="h-1 my-8 bg-gray-200 border-0 dark:bg-gray-700"/> */}
        <hr className="w-full h-[0.75px] mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        <Footer/>  
      </div>
    
    </div>
  );
}
