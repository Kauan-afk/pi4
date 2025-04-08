import { Navbar } from '@/Components/Navbar';
import { Property } from '@/Components/Property';

export function PageHome(){
    return(

        <div className="flex flex-col w-full">
         <Navbar/>
<div className="flex ">
        <h1 className="font-semibold text-4xl text-contrastWhite">Alguns Imóveis</h1>
         <div className="flex flex-col gap-5">
            <Property/>
            <Property/>
            <Property/>
         </div> 
         </div>
         </div>
   

    )
}

