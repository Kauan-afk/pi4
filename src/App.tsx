import './index.css'
import { PiSliders } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { HiOutlineBars3BottomLeft, HiMiniSquaresPlus } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { TbLayoutList } from "react-icons/tb";
import { FaGear } from "react-icons/fa6";
import { MdExitToApp } from "react-icons/md";
function App() {

  return (
   <main className='h-screen bg-bgBlack flex'>
      <div className='h-full w-36 flex justify-center items-center p-7'>
        <div className='h-full flex items- justify-between flex-col text-contrastWhite w-full '>
          <div className='flex flex-col items-center gap-10'>
            <p className='text-3xl'><HiOutlineBars3BottomLeft/></p>
            <p className='text-5xl'><FaUserCircle/></p>
          </div>

          <div className='flex flex-col items-center gap-10'>
            <p className='text-3xl'><AiFillHome/></p>
            <p className='text-3xl'><TbLayoutList/></p>
            <p className='text-3xl'><HiMiniSquaresPlus/></p>
            <p className='text-3xl'><FaGear/></p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-3xl'><MdExitToApp/></p>

          </div>

        </div>
      </div>
      <div className='flex flex-col w-full'>
        <div className='flex items-center justify-between px-20 flex-initial h-24'>
          <h1 className='text-contrastWhite font-inter text-5xl'>LOGO</h1>

          <div className='flex items-center gap-7'>
            <p className='relative left-17 text-bgBlack text-3xl'><IoSearch/></p>
            <input type="text" className='bg-distaqueBlack rounded-sm h-12 w-[550px] pl-14 pr-5 placeholder:text-bgBlack placeholder:text-xl focus:outline outline-contrastWhite ' placeholder='Pesquisar imóvel'/>
            <button className='h-12 w-12 rounded-full bg-distaqueBlack text-bgBlack text-3xl flex justify-center items-center cursor-pointer hover:brightness-90 transition-all duration-200 hover:border border-contrastWhite'><PiSliders/></button>
          </div>
        </div>
        <div className='flex-1 border border-contrastWhite border-b-0 border-r-0 rounded-tl-xl'>

        </div>

      </div>
   </main>
  )
}

export default App
