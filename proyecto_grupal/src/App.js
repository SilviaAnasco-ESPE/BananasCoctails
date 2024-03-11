import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Carta from './pages/Carta';
import Index from './pages/Index';
import PaquetesProductos from './pages/Paquetes_Productos';
import Login from './pages/Login';
import Nosotros from './pages/Nosotros';
import CartaUusario from './pages/client/Carta.js';
import IndexUsuario from './pages/client/IndexUsuario.js';
import Registro from './pages/Register.js';
import OrdenAdmin from './pages/admin/Ordenes.js';
import PerfilControoller from './pages/admin/PerfilController.js';


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
        <Route path ="/cartaUsuario" element={<CartaUusario />} />
        <Route path ="/indexUsuario" element={<IndexUsuario />} />
        <Route path ="/registro" element={<Registro />} />
        <Route path ="/ordenAdmin" element={<OrdenAdmin />} />
        <Route path ="/perfilControllerAdmin" element={<PerfilControoller />} />
      </Routes>
    </div>
  );
}

export default App;
