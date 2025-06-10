import { Navbar } from "@/Components/Navbar";
import { LiaRulerCombinedSolid } from "react-icons/lia";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { useDataProperty } from '@/hooks/useDatas';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBackendApi } from "@/hooks/useBackendApi";

import itau from '../assets/Section-4_Image-with-text.avif'
import bradesco from '../assets/Bradesco-Symbol.png'
import caixa from '../assets/Caixa.png'
import santander from '../assets/BSBR-9870d28e.png'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } from "@/Components/ui/dialog"

interface PropertyProps {
    id: string,
    name: string,
    description: string,
    value: string,
    urlImg: string,
    location: string,
    area: string
}

interface bradescoProps{
    banco: string
    imageUrl: string
    city: string
    showDescription: string
    price: string
    id: number
    area: string
    link: string
}

interface foldersProps{
    id: string
    name: string
}

export function PageProperty(){
    const [property, setProperty] = useState<PropertyProps>()
    const [folders, setFolders] = useState<foldersProps[]>([])
    const [folderSelected, setFolderSelected] = useState("")


    const [auctionsBradesco, setAuctionsBradesco] = useState<bradescoProps>()
    const backendApi = useBackendApi()
    const {id} = useParams()
    useEffect(()=>{
        async function getAuctionsBradesco(){
            if(id){
    const data = await backendApi.getAuction(id)
            
            if(data){
                setAuctionsBradesco(data.auction)
            }
            }
            
        }
        getAuctionsBradesco()

        async function listFolders(){
            const data = await backendApi.listFolders()
            
            if(data){
                setFolders(data.folders)
            }
        }
        listFolders()
    }, [])

    async function addAuction(){
        if(id){
            await backendApi.addAuction(folderSelected, id)

        }
    }
    
    return(
        <div className="flex flex-col w-full pb-24 md:pb-0">
            <Navbar/>
            <div className='flex-1 border flex flex-col border-contrastWhite30 border-b-0 border-r-0 rounded-tl-xl md:p-12 p-3 '>
                <div className="flex flex-wrap">

                    <div className="md:flex-1 ">
                        {auctionsBradesco?
                            <img src={auctionsBradesco.imageUrl} className="rounded-sm" alt={auctionsBradesco.imageUrl} />

                        : null}
                    </div>
                    <div className="flex-1 text-contrastWhite flex justify-center">
                        <div className="max-w-80">
                            <div className="flex justify-between  my-6">
                                <p className="flex items-center gap-2"><MdOutlineLocationOn/>{auctionsBradesco?.city}</p>
                                <p className="flex items-center gap-2">Área total: {auctionsBradesco?.area} <LiaRulerCombinedSolid/></p>
                            </div>
                            <div>
                                <div className="flex items-center justify-between  my-6">
                                    <p>Imóvel disponivel em:</p> 
                                    <img className="h-10" src={auctionsBradesco?.banco=="Bradesco"? bradesco : auctionsBradesco?.banco=="Itau" ? itau : auctionsBradesco?.banco=="Caixa"? caixa : santander} alt="Banco" />
                                </div>
                                <hr />
                                <div className="flex items-center justify-between my-6">
                                    <p>Imóvel avaliado em:</p>
                                    <p>{auctionsBradesco?.price}</p>
                                </div>
                                <hr />
                                
                                <a href={auctionsBradesco?.link}><button className="bg-contrastWhite text-bgBlack font-semibold w-full h-14 rounded-sm text-2xl hover:brightness-50 transition-all duration-200 cursor-pointer flex justify-center items-center px-3 mt-10"><p className="flex-1">Ir para o leilão</p> <FaArrowRight/></button></a>
                            <Dialog>
                                <DialogTrigger>
                                    <div className='text-xl px-3 flex items-center gap-3 cursor-pointer hover:brightness-50 transition-all duration-150' >
                                        <p className='cursor-pointer hover:underline flex justify-center mt-10 items-center gap-2 text-center w-full'>Adicionar em grupo</p>

                                    </div>
                                </DialogTrigger>
                                <DialogContent className="bg-bgAlmostBlack text-contrastWhite min-h-40 flex flex-col justify-between">
                                <DialogHeader>
                                    <DialogTitle>Criação de Grupo</DialogTitle>  
                                </DialogHeader>
                                <div className="flex gap-10  flex-col">
                                    <select className='border border-contrastWhite30 min-w-20 rounded-sm' onChange={(e)=>{
                                        setFolderSelected(e.target.value)
                                        console.log(e.target.value)
                                        }}>
                                        {folders.map(folder => {
                                            return(
                                                <option key={folder.id} className='text-bgBlack' value={folder.id}>{folder.name}</option>
                                            )
                                        })}
                                    </select>
                                    <DialogClose className="text-bgBlack bg-contrastWhite w-full h-10 rounded-sm hover:brightness-75 transition-all duration-200 cursor-pointer" onClick={()=>addAuction()}>Adicionar em grupo</DialogClose>
                                </div>
                            </DialogContent>
                        </Dialog>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="text-contrastWhite mt-5">
                    <p className="font-semibold">Descrição:</p>
                    <p>{auctionsBradesco?.showDescription}</p>
                    
                </div>
            </div>
        </div>
    )
}
