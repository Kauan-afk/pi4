import itau from '../assets/Section-4_Image-with-text.avif'
import bradesco from '../assets/Bradesco-Symbol.png'

import { useNavigate } from "react-router-dom";

interface PropertyProps {
    id: number,
    name: string,
    description: string,
    value: string,
    urlImg: string,
    location: string,
    area: string,
    banco: string
}
export function Property(props: PropertyProps){
    const navigate = useNavigate()
    return(
        <div className='w-full md:flex-nowrap flex-wrap bg-distaqueBlack min-h-60 rounded-xl py-4 md:py-0 px-4 flex items-center md:gap-5 hover:brightness-75 cursor-pointer transition-all duration-200' onClick={()=>{navigate(`/Property/${props.id}`)
        window.scrollTo({top: 0})}}>
            <img src={props.urlImg} className='h-52 max-w-60 md:w-auto w-full rounded-md' alt={props.name} />
            <div className='h-44 w-[1px] bg-contrastWhite hidden md:block'></div>
            <div className='flex md:h-full justify-between w-full'>
                <div className='text-contrastWhite md:h-full'>
                    <div className='flex h-full flex-wrap md:flex-nowrap md:flex-col gap-3 py-4'>
                        <h2 className='font-semibold text-3xl'>{props.name}</h2>
                        <div>
                            <p className='max-w-[900px] line-clamp-4 text-xl break-all'>{props.description}</p>
                        </div>
                        <div className='flex  gap-2 md:gap-20 md:items-end md:h-full text-xl'>
                            <p>{props.value}</p>
                            <p>Área: {props.area}</p>
                        </div>
                        
                    </div>
                
                </div>
                <div className='md:h-full py-5 flex-initial md:flex  justify-end w-full md:w-80 hidden'>
                    <div className='flex flex-col justify-between items-center'>
                        <img src={props.banco=="Bradesco"? bradesco : itau} className="h-16 w-28 " alt={`${props.banco}.png`} />
                    </div>
                
                </div>
            </div>
            
            
        </div>
    )
}
