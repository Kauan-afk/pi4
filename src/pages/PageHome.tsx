import { Navbar } from '@/Components/Navbar';
import { Property } from '@/Components/Property';
import { Quadradinho } from '@/Components/Quadradinho';
import { useNavigate } from 'react-router-dom';


import { useDataProperty, useDatasGroups } from '@/hooks/useDatas';
import { useBackendApi } from '@/hooks/useBackendApi';
import { useEffect, useState } from 'react';

interface bradescoProps{
    banco: string
    imageUrl: string
    city: string
    showDescription: string
    price: string
    id: number
}

export function PageHome(){
    const navigate = useNavigate()

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
    

    return(

        <div className="flex flex-col w-full pb-24 md:pb-0">
            <Navbar/>

            <div className='flex-1 border flex flex-col gap-5 border-contrastWhite30 border-b-0 border-r-0 rounded-tl-xl md:p-12 p-3'>

                <div className='flex justify-between items-center text-contrastWhite'>
                    <h1 className="font-semibold text-4xl ">Alguns grupos de imóveis</h1>
                    <p className='cursor-pointer hover:underline' onClick={()=>navigate("/ListGroup")}>Ver todos</p>
                </div>
                <div className='flex md:justify-between md:gap-5 gap-7 mb-10 flex-wrap'>
                    {useDatasGroups?
                    useDatasGroups.map(group=>{
                        return(
                            <Quadradinho key={group.name} name={group.name} urlImg={group.urlImg}/>

                        )

                    })
                    
                    :null}

                </div>
                <div className='flex justify-between items-center text-contrastWhite'>
                    <h1 className="font-semibold text-4xl text-contrastWhite">Alguns Imóveis</h1>
                    <p className='cursor-pointer hover:underline' onClick={()=>navigate("/ListProperties")}>Ver todos</p>
                </div>
                <div className="flex flex-col gap-5">
                {auctionsBradesco?
                    auctionsBradesco.slice(0, 4).map(auction=>{
                        return(
                            <Property key={auction.id} id={auction.id} name={auction.city} description={auction.showDescription} area={auction.banco} urlImg={auction.imageUrl} location={auction.banco} value={auction.price} banco={auction.banco}/>
                        )
                    })
                    
                    :null}
                  
                </div> 
            </div>
        </div>
    )
}

