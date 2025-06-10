import { Navbar } from "@/Components/Navbar";
import { Quadradinho } from "@/Components/Quadradinho";
import { useDatasGroups } from "@/hooks/useDatas";
import { FaPlusSquare } from "react-icons/fa";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } from "@/Components/ui/dialog"
import { useEffect, useState } from "react";
import { useBackendApi } from "@/hooks/useBackendApi";

interface foldersProps{
    id: string
    name: string
}

export function PageListGroup(){
    const [folders, setFolders] = useState<foldersProps[]>([])

    const [nameGroup, setNameGroup] = useState("")
    const backendApi = useBackendApi()
    async function createFolder(){
        await backendApi.create_folder(nameGroup)
    }

    useEffect(()=>{
        async function listFolders(){
            const data = await backendApi.listFolders()
            
            if(data){
                setFolders(data.folders)
            }
        }
        listFolders()
    }, [])
    return(
        <div className="flex flex-col md:w-full pb-24 md:pb-0">
            <Navbar/>

            <div className='flex-1 border flex items-center md:items-start flex-col md:gap-5 border-contrastWhite30 border-b-0 border-r-0 rounded-tl-xl md:p-12 p-3 '>

                <div className="text-contrastWhite flex justify-between mb-10 md:mb-0 w-full">
                    <h1 className="font-semibold text-4xl ">Grupos de imóveis</h1>
                    <Dialog>
                            <DialogTrigger>
                                <div className='text-xl px-3 flex items-center gap-3 cursor-pointer hover:brightness-50 transition-all duration-150' >
                                    <p className='cursor-pointer hover:underline flex items-center gap-2'><FaPlusSquare/>Criar grupo</p>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="bg-bgAlmostBlack text-contrastWhite min-h-40 flex flex-col justify-between">
                                <DialogHeader>
                                    <DialogTitle>Criação de Grupo</DialogTitle>  
                                </DialogHeader>
                                <div className="flex gap-10  flex-col">
                                    <input type="text" onChange={(e)=>setNameGroup(e.target.value)} className='bg-bgAlmostBlack w-full h-10 rounded-sm px-3' placeholder="Digite o nome do seu próximo grupo"/>
                                    <DialogClose className="text-bgBlack bg-contrastWhite w-full h-10 rounded-sm hover:brightness-75 transition-all duration-200 cursor-pointer" onClick={()=>createFolder()}>Criar grupo</DialogClose>
                                </div>
                            </DialogContent>
                        </Dialog>
                </div>
                <div className='flex gap-5 flex-wrap w-11/12 md:w-full'>
                    {folders?
                        folders.map(group=>{
                            return(
                                <Quadradinho key={group.id} id={group.id} name={group.name} />

                            )

                        })
                        
                        :null}
                    

                </div>
            </div>
        </div>
    )
}
