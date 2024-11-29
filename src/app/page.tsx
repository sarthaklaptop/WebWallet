import { Footer } from "@/components/Footer";
import { MainComponent } from "@/components/MainComponent";



export default function Home() {

  return (
    <div className="flex flex-col items-center justify-between w-full h-lvh">

      

      <div className="flex  items-center justify-center w-full p-4 m-4">
        <MainComponent/>
      </div>

      <div className="">
        <Footer/>  
      </div>
    
    </div>
  );
}
