import houseImg from '../assets/ChatGPT Image 10 de abr. de 2025, 17_45_50.png'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

export function PageLogin(){

    return(
        <main className="h-screen w-screen bg-bgBlack flex">
            <div className="h-full ">
                <img src={houseImg} className='h-full' alt="" />
            </div>
            <div className=" h-full flex flex-col justify-between items-center flex-1">
                <div className='flex flex-col justify-center items-center flex-1'>
                    <div className='w-96 mb-5'>
                        <h2 className='font-semibold text-3xl text-contrastWhite'>Entrar</h2>
                    </div>

                    <div className='max-h-96 pb-10 bg-distaqueBlack30 w-96 rounded-md p-5 flex-1'>
                        <div className='text-contrastWhite flex flex-col gap-5'>
                            <div>
                                <h3>Email:</h3>
                                <input type="text" className='bg-bgAlmostBlack w-full h-10 rounded-sm px-3' name="" id="" />
                            </div>
                            <div>
                                <h3>Senha:</h3>
                                <input type="text" className='bg-bgAlmostBlack w-full h-10 rounded-sm' name="" id="" /> 
                            </div>
                            <Link to={"/Home"} className='w-full'><button className='bg-contrastWhite w-full text-bgBlack h-10 rounded-sm mt-5'>Entrar</button></Link>
                            <hr />
                            <button className='border flex items-center h-10 rounded-sm px-3'><FcGoogle/> <p className='flex-1'>Entrar com o Google</p></button>
                        </div>
                    </div>
                </div>
                
                <h1 className='w-full flex justify-end text-contrastWhite font-semibold text-2xl p-5'>
                    SEMAISMENOS
                </h1>
            </div>
            
        </main>
    )
}