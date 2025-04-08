import './index.css'
import { PageProperties } from './pages/PageProperties'

import { SideBar } from './Components/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageLogin } from './pages/PageLogin';
import { PageHome } from './pages/PageHome';



function App() {
  const url = window.location.pathname
  
  return (
   <main className='min-h-screen bg-bgBlack flex'>
    {url!="/"?
      <SideBar/>
    : null
    }
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLogin/>}/>
        <Route path='/Home' element={<PageHome/>}/>
        <Route path='/ListProperties' element={<PageProperties/>}/>
      </Routes>
    </BrowserRouter>
   </main>
  )
}

export default App
