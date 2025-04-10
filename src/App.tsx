import './index.css'
import { PageProperties } from './pages/PageProperties'

import { SideBar } from './Components/SideBar';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { PageLogin } from './pages/PageLogin';
import { PageHome } from './pages/PageHome';
import { PageListGroup } from './pages/PageListGroup';
import { useEffect, useState } from 'react';

function App() {
  const [url, setUrl] = useState(window.location.pathname) 

 
  
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
        <Route path='/ListGroup' element={<PageListGroup/>}/>
      </Routes>
    </BrowserRouter>
   </main>
  )
}

export default App
