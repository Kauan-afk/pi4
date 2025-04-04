import { HiOutlineBars3BottomLeft, HiMiniSquaresPlus } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { TbLayoutList } from "react-icons/tb";
import { FaGear } from "react-icons/fa6";
import { MdExitToApp } from "react-icons/md";

export function SideBar(){
    return(
        <div className='h-screen sticky top-0 w-36 flex justify-center items-center p-7'>
            <div className='h-full flex items- justify-between flex-col text-contrastWhite w-full '>
                <div className='flex flex-col items-center gap-10'>
                <p className='text-3xl'><HiOutlineBars3BottomLeft/></p>
                <p className='text-5xl'><FaUserCircle/></p>
                </div>
    
                <div className='flex flex-col items-center gap-6'>
                <p className='text-3xl p-3 rounded-md'><AiFillHome/></p>
                <p className='text-3xl p-3 bg-distaqueBlack rounded-md'><TbLayoutList/></p>
                <p className='text-3xl p-3 rounded-md'><HiMiniSquaresPlus/></p>
                <p className='text-3xl p-3 rounded-md'><FaGear/></p>
                </div>
                <div className='flex flex-col items-center'>
                <p className='text-3xl'><MdExitToApp/></p>
                </div>
            </div>
        </div>

    )
}