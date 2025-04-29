import { HiOutlineBars3BottomLeft, HiMiniSquaresPlus } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { TbLayoutList } from "react-icons/tb";
import { FaGear } from "react-icons/fa6";
import { MdExitToApp } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function SideBar(){
    const local = useLocation()

    const [sideBarSize, setSizeBarSize] = useState("w-36")
    useEffect(()=>{
      console.log("a")
    },[local])

    const navigate = useNavigate()
    
    return(
        <div>
            {local.pathname=="/"?
                null
            : 
            <div className={`h-screen sticky top-0 ${sideBarSize} flex justify-center transition-all duration-200 items-center p-7`}>
                <div className='h-full flex justify-between flex-col text-contrastWhite w-full '>
                    <div className={sideBarSize=="w-60"? 'flex flex-col gap-10' :'flex flex-col items-center gap-10'}>
                        <p onClick={()=>{sideBarSize=="w-36"? setSizeBarSize("w-60"): setSizeBarSize("w-36")}} className='text-3xl px-3 cursor-pointer hover:brightness-50 transition-all duration-150'><HiOutlineBars3BottomLeft/> </p>
                        <p className='text-5xl flex items-center px-3 gap-3'><FaUserCircle/> {sideBarSize=="w-60"? <p className="text-xl">Kauan</p> :null}</p>
                    </div>
                    <div className={sideBarSize=="w-60"?`flex flex-col gap-6` :`flex flex-col items-center gap-6`}>
                        <p className={local.pathname=="/Home"?'text-3xl p-3 rounded-md bg-distaqueBlack flex items-center gap-3':'flex items-center gap-3 text-3xl p-3 rounded-md cursor-pointer hover:brightness-50 transition-all duration-150'} onClick={()=>navigate("/Home")}><AiFillHome/>{sideBarSize=="w-60"? <p className="text-xl">Inicio</p> :null}</p>
                        <p className={local.pathname=="/ListProperties"?'text-3xl p-3 rounded-md bg-distaqueBlack flex items-center gap-3':'flex items-center gap-3 text-3xl p-3 rounded-md cursor-pointer hover:brightness-50 transition-all duration-150'} onClick={()=>navigate("/ListProperties")}><TbLayoutList/>{sideBarSize=="w-60"? <p className="text-xl">Imóveis</p> :null}</p>
                        <p className={local.pathname=="/ListGroup"?'text-3xl p-3 rounded-md bg-distaqueBlack flex items-center gap-3':'flex items-center gap-3 text-3xl p-3 cursor-pointer hover:brightness-50 transition-all duration-150 rounded-md'} onClick={()=>navigate("/ListGroup")}><HiMiniSquaresPlus/>{sideBarSize=="w-60"? <p className="text-xl">Grupos</p> :null}</p>
                        <p className={local.pathname=="/Config"?'text-3xl p-3 rounded-md bg-distaqueBlack flex items-center gap-3':'flex items-center gap-3 text-3xl p-3 cursor-pointer hover:brightness-50 transition-all duration-150 rounded-md'}><FaGear/>{sideBarSize=="w-60"? <p className="text-xl">Configurações</p> :null}</p>
                    </div>
                    <div className={sideBarSize=="w-60"? 'flex flex-col' :'flex flex-col items-center'}>
                    <p className='text-3xl px-3 flex items-center gap-3'><MdExitToApp/>{sideBarSize=="w-60"? <p className="text-xl">Sair</p> :null}</p>
                    </div>
                </div>
            </div>
            }
            
        </div>

    )
}