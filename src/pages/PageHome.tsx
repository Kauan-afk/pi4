import { Navbar } from '@/Components/Navbar';
import { Property } from '@/Components/Property';
import { Quadradinho } from '@/Components/Quadradinho';

export function PageHome(){
    return(

        <div className="flex flex-col w-full">
         <Navbar/>

<div className='flex-1 border flex flex-col gap-5 border-contrastWhite30 border-b-0 border-r-0 rounded-tl-xl p-20'>

<h1 className="font-semibold text-4xl text-contrastWhite">Alguns grupos de imóveis</h1>
    <div className='flex justify-between '>
    <Quadradinho/>
    <Quadradinho/>
    <Quadradinho/>
    <Quadradinho/>

    </div>
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

