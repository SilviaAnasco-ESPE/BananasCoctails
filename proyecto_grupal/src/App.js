import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Carta from './pages/Carta';
import Index from './pages/Index';
import PaquetesProductos from './pages/Paquetes_Productos';
import Login from './pages/Login';
import Nosotros from './pages/Nosotros';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/paquetes" element={<PaquetesProductos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path ="/inicio" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
