
import './App.css'
import Navbar from './components/navbar';
import Home from './pages/home';
import Agents from './pages/agents';
import Arsenal from './pages/arsenal';
import Map from './pages/map';
import LandingPage from './pages/LandingPage';
import accessories from './pages/accessories';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accessories from './pages/accessories';
function App() {
  

  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
       
       <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/arsenal' element={<Arsenal/>} />
        <Route path='/map' element={<Map/>} />
        <Route path='/agents' element={<Agents/>} />
        <Route path='/accessories' element={<Accessories/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App