import { HiOutlineBars3BottomLeft, HiMiniSquaresPlus } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { TbLayoutList } from "react-icons/tb";
import { FaGear } from "react-icons/fa6";
import { MdExitToApp } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function SideBar(){
    const local = useLocation()

    useEffect(()=>{
      console.log("a")
    },[local])

    const navigate = useNavigate()
    
    return(
        <div>
            {local.pathname=="/"?
                null
            : 
            <div className='h-screen sticky top-0 w-36 flex justify-center items-center p-7'>
                <div className='h-full flex items- justify-between flex-col text-contrastWhite w-full '>
                    <div className='flex flex-col items-center gap-10'>
                        <p className='text-3xl'><HiOutlineBars3BottomLeft/></p>
                        <p className='text-5xl'><FaUserCircle/></p>
                    </div>
                    <div className='flex flex-col items-center gap-6'>
                    <p className={local.pathname=="/Home"?'text-3xl p-3 rounded-md bg-distaqueBlack':'text-3xl p-3 rounded-md cursor-pointer hover:brightness-50 transition-all duration-150'} onClick={()=>navigate("/Home")}><AiFillHome/></p>
                    <p className={local.pathname=="/ListProperties"?'text-3xl p-3 rounded-md bg-distaqueBlack':'text-3xl p-3 rounded-md cursor-pointer hover:brightness-50 transition-all duration-150'} onClick={()=>navigate("/ListProperties")}><TbLayoutList/></p>
                    <p className={local.pathname=="/ListGroup"?'text-3xl p-3 rounded-md bg-distaqueBlack':'text-3xl p-3 cursor-pointer hover:brightness-50 transition-all duration-150 rounded-md'} onClick={()=>navigate("/ListGroup")}><HiMiniSquaresPlus/></p>
                    <p className={local.pathname=="/Config"?'text-3xl p-3 rounded-md bg-distaqueBlack':'text-3xl p-3 cursor-pointer hover:brightness-50 transition-all duration-150 rounded-md'}><FaGear/></p>
                    </div>
                    <div className='flex flex-col items-center'>
                    <p className='text-3xl'><MdExitToApp/></p>
                    </div>
                </div>
            </div>
            }
            
        </div>

    )
}