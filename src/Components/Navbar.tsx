import { IoSearch } from "react-icons/io5";
import { PiSliders } from "react-icons/pi";
export function Navbar() {
    return(
        <div className='flex items-center px-20 flex-initial h-24'>
            <div className="flex-innit" >
            <h1 className='text-contrastWhite font-inter text-5xl'>LOGO</h1>
</div>
            <div className='flex flex-1 justify-center items-center gap-7'>
                <p className='relative left-17 text-bgBlack text-3xl'><IoSearch/></p>
                <input type="text" className='bg-distaqueBlack rounded-sm h-12 w-[550px] pl-14 pr-5 placeholder:text-bgBlack placeholder:text-xl focus:outline outline-contrastWhite ' placeholder='Pesquisar imóvel'/>
                <button className='h-12 w-12 rounded-full bg-distaqueBlack text-bgBlack text-3xl flex justify-center items-center cursor-pointer hover:brightness-90 transition-all duration-200 hover:border border-contrastWhite'><PiSliders/></button>
            </div>
        </div>
    )
}