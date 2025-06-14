import { Property } from '../Components/Property';
import { Checkbox } from "@/Components/ui/checkbox"

import { IoSearch } from "react-icons/io5";
import { PiSliders } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/Components/ui/dialog"
import { useEffect, useState } from 'react';
import { useCountriesApi } from '@/hooks/useStatesBrazil';
import { useDataProperty} from '@/hooks/useDatas';
import { useBackendApi } from '@/hooks/useBackendApi';
interface statesProps {
    nome: string
    sigla: string
}

interface citiesProps {
    nome: string
}

interface bradescoProps{
    banco: string
    imageUrl: string
    city: string
    showDescription: string
    price: string
    id: number
    area: string
}

export function PageProperties() {
    const local = useLocation()
    const navigate = useNavigate()
    const [states, setStates] = useState<statesProps []>([])
    const [cities, setCities] = useState<citiesProps []>([])

    const [stateSelected, setStateSelected] = useState("")
    const [citySelected, setCitySelected] = useState("")


    const [filterValue, setFilterValue] = useState(Number)
    const [filterValueMax, setFilterValueMax] = useState(Number)
    const [filterCity, setFilterCity] = useState("")
    const [filterArea, setFilterArea] = useState("")


    const dataStates = useCountriesApi()

    const backendApi = useBackendApi()
    const [auctionsBradesco, setAuctionsBradesco] = useState<bradescoProps[]>([])

    useEffect(()=>{
        async function getAuctionsBradesco(){
            const data = await backendApi.getAuctionBradesco()
            
            if(data){
                setAuctionsBradesco(data.auction)
            }
        }
        getAuctionsBradesco()
    }, [])

    useEffect(()=>{
        async function getStates() {

            const data = await dataStates.getStates()
            if(data){
                setStates(data.states)
            } 
        }
        getStates()

        if(stateSelected){
            async function getCities() {

                const data = await dataStates.getCities(stateSelected)
                if(data){
                    setCities(data.cities)
                } 
            }
            getCities()
        }
        
    }, [stateSelected])

    async function filter(){
        const data = await backendApi.filter(filterValue, filterValueMax, null, null, null)
        if(data){
            setAuctionsBradesco(data.auctions)
        }
    }

    return(
        <div className='flex flex-col w-full pb-24 md:pb-0'>

            <div className='flex items-center px-20 flex-initial h-24'>
                <div className="flex-innit flex w-full md:w-auto justify-center md:justify-normal" >
                    <h1 className='text-contrastWhite font-inter text-3xl hover:brightness-75 cursor-pointer transition-all duration-200' onClick={()=>navigate("/Home")}>SEMAISMENOS</h1>
                </div>
                <div className='md:flex hidden  flex-1 justify-center items-center gap-7'>
                    <p className='relative left-17 text-bgBlack text-3xl'><IoSearch/></p>
                    <input type="text" className='bg-distaqueBlack rounded-sm h-12 w-[550px] pl-14 pr-5 placeholder:text-bgBlack placeholder:text-xl focus:outline outline-contrastWhite ' placeholder='Pesquisar imóvel'/>
                    {local.pathname=="/ListProperties"? 
                    
                        <Dialog>
                            <DialogTrigger className='h-12 w-12 rounded-full bg-distaqueBlack text-bgBlack text-3xl flex justify-center items-center cursor-pointer hover:brightness-90 transition-all duration-200 hover:border border-contrastWhite'>
                                <PiSliders/>
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
                                            <input className='border border-contrastWhite30 w-30 rounded-sm px-1' type="number" onChange={(e)=>setFilterValue(Number(e.target.value))}/>
                                            <p>Até:</p>
                                            <input className='border border-contrastWhite30 w-30 rounded-sm px-1' type="number" onChange={(e)=>setFilterValueMax(Number(e.target.value))}/>
                                            
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-semibold'>Localização:</p>
                                        <div>
                                            <p className='mt-2'>Cidade</p>
                                            <select className='border border-contrastWhite30 min-w-20 rounded-sm'>
                                                {cities.map(city => {
                                                    return(
                                                        <option key={city.nome} className='text-bgBlack' value="a">{city.nome}</option>

                                                    )
                                                })}
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
                                    <DialogClose className="text-bgBlack bg-contrastWhite w-full h-10 rounded-sm hover:brightness-75 transition-all duration-200 cursor-pointer" onClick={()=>filter()}>Filtrar</DialogClose>
                                </div>
                            </DialogContent>
                        </Dialog>
                    :
                        null
                    }
                </div>
            </div>
            <div className='flex-1 border flex flex-col gap-5 border-contrastWhite30 border-b-0 border-r-0 rounded-tl-xl md:p-12 p-3'>
                <h1 className='font-semibold text-4xl text-contrastWhite'>Imóveis</h1>
                <div className='flex flex-col gap-5'>
                    <input type="text" className='bg-distaqueBlack rounded-sm h-12 w-full px-5 placeholder:text-bgBlack placeholder:text-xl focus:outline outline-contrastWhite  md:hidden' placeholder='Pesquisar imóvel'/>
                    {local.pathname=="/ListProperties"? 
                    
                    <Dialog>
                        <DialogTrigger className='h-12 w-full rounded-sm gap-2 bg-distaqueBlack text-bgBlack text-3xl flex justify-center items-center cursor-pointer hover:brightness-90 transition-all duration-200 hover:border border-contrastWhite md:hidden'>
                            <p className='text-2xl font-semibold '>Filtrar</p><PiSliders/>
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

                                        <p className='mt-2'>Cidade</p>
                                        <select className='border border-contrastWhite30 min-w-20 rounded-sm'>
                                            {cities.map(city => {
                                                return(
                                                    <option key={city.nome} className='text-bgBlack' value="a">{city.nome}</option>

                                                )
                                            })}
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
                <div className='flex flex-col gap-5'>
                    {auctionsBradesco?
                    auctionsBradesco.map(auction=>{
                        return(
                            <Property key={auction.id} id={auction.id} name={auction.city} description={auction.showDescription} area={auction.area} imageUrl={auction.imageUrl}  location={auction.banco} value={auction.price} banco={auction.banco}/>
                        )
                    })
                    
                    :null}
                </div>
            </div>
        </div>
    )
}