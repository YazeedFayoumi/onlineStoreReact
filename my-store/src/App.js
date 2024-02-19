import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar.js'
import Home from './Home.js'
import Payment from './Payment'
import Products from './Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  
  return (
    <div className='App'>
    <Navbar/>
    <BrowserRouter>
    <Routes>
  
      <Route path="/" element={<Home />}>
        
        </Route>
      <Route path="/Products" element={<Products/>}>

      </Route>
      <Route path="/Payment" element={<Payment/>}>
        
      </Route>
      </Routes>
    </BrowserRouter>    
    </div>
  );
}
export default App;
