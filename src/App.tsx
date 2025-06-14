import './index.css'
import { PageProperties } from './pages/PageProperties'

import { SideBar } from './Components/SideBar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { PageLogin } from './pages/PageLogin';
import { PageHome } from './pages/PageHome';
import { PageListGroup } from './pages/PageListGroup';
import { PageProperty } from './pages/PageProperty';
import { PageSettings } from './pages/PageSettings';
import { AuthProvider } from './context/AuthContext';
import { PagePropertiesGroup } from './pages/PagePropertiesGroup';


function App() {
  return (
   <main className='min-h-screen bg-bgBlack flex'>
    <AuthProvider>
      <BrowserRouter>
        <SideBar/>
        <Routes>
          <Route path='/' element={<PageLogin/>}/>
          <Route path='/Home' element={<PageHome/>}/>
          <Route path='/ListProperties' element={<PageProperties/>}/>
          <Route path='/ListPropertiesGroup/:id' element={<PagePropertiesGroup/>}/>
          <Route path='/ListGroup' element={<PageListGroup/>}/>
          <Route path='/Property/:id' element={<PageProperty/>}/>
          <Route path='/PageSettings' element={<PageSettings/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

   </main>
  )
}

export default App
