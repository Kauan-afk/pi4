import { Navbar } from "@/Components/Navbar";
import property from '../assets/dillon-kydd-pvdx8c6Y5BY-unsplash.jpg'
import itau from '../assets/Section-4_Image-with-text.avif'
import { LiaRulerCombinedSolid } from "react-icons/lia";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
export function PageProperty(){
    return(
        <div className="flex flex-col w-full">
            <Navbar/>
            <div className='flex-1 border flex flex-col border-contrastWhite30 border-b-0 border-r-0 rounded-tl-xl p-12 '>
                <div className="flex">

                    <div className="flex-1 ">
                        <img src={property} className="rounded-sm" alt="" />
                    </div>
                    <div className="flex-1 text-contrastWhite flex justify-center">
                        <div className="max-w-80">
                            <h2 className="font-semibold text-3xl">Casa em São Paulo - SP</h2>
                            <div className="flex justify-between  my-6">
                                <p className="flex items-center gap-2"><MdOutlineLocationOn/>São Paulo - SP</p>
                                <p className="flex items-center gap-2">Área total: 100m² <LiaRulerCombinedSolid/></p>
                            </div>
                            <div>
                                <div className="flex items-center justify-between  my-6">
                                    <p>Imóvel disponivel em:</p> 
                                    <img className="h-10" src={itau} alt="" />
                                </div>
                                <hr />
                                <div className="flex items-center justify-between my-6">
                                    <p>Imóvel avaliado em:</p>
                                    <p>R$ 170.000,00</p>
                                </div>
                                <hr />
                                <div className="flex items-center justify-between  my-6">
                                    <p>Valor inicial:</p>
                                    <p>R$ 200.000,00</p>
                                </div>

                                <button className="bg-contrastWhite text-bgBlack font-semibold w-full h-14 rounded-sm text-2xl hover:brightness-50 transition-all duration-200 cursor-pointer flex justify-center items-center px-3"><p className="flex-1">Ir para o leilão</p> <FaArrowRight/></button>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="text-contrastWhite mt-5">
                    <p className="font-semibold">Descrição:</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    
                </div>
            </div>
        </div>
    )
}