
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Foooter from './component/Foooter';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import Services from './component/Services';
import Careers from './component/Careers';
import Job from './component/Job';
import Contact from './component/Contact';
import Clients from './component/Clients';

function App() {
  return (
    <div className='app'>
    
    <Navbar/>
     <Routes>

     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/services' element={<Services/>}/>
     <Route path='/clients' element={<Clients/>}/>
     <Route path='/careers' element={<Careers />}/>
        <Route path='/Job-application' element={<Job />} />
     <Route path='/contact' element={<Contact/>}/>
     </Routes>
    <Foooter/>
    </div>

  );
}

export default App;
