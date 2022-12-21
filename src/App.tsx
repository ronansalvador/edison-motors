import React from 'react';
import './App.css';
import EdisonProvider from './context/EdisonProvider';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Details from './pages/DetailsPage';
import Checkout from './pages/Checkout';

function App() {
  return (

  
   <EdisonProvider>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/:id" element={<Details />} />
         <Route path="/payment/:id"  element={<Checkout />} />
      </Routes>
    </BrowserRouter>
   </EdisonProvider>

  );
}

export default App;
