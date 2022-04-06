import './scss/app.scss'
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
 
    <div>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Category/:id" element={<Products/>}/>
          <Route path="/Nosotros" element={<About />}/>
          <Route path="/Contacto" element={<Contact />}/>
          <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  
  );
}

export default App;