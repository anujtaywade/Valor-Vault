
import './App.css'
import Navbar from './components/navbar';
import Home from './pages/home';
import Agents from './pages/agents';
import Arsenal from './pages/arsenal';
import MapPage from './pages/mapPage';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accessories from './pages/accessories';
import Footer from './components/footer';
function App() {
  

  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      
      <Routes>
       
       <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/arsenal' element={<Arsenal/>} />
        <Route path='/mapPage' element={<MapPage/>} />
        <Route path='/agents' element={<Agents/>} />
        <Route path='/accessories' element={<Accessories/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App