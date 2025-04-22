import { Navbar } from '@/Components/Navbar';
import { Property } from '../Components/Property';



export function PageProperties() {
    return(
        <div className='flex flex-col w-full '>

            <Navbar/>
            <div className='flex-1 border flex flex-col gap-5 border-contrastWhite30 border-b-0 border-r-0 rounded-tl-xl p-12'>
                <h1 className='font-semibold text-4xl text-contrastWhite'>Imóveis</h1>
                <div className='flex flex-col gap-5'>
                    <Property id='1'/>
                    <Property id='1'/>
                    <Property id='1'/>
                    <Property id='1'/>
                </div>
            </div>
        </div>
    )
}