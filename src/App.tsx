import './index.css'
import { PageProperties } from './pages/PageProperties'

import { SideBar } from './Components/SideBar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { PageLogin } from './pages/PageLogin';
import { PageHome } from './pages/PageHome';
import { PageListGroup } from './pages/PageListGroup';
import { PageProperty } from './pages/PageProperty';

function App() {
  return (
   <main className='min-h-screen bg-bgBlack flex'>
    <BrowserRouter>
      <SideBar/>
      <Routes>
        <Route path='/' element={<PageLogin/>}/>
        <Route path='/Home' element={<PageHome/>}/>
        <Route path='/ListProperties' element={<PageProperties/>}/>
        <Route path='/ListGroup' element={<PageListGroup/>}/>
        <Route path='/Property/*' element={<PageProperty/>}/>
      </Routes>
    </BrowserRouter>
   </main>
  )
}

export default App
