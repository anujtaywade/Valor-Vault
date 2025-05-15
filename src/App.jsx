
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/home';
import Agents from './pages/agents';
import Arsenal from './pages/arsenal';
import Map from './pages/map';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  

  return (
    <div>
      <BrowserRouter>
      
       <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>} />
      <Navbar/>
      <Routes>
       
        <Route path='/arsenal' element={<Arsenal/>} />
        <Route path='/map' element={<Map/>} />
        <Route path='/agents' element={<Agents/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App