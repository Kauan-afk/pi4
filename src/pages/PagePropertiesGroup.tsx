import { Property } from '../Components/Property';
import { Checkbox } from "@/Components/ui/checkbox"

import { IoSearch } from "react-icons/io5";
import { PiSliders } from "react-icons/pi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
}

export function PagePropertiesGroup() {
    const navigate = useNavigate()

    const backendApi = useBackendApi()
    const [auctionsBradesco, setAuctionsBradesco] = useState<bradescoProps[]>([])
    const {id} = useParams()
    useEffect(()=>{
      async function readFolder(){
        if(id){
            const data = await backendApi.read_folder(id)
            console.log(data.auctions)
            if(data){
                setAuctionsBradesco(data.auctions)

            }
        }
      }
      readFolder()
    }, [])

    return(
        <div className='flex flex-col w-full pb-24 md:pb-0'>

            <div className='flex items-center px-20 flex-initial h-24'>
                <div className="flex-innit flex w-full md:w-auto justify-center md:justify-normal" >
                    <h1 className='text-contrastWhite font-inter text-3xl hover:brightness-75 cursor-pointer transition-all duration-200' onClick={()=>navigate("/Home")}>SEMAISMENOS</h1>
                </div>
                <div className='md:flex hidden  flex-1 justify-center items-center gap-7'>
                    <p className='relative left-17 text-bgBlack text-3xl'><IoSearch/></p>
                    <input type="text" className='bg-distaqueBlack rounded-sm h-12 w-[550px] pl-14 pr-5 placeholder:text-bgBlack placeholder:text-xl focus:outline outline-contrastWhite ' placeholder='Pesquisar imóvel'/>
                    
                </div>
            </div>
            <div className='flex-1 border flex flex-col gap-5 border-contrastWhite30 border-b-0 border-r-0 rounded-tl-xl md:p-12 p-3'>
                <h1 className='font-semibold text-4xl text-contrastWhite'>Imóveis</h1>
                <div className='flex flex-col gap-5'>
                    <input type="text" className='bg-distaqueBlack rounded-sm h-12 w-full px-5 placeholder:text-bgBlack placeholder:text-xl focus:outline outline-contrastWhite  md:hidden' placeholder='Pesquisar imóvel'/>
                    
                </div>
                <div className='flex flex-col gap-5'>
                    {auctionsBradesco?
                    auctionsBradesco.map(auction=>{
                        return(
                            <Property key={auction.id} id={auction.id} name={auction.city} description={auction.showDescription} area={auction.banco} imageUrl={auction.imageUrl} location={auction.banco} value={auction.price} banco={auction.banco}/>
                        )
                    })
                    
                    :null}
                </div>
            </div>
        </div>
    )
}