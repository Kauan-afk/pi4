import './index.css'
import { PiSliders } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";

import { Property } from './Components/Property';
import { SideBar } from './Components/SideBar';


function App() {

  return (
   <main className='min-h-screen bg-bgBlack flex'>
      <SideBar/>
      <div className='flex flex-col w-full'>
        <div className='flex items-center justify-between px-20 flex-initial h-24'>
          <h1 className='text-contrastWhite font-inter text-5xl'>LOGO</h1>

          <div className='flex items-center gap-7'>
            <p className='relative left-17 text-bgBlack text-3xl'><IoSearch/></p>
            <input type="text" className='bg-distaqueBlack rounded-sm h-12 w-[550px] pl-14 pr-5 placeholder:text-bgBlack placeholder:text-xl focus:outline outline-contrastWhite ' placeholder='Pesquisar imóvel'/>
            <button className='h-12 w-12 rounded-full bg-distaqueBlack text-bgBlack text-3xl flex justify-center items-center cursor-pointer hover:brightness-90 transition-all duration-200 hover:border border-contrastWhite'><PiSliders/></button>
          </div>
        </div>
        <div className='flex-1 border flex flex-col gap-5 border-contrastWhite30 border-b-0 border-r-0 rounded-tl-xl p-20'>
          <h1 className='font-semibold text-4xl text-contrastWhite'>Imóveis</h1>
          <div className='flex flex-col gap-5'>
            <Property/>
            <Property/>
            <Property/>
            <Property/>
          </div>
        </div>

      </div>
   </main>
  )
}

export default App
