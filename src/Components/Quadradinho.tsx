import property from '../assets/dillon-kydd-pvdx8c6Y5BY-unsplash.jpg'


export function Quadradinho (){
    return (
        <div className='max-w-60  bg-distaqueBlack rounded-2xl'>
            <img src={property} className='w-full rounded-md ' alt="Nome do grupo" />
            <div className='p-3.5 pt-3.5'>
                <h2 className='font-semibold text-3xl text-contrastWhite'>Lorem, ipsum.</h2>
            </div>
        </div>
    )
}
