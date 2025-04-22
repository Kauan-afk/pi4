import { Navbar } from "@/Components/Navbar";
import { Quadradinho } from "@/Components/Quadradinho";

export function PageListGroup(){
    return(
        <div className="flex flex-col w-full">
            <Navbar/>

        <div className='flex-1 border flex flex-col gap-5 border-contrastWhite30 border-b-0 border-r-0 rounded-tl-xl p-12 '>

        <h1 className="font-semibold text-4xl text-contrastWhite">Grupos de imóveis</h1>
            <div className='flex gap-7 flex-wrap '>
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
