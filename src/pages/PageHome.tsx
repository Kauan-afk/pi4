import { Navbar } from '@/Components/Navbar';
import { Property } from '@/Components/Property';
import { Quadradinho } from '@/Components/Quadradinho';
import { useNavigate } from 'react-router-dom';

export function PageHome(){
    const navigate = useNavigate()
    return(

        <div className="flex flex-col w-full pb-24 md:pb-0">
            <Navbar/>

            <div className='flex-1 border flex flex-col gap-5 border-contrastWhite30 border-l-0 md:border-l border-b-0 border-r-0 rounded-tl-xl md:p-12 p-3'>

                <div className='flex justify-between items-center text-contrastWhite'>
                    <h1 className="font-semibold text-4xl ">Alguns grupos de imóveis</h1>
                    <p className='cursor-pointer hover:underline' onClick={()=>navigate("/ListGroup")}>Ver todos</p>
                </div>
                <div className='flex md:justify-between md:gap-5 gap-10 mb-10 flex-wrap'>
                    <Quadradinho/>
                    <Quadradinho/>
                    <Quadradinho/>
                    <Quadradinho/>

                </div>
                <div className='flex justify-between items-center text-contrastWhite'>
                    <h1 className="font-semibold text-4xl text-contrastWhite">Alguns Imóveis</h1>
                    <p className='cursor-pointer hover:underline' onClick={()=>navigate("/ListProperties")}>Ver todos</p>
                </div>
                <div className="flex flex-col gap-5">
                    <Property id='1'/>
                    <Property id='1'/>
                    <Property id='1'/>
                </div> 
            </div>
        </div>
    )
}

