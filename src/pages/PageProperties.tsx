import { Property } from '../Components/Property';
import { Checkbox } from "@/Components/ui/checkbox"

import { IoSearch } from "react-icons/io5";
import { PiSliders } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/Components/ui/dialog"

export function PageProperties() {
    const local = useLocation()
    return(
        <div className='flex flex-col w-full '>

            <div className='flex items-center px-20 flex-initial h-24'>
                <div className="flex-innit" >
                    <h1 className='text-contrastWhite font-inter text-3xl'>SEMAISMENOS</h1>
                </div>
                <div className='flex flex-1 justify-center items-center gap-7'>
                    <p className='relative left-17 text-bgBlack text-3xl'><IoSearch/></p>
                    <input type="text" className='bg-distaqueBlack rounded-sm h-12 w-[550px] pl-14 pr-5 placeholder:text-bgBlack placeholder:text-xl focus:outline outline-contrastWhite ' placeholder='Pesquisar imóvel'/>
                    {local.pathname=="/ListProperties"? 
                    
                        <Dialog>
                            <DialogTrigger>
                                <button className='h-12 w-12 rounded-full bg-distaqueBlack text-bgBlack text-3xl flex justify-center items-center cursor-pointer hover:brightness-90 transition-all duration-200 hover:border border-contrastWhite'><PiSliders/></button>
    
                            </DialogTrigger>
                            <DialogContent className="bg-bgAlmostBlack text-contrastWhite min-h-40 flex flex-col justify-between">
                                <DialogHeader>
                                    <DialogTitle>Filtros</DialogTitle>  
                                </DialogHeader>
                                <div className='flex flex-col gap-7'>
                                    <div>
                                        <p className='font-semibold'>Valor:</p>
                                        <div className='flex gap-5'>
                                            <p>De:</p>
                                            <input className='border border-contrastWhite30 w-30 rounded-sm px-1' type="text" />
                                            <p>Até:</p>
                                            <input className='border border-contrastWhite30 w-30 rounded-sm px-1' type="text" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-semibold'>Localização:</p>
                                        <div>
                                            <p>Estado</p>
                                            <select className='border border-contrastWhite30 min-w-20 rounded-sm'>
                                                <option value="a">a</option>
                                                <option value="b">b</option>
                                                <option value="c">c</option>
                                                <option value="d">d</option>
                                            </select>

                                            <p className='mt-2'>Cidade</p>
                                            <select className='border border-contrastWhite30 min-w-20 rounded-sm'>
                                                <option value="a">a</option>
                                                <option value="b">b</option>
                                                <option value="c">c</option>
                                                <option value="d">d</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='flex gap-5'>
                                        <p className='font-semibold'>Área: </p>
                                        <input type="text" className='border border-contrastWhite30 w-30 rounded-sm px-1'/>  
                                    </div>
                                    
                                    <div>
                                        <p className='font-semibold'>Tipo:</p>
                                        <div>
                                            <div className='flex items-center gap-2'>
                                                <Checkbox/>
                                                <p>Casa</p>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <Checkbox/>
                                                <p>Apartamento</p>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <Checkbox/>
                                                <p>Terreno</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-semibold'>Data:</p>
                                        <input className='border border-contrastWhite30 px-2 rounded-sm' type="date"/>
                                    </div>
                                    <button className="text-bgBlack bg-contrastWhite w-full h-10 rounded-sm hover:brightness-75 transition-all duration-200 cursor-pointer">Filtrar</button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    :
                        null
                    }
                </div>
            </div>
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