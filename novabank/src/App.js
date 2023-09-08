import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Index from "./components/Pages/Index";
import InicioSesion from "./components/Pages/InicioSesion";
import Menu from "./components/Pages/Menu";
import Prestamos from "./components/Pages/Prestamos";
import ConvDeMoneda from "./components/Pages/ConvDeMoneda";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index/>} />
        <Route path="/InicioSesion" element={<InicioSesion/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/prestamos" element={<Prestamos/>} />
        <Route path="/ConvertidorDeMoneda" element={<ConvDeMoneda/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
