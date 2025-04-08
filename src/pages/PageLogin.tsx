import houseImg from '../assets/ChatGPT Image 8 de abr. de 2025, 18_48_11.png'

export function PageLogin(){
    return(
        <main className="h-screen w-screen bg-bgBlack flex">
            <div className="h-full flex-1">
                <img src={houseImg} className='h-full' alt="" />
            </div>
            <div className=" h-full flex-initial">
                <div>
                    <h2>Sign in</h2>
                    <div>
                        <div>
                            <h3>Email</h3>
                            <input type="text" name="" id="" />
                        </div>
                        <div>
                            <h3>Email</h3>
                            <input type="text" name="" id="" />
                        </div>
                        <button>Entrar</button>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}