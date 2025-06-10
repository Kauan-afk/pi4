import { useNavigate } from "react-router-dom"

interface groupProps {
    id: string
    name: string,

    
}

export function Quadradinho (props: groupProps){
    const navigate = useNavigate()
    return (
        <div className='md:max-w-60 max-w-44  bg-distaqueBlack rounded-2xl hover:brightness-75 cursor-pointer transition-all duration-200' onClick={()=>navigate(`/ListPropertiesGroup/${props.id}`)}>
            <div className='p-3'>
                <h2 className='font-semibold md:text-3xl text-xl text-contrastWhite'>{props.name}</h2>
            </div>
        </div>
    )
}
