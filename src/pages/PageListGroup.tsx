import { Navbar } from "@/Components/Navbar";
import { Quadradinho } from "@/Components/Quadradinho";
import { FaPlusSquare } from "react-icons/fa";
export function PageListGroup(){
    return(
        <div className="flex flex-col md:w-full">
            <Navbar/>

        <div className='flex-1 border flex flex-col md:gap-5 border-contrastWhite30 border-b-0 border-r-0 rounded-tl-xl md:p-12 '>

        <div className="text-contrastWhite flex justify-between">
            <h1 className="font-semibold text-4xl ">Grupos de imóveis</h1>
            <p className='cursor-pointer hover:underline flex items-center gap-2'><FaPlusSquare/>Criar grupo</p>
        </div>
            <div className='flex gap-5 flex-wrap '>
            <Quadradinho/>
            <Quadradinho/>
            <Quadradinho/>
            <Quadradinho/>

            <Quadradinho/>
            <Quadradinho/>
            <Quadradinho/>
            <Quadradinho/>

            <Quadradinho/>
            <Quadradinho/>
            <Quadradinho/>
            <Quadradinho/>

            </div>
        </div>
            </div>
    )
}
