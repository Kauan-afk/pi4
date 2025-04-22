import { IoIosArrowDown } from "react-icons/io";

import property from '../assets/dillon-kydd-pvdx8c6Y5BY-unsplash.jpg'
import itau from '../assets/Section-4_Image-with-text.avif'
import { useNavigate } from "react-router-dom";

interface PropertyProps {
    id: string
}
export function Property(props: PropertyProps){
    const navigate = useNavigate()
    return(
        <div className='w-full bg-distaqueBlack h-60 rounded-xl px-4 flex items-center gap-5 hover:brightness-75 cursor-pointer transition-all duration-200' onClick={()=>{navigate(`/Property/${props.id}`)
        window.scrollTo({top: 0})}}>
            <img src={property} className='h-52 rounded-md' alt="" />
            <div className='h-44 w-[1px] bg-contrastWhite'></div>
            <div className='text-contrastWhite h-full'>
            <div className='flex h-full flex-col gap-3 py-4'>
                <h2 className='font-semibold text-3xl'>Lorem, ipsum dolor.</h2>
                <div>
                    <p className='max-w-[900px] line-clamp-4 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt minima reprehenderit nihil ipsam aut quod veniam cumque! Facilis velit beatae, et error, minima itaque voluptates tempora fugiat sunt a veniam vitae sed commodi cupiditate vero neque quis temporibus nemo aspernatur maiores. Illo atque obcaecati beatae error maxime quod ut tempore.</p>
                </div>
                <div className='flex gap-20 items-end h-full text-xl'>
                    <p>R$ 200.000,00</p>
                    <p>São Paulo - SP</p>
                </div>
            </div>
            
            </div>
            <div className='h-full py-5 flex-initial flex  justify-end  w-80'>
            <div className='flex flex-col justify-between items-center'>
                <img src={itau} className="h-16 w-28 " alt="" />
                <p className='text-contrastWhite text-5xl'><IoIosArrowDown/></p>
            </div>
            
            </div>
            
        </div>
    )
}